import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getCats } from '../../reducers/catReducer';
import { CatCard } from '../CatCard';
import { paginate } from '../../utils';

export const CatList = () => {
  const [page, setPage] = useState(1);

  // Fetch cats from the Redux store
  const { cats } = useSelector((state) => ({
    cats: getCats(state),
  }));

  // Calculate the total number of pages
  const pageCount = useMemo(
    () => (cats?.length / 8 > 1 ? Math.ceil(cats?.length / 8) : 1),
    [cats]
  );

  // Get the cats for the current page
  const paginatedCats = useMemo(() => paginate(cats, 8, page), [cats, page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= pageCount) {
      setPage(newPage);
    }
  };

  return (
    Boolean(cats?.length) && (
      <div
        data-testid="cat-list"
        className="flex flex-col items-center space-y-6 p-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedCats?.map((cat, index) => (
            <CatCard key={index} cat={cat} />
          ))}
        </div>
        <div className="flex items-center space-x-2 mt-4">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className={`px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded ${
              page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-4 py-2 text-sm font-medium rounded ${
                pageNumber === page
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {pageNumber}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === pageCount}
            className={`px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded ${
              page === pageCount
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-blue-600'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    )
  );
};
