import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox'; // Import Checkbox

const HomePage: React.FC = () => {
  const [name, setName] = useState(''); // State for name
  const [email, setEmail] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false); // State for privacy checkbox

  const handleSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAgreed) {
      alert("Debes aceptar la política de privacidad para suscribirte.");
      return;
    }
    // Logic for subscription (e.g., API call)
    alert(`Gracias ${name}, te has suscrito con ${email} a nuestro boletín.`);
    setName('');
    setEmail('');
    setPrivacyAgreed(false);
  };
  
  return (
    <>
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHs8ix2PQKefSWhffLDR9DfjK-WLG86NtpT9hy4jdX3ai8XUMRZooQtDAbBWjoVHMg4abKqPDjA0Ls3HZGKw-TM1fv_pgOnUHkTLVMN6WKgAwkFo7tcc0kcIYPdAcj_AiguoiP17qcY1xTVeP0g0qMMZ_d5eJYwWeKt6oDcnLthdGh1RxsJeN_7EhhEk7_vzE0BvDw58GERcZrTeJYDE8OaAEpNCN6-K-9PBIsxa_QnTOfXvgyqc9lESRwqvJPeU1QPEqBfGQryyLs")`}}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                El Arte de Reprogramarte
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                El podcast donde desentrañaremos las claves para una vida más plena y consciente
              </h2>
            </div>
            <Button as={Link} to="/el-regalo" className="h-10 px-4 @[480px]:h-12 @[480px]:px-5 text-sm @[480px]:text-base">
                Descarga tu Guía Gratuita
            </Button>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <h2 className="text-[#0e0e1b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Sobre Nosotros</h2>
      <div className="text-[#0e0e1b] text-base font-normal leading-normal pb-3 pt-1 px-4 space-y-4">
        <p>
          Nuestra historia no empezó en una terapia, sino en el parking de un colegio. Somos Javi y Jesús, un ingeniero y un psicólogo que coincidieron como profesores y, sobre todo, como amigos. Lo que nos unió no fue una charla motivacional, sino una conversación honesta y vulnerable sobre aquello de lo que casi nunca se habla.
        </p>
        <p>
          Todo comenzó con una pregunta: "¿Cómo era tu relación con tu padre?" Esa simple pregunta abrió una herida que creíamos cerrada y nos hizo darnos cuenta de que nuestras historias, aunque diferentes, se reflejaban la una en la otra. Crecimos con padres exigentes, madres mediadoras y un juicio constante que habíamos interiorizado. Por primera vez, al compartirlo, no nos sentimos raros, ni débiles, ni solos.
        </p>
        <p>
          Ese día, en ese parking, descubrimos que el proceso de uno era el espejo del otro. Así, de manera natural, empezamos a compartir herramientas: Jesús como psicólogo y amigo, y Javi como el ingeniero que necesitaba estructura y aplicaba esas herramientas para después, sin darse cuenta, devolvérselas a Jesús en conversaciones cotidianas.
        </p>

        <h3 className="text-[#0e0e1b] text-lg font-bold leading-tight tracking-[-0.015em] pt-3">Nuestra Misión: No estás roto, estás herido.</h3>
        <p>
          "El Arte de Reprogramarte" nació de una certeza: este proceso de sanación compartido no podía quedarse solo entre nosotros. Nació del deseo de dejar un legado, algo que nuestras hijas pudieran escuchar y saber que "papá hizo el trabajo".
        </p>
        <p>
          Nuestra filosofía es sencilla: no estás roto, estás herido, y una herida, aunque duela, puede sanarse. Hemos vivido en nuestra propia piel la transformación de aplicar estas herramientas en el día a día, y nuestra misión es compartir contigo esas mismas claves para que inicies tu propio camino.
        </p>
        <p>
          Queremos demostrar que hay salida y que, a veces, una pregunta a tiempo puede encender una luz que cambia tu historia.
        </p>

        <h3 className="text-[#0e0e1b] text-lg font-bold leading-tight tracking-[-0.015em] pt-3">¿Quiénes Somos?</h3>
        <p>
          <strong>Javi (El Ingeniero):</strong> Siempre busqué la lógica y la estructura para que todo encajara. En mi propia búsqueda de respuestas, probé mil técnicas sintiéndome muchas veces roto y pensando que algo estaba mal en mí. Aporto la perspectiva práctica, la necesidad de aplicar las herramientas y la prueba de que se puede construir un cambio real desde la acción.
        </p>
        <p>
          <strong>Jesús (El Psicólogo):</strong> Como psicólogo clínico, mi pasión es acompañar a las personas a sanar esas heridas silenciosas y los miedos que nos paralizan. He dedicado mi vida a encontrar las herramientas para sanar y ofrezco la visión profunda y contenedora que sostiene el proceso.
        </p>
        <p>
          Juntos, somos la combinación perfecta de estructura y profundidad, de acción y comprensión.
        </p>
        
        <h3 className="text-[#0e0e1b] text-lg font-bold leading-tight tracking-[-0.015em] pt-3">¿Qué te ofrecemos?</h3>
        <p>
          A través de nuestro podcast, "El Arte de Reprogramarte", y de todas las herramientas que compartimos, te invitamos a un viaje de autoconocimiento. Hablamos de temas como:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
            <li>La Ley del Espejo para entender tus relaciones.</li>
            <li>Los Criterios para cuestionar tus creencias limitantes.</li>
            <li>La Escritura Terapéutica para sanar desde dentro.</li>
            <li>La Validación Emocional, la Gratitud, la Aceptación y muchos otros recursos prácticos para tu día a día.</li>
        </ul>
        <p>
          Este proyecto es nuestra forma de seguir sanando y de invitarte a que lo hagas con nosotros. Porque crecer duele, pero duele menos si no lo haces solo.
        </p>

        <h3 className="text-[#0e0e1b] text-lg font-bold leading-tight tracking-[-0.015em] pt-3">¿Empiezas tu viaje hoy?</h3>
        <p>
          Te invitamos a suscribirte a nuestro boletín semanal, "Tu Momento de Pausa", donde recibirás ejercicios e inspiración para tu día a día. Además, al unirte, te llevarás gratis nuestra guía: "7 Herramientas para empezar a transformarte desde hoy".
        </p>
        <p>
          Gracias por estar aquí. Gracias por elegir mirarte.
        </p>
      </div>
      
      {/* Javi y Jesus Introduction Section */}
      <div className="flex flex-col items-center gap-4 px-4 py-8 mt-6">
          <h3 className="text-[#0e0e1b] text-xl font-semibold">Conoce a Javi y Jesus</h3>
          <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="flex flex-col items-center gap-2">
              <img 
              src="https://via.placeholder.com/128" 
              alt="Javi" 
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 shadow-md"
              />
              <p className="text-[#0e0e1b] font-medium">Javi</p>
          </div>
          <div className="flex flex-col items-center gap-2">
              <img 
              src="https://via.placeholder.com/128" 
              alt="Jesus" 
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 shadow-md"
              />
              <p className="text-[#0e0e1b] font-medium">Jesus</p>
          </div>
          </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="@container">
        <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 items-center">
          <div className="flex flex-col gap-2 text-center max-w-[720px]">
            <h1 className="text-[#0e0e1b] tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Suscríbete a nuestro boletín
            </h1>
            <p className="text-[#0e0e1b] text-base font-normal leading-normal">
              Recibe las últimas novedades, episodios y recursos directamente en tu bandeja de entrada.
            </p>
          </div>
          <form onSubmit={handleSubscription} className="w-full max-w-[480px] space-y-4">
            <Input
              type="text"
              id="home-name"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Nombre"
            />
            <Input
              type="email"
              id="home-email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Correo electrónico"
            />
            <Checkbox
              id="home-privacy"
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
            <Button type="submit" className="w-full h-12 text-base">
              Suscríbete
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomePage;