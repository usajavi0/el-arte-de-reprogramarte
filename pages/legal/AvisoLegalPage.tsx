import React from 'react';

const AvisoLegalPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-[#0e0e1b] mb-4">Aviso Legal</h1>
      <div className="space-y-3 text-[#0e0e1b] text-base leading-relaxed">
        <p>
          Este es el Aviso Legal de El Arte de Reprogramarte. Aquí encontrarás la información legal relevante sobre el titular de la web, 
          las condiciones de uso, la propiedad intelectual y otros aspectos legales importantes.
        </p>
        <p>
          <strong>Titular de la web:</strong> [Nombre del Titular o Empresa]
        </p>
        <p>
          <strong>Domicilio social:</strong> [Dirección Completa]
        </p>
        <p>
          <strong>Email de contacto:</strong> [Email de Contacto Legal]
        </p>
        <p>
          Por favor, lee detenidamente este aviso legal antes de utilizar nuestro sitio web. El acceso y uso de este sitio web implican 
          la aceptación de los términos y condiciones aquí expuestos.
        </p>
      </div>
    </div>
  );
};

export default AvisoLegalPage;
