import { documentation, products, socialMedia } from './Footer.helper';
import ListIcon from './ListIcon';
import ListItem from './ListItem';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="relative flex w-full flex-col font-inter">
      <div className="w-full bg-green-background flex flex-col items-center">
        <div className="container px-25 py-30 md:p-50 flex flex-col items-center">
          <div className="text-primary-500 text-center text-18 md:text-45 font-semibold">
            Start secure swaps across blockchains
          </div>
          <div className="text-14 md:text-18 font-medium mt-15 md:mt-0 text-center text-neutral-200">
            Swap across 64+ blockchains and 100+ DEX/Bridge Protocols in a
            simple UI
          </div>
        </div>
      </div>
      <div className="flex flex-col  bg-green-background items-center justify-center">
        <div>
          <Image
            src={'/img/Ellipse.png'}
            width={1000}
            height={100}
            alt="divide"
          />
        </div>

        <div className="w-full pt-40 md:pt-[100px]">
          <div className="relative w-full bg-footer-mask bg-contain bg-right-bottom bg-no-repeat pb-16 md:bg-[right_1.5rem]">
            <div className="mx-auto flex container  flex-col justify-between px-30 md:flex-row md:px-0">
              <div className="mb-10 text-left md:mb-0 md:max-w-[19.4375rem]">
                <h3 className="mb-3.5 text-left text-16 md:text-[20px]	font-medium text-primary-500 md:text-[1.1rem] md:leading-[1.4rem]">
                  About Dexifier
                </h3>
                <p className="w-full text-12 md:text-16 font-medium leading-[1.5rem] text-neutral-200	">
                  Dexifier provides cutting-edge routing and aggregation
                  protocol for all cross-chain and on-chain swaps, aggregating
                  bridges and DEXs in crypto world. You can swap native assets
                  like Bitcoin, Ethereum, Matic, ... to each other in a
                  decentralized manner.
                </p>
              </div>
              <div className="grid grid-cols-2 md:flex md:w-[50%] md:justify-around mt-40 md:mt-0 md:mb-10">
                <div>
                  <h3 className="mb-3 text-left text-14 md:text-[20px] font-medium	text-primary-500	md:mb-3.5 md:text-[1.1rem] md:leading-[1.4rem]">
                    Products
                  </h3>
                  <ul className="w-full">
                    {products.map((link, index) => (
                      <ListItem key={index} {...link} />
                    ))}
                  </ul>
                </div>
                <div className="mb-10">
                  <h3 className="mb-3 text-left text-14 md:text-[20px] font-medium	text-primary-500	md:mb-3.5 md:leading-[1.4rem]">
                    Documentation
                  </h3>
                  <ul className="w-full">
                    {documentation.map((link, index) => (
                      <ListItem key={index} {...link} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <ul className="w-full flex container mx-auto gap-[12px] pt-30">
                {socialMedia.map((link, index) => (
                  <ListIcon key={index} {...link} />
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={'/img/Ellipse.png'}
              width={1000}
              height={100}
              alt="divide"
            />
          </div>
        </div>
      </div>
      <span className="w-full bg-green-background p-2.5 pb-9 text-center text-[18px] md:text-16 text-baseForeground md:text-base md:leading-6">
        Copyright © 2024 Dexifier Exchange. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
