import { ReactNode } from "react";
import clsx from "clsx";
import { Icon } from '@iconify/react';
import { priceChangeEnum } from "./mock-assets";

interface assetCardProps {
  icon: ReactNode;
  shortname: string;
  priceChangeDirection: 'increased' | 'decreased';
  priceInCents: bigint;
  priceGrowthInCents: bigint;
  color: string;
  style: 'primary' | 'outline';
}

export default function AssetCard({
  icon,
  shortname,
  priceChangeDirection,
  priceInCents,
  priceGrowthInCents,
  color,
  style = 'outline',
}: assetCardProps): ReactNode {
  return (
    <div
    className={clsx(
      "flex items-center gap-2.5 h-18 w-44 px-4 py-3 rounded-md", {
        "border border-solid border-blue-gray-90 hover:bg-transparent-white-5": style === 'outline',
      }
    )}
    style={{ backgroundColor: style === 'primary' ? color : undefined }}
    >
      {/* Icon */}
      <div className={clsx({
        "text-white": style === 'primary',
        "text-purple-gray-83": style === 'outline',
      })}>
        {icon}
      </div>

      <div className='w-full gap-4'>
        <div className='flex w-full justify-between'>

          {/* Shortname */}
          <div className={clsx(
            'text-base font-bold', {
            "text-white": style === 'primary',
            "text-purple-gray-85": style === 'outline',
          }
          )}>
            {shortname}
          </div>

          {/* Price growth */}
          <div className={clsx(
            'flex items-start gap-1', {
            "text-white": style === 'primary',
            "text-purple-gray-83": style === 'outline',
          }
          )}>
            <Icon
              icon="fa:arrow-right"
              width={10}
              height={10}
              className={clsx('mt-1', {
                "-rotate-45": priceChangeDirection === priceChangeEnum.INCREASED,
                "rotate-45": priceChangeDirection === priceChangeEnum.DECREASED,
              })}
            />
            <div className='text-sm'>
              {Number(priceGrowthInCents) / 100}
            </div>
          </div>
        </div>

        {/* Price */}
        <div className='flex gap-1 items-end'>
          <div className='text-base text-white'>
            {Number(priceInCents) / 100}
          </div>
          <div className={clsx(
            'text-sm font-bold', {
            "text-transparent-white-50": style === 'primary',
            "text-purple-gray-83": style === 'outline',
          }
          )}>
            USD
          </div>
        </div>
      </div>
    </div>
  );
}