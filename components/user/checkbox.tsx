import React from 'react';

const CheckBox = () => {
  return (
    <>
      <div className="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="link-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the terms and conditions.
        </label>
      </div>
    </>
  );
};

export default CheckBox;
