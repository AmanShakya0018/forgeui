import React from 'react'

const Footer = () => {
  return (

    <footer className="bg-white rounded-lg shadow m-4 dark:bg-black border border-gray-200 dark:border-gray-800">
      <div className="w-full mx-auto p-4 flex flex-wrap items-center justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Google™ All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center space-x-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          <div className="hover:underline">Privacy Policy</div>
          <div className="hover:underline">Licensing</div>
          <div className="hover:underline">Contact</div>
          <div className="hover:underline">About</div>
        </ul>
      </div>
    </footer>

  )
}

export default Footer