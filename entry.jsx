export default function Entry(props) {
    return (

        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt}
                />

            </div>

            <div className="info-container">
                <img src="images/location-symbol.png" alt="location-symbol" className="marker"
                
                />
                <span className="country" >{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>

                <h2 className="entry-title">{props.title}</h2>
                <h3 className="trip-dates">{props.dates}</h3>
                <p className="entry-text">{props.text}</p>
            </div>




        </article>



    )
}