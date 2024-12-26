import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatsVotesAndFavs } from '../../api';
import { catsError, catsLoading } from '../../reducers/catReducer';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorPage } from '../../components/ErrorPage/';

import NavBar from '../../components/Navbar/Navbar'
import {CatList} from '../../components/CatList';

export const Homepage = () => {
  const dispatch = useDispatch();

  /* Fetches cat isLoading, cat errors and alert messages from redux store */
  const { isLoading, error } = useSelector(state => ({
    isLoading: catsLoading(state),
    error: catsError(state),
  }));

  /* Fetches all cat data on mount */
  useEffect(() => {
    dispatch(fetchCatsVotesAndFavs());
  }, [dispatch]);

  return (
    <div className="cats">
      <NavBar />
      {/* <CatList /> */}
      {isLoading && !error ? (
        <LoadingSpinner className="cats__loading" text="LOADING CATS..." />
      ) : (
        <CatList/>
      )}
      <ErrorPage error={error} /> 
    </div>
  );
};