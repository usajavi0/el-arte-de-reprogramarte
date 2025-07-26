import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox';
import { HeartIcon } from '../components/icons/HeartIcon';
import { LeafIcon } from '../components/icons/LeafIcon';
import { SunIcon } from '../components/icons/SunIcon';
// BookOpenIcon is no longer needed as the preview section it was used in is removed.
// import { BookOpenIcon } from '../components/icons/BookOpenIcon';


const GiftLandingPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
        alert("Debes aceptar la política de privacidad.");
        return;
    }
    // Handle form submission
    alert(`Gracias ${name}! Tu guía será enviada a ${email}.`);
    setName('');
    setEmail('');
    setAgreed(false);
  };

  const ctaButtonClasses = "@[480px]:h-12 @[480px]:px-5 @[480px]:text-base bg-indigo-700 text-white hover:bg-indigo-800";

  return (
    <>
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCE9ly5ug3Hulx5p6KpufPBP0JUk2cjSk6qQp6ftSeE2Ee73nY3_jIEDOInV9euvw-weeUPw78CQGKZgLQF3NfBsLIAjxkPYmZBfSSCAqm8-zO4mLFa2l4bGgAPsmlB88afqTm-9XMPY96dFtBfqh1H-iDPkQg6JydN721hHtntPOwuq-KJWY3LcQGkZa_Oev7zST__AnZ_BVlOwiduZUNF2wjlnAI3rUCuWHBQByGqm4wLw8DfZSgkDkPL3nOM3X-gm-jKc_I62Tae")`}}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                El Regalo
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Siete llaves emocionales para volver a ti. Desde la herida, hacia la claridad.
              </h2>
            </div>
            <Button className={ctaButtonClasses}>
              QUIERO LA GUÍA GRATIS
            </Button>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <h1 className="text-[#0e0e1b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">7 Herramientas para Empezar a Sanar desde Hoy</h1>
      <div className="text-[#0e0e1b] text-base font-normal leading-normal pb-3 pt-1 px-4 text-left space-y-3">
        <p>¿Sientes que algo tiene que cambiar, pero no sabes por dónde empezar?</p>
        <p>Quizás vives en piloto automático, con un ruido mental constante que no te deja en paz. O sientes que hay heridas del pasado que, sin que te des cuenta, siguen dirigiendo tus decisiones, tus miedos y tus relaciones.</p>
        <p>Sabemos lo que es estar ahí. Y por eso hemos creado esta guía para ti.</p>
        <p>No es un manual teórico. Es un mapa práctico con siete llaves emocionales para volver a ti. Un primer paso claro y poderoso para dejar de buscar respuestas fuera y empezar a encontrarlas dentro.</p>
        <p>Dentro de esta guía gratuita descubrirás:</p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Cómo usar lo que te molesta de los demás como un espejo para conocerte mejor y sanar tus relaciones.</li>
          <li>Una técnica de 3 preguntas para cuestionar y desmontar los pensamientos negativos que te bloquean y te hacen sentir mal.</li>
          <li>El poder de la escritura para darle un lugar seguro al dolor que a veces no puedes expresar con palabras.</li>
          <li>Un ejercicio simple de gratitud para entrenar a tu mente a ver lo bueno, incluso en los días más difíciles.</li>
          <li>El método de respiración 4-7-8: tu "botón de pausa" para calmar la ansiedad física en el momento en que aparece.</li>
          <li>Por qué la aceptación no es resignación, sino la clave para dejar de luchar contra lo que no puedes cambiar y empezar a vivir en paz.</li>
          <li>Cómo encontrar dirección y claridad cada mañana con un propósito diario que te devuelva el poder.</li>
        </ul>
        <p>Cada herramienta incluye un ejercicio práctico y directo para que pases a la acción hoy mismo. Sin rodeos, sin esperas.</p>
      </div>


      {/* Benefits Section */}
      <h2 className="text-[#0e0e1b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Beneficios de la Guía</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {[
          { icon: HeartIcon, text: "Autoconocimiento Profundo" },
          { icon: LeafIcon, text: "Bienestar Integral" },
          { icon: SunIcon, text: "Transformación Personal" },
        ].map((benefit, index) => (
          <div key={index} className="flex flex-1 gap-3 rounded-lg border border-[#d0d0e7] bg-[#f8f8fc] p-4 items-center">
            <benefit.icon />
            <h2 className="text-[#0e0e1b] text-base font-bold leading-tight">{benefit.text}</h2>
          </div>
        ))}
      </div>
      
      {/* New Call to Action Section */}
      <h2 className="text-[#0e0e1b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-2 pt-5">Comienza Tu Viaje de Sanación Hoy</h2>
      <p className="text-[#0e0e1b] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
        Obtén tu guía gratuita y da el primer paso hacia un tú más saludable y feliz.
      </p>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="w-full max-w-[480px] mx-auto pt-5"> {/* Added pt-5 for spacing */}
        <div className="flex flex-col gap-4 px-4 py-3">
            <Input label="Nombre" id="name-gift" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input type="email" label="Email" id="email-gift" placeholder="Tu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="px-4">
           <Checkbox 
            id="privacy-gift" 
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
            checked={agreed} 
            onChange={(e) => setAgreed(e.target.checked)} />
        </div>
        <div className="flex px-4 py-3">
          <Button type="submit" className={`h-12 px-5 flex-1 text-base ${ctaButtonClasses.replace(/@[^ ]+ /g, '')}`}>
            QUIERO LA GUÍA GRATIS
          </Button>
        </div>
      </form>
      

      {/* Testimonials Section */}
      <h2 className="text-[#0e0e1b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Testimonios</h2>
      <p className="text-[#0e0e1b] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
        Próximamente, descubre cómo esta guía ha transformado la vida de otros usuarios. ¡Mantente atento!
      </p>
    </>
  );
};

export default GiftLandingPage;