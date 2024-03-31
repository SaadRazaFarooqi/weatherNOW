import { UilSearch } from '@iconscout/react-unicons';
import React, { useState } from 'react';

function Inputs({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {

    onSearch(searchTerm);
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder='Search for city....'
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearch} />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <p className="text-xl text-white mx-1"></p>
      </div>
    </div>
  );
}

export default Inputs;
