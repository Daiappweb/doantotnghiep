import React from "react";
import { Button, Grid } from "@material-ui/core";
import {withStyles} from "@material-ui/core";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CarouselCustom from '../../components/Carousel';
import Typo from "../../components/CustomTypo";
import ItemProduct from "../../components/ItemProduct";
import image from "../../../assets/images/giay/dr86den.jpg";
const styles = theme=>({
    container:{
        minHeight:"100vh",
        marginTop:theme.spacing(25),
        padding:theme.spacing(8),
        // position:'fixed',
    },
    text:{
        textAlign:"center",
        padding:"0px 15px 30px"
    }


})
function HomeView(props){
    const {classes,products,apiProducts} = props;
    console.log("products === ",products);
    return(
        <div className={classes.home_page}>
            <Grid item xs={12} container>
                <Header />
            </Grid>
            <Grid item xs={12} md={12} container className={classes.container}>
                <Grid xs={12} item className={classes.carousel}>
                    <CarouselCustom/>
                </Grid>
                <Grid xs={12} item><h1>Welcome Dai</h1></Grid>
                <Grid item xs={12} className={classes.banner}>
                    <Grid item xs={12} md={12} className={classes.text} container direction="column">
                        <Typo variant='best_sale'>Sản phẩm bán chạy nhất</Typo>
                        <Typo variant='banner'>Cập nhật mẫu mã mới nhất theo xu hướng 2020</Typo>
                    </Grid>
                </Grid>
                <Grid item xs={12}  className={classes.products} container direction="row">
                    {products&&products.map((item,index)=>(
                       
                            <ItemProduct key={index} name={item.name} price={item.price} source={item.src} type={item.type}/>
                    
                    ))}
                </Grid>
                <Grid item xs={12}  className={classes.apiProducts} container direction="row">
                    {apiProducts&&apiProducts.map((item,index)=>(
                       
                            <ItemProduct key={index} name={item.pname} price={item.pprice} source={image} type={item.ptype}/>
                    
                    ))}
                </Grid>
            </Grid>
            <Grid >
                <Footer/>
            </Grid>

        </div>
    )
}
export default withStyles(styles)(HomeView);