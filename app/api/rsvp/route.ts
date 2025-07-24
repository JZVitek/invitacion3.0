import axios from 'axios';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbx1zznRNxiJVpgnJtXx4Zqc2vjU6RYT6I3dr9TX2v7ahvya1ivv_eXQrqY3uwt3F1U_/exec',
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'text', 
      }
    );

    const parsed = JSON.parse(response.data);

    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
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
