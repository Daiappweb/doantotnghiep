import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import boots_986 from '../../assets/images/giay/986boots.jpg';
import CustomTypo from "./CustomTypo";
const styles = theme => ({
    image: {
        width: "100%",
        height: 'auto',
    },
    item: {
       
        boxSizing:'boder-box',
        padding:theme.spacing(0,2,5),
    },
    text:{
        textAlign:'center',
        paddingTop:theme.spacing(4),
    },
    type_shoes:{
        opacity:1,
        color:theme.palette.text.type_shoes,
        textTransform:'initial',
        margin:theme.spacing(0,0,1)
    },
    name_shoes:{
        margin:0,
        fontSize:theme.typography.subtitle1,
    },
    price_shoes:{
        fontSize:theme.typography.subtitle1,
        fontWeight:300,
        color:theme.palette.text.price,
        marginBottom:theme.spacing(2.5)
    },
    next:{
        textTransform:'initial',
    }
})
function ItemProduct(props) {
    const { classes,source,type,name,price,next } = props;
    return (
        <Grid item xs={4} md={3} sm={4} container className={classes.item}>
            <img className={classes.image} src={source?source:boots_986} alt='boots986' />
            <Grid item className={classes.text} xs={12}>
                <CustomTypo className={classes.type_shoes}>{type?type:"Giày boots"}</CustomTypo>
                <CustomTypo className={classes.name_shoes}>{name?name:"986 Boots"}</CustomTypo>
                <CustomTypo className={classes.price_shoes}>{price?price:"1.000.000 đ"}</CustomTypo>
                <CustomTypo className={classes.next}>{next?next:"Đọc tiếp"}</CustomTypo> 
            </Grid>

        </Grid>
    )
}
export default withStyles(styles)(ItemProduct);