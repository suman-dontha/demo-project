import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  catsUploading,
  catsUploadComplete
} from '../../reducers/catReducer';
import { LoadingSpinner } from '../LoadingSpinner';
import { UploadHeader } from './UploadHeader';
import { UploadFileButton } from './UploadFileButton';
import { UploadFileArea } from './UploadFileArea';
import { useNavigate } from 'react-router-dom';

export const UploadFile = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  /* Fetches upload error, isUploading and uploadComplete from redux store */
  const { isUploading, uploadComplete } = useSelector(state => ({
    isUploading: catsUploading(state),
    uploadComplete: catsUploadComplete(state)
  }));

  /* Once upload is complete navigate to home page */
  useEffect(() => {
    if (uploadComplete) {
      navigate('/');
    }
  }, [uploadComplete, navigate]);

  return (
    <div data-testid="upload" className="upload">
      <UploadHeader />
      {isUploading ? (
        <LoadingSpinner className="upload__loading" text="UPLOADING IMAGE..." />
      ) : (
        <UploadFileArea setFile={setFile} />
      )}
      <div className="mt-4 flex justify-end">
        <UploadFileButton file={file} />
      </div>
      
    </div>
  );
};