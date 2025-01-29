import { useEffect, useState } from "react";
import classes from "./Carousel.module.scss";
import { useContext } from "react";
import { InventoryContext } from "../../context/InventoryContextProvider";
import CarouselDisplay from "./CarouselDisplay";

const Carousel = () => {
  const {fetchStatus, data} = useContext(InventoryContext);

  const [season, setSeason] = useState(null);
  const date = new Date();
  const month = date.getMonth();

  // const filtered = data.filter((item)=> item.season != 'spring');

  useEffect(() => {
    if (month == 11 || month == 0 || month == 1) {
      setSeason('Summer');
    } else if (month == 2 || month == 3 || month == 4) {
      setSeason('Autumn');
    } else if (month == 5 || month == 6 || month == 7) {
      setSeason('Winter');
    } else {
      setSeason('Spring');
    }
  }, [])

  return (
    <div className={classes.carousel}>
      <h2>{`Featured product for ${season}`}</h2>
      {fetchStatus ==='weeeehoo' && console.log(data.filter((item)=> item.season != 'spring'))}

    </div>
  )
}

export default Carousel;

//  && data.map((item) => <Card key={item.id} data={item}/>)}
