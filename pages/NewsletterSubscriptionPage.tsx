import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox';

const NewsletterSubscriptionPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAgreed) {
      alert("Debes aceptar la política de privacidad para suscribirte.");
      return;
    }
    // Handle subscription logic
    alert(`Gracias ${name}, te has suscrito con ${email} a "Tu Momento de Pausa".`);
    setName('');
    setEmail('');
    setPrivacyAgreed(false);
  };

  const ctaButtonClasses = "bg-indigo-700 text-white hover:bg-indigo-800";
  const heroImageUrl = "https://images.unsplash.com/photo-1473187983305-f61531472421?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"; // Calming desk setting

  return (
    <>
      {/* Hero Section */}
      <div className="@container mb-8"> {/* Added mb-8 for spacing */}
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[360px] flex-col gap-4 bg-cover bg-center bg-no-repeat @[480px]:gap-6 @[480px]:rounded-xl items-center justify-center p-6 text-center"
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("${heroImageUrl}")`}}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                Tu Momento de Pausa
              </h1>
              <h2 className="text-white text-lg font-normal leading-normal @[480px]:text-xl">
                Haz una pausa. Conecta contigo.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col w-full max-w-[512px] py-5 items-center mx-auto">
        {/* The h2 title and the "Haz una pausa" p tag are removed from here as they are in the hero */}
        
        <div className="text-[#0e0e1b] text-base font-normal leading-normal pb-3 pt-1 px-4 text-left space-y-3">
          {/* <p><strong>Haz una pausa. Conecta contigo.</strong></p> */} {/* This line moved to hero */}
          <p>En medio del ruido diario, las prisas y las exigencias, es fácil desconectarse de uno mismo. ¿Te ha pasado que te miras al espejo y no reconoces a la persona que te devuelve la mirada?</p>
          <p>Hemos creado "Tu Momento de Pausa" precisamente para eso: para ser ese respiro consciente en tu rutina.</p>
          <p>Cada 15 días, te enviaremos directamente a tu correo un espacio para parar, reflexionar y sanar. No es un boletín más. Es una herramienta viva diseñada para acompañarte.</p>
          <p>Al suscribirte a "Tu Momento de Pausa", recibirás en cada email:</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Una historia personal y real para que te sientas reflejado y acompañado en tu proceso.</li>
            <li>Una herramienta psicológica práctica y sencilla, explicada para que puedas aplicarla en tu día a día y empezar a ver cambios reales.</li>
            <li>Un mini-ejercicio de escritura o reflexión que te tomará solo unos minutos, diseñado para pasar de la teoría a la acción.</li>
            <li>Una recomendación de un episodio de nuestro podcast, "El Arte de Reprogramarte", para que puedas seguir profundizando en el tema de la semana.</li>
          </ul>
          <p>Este es tu espacio para recordar nuestra filosofía: no estás roto, estás herido, y una herida, aunque duela, puede sanarse.</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-[480px] mt-4">
          <div className="flex flex-col gap-4 px-4 py-3">
            <Input
              placeholder="Nombre"
              id="name-newsletter"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Nombre"
            />
            <Input
              type="email"
              placeholder="Email"
              id="email-newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email"
            />
          </div>
          <div className="px-4">
            <Checkbox
              id="privacy-newsletter"
              label={
                <>
                  Acepto la{' '}
                  <Link 
                    to="/legal/politica-privacidad" // Updated link
                    className="text-indigo-600 hover:text-indigo-800 hover:underline"
                  >
                    política de privacidad
                  </Link>
                </>
              }
              checked={privacyAgreed}
              onChange={(e) => setPrivacyAgreed(e.target.checked)}
            />
          </div>
          <div className="flex px-4 py-3">
            <Button type="submit" className={`h-10 px-4 flex-1 ${ctaButtonClasses}`}>
              SUSCRIBIRME
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewsletterSubscriptionPage;