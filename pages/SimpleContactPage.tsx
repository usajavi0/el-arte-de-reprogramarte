import React from 'react';
import { Button } from '../components/ui/Button';

const SimpleContactPage: React.FC = () => {
  return (
    // Removed the outer 'layout-content-container' div.
    // The content now directly starts here, fitting into the MainLayout's structure.
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#0e0e1b] tracking-light text-[32px] font-bold leading-tight">Contacta con Nosotros</p>
          <p className="text-[#4e4e97] text-sm font-normal leading-normal">Nos encanta escuchar a nuestra comunidad</p>
        </div>
      </div>
      <p className="text-[#0e0e1b] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Si tienes alguna pregunta, comentario o sugerencia, no dudes en ponerte en contacto con nosotros. Nos esforzamos por responder a todas las consultas lo antes posible.
      </p>
      <p className="text-[#4e4e97] text-sm font-normal leading-normal pb-3 pt-1 px-4">contacto@elartedereprogramarte.com</p>
      <div className="flex px-4 py-3 justify-start">
        <Button as="a" href="mailto:contacto@elartedereprogramarte.com" className="h-10 px-4 text-sm">
          Enviar un Email
        </Button>
      </div>
    </>
  );
};

export default SimpleContactPage;