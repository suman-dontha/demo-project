import React from 'react'

export const UploadHeader = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upload GuideLines</h2>
          <p className="mt-4 text-gray-500">
          Any uploads must comply with the{' '}
          <a href="https://thecatapi.com/privacy" className='text-indigo-600'> upload guidelines</a> or face deletion.
          </p>
      </div>
    </div>
  )
}
