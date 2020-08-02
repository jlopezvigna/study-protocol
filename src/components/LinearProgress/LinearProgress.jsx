import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const styles = {
    colorPrimary: {
        backgroundColor: '#cccac97a',
    },
    barColorPrimary: {
        backgroundColor: styledBy('color', {
            success: '#28a745',
            warning: '#ffc107',
            error: '#dc3545',
        }),
    },
};

const LinearProgressColor = withStyles(styles)(({ classes, color, ...other }) => (
    <LinearProgress
        classes={{ colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary }}
        {...other}
    />
));

export default LinearProgressColor;
