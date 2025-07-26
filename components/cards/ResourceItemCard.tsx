import React from 'react';
import { Button } from '../ui/Button';
import { PlayIcon } from '../icons/PlayIcon';

export interface ResourceItemProps {
  title: string;
  description: string;
  imageUrl?: string;
  actionText: string;
  actionLink?: string;
  isVideo?: boolean;
}

export const ResourceItemCard: React.FC<ResourceItemProps> = ({ title, description, imageUrl, actionText, actionLink = "#", isVideo = false }) => {
  if (isVideo) {
    return (
      <div className="p-4">
        <a href={actionLink} target="_blank" rel="noopener noreferrer"
           className="relative flex items-center justify-center bg-[#4747ea] bg-cover bg-center aspect-video rounded-xl p-4 group"
           style={{backgroundImage: `url("${imageUrl}")`}}
        >
          <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity rounded-xl"></div>
          <button className="relative flex shrink-0 items-center justify-center rounded-full size-16 bg-black/40 text-white group-hover:bg-black/60 transition-colors" aria-label={`Play video: ${title}`}>
            <PlayIcon />
          </button>
        </a>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex flex-col @md:flex-row items-stretch justify-between gap-4 rounded-xl border border-transparent hover:border-[#d0d0e7] bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className={`flex flex-col gap-4 p-4 @md:p-6 ${imageUrl ? 'flex-[2_2_0px]' : 'w-full'}`}>
          <div className="flex flex-col gap-1">
            <p className="text-[#0e0e1b] text-base font-bold leading-tight">{title}</p>
            <p className="text-[#4e4e97] text-sm font-normal leading-normal">{description}</p>
          </div>
          <Button as="a" href={actionLink} target="_blank" rel="noopener noreferrer" className="h-8 px-4 bg-[#e7e7f3] text-[#0e0e1b] hover:bg-[#d0d0e7] text-sm font-medium leading-normal w-fit self-start">
            {actionText}
          </Button>
        </div>
        {imageUrl && (
          <div
            className="w-full @md:w-1/3 h-48 @md:h-auto bg-center bg-no-repeat bg-cover @md:rounded-r-xl @md:rounded-l-none rounded-b-xl"
            style={{backgroundImage: `url("${imageUrl}")`}}
          ></div>
        )}
      </div>
    </div>
  );
};
