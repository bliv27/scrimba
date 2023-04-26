import logo from './../assets/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img className='navbar__logo' src={logo} />
        </nav>
    )
}