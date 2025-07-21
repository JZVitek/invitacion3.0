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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [codigoInvalido, setCodigoInvalido] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');
    setCodigoInvalido(false);

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      guests: { value: string };
      message: { value: string };
    };

    const name = target.name.value.trim();
    const email = target.email.value.trim();
    const guests = parseInt(target.guests.value.trim(), 10);
    const message = target.message.value.trim();

    // 🧠 Validaciones simples
    if (name.length < 2) {
      setErrorMessage('El nombre debe tener al menos 2 caracteres.');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Ingresa un correo electrónico válido.');
      setIsSubmitting(false);
      return;
    }

    if (isNaN(guests) || guests < 1 || guests > 10) {
      setErrorMessage('El número de invitados debe ser entre 1 y 10.');
      setIsSubmitting(false);
      return;
    }

    if (message.length > 500) {
      setErrorMessage('El mensaje no debe exceder los 500 caracteres.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, guests, message }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        setRsvpSubmitted(true);
        setSuccessMessage(
          'RSVP enviado correctamente. ¡Gracias por confirmar tu asistencia!'
        );
        setTimeout(() => setIsModalOpen(false), 3000);
      } else {
        setCodigoInvalido(true);
        setErrorMessage(
          data.message || 'Hubo un problema al enviar tu Confirmacion.'
        );
      }
    } catch (error) {
      console.error('Error de red o inesperado:', error);
      setCodigoInvalido(true);
      setErrorMessage('Error de red. Intenta de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className='p-8 text-center z-1'>
      <h2 className='text-5xl font-serif mb-6 texto'>
        ¡Confirma tu asistencia aqui!
      </h2>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button
            className='text-xl'
            size='lg'
            onClick={() => {
              setSuccessMessage('');
              setErrorMessage('');
              setIsModalOpen(true);
            }}
          >
            Confirmar Asistencia
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-4xl'>
              RSVP para nuestra boda
            </DialogTitle>
            <DialogDescription className='text-2xl'>
              Por favor, completa el siguiente formulario para confirmar tu
              asistencia.
            </DialogDescription>
          </DialogHeader>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <Label className='text-xl' htmlFor='name'>
                Nombre
              </Label>
              <Input id='name' name='name' className='text-xl' required />
            </div>
            <div>
              <Label className='text-xl' htmlFor='email'>
                Correo Electrónico
              </Label>
              <Input
                id='email'
                name='email'
                type='email'
                className='text-xl'
                required
              />
            </div>
            <div>
              <Label className='text-xl' htmlFor='guests'>
                Número de Invitados
              </Label>
              <Input
                id='guests'
                name='guests'
                type='number'
                min='1'
                max='10'
                className='text-xl'
                required
              />
            </div>
            <div>
              <Label className='text-xl' htmlFor='message'>
                Mensaje (opcional)
              </Label>
              <Textarea id='message' name='message' className='text-xl' />
            </div>
            <Button
              type='submit'
              className='w-full text-2xl'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Confirmar Asistencia'}
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
        <p className='mb-4 text-xl'>
          puedes hacerlo a través de una transferencia bancaria o en el dia de
          la boda
        </p>
        <RegistryModal />
      </div>
    </Card>
  );
};

export default RSVPForm;
