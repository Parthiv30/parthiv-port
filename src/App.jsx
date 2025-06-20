import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from "./portfolio"
import ProjectShowcase from './project-showcase'

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import AllCertifications from './all-certifications'

export default function Page() {
  return (
    <Router>
  <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/ProjectShowcase/:projectId" element={<ProjectShowcase />} />
      <Route path="/AllCertifications" element={<AllCertifications />} />
  </Routes>
  </Router>
  );
}
