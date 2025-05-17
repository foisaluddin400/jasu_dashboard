import React from 'react';

const UserStats = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="pb-6 pr-6 text-center border-b border-r">
        <div className="text-2xl font-bold">12</div>
        <div className="text-gray-500 text-sm">Total Listings</div>
      </div>
      <div className="pb-6 pl-6 text-center border-b">
        <div className="text-2xl font-bold">3</div>
        <div className="text-gray-500 text-sm">Active Listings</div>
      </div>
      <div className="pt-6 pr-6 text-center border-r">
        <div className="text-2xl font-bold">8</div>
        <div className="text-gray-500 text-sm">Approved Listings</div>
      </div>
      <div className="pt-6 pl-6 text-center">
        <div className="text-2xl font-bold">1</div>
        <div className="text-gray-500 text-sm">Rejected Listings</div>
      </div>
    </div>
  );
};

export default UserStats;
