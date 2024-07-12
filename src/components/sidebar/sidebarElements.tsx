import { Icon } from '@iconify/react';

const sidebarElements = [
  {
    label: "Inicio",
    icon: <Icon icon="fa6-solid:house" />,
    path: "/dashboard",
  },
  {
    label: "Carteras",
    icon: <Icon icon="ri:wallet-2-fill" />,
    path: "/dashboard/carteras",
  },
  {
    label: "Noticias",
    icon: <Icon icon="f7:paperplane-fill" />,
    path: "/dashboard/noticias",
  },
  {
    label: "Mercados",
    icon: <Icon icon="iconoir:coin" />,
    path: "/dashboard/mercados",
  },
  {
    label: "Estrategias",
    icon: <Icon icon="ph:strategy-fill" />,
    path: "/dashboard/estrategias",
  },
  {
    label: "Simulador",
    icon:<Icon icon="icon-park-outline:experiment-one" />,
    path: "/dashboard/simulador",
  },
  {
    label: "Cuenta",
    icon: <Icon icon="ri:user-3-fill" />,
    path: "/dashboard/cuenta",
  },
];

export default sidebarElements;