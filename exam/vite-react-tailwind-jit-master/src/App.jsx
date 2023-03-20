import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Activity from './pages/Activity';
import Login from './pages/Login';
import ActivityDetails from './pages/ActivityDetails';
import Search from './pages/Search';
import Schedule from './pages/Schedule';
import ScheduleDetails from './pages/ScheduleDetails';




function App() {
  return (
      
      <Router>
      <div className="pt-5 bg-primary">
          
        <Navbar />
        <Routes>

          <Route path="/" element={<Welcome />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Activity" element={<Activity />} />
          <Route path="/ActivityDetails/:id" element={<ActivityDetails/>} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/ScheduleDetails" element={<ScheduleDetails />} />

          

        </Routes>
      </div>
      </Router>
  )
}

export default App
