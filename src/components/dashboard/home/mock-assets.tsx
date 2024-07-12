import { Icon } from '@iconify/react';
import { ReactNode } from 'react';

interface Asset {
  icon: ReactNode;
  shortname: string;
  priceChangeDirection: 'increased' | 'decreased';
  priceInCents: bigint;
  priceGrowthInCents: bigint;
  color: string;
}

export const assets: Asset[] = [
  {
    icon: <Icon icon="cib:btc" />,
    shortname: "BTC",
    priceChangeDirection: 'increased',
    priceInCents: BigInt(1203109),
    priceGrowthInCents: BigInt(1506), 
    color: '#F6921A',
  },
  {
    icon: <Icon icon="ri:eth-fill" />,
    shortname: "ETH",
    priceChangeDirection: 'decreased',
    priceInCents: BigInt(4312412),
    priceGrowthInCents: BigInt(3200), 
    color: '#387578',
  },
  {
    icon: <Icon icon="ri:eth-fill" />,
    shortname: "HBAR",
    priceChangeDirection: 'increased',
    priceInCents: BigInt(4312412),
    priceGrowthInCents: BigInt(3200), 
    color: '#2F2F2F',
  }
];

export async function getAssets() {
  return new Promise<Array<Asset>>((resolve) => {
    setTimeout(() => { 
      resolve(assets);
     }, 3000)
  })
}
