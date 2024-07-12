"use client";

import { useState } from 'react';
import clsx from 'clsx';
import { assets } from './mock-assets';
import AssetCard from './AssetCard';

export default function AssetsWrapper() {
  const [selected, setSelected] = useState(0);

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
              flex h-18 w-44 items-center justify-center
              text-sm text-blue-gray-90 font-bold
              hover:bg-transparent-white-5`
            }
          >
            + Añadir activos
          </li>
       ) }
      </ul>
    </div>
  )
}