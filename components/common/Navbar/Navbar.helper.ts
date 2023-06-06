import { LinkTypes, MenuTypes } from './Navbar.type';

export const links: Array<LinkTypes | MenuTypes> = [
  {
    location: '/',
    title: 'Home',
    id: 1,
    type: 'link',
    openInNewTab: false,
  },
  // {
  //   location: '/statistics',
  //   title: 'Statistics',
  //   id: 2,
  //   type: 'link',
  //   openInNewTab: false,
  // },
  {
    location: '/transactions',
    title: 'Transactions',
    id: 2,
    type: 'link',
    openInNewTab: false,
  },
  {
    location: '/beta',
    title: 'Beta',
    id: 3,
    type: 'link',
    openInNewTab: false,
  },
  {
    location: '/blog',
    title: 'Blog',
    id: 4,
    type: 'link',
    openInNewTab: false,
  },
];
