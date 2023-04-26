import star from "./../assets/star.png";

export default function Card(props) {
  return(
    <div className="card">
      <div className="card__status">sold out</div>
      <img 
        className="card__photo" 
        src={new URL("./../assets/"+props.img, import.meta.url).href } 
      />
      <p className="card__stats">
        <img className="card__star" src={star} />
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) &#x2022; </span>
        <span className="grey">{props.country}</span>
      </p>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}