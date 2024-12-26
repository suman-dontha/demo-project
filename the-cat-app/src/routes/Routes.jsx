import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Homepage} from '../pages/Homepage/Homepage';
import Upload from '../pages/Upload/Upload';


export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  )
}

