import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';

const Herobuttons = () => {
  return (
    <div className='flex gap-4'>
      <Link href="/components/alerts">
        <Button size="sm">
          Browse Components
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      <Link href="/introduction">
        <Button size="sm" variant="ghost">
          Learn More
        </Button>
      </Link>
    </div>
  )
}

export default Herobuttons