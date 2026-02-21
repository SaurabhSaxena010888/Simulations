import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Module1 from './components/Module1';
import Module2 from './components/Module2';
import Module3 from './components/Module3';
import Module4 from './components/Module4';
import Module5 from './components/Module5';
import Module6 from './components/Module6';
import Module7 from './components/Module7';
import Module8 from './components/Module8';
import Module9 from './components/Module9';
import Module10 from './components/Module10';
import Module11 from './components/Module11';
function App() { return (
    <div>
      <nav className="nav">
        <Link to="/">Home</Link>
        {[...Array(11).keys()].map(i => (
          <Link key={i} to={`/module${i+1}`}>Module {i+1}</Link>
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module1" element={<Module1 />} />
        <Route path="/module2" element={<Module2 />} />
        <Route path="/module3" element={<Module3 />} />
        <Route path="/module4" element={<Module4 />} />
        <Route path="/module5" element={<Module5 />} />
        <Route path="/module6" element={<Module6 />} />
        <Route path="/module7" element={<Module7 />} />
        <Route path="/module8" element={<Module8 />} />
        <Route path="/module9" element={<Module9 />} />
        <Route path="/module10" element={<Module10 />} />
        <Route path="/module11" element={<Module11 />} />
      </Routes>
    </div>
  );}
function Home() { return (<div style={{ padding: '1em' }}><h1>Welcome to the AI Simulation Platform</h1><p>Select a module from the navigation bar to begin.</p></div>);}
export default App;
