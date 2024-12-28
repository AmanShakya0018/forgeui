'use client'

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Themetoggle } from '@/components/ui/ThemeToggle';
import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/contants';
import DocumentSearch from './documentsearch';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 sticky top-0 w-full bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border-b border-primary/10 px-4 lg:px-8
">
      <div className="max-w-[88rem] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className='flex items-center space-x-12'>
            <Link href="/" className="flex items-center space-x-1">
              <Image src="/logo-ui.png" width={30} height={30} priority={false} alt="Logo" unoptimized={true} className="rounded-xl" />
              <span className="text-2xl font-bold">Forge UI</span>
            </Link>

            <div
              className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm font-medium text-zinc-400 hover:text-foreground/80 relative">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="https://twitter.com/AmanShakya0018" target="_blank">
              <p className="text-sm font-medium text-zinc-400 hover:text-foreground/80 relative">Twitter</p>
            </Link>
            <Link href="https://www.linkedin.com/feed/" target="_blank">
              <p className="text-sm font-medium text-zinc-400 hover:text-foreground/80 relative">LinkedIn</p>
            </Link>
            <Themetoggle />
            <DocumentSearch />

          </div>

          <div className="lg:hidden flex items-center space-x-1">
            <Themetoggle />

            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div>
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block px-4 py-2 text-gray-900 hover:bg-slate-100 dark:text-gray-100 dark:hover:bg-neutral-900 rounded-lg relative">
                {item.name}
              </a>
            ))}
            <Link href="https://twitter.com/AmanShakya0018" target="_blank">
              <p className="block px-4 py-2 text-gray-900 hover:bg-slate-100 dark:text-gray-100 dark:hover:bg-gray-800 rounded-lg relative">Twitter</p>
            </Link>
            <Link href="https://www.linkedin.com/feed/" target="_blank">
              <p className="block px-4 py-2 text-gray-900 hover:bg-slate-100 dark:text-gray-100 dark:hover:bg-gray-800 rounded-lg relative">LinkedIn</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;