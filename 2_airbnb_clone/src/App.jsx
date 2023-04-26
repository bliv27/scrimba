
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import data from './data';
import './App.css';

function App() {

  const cards = data.map(card => {
    return (
      <Card 
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price} 
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  )
}

export default App
