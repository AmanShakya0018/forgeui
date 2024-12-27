import React from 'react'

const Listgroup = () => {
  return (
    <ul className="w-96 text-surface dark:text-white">
      <li
        className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
        An item
      </li>
      <li
        className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
        A second item
      </li>
      <li
        className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
        A third item
      </li>
      <li
        className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
        A fourth item
      </li>
      <li className="w-full py-4">And a fifth one</li>
    </ul>
  )
}

export default Listgroup