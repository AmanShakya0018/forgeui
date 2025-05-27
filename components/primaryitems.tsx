import React from 'react';
import { primaryItems } from '@/contants';
import AnchorSidebar from './anchor-sidebar';
import AnchorStart from './anchor-start';

const PrimaryItems = () => {
  const sortedPrimaryItems = [...primaryItems].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className='space-y-4'>
      <div className="mb-4">
        <p className="mb-1 rounded-md pr-2 py-1 text-[0.95rem] font-semibold text-black dark:text-white">Getting Started</p>
        <AnchorStart
          key="introduction"
          absolute
          href={"/introduction"}
        >
          Introduction
        </AnchorStart>
        <AnchorStart
          key="install-nextjs"
          absolute
          href={"/install-nextjs"}
        >
          Install Next.js
        </AnchorStart>
        <AnchorStart
          key="install-tailwindcss"
          absolute
          href={"/install-tailwindcss"}
        >
          Install Tailwind CSS
        </AnchorStart>
      </div>
      <div>
        <p className="mb-1 rounded-md pr-2 py-1 text-[0.95rem] font-semibold text-black dark:text-white">All Components</p>
        {sortedPrimaryItems.map((item) => (
          <AnchorSidebar
            key={item.name + item.href}
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
