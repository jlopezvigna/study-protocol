import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../../views/Dashboard';
import { fetchData } from '../../actions/dashboard';

const DashboardContainer = (props) => <Dashboard {...props} />;

const mapStateToProps = (state) => {
    return {
        markers: state.dashboard.markers,
        progresses: state.dashboard.progresses,
        campaigns: state.dashboard.campaigns,
    };
};

export default connect(mapStateToProps, { fetchData })(DashboardContainer);
