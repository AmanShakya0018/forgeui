import React from 'react';

const Progress = () => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
      <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: '45%' }}></div>
    </div>
  );
};

export default Progress;
