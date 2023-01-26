import { Carousel }from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideone from "../Full Page.png"
import slidetwo from "../slider-1.png"
import slidethree from "../tyotpc.png"
import slidefour from "../slide-3.png"
import { Link } from "react-router-dom"

const SlideShow = () => {
  return (
    <div></div>
    /*<div className="slide-show">
      <Carousel
      stopOnHover={true}
       showThumbs={false}
       showArrows={true}
       showIndicators={true}
       autoPlay={true}
       width=""
       infiniteLoop={true}
       showStatus={false}
       interval="15000"
      >
        <div>
          <img className="carousel--image" src={slideone}/>
        </div>
        <div>
          <h1 className="carousel--title">7 Faits exaltants de la vie en Christ <Link to="/message/7-faits-exaltants-de-la-vie-en-christ" className="carousel--link">Voir le Message</Link>
          </h1>
          <img className="carousel--image" src={slidetwo}/>
        </div>
        <div>
          <h1 className="carousel--title">2023 L'année de l'église prolifique <Link to="/message/2023-lannee-de-leglise-prolifique" className="carousel--link">Voir le Message</Link></h1>
          <img className="carousel--image" src={slidethree}/>
        </div>
        <div>
          <h1 className="carousel--title">Le quatrième homme <Link to="/message/le-quatrieme-homme" className="carousel--link">Voir le Message</Link></h1>
          <img className="carousel--image" src={slidefour}/>
        </div>
      </Carousel>
    </div>*/
  );
}

export default SlideShow