import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { catsUploading } from '../../reducers/catReducer';
import { uploadCat } from '../../api';

export const UploadFileButton = ({ file }) => {
  const dispatch = useDispatch();

  // Fetches isUploading from redux store
  const { isUploading } = useSelector((state) => ({
    isUploading: catsUploading(state),
  }));

  // When upload file button is pressed, send POST request
  const onUpload = () => {
    if (file) dispatch(uploadCat(file));
  };

  return (
    <button
      type="button"
      onClick={onUpload}
      disabled={isUploading}
      className={`flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        isUploading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4-4m0 0l-4 4m4-4v12"
        />
      </svg>
      Upload File
    </button>
  );
};
