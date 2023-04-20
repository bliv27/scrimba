import ReactDOM from "react-dom/client"
import './index.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from "./MainContent";

/**
Challenge: move the Footer and MainContent components
into their own files.
*/

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page/>)
