import React from 'react';
import { FavouriteCat } from './FavouriteCat';
import { VoteCat } from './VoteCat';

export const CatCard = ({ cat }) => {
  const { url, id, favourite_id: favId, votes } = cat || {};

  return (
    <div
      data-testid="cat"
      key={id}
      className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center"
    >
      {/* Cat Image */}
      <img
        src={url}
        alt={id}
        title={`cat-${id}`}
        className="w-full h-48 object-cover"
      />

      {/* Votes and Favourite Section */}
      <div className="flex justify-between items-center w-full px-4 py-4">
        {/* Score */}
        <h5 className="text-md font-medium text-gray-900">{`Score: ${votes}`}</h5>
        
        {/* Favourite Button */}
        <FavouriteCat id={id} favId={favId} />
      </div>
      
      {/* Actions Section */}
      <div className="flex justify-between items-center w-full px-4 py-2 border-t">
        <VoteCat id={id} />
      </div>

      
    </div>
  );
};
