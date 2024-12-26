import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import {UploadFile} from '../../components/UploadFile/UploadFile'

const Upload = () => {
  return (
    <>
      <NavBar />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <UploadFile />
        </div>
      </main>
    </>
  )
}

export default Upload