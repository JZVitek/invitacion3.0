import axios, { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

// Define una interfaz para el cuerpo de la solicitud para mayor seguridad de tipos
interface RsvpBody {
  name: string;
  email: string;
  message: string;
  code: string;
}

export async function POST(req: NextRequest) {
  const body: RsvpBody = await req.json();
  
  // Es una buena práctica mantener la URL en una variable de entorno
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzeSC1UdIsiGsk8VuWcHANOC--9LIcraBHps8hLD7gbNkT8Z6VZe4m4jUMnptSJ8j2x/exec';

  if (!scriptUrl) {
    console.error("Google Script URL is not defined.");
    return NextResponse.json(
      { status: 'error', message: 'La configuración del servidor es incorrecta.' },
      { status: 500 }
    );
  }

  try {
    // 1. Realiza la solicitud POST inicial
    const initialResponse = await axios.post(scriptUrl, body, {
      headers: { 'Content-Type': 'application/json' },
      // 2. Desactiva las redirecciones automáticas para capturar el 302
      maxRedirects: 0,
      // 3. Evita que axios lance un error en respuestas 3xx
      validateStatus: (status) => status >= 200 && status < 400,
    });

    // 4. Si la respuesta es una redirección (comportamiento estándar de Google)
    if (initialResponse.status === 302) {
      const redirectUrl = initialResponse.headers.location;

      if (!redirectUrl) {
        throw new Error('Google Apps Script no proporcionó una URL de redirección.');
      }

      // 5. Sigue la redirección con una solicitud GET para obtener la respuesta JSON final
      const finalResponse = await axios.get(redirectUrl);

      // 6. Devuelve la respuesta final del script al cliente
      return NextResponse.json(finalResponse.data);
    }

    // En el caso improbable de que Google no redirija, devuelve los datos directamente
    return NextResponse.json(initialResponse.data);

  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Error al interactuar con Google Script:', axiosError.message);

    const status = axiosError.response?.status || 500;
    const detail = axiosError.response?.data || axiosError.message || 'Error desconocido';

    return NextResponse.json(
      {
        status: 'error',
        message: 'Error en el servidor al procesar la solicitud.',
        detail,
      },
      { status }
    );
  }
}