import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './marker.scss';

/* In this component I didn't develop the numeric differences between 
the first two markers and the others because I didn´t know what 
properties you have. That's why I used percentages in all of the markers */

/* Built with (<div>) */

const Marker = (props) => {
    const { data } = props;

    const renderArrow = () => {
        return data.increase ? (
            <ArrowUpward color='primary' fontSize='small' />
        ) : (
            <ArrowDownward color='error' fontSize='small' />
        );
    };

    return (
        <div className='marker'>
            <div className='marker__wrapper'>
                <div className='marker__title'>
                    <span className='text-1'>{data.title}</span>
                </div>
                <div className='marker__indicators'>
                    <div className='marker__total'>
                        <span>{data.total}</span>
                    </div>
                    <div className='marker__average'>
                        <div className='marker__average-wrapper'>
                            {`${data.average}%`}
                            {data.increase !== null && renderArrow()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Marker;
