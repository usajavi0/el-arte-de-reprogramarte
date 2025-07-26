export interface NavLinkItem {
  label: string;
  href: string;
}

export interface SocialMediaLink {
  name: string;
  href: string;
  icon: React.FC<{ className?: string }>;
}
