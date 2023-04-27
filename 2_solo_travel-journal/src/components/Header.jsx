import worldIcon from './../assets/world-icon.png';

export default function Header () {
  return (
    <nav className="header">
      <img src={worldIcon} />
      <span>my travel journal.</span>
    </nav>
  )
}