import { useEffect, useState } from "react";
import { useContext } from "react";
import { InventoryContext } from "../../context/InventoryContextProvider";
import CarouselDisplay from "./CarouselDisplay";
import Button from "../Button/Button";
import classes from "./Carousel.module.scss";

const Carousel = () => {
  const {fetchStatus, data} = useContext(InventoryContext);
  const [season, setSeason] = useState(null);
  const date = new Date();
  const month = date.getMonth();

  const [currentIndex, setCurrentIndex] = useState(0);

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
  const back = () => {
    console.log('back');
    if (currentIndex <= 0) {
      return;
    }
    setCurrentIndex(() => currentIndex - 1);
  }

  const forward = () => {
    console.log('forward');
    setCurrentIndex(() => currentIndex + 1);
    // need fixing
  }

  return (
      <div className={classes.carousel}>
          <div className={classes.title}>
            <h2>{`Featured product for ${season}`}</h2>
          </div>
          <div className={classes.display}>
            <Button onClick={()=> back()} value='<' />
            {fetchStatus !== 'success' || data === null ? (<h2>Loading</h2>) : data.filter((item)=> item.season === season).slice(currentIndex, currentIndex + 2).map((item) => <CarouselDisplay key={item.id} data={item}/>)}
            <Button onClick={()=> forward()} value='>' />
          </div>
      </div>
  )
}

export default Carousel;
