import React from 'react';

const PoliticaCookiesPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-[#0e0e1b] mb-4">Política de Cookies</h1>
      <div className="space-y-3 text-[#0e0e1b] text-base leading-relaxed">
        <p>
          Este sitio web, El Arte de Reprogramarte, utiliza cookies para mejorar la experiencia del usuario. A continuación, te explicamos 
          qué son las cookies, qué tipos utilizamos y cómo puedes gestionarlas.
        </p>
        <p>
          <strong>¿Qué son las cookies?</strong> Una cookie es un pequeño fichero de texto que se almacena en tu navegador cuando visitas 
          casi cualquier página web. Su utilidad es que la web sea capaz de recordar tu visita cuando vuelvas a navegar por esa página.
        </p>
        <p>
          <strong>Cookies utilizadas en este sitio web:</strong>
        </p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Cookies técnicas:</strong> Son esenciales para el funcionamiento de la web, como por ejemplo, gestionar la sesión.</li>
          <li><strong>Cookies de análisis:</strong> Nos permiten cuantificar el número de usuarios y así realizar la medición y análisis 
          estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página 
          web con el fin de mejorar la oferta de productos o servicios que le ofrecemos (e.g., Google Analytics).</li>
          <li><strong>Cookies de personalización:</strong> Permiten al usuario acceder al servicio con algunas características de carácter 
          general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma.</li>
        </ul>
        <p>
          <strong>Cómo gestionar las cookies:</strong> Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la 
          configuración de las opciones del navegador instalado en tu ordenador.
        </p>
        <p>
          Al continuar navegando por este sitio sin cambiar la configuración de tu navegador, aceptas el uso de cookies.
        </p>
      </div>
    </div>
  );
};

export default PoliticaCookiesPage;
