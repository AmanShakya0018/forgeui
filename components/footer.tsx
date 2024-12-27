"use client"
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {

  const { toast } = useToast()

  const handleClick = () => {
    toast({
      description: 'Nothing to show in this section for now'
    });
  }

  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-[87rem] mx-auto text-sm px-4 text-gray-400 flex sm:flex-row flex-col justify-between items-start ">
        <div>
          <div className="mb-4 flex">
            <Link href="/" className="flex items-center space-x-1">
              <Image src="/logo-ui.png" width={30} height={30} priority={false} alt="Logo" unoptimized={true} className="rounded-xl" />
              <span className="text-2xl font-extrabold text-black dark:text-white ">Forge UI</span>
            </Link>
          </div>
          <div>
            A product by
            <a target="__blank" className="dark:text-cyan-500 pl-1 text-neutral-600 font-medium" href="https://github.com/amanshakya0018">Forge</a>
          </div>
          <div className="mt-2">
            Building in public at
            <a className="dark:text-cyan-500 pl-1 font-medium text-neutral-600" target="__blank" href="https://github.com/amanshakya0018">@amanshakya0018</a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link href='/'>
              <p className="hover:text-foreground/80 text-foreground/60">Home</p>
            </Link>
            <Link href='/components/avatar'>
              <p className="hover:text-foreground/80 text-foreground/60">Components</p>
            </Link>
            <Link href='/contact'>
              <p className="hover:text-foreground/80 text-foreground/60">Contact</p>
            </Link>
            <Link href='/about'>
              <p className="hover:text-foreground/80 text-foreground/60">About</p>
            </Link>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link href='https://x.com/AmanShakya0018 target="_blank"'>
              <p className="hover:text-foreground/80 text-foreground/60">Twitter</p>
            </Link>
            <Link href='https://twitter.com/'>
              <p className="hover:text-foreground/80 text-foreground/60">LindedIn</p>
            </Link>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <p className="hover:text-foreground/80 text-foreground/60"><button onClick={handleClick}>Terms & Conditions</button></p>
            <p className="hover:text-foreground/80 text-foreground/60"><button onClick={handleClick}>Privacy Policy</button></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer