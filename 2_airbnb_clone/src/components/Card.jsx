import star from "./../assets/star.png";

export default function Card(props) {
  let badeText
  if (props.openSpots === 0){
    badeText = "sold out"
  } else if (props.location === "Online") {
    badeText = "online"
  }

  return(
    <div className="card">
      {badeText && <div className="card__status">{badeText}</div>}
      <img 
        className="card__photo" 
        src={new URL("./../assets/"+props.img, import.meta.url).href } 
      />
      <p className="card__stats">
        <img className="card__star" src={star} />
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) &#x2022; </span>
        <span className="grey">{props.location}</span>
      </p>
      <p className="card__title">{props.title}</p>
      <p className="card__price"><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}