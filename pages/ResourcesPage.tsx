import React from 'react';
import { Button } from '../components/ui/Button'; 
// ResourceItemCard import is no longer needed here as it was used for YouTube videos which are being removed.
// import { ResourceItemCard, ResourceItemProps } from '../components/cards/ResourceItemCard';

interface PodcastEpisode {
  title: string;
  description: string;
  actionText?: string; // Kept for potential future use if there's a generic audio link
  actionLink?: string; // Kept for potential future use
  youtubeLink?: string; // New field for YouTube specific link
}

const PodcastEpisodeDisplay: React.FC<PodcastEpisode> = ({ title, description, youtubeLink }) => (
  <div className="py-4 px-2 mb-4 border-b border-gray-200 last:border-b-0 bg-white rounded-md shadow-sm p-4">
    <h3 className="text-lg font-semibold text-[#0e0e1b] mb-1">{title}</h3>
    <p className="text-sm text-[#4e4e97] mb-2">{description}</p>
    {youtubeLink && (
       <Button 
          as="a" 
          href={youtubeLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="h-8 px-3 text-xs bg-[#FF0000] text-white hover:bg-[#CC0000] font-medium" // YouTube-like red button
        >
          Ver en YouTube
        </Button>
    )}
    {/* Example of how a generic listen button could co-exist if actionLink/actionText were for non-YouTube audio */}
    {/* {actionLink && !youtubeLink && (
        <Button as="a" href={actionLink} target="_blank" rel="noopener noreferrer" className="h-8 px-3 text-xs bg-[#e7e7f3] text-[#0e0e1b] hover:bg-[#d0d0e7] font-medium">
            {actionText || "Escuchar"}
        </Button>
    )} */}
  </div>
);


const ResourcesPage: React.FC = () => {
  const newPodcastEpisodes: PodcastEpisode[] = [
    { title: "Capítulo 1: El origen de nuestra amistad y el inicio del proyecto", description: "Un relato sobre cómo nos conocimos, nuestras conversaciones sobre crecimiento personal, experiencias vitales y el impacto que tuvieron nuestros padres en nuestra juventud.", youtubeLink: "#youtube-link-cap1" },
    { title: "Capítulo 2: Herramientas para transformar tu vida", description: "Introducción a las herramientas psicológicas que utilizaremos a lo largo del libro: Ley del Espejo, Criterios racionalidad, Escritura Terapéutica, Expresión y Validación Emocional, Propósitos, Gratitud, Aceptación y La No Queja.", youtubeLink: "#youtube-link-cap2" },
    { title: "Capítulo 3: Reflejo del alma: Aplicando la Ley del Espejo en tu vida diaria", description: "Cómo utilizar la Ley del Espejo para mejorar tus relaciones y comprender mejor tus pensamientos y emociones.", youtubeLink: "#youtube-link-cap3" },
    { title: "Capítulo 4: Pensamiento crítico: Aplicando los Criterios para cuestionar tus creencias", description: "Estrategias para analizar la validez de nuestros pensamientos y tomar decisiones más conscientes.", youtubeLink: "#youtube-link-cap4" },
    { title: "Capítulo 5: Escribir para sanar: La magia de la Escritura Terapéutica", description: "Cómo usar la escritura para gestionar emociones, encontrar claridad y transformar tu bienestar emocional.", youtubeLink: "#youtube-link-cap5" },
    { title: "Capítulo 6: Darle voz a tus emociones: Expresión y Validación Emocional", description: "La importancia de identificar, aceptar y comunicar nuestras emociones para una vida más equilibrada.", youtubeLink: "#youtube-link-cap6" },
    { title: "Capítulo 7: Diseñando tu futuro: Cómo establecer y cumplir Propósitos con éxito", description: "Claves para definir objetivos realistas y alcanzables que impulsen tu crecimiento personal.", youtubeLink: "#youtube-link-cap7" },
    { title: "Capítulo 8: El poder de la Gratitud: Cambia tu enfoque y transforma tu vida", description: "Cómo la gratitud puede mejorar tu estado de ánimo, fortalecer relaciones y aumentar tu felicidad.", youtubeLink: "#youtube-link-cap8" },
    { title: "Capítulo 9: Fluir con la vida: La Aceptación como clave para la paz interior", description: "Aprender a aceptar lo que no podemos cambiar y encontrar oportunidades de crecimiento en cada desafío.", youtubeLink: "#youtube-link-cap9" },
    { title: "Capítulo 10: Del problema a la solución: La No Queja como filosofía de vida", description: "Cómo cambiar la mentalidad de la queja hacia una actitud proactiva y resolutiva.", youtubeLink: "#youtube-link-cap10" },
    { title: "Capítulo 11: Libérate del Estrés y la Ansiedad en un Mundo que no se Detiene", description: "Criterios: Reprograma tu mente, toma el control de tu vida.", youtubeLink: "#youtube-link-cap11" },
    { title: "Capítulo 13: Cómo desarrollar la autoestima y la confianza en uno mismo", description: 'Título del episodio: "Construyendo una autoestima sólida y una confianza real"', youtubeLink: "#youtube-link-cap13" },
  ];

  // The youtubeVideos array is removed as the section is being deleted.
  // const youtubeVideos: ResourceItemProps[] = [ ... ];

  return (
    <>
      {/* The main title and subtitle section is removed */}
      <Section title="Episodios del Podcast">
        <div className="flex flex-col gap-4 p-2">
            {newPodcastEpisodes.map(episode => <PodcastEpisodeDisplay key={episode.title} {...episode} />)}
        </div>
      </Section>
      
      {/* The Section for "Videos de YouTube" is removed. */}
      {/* 
      <Section title="Videos de YouTube">
        {youtubeVideos.map(item => <ResourceItemCard key={item.title} {...item} />)}
      </Section> 
      */}

    </>
  );
};

const Section: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
  <section className="mb-8 w-full"> {/* Ensure Section takes full width */}
    <h2 className="text-[#0e0e1b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-t border-gray-200 mt-6">{title}</h2>
    <div> 
        {children}
    </div>
  </section>
);


export default ResourcesPage;