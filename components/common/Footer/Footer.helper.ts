import {
  DiscordIcon,
  GithubIcon,
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'components/icons';
import { ListItemProps } from './Footer.type';

export const products: ListItemProps[] = [
  {
    location: '#',
    title: 'DApp',
    openInNewTab: true,
  },
  {
    location: './apis',
    title: 'SDK',
    openInNewTab: false,
  },
  {
    location: './apis',
    title: 'API',
    openInNewTab: false,
  },
  {
    location: './widget',
    title: 'Widget',
    openInNewTab: false,
  },
];

export const documentation: ListItemProps[] = [
  {
    location: '#',
    title: 'SDK Docs',
    openInNewTab: true,
  },
  {
    location: '#',
    title: 'API Reference',
    openInNewTab: true,
  },
  {
    location: '#',
    title: 'Widget Docs',
    openInNewTab: true,
  },
  {
    location: '#',
    title: 'Widget Playground',
    openInNewTab: true,
  },
];

export const socialMedia: ListItemProps[] = [
  {
    location: '#',
    title: 'Discord',
    openInNewTab: true,
    icon: DiscordIcon,
  },
  {
    location: '#',
    title: 'Twitter',
    openInNewTab: true,
    icon: TwitterIcon,
  },
  {
    location: '#',
    title: 'Telegram',
    openInNewTab: true,
    icon: TelegramIcon,
  },
  {
    location: '#',
    title: 'Medium',
    openInNewTab: true,
    icon: MediumIcon,
  },

  {
    location: '#',
    title: 'YouTube',
    openInNewTab: true,
    icon: YoutubeIcon,
  },
  {
    location: '#',
    title: 'GitHub',
    openInNewTab: true,
    icon: GithubIcon,
  },
];
