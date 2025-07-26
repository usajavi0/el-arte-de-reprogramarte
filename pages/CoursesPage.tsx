import React from 'react';
import { Button } from '../components/ui/Button';

const CoursesPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#0e0e1b] tracking-light text-[32px] font-bold leading-tight">Nuestros Cursos</p>
          <p className="text-[#4e4e97] text-sm font-normal leading-normal">Programas diseñados para darte herramientas prácticas y profundas</p>
        </div>
      </div>

      <div className="p-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start border border-transparent hover:border-[#d0d0e7] transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden bg-white">
          <div
            className="w-full @xl:w-1/2 h-64 @xl:h-auto @xl:aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-t-xl @xl:rounded-l-xl @xl:rounded-tr-none"
            style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsG_SAd_n4tXFvCBEDHYs0pE6l-hKgp5uoUQvJaHZh6xlXBqDzy6_prufvQamxlc9d_4leg9qKGS8bpjBl_7Jo5PuARPukySL-UOnSjHDK-G6lDzWldhlGWcugHrKm1to3IcXcYRtXMBfKyK44yOQj_2bAINpqTfQIzPxO5_loD936frODyiAnToYmZGohEMuhFH46l7zhIlnWj6s6trn8YhK9qxdp06a-1RueuuxYIzaqhgTZKZgLgWlJaW1B8tvMqLR0j68VPid5")`}}
          ></div>
          <div className="flex w-full @xl:w-1/2 min-w-72 grow flex-col items-stretch justify-center gap-1 p-4 @xl:p-6">
            <p className="text-[#4e4e97] text-sm font-normal leading-normal">PRÓXIMAMENTE</p>
            <p className="text-[#0e0e1b] text-lg font-bold leading-tight tracking-[-0.015em]">21 Días con las 7 Herramientas</p>
            <div className="flex flex-col gap-3 justify-between">
              <p className="text-[#4e4e97] text-base font-normal leading-normal">
                Este curso intensivo de 21 días te guiará a través de siete herramientas esenciales para reprogramar tu mente y alcanzar tus metas. Aprenderás a identificar y superar patrones de pensamiento limitantes, a establecer metas claras y alcanzables, y a cultivar una mentalidad de crecimiento y resiliencia. Cada día, recibirás ejercicios prácticos y reflexiones para integrar estas herramientas en tu vida diaria. ¡Prepárate para transformar tu vida y desbloquear tu máximo potencial!
              </p>
              <Button className="h-8 px-4 bg-[#4747ea] text-[#f8f8fc] text-sm font-medium leading-normal self-start mt-2" disabled>
                No disponible
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;