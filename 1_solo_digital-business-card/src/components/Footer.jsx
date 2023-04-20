import icon_tw from './../assets/twitter.png';
import icon_fb from './../assets/facebook.png';
import icon_ig from './../assets/instagram.png';
import icon_gh from './../assets/github.png';

export default function About() {
  return(
    <footer className="footer">
      <a className='link'><img src={icon_tw}/></a>
      <a className='link'><img src={icon_fb}/></a>
      <a className='link'><img src={icon_ig}/></a>
      <a className='link'><img src={icon_gh}/></a>
    </footer>
  )
}