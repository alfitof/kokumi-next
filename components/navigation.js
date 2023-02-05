import { useState, useEffect } from 'react';
import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-14">
      <span className="p-1">
        <a href="#" className="flex items-center" style={{ color: '#303065' }}>
          Home
        </a>
      </span>
      <span className="p-1">
        <a href="#" className="flex items-center" style={{ color: '#303065' }}>
          Menu
        </a>
      </span>
      <span className="p-1">
        <a href="#" className="flex items-center" style={{ color: '#303065' }}>
          What New
        </a>
      </span>
      <span className="p-1">
        <a href="#" className="flex items-center" style={{ color: '#303065' }}>
          Contact
        </a>
      </span>
    </ul>
  );

  return (
    <nav class="block w-full bg-white text-white py-2 px-10 lg:px-20 lg:py-4">
      <div className="mx-auto flex items-center justify-between text-gray-900">
        <a href="#" className="mr-4 cursor-pointer py-1.5">
          <Image src="/image/logo.png" alt="" width={80} height={80} style={{ position: 'relative' }} />
        </a>
        <div className="hidden lg:block" style={{ marginLeft: '5%' }}>
          {navList}
        </div>
        <div className="hidden lg:block">
          <ConnectButton />
        </div>
        <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="w-full mb-4">
            <div className="connected">
              <ConnectButton label="Connect a Wallet" />
            </div>
          </div>
        </div>
      </MobileNav>
    </nav>
  );
}
