import React, { useState, useEffect } from 'react';
import FilterBox from '../FilterBox';
import { removeDuplicates } from '../../helpers';
import { Table, TableBody, TableCell, TableHead, TableRow, Box } from '@material-ui/core';

const Campaigns = (props) => {
    const { data } = props;
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);

    const handleChange = (value) => setValue(value);

    // I would put this logic inside the reselect file in order to avoid messing up the component.

    useEffect(() => {
        const optionsCampaigns = data.map((team) => {
            return { value: team.id, label: team.id };
        });
        const uniqueOptions = removeDuplicates(optionsCampaigns, 'value');
        setOptions([{ value: '', label: 'All Sponsors' }, ...uniqueOptions]);
    }, []);

    const sortCampaings = (id, campaings) => {
        return value === '' ? campaings : campaings.filter((campaing) => campaing.id === id);
    };

    const renderList = () => {
        const dataSorted = sortCampaings(value, data);
        return dataSorted.map((row) => (
            <TableRow key={`${row.id}-${row.indication}`}>
                <TableCell component='th' scope='row'>
                    <span className='text-1'>{row.id}</span>
                </TableCell>
                <TableCell>{row.indication}</TableCell>
                <TableCell align='center'>{row.site}</TableCell>
                <TableCell align='center'>{row.session}</TableCell>
                <TableCell align='center'>{row.form}</TableCell>
                <TableCell align='center'>{row.leads}</TableCell>
                <TableCell align='center'>{row.follow_up}</TableCell>
            </TableRow>
        ));
    };

    return (
        <FilterBox title='Campaigns Performance' value={value} options={options} onClick={handleChange}>
            <Box style={{ overflow: 'scroll' }}>
                <Table aria-label='campaigns table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Protocol ID</TableCell>
                            <TableCell>Indication</TableCell>
                            <TableCell align='center'>Sites</TableCell>
                            <TableCell align='center'>Sessions</TableCell>
                            <TableCell align='center'>Form</TableCell>
                            <TableCell align='center'>Leads</TableCell>
                            <TableCell align='center'>Follow Up</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{renderList()}</TableBody>
                </Table>
            </Box>
        </FilterBox>
    );
};
export default React.memo(Campaigns);
