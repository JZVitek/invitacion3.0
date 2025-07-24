/* import axios from 'axios';

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
 */

// app/api/rsvp/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbx1zznRNxiJVpgnJtXx4Zqc2vjU6RYT6I3dr9TX2v7ahvya1ivv_eXQrqY3uwt3F1U_/exec'; 

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log('Response from Apps Script:', response);

    const result = await response.json();

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Error al llamar a Apps Script:', error);
    return NextResponse.json({ status: 'error', message: 'Error interno' }, { status: 500 });
  }
}