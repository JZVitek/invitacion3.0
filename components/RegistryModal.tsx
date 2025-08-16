'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Gift, CreditCard, Copy } from 'lucide-react';
import { useState } from 'react';

export default function RegistryModal() {
  const [copied, setCopied] = useState(false);

  const accountDetails = {
    bank: 'BBVA',
    accountNumber: '1563608284',
    clabe: '012180015636082845',
    beneficiary: 'Karime & Jesus',
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='text-2xl'>
          <Gift className='w-4 h-4 mr-2' />
          Click aquí para ver detalles
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-center texto text-4xl'>
            Mesa de Regalos
          </DialogTitle>
          <DialogDescription className='text-center text-xl cinzel-text-titles'>
            Gracias por considerar hacernos un regalo. Aquí están los detalles
            de nuestra cuenta:
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-6'>
          <div className='bg-muted p-4 rounded-lg space-y-3'>
            <div className='flex justify-between items-center'>
              <span className='font-semibold'>Banco:</span>
              <span>{accountDetails.bank}</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='font-semibold'>Número de Cuenta:</span>
              <div className='flex items-center gap-2'>
                <span>{accountDetails.accountNumber}</span>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8'
                  onClick={() => copyToClipboard(accountDetails.accountNumber)}
                >
                  <Copy className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <span className='font-semibold'>CLABE:</span>
              <div className='flex items-center gap-2'>
                <span>{accountDetails.clabe}</span>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8'
                  onClick={() => copyToClipboard(accountDetails.clabe)}
                >
                  <Copy className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <span className='font-semibold'>Beneficiario:</span>
              <span>{accountDetails.beneficiary}</span>
            </div>
          </div>
          {copied && (
            <p className='text-center text-sm text-muted-foreground'>
              ¡Copiado al portapapeles!
            </p>
          )}
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <CreditCard className='h-4 w-4' />
            <p className='text-lg cinzel-text-titles'>
              Los datos bancarios son solo para transferencias nacionales en
              México.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
