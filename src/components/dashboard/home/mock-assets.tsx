import { Icon } from '@iconify/react';

export const priceChangeEnum = {
  INCREASED: 'increased',
  DECREASED: 'decreased'
};

export const assets = [
  {
    id: "00001",
    name: "bitcoin",
    icon: <Icon icon="cib:btc" />,
    shortname: "BTC",
    priceChangeDirection: priceChangeEnum.INCREASED,
    priceInCents: 1203109,
    priceGrowthInCents: 1506, 
    color: '#F6921A',
  },
  {
    id: "00002",
    name: "etherium",
    icon: <Icon icon="ri:eth-fill" />,
    shortname: "ETH",
    priceChangeDirection: priceChangeEnum.DECREASED,
    priceInCents: 4312412,
    priceGrowthInCents: 3200, 
    color: '#387578',
  },
  {
    id: "00002",
    name: "hedera",
    icon: <Icon icon="ri:eth-fill" />,
    shortname: "HBAR",
    priceChangeDirection: priceChangeEnum.DECREASED,
    priceInCents: 4312412,
    priceGrowthInCents: 3200, 
    color: '#2F2F2F',
  }
]