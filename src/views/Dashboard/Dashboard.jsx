import React, { useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import Marker from '../../components/Marker';
import TeamPerformance from '../../components/TeamPerformance';
import Campaigns from '../../components/Campaigns';

const Dashboard = (props) => {
    const { markers, progresses, campaigns, fetchData } = props;

    // I've implemented this code to simulate the change of data on a timer.
    useEffect(() => {
        fetchData();
        setInterval(() => fetchData(), 10000);
    }, []);

    return (
        <Box p='15px'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {markers.map((marker) => (
                            <Grid key={`marker-${marker.title}`} item xs={6} sm={4} lg={2}>
                                <Marker data={marker} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item lg={8} sm={12}>
                            <Campaigns data={campaigns} />
                        </Grid>
                        <Grid item lg={4} sm={12}>
                            <TeamPerformance data={progresses} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
