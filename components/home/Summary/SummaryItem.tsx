import React from 'react';
import { SummaryItemProps } from './Summary.type';
import { AmountConverter } from 'utils/amountConverter';
import Image from 'next/image';

function SummaryItem(props: SummaryItemProps) {
  const { value, title, prefix, image } = props;
  return (
    <div className="relative p-10 md:p-15 w-full h-full flex flex-col justify-center bg-primary-500 rounded-soft md:rounded-normal">
      <p className="text-10 md:text-[16px] font-medium text-black mb-10">
        {title}
      </p>
      <p className="text-14 md:text-[48px] font-medium text-black">
        {prefix}
        {AmountConverter(value)}
      </p>
      <div className="flex absolute bottom-0 right-0 w-[90px] h-[105px]">
        <Image src={image} width={90} height={90} alt={title} />
      </div>
    </div>
  );
}

export default SummaryItem;
