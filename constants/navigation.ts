import { NavLinkItem, SocialMediaLink } from '../types';
import { InstagramLogoIcon } from '../components/icons/InstagramLogoIcon';
import { FacebookLogoIcon } from '../components/icons/FacebookLogoIcon';
// Removed TwitterLogoIcon import
import { YouTubeLogoIcon } from '../components/icons/YouTubeLogoIcon'; // Import YouTubeLogoIcon

export const mainNavLinks: NavLinkItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Episodios del Podcast', href: '/recursos' },
  { label: 'Artículos y Reflexiones', href: '/articulos-reflexiones' },
  { label: 'Cursos', href: '/cursos' },
  { label: 'Momento de Pausa', href: '/newsletter-signup' },
  { label: 'Comunidad', href: '/' }, // Points to Home, can be updated if a community page is added
  { label: 'Contacto', href: '/contacto' },
];

export const mainFooterLinks: NavLinkItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Episodios del Podcast', href: '/recursos' },
  { label: 'Artículos y Reflexiones', href: '/articulos-reflexiones' },
  { label: 'Cursos', href: '/cursos' },
  { label: 'Momento de Pausa', href: '/newsletter-signup' },
  { label: 'Comunidad', href: '/' },
  { label: 'Contacto', href: '/contacto' },
];

export const socialMediaLinksList: SocialMediaLink[] = [
  { name: 'Instagram', href: '#', icon: InstagramLogoIcon },
  { name: 'Facebook', href: '#', icon: FacebookLogoIcon },
  // Twitter entry removed
  { name: 'YouTube', href: '#', icon: YouTubeLogoIcon }, // Added YouTube
];

export const legalLinks: NavLinkItem[] = [
  { label: 'Aviso Legal', href: '/legal/aviso-legal' },
  { label: 'Condiciones de Venta', href: '/legal/condiciones-venta' },
  { label: 'Política de Privacidad', href: '/legal/politica-privacidad' },
  { label: 'Política de Cookies', href: '/legal/politica-cookies' },
];
