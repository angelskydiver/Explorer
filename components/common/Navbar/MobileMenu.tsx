import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import dexifierLogo from 'public/logo.svg';
import { MobileMenuProps } from './Navbar.type';
import { useRouter } from 'next/router';

const CLOSED_DELAY = 300;
const OPEN_DELAY = 10;

function MobileMenu(props: MobileMenuProps) {
  const { links, showMenu, onClose } = props;
  const { pathname } = useRouter();
  const [active, setActive] = useState(false);
  const [isMount, setIsMount] = useState(false);
  const handleBackDropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (showMenu) {
      setIsMount(true);
      setTimeout(() => {
        setActive(true);
      }, OPEN_DELAY);
    } else {
      setActive(false);
      setTimeout(() => {
        setIsMount(false);
      }, CLOSED_DELAY);
    }
  }, [showMenu]);
  return (
    <>
      {isMount && (
        <>
          <div
            className="fixed top-0 left-0 h-full w-full bg-[#e6e6e6b3]"
            onClick={handleBackDropClick}
          />
          <div
            className={`fixed top-0 z-10 right-0 flex h-full w-10/12 flex-col items-center justify-between overflow-x-auto rounded-l-large bg-baseForeground px-20 py-30  pt-[1.875rem] 
            animate-menu
            ${active ? 'animate-mount-menu' : ''}`}>
            <nav className="w-full">
              <div className="flex w-full items-center justify-between pb-6">
                <Link className="relative w-24" href="/">
                  <Image src={dexifierLogo} alt="dexifier logo" />
                </Link>
                <div />
              </div>
              <ul className="flex h-full w-full flex-col text-22 text-16 font-medium text-primary-500">
                {links.map((link, index) => (
                  <div key={index}>
                    <li>
                      {link.type === 'link' && (
                        <Link
                          href={link.location}
                          target={link.openInNewTab ? '_blank' : '_self'}
                          rel={link.openInNewTab ? 'noreferrer' : 'none'}
                          className={`flex w-full items-center justify-between py-4 text-16 font-medium	 
                  ${
                    pathname === link.location
                      ? 'text-secondary-500'
                      : 'text-primary-500'
                  }`}>
                          <span>{link.title}</span>
                        </Link>
                      )}
                    </li>
                    {index !== links.length - 1 && (
                      <hr className="w-full border-neutral-300 opacity-50" />
                    )}
                  </div>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

export default MobileMenu;
