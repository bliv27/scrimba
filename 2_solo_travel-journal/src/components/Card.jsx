import LocationIcon from './../assets/location-icon.png';

export default function Card (props) {
  return (
    <section className="card">
      <div className='card__photo-wrapper'>
        <img className="card__photo" src={props.imageUrl} />
      </div>
      <div >
        <div>
          <img className='card__icon' src={LocationIcon} />
          <span className='card__country'>{props.location}</span>
          <a 
            className="grey"
            href={props.googleMapsUrl} 
            target="_blank" 
            rel="nofollow">View on Google Maps
          </a>
        </div>
        <h1 className='card__title'>{props.title}</h1>
        <div className='card__dates'>
          {props.startDate} - {props.endDate}
        </div>
        <p className='card__description'>{props.description}</p>
      </div>
    </section>
  )
}