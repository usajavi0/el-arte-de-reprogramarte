import React from 'react';
import { ResourceItemCard, ResourceItemProps } from '../components/cards/ResourceItemCard';

const articlesData: ResourceItemProps[] = [
  {
    title: "El Poder de la Resiliencia",
    description: "Reflexiones sobre cómo desarrollar resiliencia ante los desafíos de la vida.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqBkQWTVbI2BJlT7ax4MBe1CXV1CNEeG81p4Re7oT1EPNtTtdA0ZRbz-KJZF9-uE9hsRgXLYE-w9kC71fzz52jK7Yexa0ZMM9H4w_wbZNKksZTYNRRsWOfxqz-8Dj-XHwoBViPeaHouKkOe-7r0Ux-w5SCnRzOX99cmA6EQWqs_IDrop_inLOQIQwEbBa8LU4jishBx9HKGCMwVNUdGoad3zLUr9z5nzpNGeBN2hodmnxm1gIuL8a0DTesJUcWwUlGq5CQDUnv6aJX",
    actionText: "Leer",
    actionLink: "#"
  },
  {
    title: "Mindfulness para el Día a Día",
    description: "Consejos prácticos para incorporar la atención plena en tu rutina diaria.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuChWwXGLPXFu3n_N2W0v18GazVEJcTyisICqAYgf94yo4JcZsYjpn3djI5VYNtwtUAHC3xvGFKQH3PbJUHklhI7-BKZwkGXTBQCQvGdDV55-j9VpIsfB8t1HXQ39wzWrKKwlDCtFPYo646NdA01OX3sR_5MY8S-m9h-5fnGumzlb8kwUQX8F2YBOYkrkSkLukJljoTecShTSusAngf_Ph1TrC-Uwbgde8t_Cnc1HEWuvxKkO-TQri9SK0unxTYyy_JM96nNbU1Mazu0",
    actionText: "Leer",
    actionLink: "#"
  },
];

const ArticlesPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#0e0e1b] tracking-light text-[32px] font-bold leading-tight">Artículos y Reflexiones</p>
          <p className="text-[#4e4e97] text-sm font-normal leading-normal">Explora nuestras ideas y perspectivas sobre el crecimiento personal.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {articlesData.map(item => <ResourceItemCard key={item.title} {...item} />)}
      </div>
    </>
  );
};

export default ArticlesPage;
