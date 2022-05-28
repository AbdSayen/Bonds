import './App.css';
import './pages/Recommendations'
import Homepage from './pages/HomePage';
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Layout1 from './components/layouts/Layout1';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout1 />}>
            <Route index element={<Homepage />} />
            <Route path="recommendation" element={<Recommendations />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;