import React, { Component } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
	banner:{
		...theme.typography.h6,
	},
	best_sale:{
		...theme.typography.best_sale,
	},
	primary: {
		color: theme.palette.text.primary
	},
	secondary: {
		color: theme.palette.text.secondary
	},
	tertiary: {
		color: theme.palette.text.tertiary
	},
	onPrimary: {
		color: theme.palette.text.onPrimary
	},
	error:{
		color: theme.palette.error.main
	},
	label:{
		color: theme.palette.input.label
	},
	default:{
		color: theme.palette.text.default
	},
	progress:{
		color: theme.palette.progress.label
	},
	success:{
		color: theme.palette.button.success.color
	},
	danger:{
		color: theme.palette.button.warining.color
	},
	onBox:{
		color: theme.palette.text.onBox
	},
	centerClass: {
		textAlign: 'center'
	},
	input_label:{
		...theme.typography.input_label
	},
	description:{
		...theme.typography.description
	},
	thirdCTA:{
		...theme.typography.body1
	},
	disableTextTransform:{
		textTransform: 'none'
	},
	action:{
		...theme.typography.button,
		fontSize:20,
		cursor:'pointer'
	},
	caption1:{
		...theme.typography.caption1
	},
	mg_top_sm :{
		marginTop: theme.spacing(2)
	},
	mg_top_xs :{
		marginTop: theme.spacing(1)
	},
	mg_top_md :{
		marginTop: theme.spacing(3)
	},
	mg_top_lg :{
		marginTop: theme.spacing(4)
	},
	mg_top_xl :{
		marginTop: theme.spacing(5)
	},
	mg_bottom_sm :{
		marginBottom: theme.spacing(2)
	},
	mg_bottom_xs :{
		marginBottom: theme.spacing(1)
	},
	mg_bottom_md :{
		marginBottom: theme.spacing(3)
	},
	mg_bottom_lg :{
		marginBottom: theme.spacing(4)
	},
	mg_bottom_xl :{
		marginBottom: theme.spacing(5)
	},
	mg_left_sm :{
		marginLeft: theme.spacing(2)
	},
	mg_left_xs :{
		marginLeft: theme.spacing(1)
	},
	//
	mg_left_md :{
		marginLeft: theme.spacing(4)
	},
	mg_left_lg :{
		marginLeft: theme.spacing(4)
	},
	mg_left_xl :{
		marginLeft: theme.spacing(5)
	},
	mg_right_sm :{
		marginRight: theme.spacing(2)
	},
	mg_right_xs :{
		marginRight: theme.spacing(1)
	},
	mg_right_md :{
		marginRight: theme.spacing(3)
	},
	mg_right_lg :{
		marginRight: theme.spacing(4)
	},
	mg_right_xl :{
		marginRight: theme.spacing(5)
	},
	link: {
		color: theme.palette.text.link,
	},
	text_small: {
		...theme.typography.text_small,
	},
	text_label: {
		...theme.typography.text_label,
	},
	subtitle1:{
		...theme.typography.subtitle1,
		color:theme.palette.text.onPrimary,
	}
});
class TypographyCustom extends Component {
	render() {
		const {
			classes,
			color,
			variant,
			className,
			children,
			center,
			mg_top_sm,
			mg_top_xs,
			mg_top_md,
			mg_top_lg,
			mg_top_xl,
			mg_bottom_sm,
			mg_bottom_xs,
			mg_bottom_md,
			mg_bottom_lg,
			mg_bottom_xl,
			mg_left_sm,
			mg_left_xs,
			mg_left_md,
			mg_left_lg,
			mg_left_xl,
			mg_right_sm,
			mg_right_xs,
			mg_right_md,
			mg_right_lg,
			mg_right_xl,
			disableTextTransform,
			...rest
		} = this.props;

		var centerClass = undefined
		if (center)
			centerClass = 'center'
		const btnClasses = classNames({
			[classes[color]]: color,
			[classes.disableTextTransform]: disableTextTransform,
			[classes.mg_top_sm]: mg_top_sm,
			[classes.mg_top_xs]: mg_top_xs,
			[classes.mg_top_md]: mg_top_md,
			[classes.mg_top_xl]: mg_top_xl,
			[classes.mg_top_lg]: mg_top_lg,
			[classes.mg_left_xs]: mg_left_xs,
			[classes.mg_left_sm]: mg_left_sm,
			[classes.mg_left_md]: mg_left_md,
			[classes.mg_left_lg]: mg_left_lg,
			[classes.mg_left_xl]: mg_left_xl,
			[classes.mg_bottom_sm]: mg_bottom_sm,
			[classes.mg_bottom_xs]: mg_bottom_xs,
			[classes.mg_bottom_md]: mg_bottom_md,
			[classes.mg_bottom_lg]: mg_bottom_lg,
			[classes.mg_bottom_xl]: mg_bottom_xl,
			[classes.mg_right_xs]: mg_right_xs,
			[classes.mg_right_sm]: mg_right_sm,
			[classes.mg_right_md]: mg_right_md,
			[classes.mg_right_lg]: mg_right_lg,
			[classes.mg_right_xl]: mg_right_xl,
			[className]: className,
			[classes.centerClass]: center,
			[classes.input_label]: variant==='input_label',
			[classes.description]: variant==='description',
			[classes.thirdCTA]: variant==='thirdCTA',
			[classes.action]: variant==='action',
			[classes.caption1]: variant==='caption1',
			[classes.link]: variant === 'link',
			[classes.text_small]: variant === 'text_small',
			[classes.text_label]: variant === 'text_label',
			[classes.banner]:variant === 'banner',
			[classes.best_sale]:variant === 'best_sale',
			// [classes.best_sale]:variant === 'subtitle1',
		});

		return (
			<Typography variant={variant} className={btnClasses} {...rest}>
				{children}
			</Typography>
		)
	}
}
TypographyCustom.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"secondary",
		"tertiary",
		"onPrimary",
		"onBox",
		"error",
		"label",
		"progress",
		"success",
		"danger",
		"description",
		"default",
		"input_label",
		"link",
		"banner",
		"best_sale",
		
	]),
}

export default withStyles(styles)(TypographyCustom);