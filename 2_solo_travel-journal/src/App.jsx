
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Data from './data';
import './App.css'

function App() {

  const cards = Data.map(item => <Card key={item.id} {...item} />)

  return (
    <div>
      <Header />
      {cards} 
    </div>
  )
}

export default App
