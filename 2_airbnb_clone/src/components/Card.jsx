import katie from "./../assets/katie-Zaferes.png";
import star from "./../assets/star.png";

export default function Card() {
  return(
    <div className="card">
      <div className="card__status">sold out</div>
      <img className="card__photo" src={katie} />
      <p className="card__stats">
        <img className="card__star" src={star} />
        <span>5.0</span>
        <span className="grey">(6) &#x2022; </span>
        <span className="grey">USA</span>
      </p>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  )
}