/* eslint-disable import/no-anonymous-default-export */
import { createTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

export const commonColor = {
    color_1: '#68778C',
    color_2: '#C0040A',
    color_3: '#FFFFFF',
    color_4: '#272727',
    color_5: '#0000001F',
    color_6: '#696969',
    color_7: '#717171',
    color_8: '#172B4D',
    color_9: '#8B1D31',
    color_10: '#EFFFF0',
    color_11: '#6FDF4D',
    color_12: '#0170171F',
    color_13: '#DEEBFF',
    color_14: '#FFF3E0',
    color_15: '#D35800',
    color_16: '#CB7C001F',
    color_17: '#FF5252',
    color_18: '#F0F0F0',
    color_19: 'rgba(255,255,255,0.04)',
    color_20:'#000000',
    color_21: '#0F61A4',
    color_22: '#232323',
    color_23: '#201A19',//border line
    color_24: '#2C1512', //menu tab text,
    color_25:'rgba(17,17,17,0.85)',
    color_26:'#888',//type shoes
    color_27:'#c62828'//price

}

export const commonFont = {
    regular: '"Montserrat-Regular"',
    medium: '"Montserrat-Medium"',
    black: '"Montserrat-Black"',
    bold: '"Montserrat-Bold"',
    light: '"Montserrat-Light"',
    nablaRegular: '"Nabla-Regular"',
    avenirNextLTProRegular: '"AvenirNextLTPro-Regular"',
    avenirNextLTProBold: '"AvenirNextLTPro-Bold"',
}
const breakpoints = createBreakpoints({});

export const customTheme=createTheme({ 
    breakpoints,
    container: {
        width: 'calc(100% - 100px)',
        marginLeft: '50px',
        marginRight: '50px',
    },
    content: {
        height: 'auto',
        overflow: 'scroll',
        paddingBottom: '100px',
    },
    palette: {
        primary: {
            main: commonColor.color_2,
            contrastText: commonColor.color_3,
        },
        secondary: {
            main: commonColor.color_1,
            contrastText: commonColor.color_3,
        },
        button: {
            primary: {
                backgroundColor: commonColor.color_2,
                color: commonColor.color_3,
                borderColor: commonColor.color_2,
            },
            secondary: {
                color: commonColor.color_2,
                borderColor: commonColor.color_2,
            },
            success: {
                backgroundColor: commonColor.color_10,
                color: commonColor.color_11,
                borderColor: commonColor.color_12,
            },
            green: {
                backgroundColor: commonColor.color_11,
                color: commonColor.color_3,
                borderColor: commonColor.color_11,
            },
            warining: {
                backgroundColor: commonColor.color_14,
                color: commonColor.color_15,
                borderColor: commonColor.color_16,
            },
            light: {
                backgroundColor: commonColor.color_3,
                color: commonColor.color_1,
                borderColor: commonColor.color_3,
            },
            dark: {
                backgroundColor: commonColor.color_2,
                color: commonColor.color_3,
                borderColor: commonColor.color_2,
            },
            info: {
                backgroundColor: commonColor.color_18,
                color: commonColor.color_6,
                borderColor: commonColor.color_18,
            },
            danger: {
                backgroundColor: commonColor.color_9,
                color: commonColor.color_3,// color text for CANCELLED Transaction
                borderColor: commonColor.color_16,
            },
            category: {
                backgroundColor: commonColor.color_7,
                color: commonColor.color_1,
                borderColor: commonColor.color_7,
            },
            disabled: {
                backgroundColor: commonColor.color_13,
                color:commonColor.color_6,
                borderColor: commonColor.color_13
            }
        },
        progress: {
            filledColor: commonColor.color_7,
            backgroundColor: commonColor.color_3,
            label: commonColor.color_7,
        },
        text: {
            primary: commonColor.color_1,
            secondary: commonColor.color_2,
            tertiary: commonColor.color_7,
            default: commonColor.color_8,
            description: commonColor.color_6,
            disabled: commonColor.color_4,
            onPrimary: commonColor.color_3,
            tabSelected: commonColor.color_7,
            tab: commonColor.color_13,
            onBox: commonColor.color_1,
            link: commonColor.color_21,
            tabNormal: commonColor.color_24,
            type_shoes:commonColor.color_26,
            price:commonColor.color_27
        },
        input: {
            primary: commonColor.color_4,
            secondary: commonColor.color_8,
            placeholder: commonColor.color_5,
            label: commonColor.color_6,
        },
        border: {
            primary: commonColor.color_13,
            secondary: commonColor.color_13,
            light: commonColor.color_3,
            dark: commonColor.color_1,
            transparent: 'transparent',
            line: commonColor.color_23,
        },
        background: {
            primary: commonColor.color_4,
            secondary: commonColor.color_3,
            tertiary: commonColor.color_1,
            card: commonColor.color_19,
            icon: commonColor.color_9,
            location: commonColor.color_9,
            box:commonColor.color_3,
            first_page:commonColor.color_3,
            switch: commonColor.color_1,
            main: commonColor.color_1,
            // header: commonColor.color_4,
            drawer: commonColor.color_4,
            other: commonColor.color_7,
            onCard: commonColor.color_13,
            shortcut: commonColor.color_22,
            header:commonColor.color_20,
        },
        icon: {
            primary: commonColor.primary,
            secondary: commonColor.dark,
            onPrimary: commonColor.light,
            default: commonColor.color_6,
            error: commonColor.error,
            trash: commonColor.color_17,
            acitve:commonColor.color_3,
            deactive:commonColor.color_13,
            acitve2:commonColor.color_7,
            black: commonColor.color_21,
        }
    },
    shape: {
        borderRadius: 5,
        borderRadius1x: 8,
        borderRadius2x: 10,
        borderRadius3x: 15,
        borderRadius4x: 20,
        borderRadius5x: 25,
        borderRadius6x: 30,
    },
    spacing: 4,
    typography: {
        h1: {
            fontFamily: commonFont.bold,
            fontSize: "40px",
            letterSpacing: "0.00938em",
            lineHeight: 1.167,
            [breakpoints.down('xs')]: {
                fontSize: "36px",
            },
        },
        h2: {
            fontFamily: commonFont.bold,
            fontSize: "34px",
            letterSpacing: "0.00938em",
            lineHeight: 1.2,
            [breakpoints.down('xs')]: {
                fontSize: "28px",
            },
        },
        h3: {
            fontFamily: commonFont.bold,
            fontSize: "32px",
            letterSpacing: "0em",
            lineHeight: 1.167,
            [breakpoints.down('xs')]: {
                fontSize: "28px",
            },
        },
        h4: {
            fontFamily: commonFont.medium,
            fontSize: "32px",
            lineHeight: 1.235,
            letterSpacing: "0.00735em",
            [breakpoints.down('xs')]: {
                fontSize: "28px",
            },
        },
        h5: {
            fontFamily: commonFont.medium,
            fontSize: "24px",
            lineHeight: 1.334,
            letterSpacing: "0em",
            [breakpoints.down('xs')]: {
                fontSize: "22px",
            },

        },
        h6: {
            fontFamily: commonFont.medium,
            fontSize: "20px",
            lineHeight: 1.6,
            letterSpacing: "0.0075em",
            [breakpoints.down('xs')]: {
                fontSize: "18px",
            },
        },
        subtitle1: {
            fontFamily: commonFont.medium,
            fontSize: "16px",
            lineHeight: 2,
            letterSpacing: "0.00938em",
            [breakpoints.down('xs')]: {
                fontSize: "14px",
            },
        },
        subtitle2: {
            fontFamily: commonFont.bold,
            fontSize: "16px",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
            [breakpoints.down('xs')]: {
                fontSize: "14px",
            },
        },
        body1: {
            fontFamily: commonFont.regular,
            fontSize: "16px",
            lineHeight: 1.5,
            letterSpacing: "0.00938em",
            [breakpoints.down('xs')]: {
                fontSize: "14px",
            },
        },
        body2: {
            fontFamily: commonFont.regular,
            fontSize: "15px",
            lineHeight: 1.43,
            letterSpacing: "0.01071em",
            [breakpoints.down('xs')]: {
                fontSize: "13px",
            },
        },
        button: {
            fontFamily: commonFont.medium,
            lineHeight: 1.75,
            textTransform: "capitalize",
        },
        caption1: {
            fontFamily: commonFont.bold,
            fontSize: "24px",
            lineHeight: 1.75,
            letterSpacing: "0.01071em",
            [breakpoints.down('xs')]: {
                fontSize: "22px",
            },
        },
        input_label: {
            fontFamily: commonFont.regular,
            fontSize: "15px",
            lineHeight: 1.43,
            letterSpacing: "0.01071em",
            [breakpoints.down('xs')]: {
                fontSize: "13px",
            },
        },
        input: {
            fontFamily: commonFont.regular,
            fontSize: "17px",
            [breakpoints.down('xs')]: {
                fontSize: "15px",
            },
        },
        description: {
            fontFamily: commonFont.regular,
            fontSize: "21px",
            [breakpoints.down('xs')]: {
                fontSize: "12px",
            },
        },
        text_label: {
            fontFamily: commonFont.regular,
            fontSize: "21px",
            [breakpoints.down('xs')]: {
                fontSize: "14px",
            },
        },
        text_small: {
            fontFamily: commonFont.regular,
            fontSize: "21px",
            [breakpoints.down('xs')]: {
                fontSize: "11px",
            },
        },
        best_sale: {
            fontFamily: commonFont.bold,
            fontSize: "150%",
            textTransform:'uppercase',
            [breakpoints.down('xs')]: {
                fontSize: "20px",
            },
        }
    },
    overrides: {
        Mui : {
            focused: {
                '&:after': {
                    // borderBottomColor: commonColor.turquoise
                    transform: "scaleX(0)"

                },
              
            }
        },
       
        MuiInput: {
            root: {
                fontFamily: commonFont.medium,
                fontSize: "17px",
                lineHeight: "1.46429em",
            },
            underline: {
                '&:before': {
                    // borderBottomColor: commonColor.turquoise
                    borderBottom: "none"
                },
                '&:hover:not($disabled):not($focused):not($error):before': {
                    borderBottom: "none"
                    // borderBottomColor: commonColor.turquoise
                },
               
               

            },
           
        },
        MuiTab: {
            wrapper: {
                flexDirection: 'row',
                alignItems: 'center'
            },
        },
    },
    icons: {
        xlarge: {
            width: '48px',
            height: '48px'
        },
        large: {
            width: '36px',
            height: '36px'
        },
        normal: {
            width: '18px',
            height: '18px'
        },
        small: {
            width: '12px',
            height: '12px'
        },
        medium: {
            width: '24px',
            height: '24px'
        }
    },
})