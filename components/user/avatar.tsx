import Image from 'next/image'
import React from 'react'

const Avatar = () => {
  return (
    <>
      <Image src="/dummyimage.jpg" width={40} height={40} alt="Logo" className="rounded-full border border-gray" />
      <Image src="/dummyimage.jpg" width={40} height={40} alt="Logo" className="rounded border border-gray" />
    </>


  )
}

export default Avatar