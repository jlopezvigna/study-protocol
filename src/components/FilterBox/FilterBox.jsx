import React from 'react';
import { Select, MenuItem, Box } from '@material-ui/core';

const FilterBox = (props) => {
    const { title, value, options, children, onClick } = props;

    const handleChange = (e) => onClick(e.target.value);

    return (
        <Box border={1} borderColor='#e2e2e2' borderRadius={10} height='100%'>
            <Box p='10px' height='100%'>
                <Box display='flex' justifyContent='space-between' alignItems='baseline' mb='15px'>
                    <span className='text-3'>{title}</span>
                    <Select value={value} onChange={handleChange} displayEmpty>
                        {options.map((option) => (
                            <MenuItem key={`option-${option.label}`} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
                {children}
            </Box>
        </Box>
    );
};
export default React.memo(FilterBox);
