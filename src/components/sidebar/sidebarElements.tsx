import { Icon } from '@iconify/react';

const sidebarElements = [
  {
    label: "Inicio",
    icon: <Icon icon="fa6-solid:house" />,
    path: "/",
  },
  {
    label: "Carteras",
    icon: <Icon icon="ri:wallet-2-fill" />,
    path: "/carteras",
  },
  {
    label: "Noticias",
    icon: <Icon icon="f7:paperplane-fill" />,
    path: "/noticias",
  },
  {
    label: "Mercados",
    icon: <Icon icon="iconoir:coin" />,
    path: "/mercados",
  },
  {
    label: "Estrategias",
    icon: <Icon icon="ph:strategy-fill" />,
    path: "/estrategias",
  },
  {
    label: "Simulador",
    icon:<Icon icon="icon-park-outline:experiment-one" />,
    path: "/simulador",
  },
  {
    label: "Cuenta",
    icon: <Icon icon="ri:user-3-fill" />,
    path: "/cuenta",
  },
];

export default sidebarElements;