'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import RegistryModal from './RegistryModal';

  const RSVPForm = () => {
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [codigoInvalido, setCodigoInvalido] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      guests: { value: string };
      message: { value: string };
    };
    const name = target.name.value;
    const email = target.email.value;
    const guests = target.guests.value;
    const message = target.message.value;

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwDQuisp2uJ9zGhomJBJ5tTqLIw8_3CktCerJY4GTsSuN9H_7nMWuddORh0O_9xNa_n/exec',
      {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, guests, message }),
      }
    );

    if (response.status === 0) {
      setRsvpSubmitted(true);
      setSuccessMessage(
        'RSVP enviado correctamente. ¡Gracias por confirmar tu asistencia!'
      );
      setErrorMessage('');

      //cerrar el dialogo despues de enviar el formulario despues de 3 segundos
      setTimeout(() => {
        setRsvpSubmitted(false);
      }, 3000);
    } else {
      setCodigoInvalido(true);
      setErrorMessage(
        'Hubo un problema al enviar tu RSVP. Por favor, inténtalo de nuevo.'
      );
      setSuccessMessage('');
    }
  };

  useEffect(() => {
    if(successMessage) {
      const timer = setTimeout(() => {
        setIsModalOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <Card className='p-8 text-center z-1'>
      <h2 className='text-5xl font-serif mb-6 texto'>¡Confirma tu asistencia aqui!</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button
          className='text-xl'
            size='lg'
            onClick={() => {
              setSuccessMessage('');
              setErrorMessage('');
            }}
          >
            Confirmar Asistencia
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>RSVP para nuestra boda</DialogTitle>
            <DialogDescription>
              Por favor, completa el siguiente formulario para confirmar tu
              asistencia.
            </DialogDescription>
          </DialogHeader>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <Label htmlFor='name'>Nombre</Label>
              <Input id='name' name='name' required />
            </div>
            <div>
              <Label htmlFor='email'>Correo Electrónico</Label>
              <Input id='email' name='email' type='email' required />
            </div>
            <div>
              <Label htmlFor='guests'>Número de Invitados</Label>
              <Input
                id='guests'
                name='guests'
                type='number'
                min='1'
                max='10'
                required
              />
            </div>
            <div>
              <Label htmlFor='message'>Mensaje (opcional)</Label>
              <Textarea id='message' name='message' />
            </div>
            <Button type='submit' className='w-full'>
              Enviar RSVP
            </Button>
          </form>
          {successMessage && (
            <p className='text-green-500 mt-4'>{successMessage}</p>
          )}
          {errorMessage && <p className='text-red-500 mt-4'>{errorMessage}</p>}
        </DialogContent>
      </Dialog>
    {/* Registry Section */}
    <div className='mt-8'>
        <h3 className='text-4xl sm:text-4xl font-semibold mb-2'>
          ¿Te gustaría hacenos un regalo?
        </h3>
        <p className='mb-4 text-lg'>puedes hacerlo a través de una transferencia bancaria o en el dia de la boda</p>
        <RegistryModal />
      </div>
    </Card>
  );
}

export default RSVPForm;
