import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../icons/LogoIcon';
import { Button } from '../ui/Button';
import { mainNavLinks } from '../../constants/navigation'; // Use mainNavLinks
import { NavLinkItem } from '../../types';

// Removed variant from HeaderProps
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  // Standardized button text and link
  const buttonText = 'Descarga tu Guía Gratuita';
  const buttonLink = '/el-regalo';

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7e7f3] px-10 py-3">
      <Link to="/" className="flex items-center gap-4 text-[#0e0e1b]">
        <div className="size-4">
          <LogoIcon />
        </div>
        <h2 className="text-[#0e0e1b] text-lg font-bold leading-tight tracking-[-0.015em]">El Arte de Reprogramarte</h2>
      </Link>
      <nav className="flex flex-1 justify-end gap-8 items-center">
        <div className="hidden md:flex items-center gap-9">
          {mainNavLinks.map((link: NavLinkItem) => ( // Use mainNavLinks directly
            <Link key={link.label} to={link.href} className="text-[#0e0e1b] text-sm font-medium leading-normal hover:text-[#4747ea] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <Button 
            as={Link} 
            to={buttonLink} 
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#4747ea] text-[#f8f8fc] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#3a3ad5] transition-colors"
        >
          {buttonText}
        </Button>
      </nav>
    </header>
  );
};
