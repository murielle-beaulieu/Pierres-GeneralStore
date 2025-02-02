import classes from "./Carousel.module.scss"


const CarouselDisplay = ({data}) => {

  return(
    <div className={classes.display}>
      <img src={data.pack_image}></img>
      <h2>{data.name}</h2>
    </div>
  )
}

export default CarouselDisplay;
