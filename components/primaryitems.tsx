import Link from 'next/link';
import React from 'react';
import { primaryItems } from '@/contants';
import AnchorSidebar from './anchor-sidebar';

const PrimaryItems = () => {
  const sortedPrimaryItems = [...primaryItems].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <div className="mb-4">
        <Link href="https://x.com/AmanShakya0018" target="_blank" rel="noopener noreferrer">
          <p className="mb-1 rounded-md pr-2 py-1 text-sm font-semibold text-black dark:text-white">Follow for updates</p><p className="text-gray-400 text-sm flex w-full items-center rounded-md border border-transparent pr-2 py-1 hover:text-black dark:hover:text-white hover:translate-x-1 transition duration-200">X @amanshakya0018</p>
        </Link>
      </div>
      <div>
        <p className="mb-1 rounded-md pr-2 py-1 text-sm font-semibold text-black dark:text-white">All Components</p>
        {sortedPrimaryItems.map((item) => (
          <AnchorSidebar
            key={item.name + item.href}
            activeClassName="text-black dark:text-white font-medium"
            absolute
            href={item.href}
          >
            {item.name}
          </AnchorSidebar>
        ))}
      </div>
    </div>

  );
};

export default PrimaryItems;
