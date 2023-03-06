import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { HomeIcon, SuitcaseIcon, TeleivsionIcon, SignOutIcon, BellIcon,BarsIcon } from "./Icons";
import { useNavigate,} from "react-router-dom";
import logo_white from '../../assets/images/logo_white.png';
const styles = theme => ({
    header: {
        minHeight: 80,
        padding:theme.spacing(4),
        backgroundColor: "#000000",
        position:"fixed",
        zIndex:1000,
        
    },
    item_header: {
        color: "#ffffff",
        fontSize: 14,
    },
    header_left:{
        display:'flex',
        justifyContent:"space-around",
    },
    header_right:{
        display:'flex',
        justifyContent:"space-around",
    },
    logo_white:{
        width:98,
        height:38,
    },
    logo:{
        alignItems: "center",
        justifyContent: "center",
    },
    [theme.breakpoints.down('md')]:{
        header_left:{
            display:'none'
        },
        right_icon:{
            display:'none'
        },
        header_right:{
            justifyContent:"flex-end",
        },
        logo:{
            justifyContent:"flex-start",
        }
    },
    [theme.breakpoints.up('lg')]:{
        // header_left:{
        //     display:'none'
        // },
        // right_icon:{
        //     display:'none'
        // },
        // header_right:{
        //     justifyContent:"flex-end",
        // },
        // logo:{
        //     justifyContent:"flex-start",
        // }
        baricon:{
            display:'none'
        }
    }
    
})

function Header(props) {
    const { classes, } = props;
    const navigate = useNavigate();
    const [clicked,setClicked] = useState(false);
    function SignOutClick(props){
        setClicked(!clicked);
        navigate('/');
    }
    function HomeClick(props){
        setClicked(!clicked);
        navigate('/home');
    }
    function OrderClick(props){
        navigate('/order');
    }
    function SubcriptionClick(props){
        navigate('/subcription');
    }
    function NotificationsClick(props){
        setClicked(true);
        navigate('/notification');
    }
    return (
        <Grid className={classes.header} item xs={12} container>
            <Grid  item className={classes.header_left}  md={4} container>
                <IconButton
                    onClick={HomeClick}
                    edge="end"
                    aria-controls="appbar-profile-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <HomeIcon color={clicked ? 'red':'white'}/>
                    <Typography className={classes.item_header}>Home</Typography>
                </IconButton>
                <IconButton
                    onClick={OrderClick}
                    edge="end"
                    aria-controls="appbar-profile-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <SuitcaseIcon />
                    <Typography className={classes.item_header}>Add product</Typography>
                </IconButton>
                
                <IconButton
                    onClick={SubcriptionClick}
                    edge="end"
                    aria-controls="appbar-profile-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <TeleivsionIcon />
                    <Typography className={classes.item_header}>Receipt</Typography>
                </IconButton>
            </Grid>

            <Grid xs={6} sm={6} md={4}  item container className={classes.logo}>
                <img src={logo_white} alt='logo' className={classes.logo_white}/>
            </Grid>
            <Grid item xs={6} sm={6}  className={classes.header_right} md={4} container>
            <IconButton 
                    className={classes.right_icon}
                    onClick={NotificationsClick}
                    edge="end"
                    aria-controls="appbar-profile-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <BellIcon />
                    <Typography className={classes.item_header}>Notifications</Typography>
                </IconButton>
                <IconButton
                    className={classes.right_icon}
                    edge="end"
                    aria-controls="appbar-profile-menu"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={SignOutClick}
                    >
                    <SignOutIcon />
                    <Typography className={classes.item_header}>Log out</Typography>
                </IconButton>

                <IconButton
                    className={classes.baricon}
                    edge="end"
                    aria-controls="appbar-profile-menu"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={props.handleBar}
                    >
                    <BarsIcon />
                    {/* <Typography className={classes.item_header}>Log out</Typography> */}
                </IconButton>

            </Grid>
            
        </Grid>
    );
}
export default withStyles(styles)(Header);