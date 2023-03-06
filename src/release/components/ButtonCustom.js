import React, { Component } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typography from './CustomTypo';
import {commonFont} from '../theme'

const styles = theme => ({
    button: {
        // margin: theme.spacing(),
        padding: theme.spacing(3, 3, 3, 3),
        border: '1px solid',
        cursor: "pointer",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        borderRadius: 0,
        height: 48,
        ...theme.typography.buttonCustom
    },
    round: {
        borderRadius: theme.shape.borderRadius6x
    },
    rectangle: {
        borderRadius: theme.shape.borderRadius2x,
    },
    primary: {
        ...theme.palette.button.primary,
        '&:active': {
            ...theme.palette.button.primary,
        },
        '&:hover': {
            ...theme.palette.button.primary,
        },
        '&:focus': {
            ...theme.palette.button.primary,
        }
    },
    secondary: {
        ...theme.palette.button.secondary,
        '&:active': {
        },
        '&:hover': {
            ...theme.palette.button.secondary,
        },
        '&:focus': {
            ...theme.palette.button.secondary,
        }
    },
    info: {
        ...theme.palette.button.info,
        '&:active': {
        },
        '&:hover': {
            ...theme.palette.button.info,
            opacity: 0.6,
        },
        '&:focus': {
            ...theme.palette.button.info,
        }
    },
    light: {
        ...theme.palette.button.light,
        '&:active': {
        },
        '&:hover': {
            ...theme.palette.button.light,
        },
        '&:focus': {
            ...theme.palette.button.light,
        }
    },
    dark: {
        ...theme.palette.button.dark,
        '&:active': {
            ...theme.palette.button.dark,
        },
        '&:hover': {
            ...theme.palette.button.dark,
        },
        '&:focus': {
            ...theme.palette.button.dark,
        }
    },
    success: {
        ...theme.palette.button.success,
        '&:active': {
        },
        '&:hover': {
            ...theme.palette.button.success,
        },
        '&:focus': {
            ...theme.palette.button.success,
        }
    },
    danger: {
        ...theme.palette.button.danger,
        '&:active': {
        },
        '&:hover': {
            ...theme.palette.button.danger,
        },
        '&:focus': {
            ...theme.palette.button.danger,
        }
    },
    green: {
        ...theme.palette.button.green,
        '&:active': {
        },
        '&:hover': {
            ...theme.palette.button.green,
        },
        '&:focus': {
            ...theme.palette.button.green,
        }
    },
    warning: {
        ...theme.palette.button.warning,
        '&:active': {
        },
        '&:hover': {
            ...theme.palette.button.warning,
        },
        '&:focus': {
            ...theme.palette.button.warning,
        }
    },
    onPrimary: {
        ...theme.palette.button.light,
        '&:active': {
        },
        '&:hover': {
            ...theme.palette.button.light,
        },
        '&:focus': {
            ...theme.palette.button.light,
        }
    },
    category:{
        ...theme.palette.button.category,
        '&:active': {
        },
        '&:hover': {
            ...theme.palette.button.light,
        },
        '&:focus': {
            ...theme.palette.button.light,
        }
    },
    transparent: {
        backgroundColor: 'transparent',
        color: theme.palette.text.onPrimary,
        '&:active': {
        },
        '&:hover': {
        },
        '&:focus': {
        }
    },
    link: {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        '&:active': {
        },
        '&:hover': {
        },
        '&:focus': {
        }
    },
    borderGray: {
        borderColor: theme.palette.text.secondary,
        color: theme.palette.button.tertiary,
        backgroundColor: theme.palette.background.transparent,
        boxShadow: 'none',
        border: '2px solid',
        borderRadius: theme.spacing(1),
        '&:hover': {
        },
    },
    disabled: {
        ...theme.palette.button.disabled,
        '&:active': {
            ...theme.palette.button.disabled,
        },
        '&:hover': {
            ...theme.palette.button.disabled,
        },
        '&:focus': {
            ...theme.palette.button.disabled,
        }
    },
    fullWidth: {
        width: "100%"
    },
    lg: {
        padding: theme.spacing(2, 3),
        fontSize: '20px'
    },
    sm: {
        padding: theme.spacing(1, 2),
        fontFamily: commonFont.regular,
        fontSize:'14px',
        height: 'auto',
    },
    xs: {
        padding: theme.spacing(0, 2, 0, 2),
        fontSize: "14px",
        height: 'auto',
    },
});
class ButtonCustom extends Component {
    render() {
        var {
            classes,
            color,
            round,
            rectangle,
            children,
            fullWidth,
            disabled,
            simple,
            size,
            block,
            link,
            justIcon,
            className,
            disableTextTransform,
            ...rest
        } = this.props;
        if (round === undefined)
            round = false;
        const btnClasses = classNames({
            [classes.button]: true,
            [classes[size]]: size,
            [classes[color]]: color,
            [classes.round]: round,
            [classes.rectangle]: rectangle,
            [classes.fullWidth]: fullWidth,
            [classes.disabled]: disabled,
            [classes.simple]: simple,
            [classes.block]: block,
            [classes.link]: link,
            [classes.justIcon]: justIcon,
            [className]: className
        });
        return (
            <Button {...rest} disabled={disabled} className={btnClasses} onClick={this.props.onClick} >
                <Typography variant="button" disableTextTransform={disableTextTransform}>
                    {children}
                </Typography>
            </Button>
        )
    }
}
ButtonCustom.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "onPrimary",
        "facebook",
        "google",
        "transparent",
        "borderGray",
        "dark",
        "green",
        "link"
    ]),
}

export default withStyles(styles)(ButtonCustom);