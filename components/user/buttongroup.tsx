import React from 'react'

const ButtonGroup = () => {
  return (


    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-black dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700">
        Profile
      </button>
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-black dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700">
        Settings
      </button>
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-black dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700">
        Messages
      </button>
    </div>

  )
}

export default ButtonGroup