import React from 'react';
import clsx from 'clsx';
import { List, ListItem, ListItemIcon, Avatar } from '@material-ui/core';
import {
    HomeOutlined,
    TodayOutlined,
    FaceOutlined,
    AttachMoneyOutlined,
    NotificationsNoneOutlined,
    BarChartOutlined,
    PictureInPictureOutlined,
    ViewWeekOutlined,
    AccountBoxOutlined,
    TrendingUpOutlined,
    CenterFocusWeakOutlined,
} from '@material-ui/icons';
import './sidenav.scss';

const paths = [
    { icon: <HomeOutlined />, active: false },
    { icon: <TodayOutlined />, active: false },
    { icon: <ViewWeekOutlined />, active: false },
    { icon: <FaceOutlined />, active: false },
    { icon: <PictureInPictureOutlined />, active: false },
    { icon: <AccountBoxOutlined />, active: false },
    { icon: <CenterFocusWeakOutlined />, active: false },
    { icon: <AttachMoneyOutlined />, active: false },
    { icon: <BarChartOutlined />, active: false },
    { icon: <NotificationsNoneOutlined />, active: false },
    { icon: <TrendingUpOutlined />, active: true },
];

/* In this component probably I'll add <Link/> from 'react-router-dom' 
once the app has the router implemented. Also I'll get the path 
from props or some hook from react-router and I would compare the 
path to get the current path active */

const SideNav = (props) => {
    return (
        <div className='sidenav'>
            <div className='sidenav__logo'>
                <img
                    className='sidenav__img'
                    src='https://studyprotocol.io/images/logomark-white.svg'
                    alt='logomark-white'
                />
            </div>
            <div className='sidenav__navigation'>
                <div className='sidenav__seccions'>
                    <List component='nav' aria-label='main nav' disablePadding>
                        {paths.map((path, index) => (
                            <ListItem key={`nav-${index}`} button disableGutters={true}>
                                <ListItemIcon
                                    className={clsx('sidenav__icon-wrapper', {
                                        'sidenav__icon-wrapper--active': path.active,
                                    })}>
                                    {path.icon}
                                </ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className='sidenav__user'>
                    <Avatar>JS</Avatar>
                </div>
            </div>
        </div>
    );
};

export default SideNav;
