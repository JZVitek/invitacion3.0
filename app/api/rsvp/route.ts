export async function POST(request: Request) {
  try {
    const body = await request.json();

    const scriptUrl =
      'https://script.google.com/macros/s/AKfycbzXx_SVBL2F3YSvFfp99zSFAzp58HnHHHaHKlkZtgzg59E9K1O8oB15DHzaF0RiF6E/exec';

    const googleRes = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    // Leer como texto primero
    const text = await googleRes.text();

    // Intentar parsear como JSON
    let data;
    try {
      data = JSON.parse(text);
    } catch (jsonError) {
      console.error('Respuesta inválida del Google Script:', text);
      return new Response(
        JSON.stringify({
          status: 'error',
          message: 'Respuesta no válida del servidor de Google.',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Retornar lo que devolvió Google Script
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/rsvp:', error);
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Error interno al procesar RSVP',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
