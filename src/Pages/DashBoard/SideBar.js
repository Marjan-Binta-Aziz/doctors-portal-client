import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SideBar = () => {
return (
<div>
<div className="drawer drawer-mobile">
    <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-start">
    <h2 className='text-5xl font-semibold text-purple-400'>Dashboard</h2>
    <Outlet></Outlet>    
    </div> 
    <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
        <li><Link to='/dashboard'>My Appointments</Link></li>
        <li><Link to='/dashboard/myreview'>My Reviews</Link></li>
        </ul>
    
    </div>
    </div>
</div>
);
};

export default SideBar;