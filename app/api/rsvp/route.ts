// /app/api/rsvp/route.ts
export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    'https://script.google.com/macros/s/AKfycbzeSC1UdIsiGsk8VuWcHANOC--9LIcraBHps8hLD7gbNkT8Z6VZe4m4jUMnptSJ8j2x/exec',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );

  const contentType = response.headers.get('content-type');

  if (!response.ok) {
    // Error HTTP
    const text = await response.text();
    return new Response(JSON.stringify({ status: 'error', message: 'Error en el servidor', detail: text }), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (contentType && contentType.includes('application/json')) {
    // Si es JSON, lo devolvemos tal cual
    const json = await response.json();
    return new Response(JSON.stringify(json), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    // Probablemente es un HTML de error de Apps Script
    const text = await response.text();
    return new Response(
      JSON.stringify({ status: 'error', message: 'Respuesta no válida del servidor', detail: text }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
