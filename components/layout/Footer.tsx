import React from 'react';
import { Link } from 'react-router-dom';
import { mainFooterLinks, socialMediaLinksList, legalLinks } from '../../constants/navigation';
import { NavLinkItem, SocialMediaLink } from '../../types';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex justify-center border-t border-solid border-t-[#e7e7f3]">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 @[480px]:justify-around">
            {mainFooterLinks.map((link: NavLinkItem) => (
              <Link key={link.label} to={link.href} className="text-[#4e4e97] text-base font-normal leading-normal min-w-40 hover:text-[#4747ea] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {socialMediaLinksList.map((social: SocialMediaLink) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-[#4e4e97] hover:text-[#4747ea] transition-colors">
                <social.icon className="fill-current" />
              </a>
            ))}
          </div>
          
          {/* Legal Links and Copyright Section */}
          <div className="pt-4 mt-4 border-t border-gray-200 text-[#4e4e97] text-xs font-normal leading-normal text-center">
            <div className="flex flex-wrap justify-center items-center">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.label}>
                  <Link to={link.href} className="hover:text-[#4747ea] transition-colors">
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="mx-2">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-2">
              Copyright © 2025 El arte de reprogramarte.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};