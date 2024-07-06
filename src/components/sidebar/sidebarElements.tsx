import { RiWallet2Fill as WalletIcon } from "react-icons/ri";
import { PiPaperPlaneTiltFill as PaperPlaneIcon} from "react-icons/pi";
import { LuTestTube as TubeIcon } from "react-icons/lu";
import { RiUser3Fill as UserIcon } from "react-icons/ri";
import { Icon } from '@iconify/react';

const sidebarElements = [
  {
    label: "Inicio",
    icon: <Icon icon="fa6-solid:house" />,
    href: "/",
  },
  {
    label: "Carteras",
    icon:<WalletIcon />,
    href: "/carteras",
  },
  {
    label: "Noticias",
    icon: <PaperPlaneIcon />,
    href: "/",
  },
  {
    label: "Mercados",
    icon: <Icon icon="iconoir:coin" />,
    href: "/",
  },
  {
    label: "Estrategias",
    icon: <Icon icon="ph:strategy-fill" />,
    href: "/",
  },
  {
    label: "Simulador",
    icon: <TubeIcon />,
    href: "/",
  },
  {
    label: "Cuenta",
    icon: <UserIcon />,
    href: "/",
  },
];

export default sidebarElements;