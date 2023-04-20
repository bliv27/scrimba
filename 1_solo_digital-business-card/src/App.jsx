import './App.css'
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Interests from './components/Interests.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className="card" >
      <Header />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
