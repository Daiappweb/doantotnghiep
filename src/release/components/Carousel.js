import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Carousel from 'react-elastic-carousel';
import cr1 from '../../assets/images/giay/cr1.jpg';
import cr2 from '../../assets/images/giay/cr2.jpg';
import cr3 from '../../assets/images/giay/cr3.jpg';
import cr4 from '../../assets/images/giay/cr4.jpg';
import cr5 from '../../assets/images/giay/cr5.jpg';
const styles = theme => ({
    carousel: {
        
    },
    image: {
        width: "100%",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
})
const image = [cr1,cr2,cr3,cr4,cr5]
function CarouselCustom(props) {
    const { classes } = props;
    return (
        <div>
            <Grid item xs={12} md={12} >
                <Carousel  className={classes.carousel} autoPlaySpeed={3000} enableAutoPlay={true}> 
                    {/* <img src={cr1} alt='cr1' className={classes.image} />
                    <img src={cr2} alt='cr1' className={classes.image} />
                    <img src={cr3} alt='cr1' className={classes.image} />
                    <img src={cr4} alt='cr1' className={classes.image} />
                    <img src={cr5} alt='cr1' className={classes.image} /> */}
                    {image&&image.map((item,index)=>(
                        <img src={item} alt='cr1' className={classes.image} key={index} />
                    ))}

                </Carousel>

            </Grid>
        </div>
    )
}
export default withStyles(styles)(CarouselCustom);
