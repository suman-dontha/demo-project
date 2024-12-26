import React, { useState } from 'react';
//import { Dialog } from '@headlessui/react';

export const UploadFileArea = ({ setFile }) => {
  const [preview, setPreview] = useState(null);

  /* Handle file upload and preview */
  const handleChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-md">
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center cursor-pointer w-full h-40 border-2 border-dashed border-gray-300 bg-white rounded-lg hover:border-blue-400 hover:bg-blue-50"
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full object-contain rounded-md"
          />
        ) : (
          <div className="flex flex-col items-center">
            <svg
              className="w-10 h-10 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 16v-5a4 4 0 014-4h10a4 4 0 014 4v5m-4 4h-8m8 0h2a2 2 0 002-2v-5a6 6 0 00-6-6H7a6 6 0 00-6 6v5a2 2 0 002 2h2m0 0h8"
              />
            </svg>
            <p className="text-sm text-gray-500 mt-2">
              Drag and drop an image here or click to browse
            </p>
            <p className="text-xs text-gray-400 mt-1">Accepted formats: .jpg, .png</p>
          </div>
        )}
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </label>
      <p className="mt-4 text-center text-lg font-medium text-gray-600">
        Upload a .jpg or .png Cat Image
      </p>
    </div>
  );
};
