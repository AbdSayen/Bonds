import logo from './logo.svg';
import './App.css';
import Recommendations from './pages/Recommendations';
import Homepage from './pages/HomePage';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
      {/* <Recommendations /> */}
    </div>
  );
}

export default App;
