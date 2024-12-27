import React from 'react';

const Textarea = () => {
  return (
    <div>
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Your message
      </label>
      <textarea
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 dark:bg-black dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};

export default Textarea;
