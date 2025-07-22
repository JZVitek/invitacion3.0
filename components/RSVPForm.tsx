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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // comienza animación

    try {
      const target = e.target as typeof e.target & {
        name: { value: string };
        email: { value: string };
        code: { value: string };
        message: { value: string };
      };
      const name = target.name.value;
      const email = target.email.value;
      const code = target.code.value;
      const message = target.message.value;

      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, code }),
      });

      const raw = await response.text(); // Siempre primero como texto

      let result;
      try {
        result = JSON.parse(raw); // intenta convertir a JSON
      } catch (e) {
        console.error('Respuesta inválida del servidor:', raw);
        setErrorMessage('Ocurrió un error inesperado. Intenta más tarde.');
        return;
      }

      if (result.status === 'success') {
        setSuccessMessage(
          result.message || '¡Gracias por confirmar tu asistencia!'
        );
        setErrorMessage('');
        setTimeout(() => setIsModalOpen(false), 2000);
      } else {
        setErrorMessage(
          result.message || 'Hubo un error al procesar tu solicitud.'
        );
        setSuccessMessage('');
      }

      /*     if (response.status === 0) {
      setRsvpSubmitted(true);
      setSuccessMessage(
        'RSVP enviado correctamente. ¡Gracias por confirmar tu asistencia!'
      );
      setErrorMessage('');

      // Cerrar el diálogo después de 3 segundos
      setTimeout(() => {
        setIsModalOpen(false);
      }, 2000);
    } else {
      setCodigoInvalido(true);
      setErrorMessage(
        'Hubo un problema al enviar tu RSVP. Por favor, inténtalo de nuevo.'
      );
      setSuccessMessage('');
    } */
    } catch (error) {
      console.error('Error al enviar RSVP:', error);
      setErrorMessage('Hubo un problema al conectar con el servidor.');
      setSuccessMessage('');
    } finally {
      setIsSubmitting(false); // termina animación
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
            className='text-2xl'
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
            {/*  <div>
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
            </div> */}
            <div>
              <Label className='text-xl' htmlFor='code'>
                Código de reservación
              </Label>
              <Input id='code' name='code' className='text-xl' required />
            </div>
            <div>
              <Label className='text-xl' htmlFor='message'>
                Mensaje (opcional)
              </Label>
              <Textarea id='message' name='message' className='text-xl' />
            </div>
            <Button
              type='submit'
              className='w-full text-2xl flex items-center justify-center'
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className='animate-spin h-5 w-5 mr-2 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z'
                    ></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                'Confirmar Asistencia'
              )}
              
            </Button>
          </form>
          {successMessage && (
            <p className='text-green-700 text-xl mt-4'>{successMessage}</p>
          )}
          {errorMessage && (
            <p className='text-red-700 text-xl mt-4'>{errorMessage}</p>
          )}
        </DialogContent>
      </Dialog>
      {/* Registry Section */}
      <div className='mt-8'>
        <h3 className='text-4xl sm:text-4xl font-semibold mb-2'>
          ¿Te gustaría hacenos un regalo?
        </h3>
        <p className='mb-4 text-lg'>
          puedes hacerlo a través de una transferencia bancaria o en el dia de
          la boda
        </p>
        <RegistryModal />
      </div>
    </Card>
  );
};

export default RSVPForm;
