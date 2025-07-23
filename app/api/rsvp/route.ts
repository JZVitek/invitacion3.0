import axios from 'axios';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbzV0H1Reviav8M3n4w1I04y1v--bsIi7INK0kufmWfgqhLTnhFSfhSA_9M-uoXDcN0d/exec',
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Si la respuesta es JSON, la devolvemos tal cual
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    // Si axios lanza un error, puede tener response o solo mensaje
    const status = error.response?.status || 500;
    const detail = error.response?.data || error.message || 'Error desconocido';

    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Error en el servidor',
        detail,
      }),
      {
        status,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}