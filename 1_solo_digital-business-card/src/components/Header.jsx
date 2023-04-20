import headShot from './../assets/Rectangle90.png';
import icon_mail from './../assets/Mail.png';
import icon_li from './../assets/linkedin.png';

export default function Header() {
  return(
    <header className="header">
      <img src={headShot} className="header__headshot" />
      <h1 className="header__name" >Laura Smith</h1>
      <h3 className="header__role" >Frontend Developer</h3>
      <p className="header__website" >laurasmith.website</p>
      <div className="header__button-container">
        <a className='button button--white'>
          <img src={icon_mail} />Email
        </a>
        <a className='button button--blue'>
          <img src={icon_li} />LinkedIn
        </a>
      </div>
    </header>
  )
}