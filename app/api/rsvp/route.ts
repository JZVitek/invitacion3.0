export async function POST(request: Request) {
  try {
    const body = await request.json();

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbywMCOvG35yNynnlY_QKd7ad33OPAiXjVhnLlVxwVnum5UbbLIgKiPVNayna-wXrwgZCg/exec';

    const googleRes = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await googleRes.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/rsvp:', error);
    return new Response(JSON.stringify({
      status: 'error',
      message: 'Error interno al procesar RSVP',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
