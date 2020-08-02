import React from 'react';
import SideNav from '../../components/SideNav';
import './layout.scss';

const LayoutBase = ({ children }) => {
    return (
        <div className='layout'>
            <div className='layout__sidebar'>
                <SideNav />
            </div>
            <div className='layout__content'>{children}</div>
        </div>
    );
};

export default LayoutBase;
