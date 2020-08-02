import React, { useState } from 'react';
import LinearProgress from '../LinearProgress';
import FilterBox from '../FilterBox';
import { Box } from '@material-ui/core';

const TeamPerformance = (props) => {
    const { data } = props;
    const [value, setValue] = useState('0-100');

    const handleChange = (value) => setValue(value);

    const renderList = () => {
        const range = value.split('-');
        const dataSorted = data.filter((team) => team.progress > range[0] && team.progress < range[1]);
        return dataSorted.map((row) => {
            const color = getColor(row.progress);

            return (
                <Box
                    key={`progress-${row.name}-${row.progress}`}
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    mb={2.3}>
                    <Box width='100%' display='flex' justifyContent='space-between'>
                        <span className='text-1'>{row.name}</span>
                        <span className='text-2'>{`${Math.round(row.progress)}%`}</span>
                    </Box>
                    <Box width='100%'>
                        <LinearProgress color={color} variant='determinate' value={row.progress} />
                    </Box>
                </Box>
            );
        });
    };

    return (
        <FilterBox title='Team Performance' value={value} options={options} onClick={handleChange}>
            {renderList()}
        </FilterBox>
    );
};
export default React.memo(TeamPerformance);

const getColor = (x) => {
    if (x < 30) return 'error';
    if (30 < x && x < 60) return 'warning';
    return 'default';
};

const options = [
    { value: '0-100', label: 'Overall' },
    { value: '60-100', label: 'High' },
    { value: '30-60', label: 'Medium' },
    { value: '0-30', label: 'Low' },
];
