// /app/api/rsvp/route.ts
export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    'https://script.google.com/macros/s/AKfycbwOEHNYL5DHtuf_nbiJFRsjUcVVEHkxoiBP5vQSES1TPBFgqnt0Q-uCfbmLuweUg4C0/exec',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.text(); // Apps Script a veces devuelve texto plano

  try {
    return new Response(data, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: 'error', message: 'Error inesperado' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
