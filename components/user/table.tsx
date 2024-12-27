import React from 'react';

const Table = () => {
  return (
    <div className="relative overflow-x-auto bg-white dark:bg-black">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Occupation
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              John Doe
            </th>
            <td className="px-6 py-4">
              28
            </td>
            <td className="px-6 py-4">
              Software Engineer
            </td>
            <td className="px-6 py-4">
              USA
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Jane Smith
            </th>
            <td className="px-6 py-4">
              34
            </td>
            <td className="px-6 py-4">
              Product Manager
            </td>
            <td className="px-6 py-4">
              Canada
            </td>
          </tr>
          <tr className="bg-white dark:bg-black">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Alice Johnson
            </th>
            <td className="px-6 py-4">
              29
            </td>
            <td className="px-6 py-4">
              UX Designer
            </td>
            <td className="px-6 py-4">
              UK
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
