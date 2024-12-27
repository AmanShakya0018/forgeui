import React from 'react'

const Alerts = () => {
  return (
    <>

      <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </div>
      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
      </div>
      <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
      </div>
      <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
        <span className="font-medium">Warning alert!</span> Change a few things up and try submitting again.
      </div>
      <div className="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
        <span className="font-medium">Dark alert!</span> Change a few things up and try submitting again.
      </div>

    </>
  )
}

export default Alerts