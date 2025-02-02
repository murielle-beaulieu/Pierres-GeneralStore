import { useEffect, useState } from "react";
import classes from "./Carousel.module.scss";
import { useContext } from "react";
import { InventoryContext } from "../../context/InventoryContextProvider";
import CarouselDisplay from "./CarouselDisplay";
import Button from "../Button/Button";

const Carousel = () => {
  const {fetchStatus, data} = useContext(InventoryContext);

  const [season, setSeason] = useState(null);
  const date = new Date();
  const month = date.getMonth();
  // const month = 9;

  useEffect(() => {
    if (month == 11 || month == 0 || month == 1) {
      setSeason('summer');
    } else if (month == 2 || month == 3 || month == 4) {
      setSeason('autumn');
    } else if (month == 5 || month == 6 || month == 7) {
      setSeason('winter');
    } else {
      setSeason('spring');
    }
  }, [])


  return (
      <div className={classes.carousel}>
        {/* <Button onClick={()=> back()} value='<' /> */}
          <div>
            <h2>{`Featured product for ${season}`}</h2>
          </div>
          {fetchStatus !== 'success' || data === null ? (<h2>Loading</h2>) : data.filter((item)=> item.season === season).map((item) => <CarouselDisplay key={item.id} data={item}/>)}
        {/* <Button onClick={()=> console.log('forward')} value='>' /> */}
      </div>
  )
}

export default Carousel;
