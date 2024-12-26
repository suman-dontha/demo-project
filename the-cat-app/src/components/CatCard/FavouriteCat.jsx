import React from 'react';
import { useDispatch } from 'react-redux';
import { showSuccessAlert } from '../../actions';
import { deleteFavourite, setFavourite } from '../../api';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';

export const FavouriteCat = ({ id, favId }) => {
  const isFavourite = Boolean(favId);
  const dispatch = useDispatch();

  /* Sends favourite or unfavourite request depending on current status */
  const updateFavourite = () => {
    if (!isFavourite) {
      // Sends favourite POST request
      dispatch(setFavourite(id));
      // Updates alert state so snackbar alert for added favourite is displayed
      dispatch(showSuccessAlert(`${id} - has been added as a favourite`));
    } else {
      // Sends favourite DELETE request
      dispatch(deleteFavourite(favId));
      // Updates alert state so snackbar alert for favourite removal is displayed
      dispatch(showSuccessAlert(`${id} - has been removed as a favourite`));
    }
  };

  return (
    <button
      aria-label="favorite"
      onClick={updateFavourite}
      className={`${
        isFavourite
          ? 'text-red-500 hover:text-red-600 focus:ring-red-500'
          : 'text-gray-400 hover:text-gray-500 focus:ring-gray-400'
      }`}
    >
      {isFavourite ? (
        <SolidHeartIcon className="h-8 w-8 transition duration-200" />
      ) : (
        <OutlineHeartIcon className="h-8 w-8 transition duration-200" />
      )}
    </button>
  );
};
