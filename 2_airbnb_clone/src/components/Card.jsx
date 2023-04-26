import star from "./../assets/star.png";

export default function Card(props) {

  let badeText
  if (props.item.openSpots === 0){
    badeText = "sold out"
  } else if (props.item.location === "Online") {
    badeText = "online"
  }

  return(
    <div className="card">
      {badeText && <div className="card__status">{badeText}</div>}
      <img 
        className="card__photo" 
        src={new URL("./../assets/"+props.item.coverImg, import.meta.url).href } 
      />
      <p className="card__stats">
        <img className="card__star" src={star} />
        <span>{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount}) &#x2022; </span>
        <span className="grey">{props.item.location}</span>
      </p>
      <p className="card__title">{props.item.title}</p>
      <p className="card__price"><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
  )
}