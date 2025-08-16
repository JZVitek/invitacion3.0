import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';
import { loadAll } from '@tsparticles/all';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    //console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: '#f8f5f0', // Fondo igual al de page.tsx
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#333333', // Cambia el color de las partículas a un gris oscuro
        },
        links: {
          color: '#333333', // Cambia el color de los enlaces (si están habilitados)
          distance: 150,
          enable: false,
          opacity: 0.7,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        opacity: {
          value: 0.5, // Ajusta la opacidad para que las partículas sean más visibles
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 2, max: 6 }, // Aumenta el tamaño de las partículas si es necesario
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={options}
        style={{
          position: 'absolute', // Asegura que las partículas estén en el fondo
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none', // Permite que los clics pasen a través del componente
          zIndex: -1, // Envía las partículas al fondo
        }}
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;
