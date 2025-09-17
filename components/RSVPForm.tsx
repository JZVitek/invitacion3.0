'use client';

import axios from 'axios';
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
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');
    setCodigoInvalido(false);

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      telephone: { value: string };
      code: { value: string };
      message: { value: string };
    };

    // Validación de teléfono
    const phoneValue = target.telephone.value.trim();
    if (!/^\d{10}$/.test(phoneValue)) {
      setPhoneError('El número debe tener exactamente 10 dígitos numéricos');
      setIsSubmitting(false);
      return;
    } else {
      setPhoneError(null);
    }

    const data = {
      name: target.name.value.trim().toUpperCase(),
      email: target.email.value.trim(),
      telephone: phoneValue,
      code: target.code.value.trim().toUpperCase(),
      message: target.message.value.trim(),
    };

    try {
      const response = await axios.post('/api/rsvp', data);

      if (response.data.status === 'success') {
        setSuccessMessage(
          '¡Tu asistencia ha sido confirmada con éxito, recibirás un correo de confirmación con tu pase de entrada!'
        );
        setRsvpSubmitted(true);
      } else {
        setErrorMessage(
          response.data.message ||
            'Ocurrió un error, vuelve a intentarlo más tarde.'
        );
        if (response.data.message?.toLowerCase().includes('código')) {
          setCodigoInvalido(true);
        }
      }
    } catch (error: any) {
      console.error('Error al enviar RSVP:', error);
      setErrorMessage('Hubo un problema al enviar tu confirmación.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className='p-4 sm:p-8 text-center z-1 max-w-[98vw] mx-auto'>
      <h2 className='text-3xl sm:text-5xl font-serif mb-4 sm:mb-6 texto'>
        ¡Confirma tu asistencia aqui!
      </h2>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button
            className='text-xl sm:text-2xl w-full max-w-xs sm:max-w-md mx-auto'
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
        <DialogContent className='w-full max-w-[95vw] max-h-[90vh] h-auto overflow-y-auto p-2 sm:max-w-md sm:p-6'>
          <DialogHeader>
            <DialogTitle className='text-2xl sm:text-4xl'>
              RSVP - Confirmación de Asistencia
            </DialogTitle>
            <DialogDescription className='text-base sm:text-lg cinzel-text-titles'>
              Por favor, completa el siguiente formulario para confirmar tu
              asistencia.
            </DialogDescription>
          </DialogHeader>
          <form
            className='space-y-3 sm:space-y-4 text-left'
            onSubmit={handleSubmit}
          >
            <div>
              <Label className='text-base sm:text-xl' htmlFor='name'>
                Nombre
              </Label>
              <Input
                id='name'
                name='name'
                className='text-base sm:text-lg cinzel-text-titles w-full'
                required
              />
            </div>
            <div>
              <Label className='text-base sm:text-xl' htmlFor='email'>
                Correo Electrónico
              </Label>
              <Input
                id='email'
                name='email'
                type='email'
                className='text-base sm:text-lg cinzel-text-titles w-full'
                required
              />
            </div>
            <div>
              <Label className='text-base sm:text-xl' htmlFor='telephone'>
                Teléfono
              </Label>
              <Input
                type='tel'
                id='telephone'
                name='telephone'
                className='text-base sm:text-lg cinzel-text-titles w-full'
                required
              />
              {phoneError && (
                <span className='text-red-500 text-xs sm:text-sm'>
                  {phoneError}
                </span>
              )}
            </div>
            <div>
              <Label className='text-base sm:text-xl' htmlFor='code'>
                Código de reservación
              </Label>
              <Input
                id='code'
                name='code'
                className='text-base sm:text-lg cinzel-text-titles w-full'
                required
              />
            </div>
            <div>
              <Label className='text-base sm:text-xl' htmlFor='message'>
                Mensaje (opcional)
              </Label>
              <Textarea
                id='message'
                name='message'
                className='text-base sm:text-lg cinzel-text-titles w-full'
              />
            </div>
            <Button
              type='submit'
              className='w-full text-xl sm:text-2xl flex items-center justify-center'
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
            <p className='text-green-700 text-base sm:text-lg mt-3 sm:mt-4 cinzel-text-titles'>
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p className='text-red-700 text-base sm:text-lg mt-3 sm:mt-4 cinzel-text-titles'>
              {errorMessage}
            </p>
          )}
        </DialogContent>
      </Dialog>
      {/* Registry Section */}
      <div className='mt-6 sm:mt-8'>
        <h3 className='text-lg sm:text-2xl cinzel-text-titles mb-1 sm:mb-2'>
          ¿Te gustaría hacernos un regalo?
        </h3>
        <p className='mb-2 sm:mb-4 text-base sm:text-lg cinzel-text-titles'>
          Puedes hacerlo a través de una transferencia bancaria o en el día de
          la boda
        </p>
        <RegistryModal />
      </div>
    </Card>
  );
};

export default RSVPForm;
