import classes from "./Carousel.module.scss"


const CarouselDisplay = ({data}) => {

  return(
    <div className={classes.carousel_card}>
      <img src={data.pack_image}></img>
      <h4>{data.name}</h4>
    </div>
  )
}

export default CarouselDisplay;
