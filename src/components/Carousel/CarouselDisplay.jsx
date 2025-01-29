
const CarouselDisplay = ({data}) => {

  return(
    <div>
      <img src={data.image}></img>
      <h2>{data.name}</h2>
    </div>
  )
}

export default CarouselDisplay;
