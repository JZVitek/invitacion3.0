import { useState } from 'react';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [invitationCode, setInvitationCode] = useState('');

  const handleLogin = () => {
    // Verifica la contraseña (puedes mejorar esto con una autenticación más segura)
    if (password === 'tu_contraseña_segura') {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const generateInvitationCode = () => {
    // Genera un código de invitación (puedes mejorar esto con lógica más compleja)
    const code = Math.random().toString(36).substring(2, 15);
    setInvitationCode(code);
  };

  return (
    <main className='min-h-screen bg-[#f8f5f0] text-gray-800'>
      {!isAuthenticated ? (
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-2xl mb-4'>Admin Login</h1>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            className='mb-4 p-2 border border-gray-300'
          />
          <button onClick={handleLogin} className='p-2 bg-blue-500 text-white'>
            Login
          </button>
        </div>
      ) : (
        <div className='p-4'>
          <h1 className='text-2xl mb-4'>Admin Panel</h1>
          <button onClick={generateInvitationCode} className='p-2 bg-green-500 text-white'>
            Generate Invitation Code
          </button>
          {invitationCode && (
            <div className='mt-4'>
              <h2 className='text-xl'>Invitation Code:</h2>
              <p className='text-lg'>{invitationCode}</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default Admin;