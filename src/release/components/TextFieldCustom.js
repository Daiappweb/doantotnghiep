import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';

const styles =theme=>({
    root: {
        '& .MuiInputBase-input': {
          borderRadius: theme.shape.borderRadius6x,
          padding: '10px',
          fontSize: '16px',
          fontWeight: 500,
          backgroundColor: 'transparent',
          color: theme.palette.primary.main,
          border: `2px solid ${theme.palette.primary.main}`,
        },
        "&.Mui-focused": {
          border: "2px solid green",
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          }
        }
      }
});

class TextFieldCustom extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']).isRequired,
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes, label, type, value, onChange, variant } = this.props;

    return (
      <TextField
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        variant={variant}
        className={classes.root}
      />
    );
  }
}

export default withStyles(styles)(TextFieldCustom);
