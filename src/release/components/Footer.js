import React from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { HomeIcon, SuitcaseIcon, TeleivsionIcon, SignOutIcon, BellIcon } from "./Icons";
import g2logo from '../../assets/images/logo_white.png';
import payment from '../../assets/images/payment.png'
import Typo from "./CustomTypo";
const styles = theme => ({
    footer: {
        // minHeight: 80,
        backgroundColor: "#000000",
        padding: theme.spacing(8)
    },
    profile: {
        padding: theme.spacing(8),
    },
    logo: {
        width: 98,
        height: 40,
        paddingBottom: theme.spacing(3),
    },
    contact: {

        paddingBottom: theme.spacing(3),
    },
    copyright: {

    },
    header: {
        color: 'white',
        fontSize: '85%',
        paddingBottom: theme.spacing(3),
    },
    description: {
        padding: theme.spacing(8),
    },
    policy: {
        padding: theme.spacing(8),
    },
    promotion: {
        padding: theme.spacing(8),
    }

})
function Footer(props) {
    const { classes } = props;
    return (
        <Grid className={classes.footer} item xs={12} container>
            <Grid item md={3} xs={12} className={classes.profile}>
                <img src={g2logo} alt='logo' className={classes.logo} />
                <Grid item md={12} className={classes.contact}>
                    <Typo variant='subtitle1' color='onPrimary'>Email: giaynamg2online@gmail.com</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Số điện thoại: 0973093222</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Chi nhánh Hà Nội</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Số 7, Ngõ 58 Vũ Trọng Phụng, Thanh Xuân, Hà Nội</Typo>
                </Grid>
                <Grid item md={12} className={classes.copyright}>
                    <Typo variant='subtitle1' color='onPrimary'>© Copyright 2022 - Design by G2store</Typo>
                </Grid>
                <Grid item md={12} className={classes.icon_contact}>

                </Grid>
            </Grid>
            <Grid item md={3} xs={12} className={classes.description}>
                <Grid item md={12} >
                    <Typo className={classes.header}>GIỚI THIỆU</Typo>
                </Grid>
                <Grid item md={12} className={classes.description_item}>
                    <Typo variant='subtitle1' color='onPrimary'>Giới thiệu Maseille</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Chương trình affiliate</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Blogger thời trang</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Chiết khấu cho sinh viên</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Tuyển dụng nhà thiết kế</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Chính sách đổi trả</Typo>
                </Grid>
            </Grid>
            <Grid item md={3} xs={12} className={classes.policy}>
                <Grid item md={12} >
                    <Typo className={classes.header}>CHÍNH SÁCH CÔNG TY</Typo>
                </Grid>
                <Grid item md={12} className={classes.description_item}>
                    <Typo variant='subtitle1' color='onPrimary'>Liên hệ với chúng tôi</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Phương thức thanh toán</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Trung tâm dùng thử miễn phí</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Hướng dẫn kích thước</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Làm thế nào để theo dõi</Typo>
                    <Typo variant='subtitle1' color='onPrimary'>Hướng dẫn đặt hàng</Typo>
                </Grid>
            </Grid>
            <Grid item md={3} xs={12} className={classes.promotion}>
                <Grid item md={12} >
                    <Typo className={classes.header}>NHẬN KHUYẾN MÃI</Typo>
                </Grid>
                <Grid item md={12} className={classes.description_item}>
                    <Typo variant='subtitle1' color='onPrimary'>Để lại Email của bạn</Typo>
                </Grid>
                <Grid item md={12} >
                    <Typo className={classes.header}>PHƯƠNG THỨC THANH TOÁN</Typo>
                </Grid>
                <Grid item md={12} >
                    <img src={payment} alt='payment'/>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default withStyles(styles)(Footer);