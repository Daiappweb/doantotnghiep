import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import background from '../../../assets/images/backgroud.jpg';
import logo from '../../../assets/images/logo.png';
import ButtonCustom from "../../components/ButtonCustom";
import { Form } from "react-final-form";
const styles = theme => ({
    page: {
        minHeight: "100vh",
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(' + background + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding:theme.spacing(8)
    },
    landing_page: {
        height: "320px",
        display: 'flex',
        backgroundColor: "#ffffff",
        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center'
    },
    logo: {
        width: 120,
        height: 46,
    },
    layout_logo:{
        display: 'flex',
        justifyContent:'center',

    },
    box:{
        display:'flex',
        padding:theme.spacing(8),
        flexDirection: "column",
    },
    button:{
        marginBottom:theme.spacing(4),
        borderRadius:theme.spacing(8),
    }
})
function RegisterView(props) {
    const { classes, handleRegister } = props;
    return (
        <Grid md={12} item className={classes.page}>
            <Grid md={3} item></Grid>
            <Grid className={classes.landing_page} md={6} item container xs={12} direction="row">
                <Grid item xs={12} className={classes.layout_logo}>
                    <img src={logo} alt='logo' className={classes.logo} />
                </Grid>
                <Grid>
                    {/* <Form
                    /> */}
                </Grid>
                <Grid item xs={12} md={8} className={classes.box}>
                    <ButtonCustom fullWidth className={classes.button} color='primary' onClick={handleRegister}>Register</ButtonCustom>
                </Grid>
            </Grid>
            <Grid md={3} item></Grid>
        </Grid>

    )
}
export default withStyles(styles)(RegisterView);