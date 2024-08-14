
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Siderbar from './components/Siderbar';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const url = "http://localhost:4000";
  return (
    <Router>

      <div className="flex flex-col h-screen">

      <ToastContainer/>
        <Nav />
        <div className="flex flex-1">
          <Siderbar />
          <main className="flex-1 p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/add" element={<Add  url={url}/>} />
              <Route path="/list" element={<List  url={url} />} />
              <Route path="/orders" element={<Orders url={url} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
