import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header'
import Interests from './components/Interests';

export default function App() {
  return (
    <div className="big-container">
    <div className="container">
    <Header />
      <div className="main-content">
      <About />
      <Interests />
      </div>
      <Footer />
    </div>
    </div>
  )
}

