"use client";

import { ReactNode } from 'react';
import { useState } from 'react';
import AssetCard from './AssetCard';

interface Asset {
  icon: ReactNode;
  shortname: string;
  priceChangeDirection: 'increased' | 'decreased';
  priceInCents: bigint;
  priceGrowthInCents: bigint;
  color: string;
}

interface AssetCardsListProps {
  assets: Asset[],
}

export default function AssetCardsList({ assets }: AssetCardsListProps) {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div>
      <h3 className='pb-4 font-medium'>CRIPTO</h3>

      <ul className='flex list-none gap-4'>
        {assets.map((asset, index) => (
          <li
            key={index}
            onClick={() => setSelected(index)}
          >
            <AssetCard
              icon={asset.icon}
              shortname={asset.shortname}
              priceChangeDirection={asset.priceChangeDirection}
              priceInCents={asset.priceInCents}
              priceGrowthInCents={asset.priceGrowthInCents}
              color={asset.color}
              style={index === selected ? 'primary' : 'outline'}
            />
          </li>
        ))}

        {assets.length < 4 && (
          <li
            className={
              `border border-dashed border-blue-gray-90 rounded-md 
              flex h-18 w-44 items-center justify-center flex-shrink-0
              text-sm text-blue-gray-90 font-bold
              hover:bg-transparent-white-5`
            }
          >
            + Añadir activos
          </li>
        )}
      </ul>
    </div>
  )
}