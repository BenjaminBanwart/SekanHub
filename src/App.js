import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Background from './components/Background';
import Topbar from './components/Topbar';
import Applications from './components/Applications'

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar/>
        <Routes>
          <Route path='/' element={<Background/>} />
          <Route path='/applications' element={<Applications/>} />
          {/* <Route path='/help' element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
