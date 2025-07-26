import React from 'react';

const PoliticaPrivacidadPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-[#0e0e1b] mb-4">Política de Privacidad</h1>
      <div className="space-y-3 text-[#0e0e1b] text-base leading-relaxed">
        <p>
          En El Arte de Reprogramarte, nos tomamos muy en serio tu privacidad. Esta política describe cómo recogemos, usamos y protegemos 
          tu información personal.
        </p>
        <p>
          <strong>1. Responsable del tratamiento:</strong> [Nombre del Titular o Empresa], con email de contacto [Email de Contacto para Privacidad].
        </p>
        <p>
          <strong>2. Información que recogemos:</strong> Recogemos información que nos proporcionas directamente, como tu nombre y dirección de correo 
          electrónico cuando te suscribes a nuestro boletín o descargas una guía. También podemos recoger información automáticamente a través 
          de cookies (ver nuestra Política de Cookies).
        </p>
        <p>
          <strong>3. Finalidad del tratamiento:</strong> Utilizamos tu información para enviarte comunicaciones (si has consentido), mejorar nuestros 
          servicios y personalizar tu experiencia.
        </p>
        <p>
          <strong>4. Derechos:</strong> Tienes derecho a acceder, rectificar, suprimir tus datos, así como otros derechos explicados en la 
          información adicional. Puedes ejercer tus derechos contactándonos.
        </p>
        <p>
          Esta es una versión resumida. Te recomendamos leer la política completa para más detalles.
        </p>
      </div>
    </div>
  );
};

export default PoliticaPrivacidadPage;
