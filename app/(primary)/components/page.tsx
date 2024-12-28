"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Components = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/components/avatar')
  }, [router])

  return (
    <div className="container lg:pl-8 py-6 prose dark:prose-invert max-w-6xl mx-auto flex flex-col items-center justify-center">
      <p>Redirecting...</p>
    </div>
  )
}

export default Components
