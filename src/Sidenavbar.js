import React from 'react';
import './Sidenavbar.css';
import companylogo from './Images/companylogo.png';
import start from'./Images/started.png';
import template from './Images/Templates.png';
import campaign from './Images/Campaigns.png';
import  manage from'./Images/manage.png';
import integration from './Images/Integration.png';
import settings from './Images/settings.png';
import upgrade from './Images/upgrade.png';
import logout from './Images/logout.png';
import { Link } from 'react-router-dom';

class Sidenavbar extends React.Component{
    render(){
        return(
            <div id="sidenav">
                <div style={{display:"inline-block"}}>
                    <img src={companylogo} alt="logo" id="logo"/>
                </div>

                <Link to="/Get-Started" style={{textDecoration:"none",color:"inherit"}}>
                <div className="navitem">
                    <div style={{display:"inline-block",float:"left"}}><img src={start} alt="start" className="item"/></div>
                    {"Get Started"}
                </div>
                </Link>
                <Link to="/Templates" style={{textDecoration:"none",color:"inherit"}}>
                <div className="navitem">
                    <div style={{display:"inline-block",float:"left"}}><img src={template} alt="item" className="item"/></div>
                    {"Templates"}
                </div>
                </Link>
                <Link to="/Campaign/1" style={{textDecoration:"none",color:"inherit"}}>
                <div className="navitem">
                    <div style={{display:"inline-block",float:"left"}}><img src={campaign} alt="campaign"className="item"/></div>
                    {"Campaigns"}
                </div>
                </Link>
                <Link to="/Integration" style={{textDecoration:"none",color:"inherit"}}>
                <div className="navitem">
                    <div style={{display:"inline-block",float:"left"}}><img src={integration} alt="integrate" className="item"/></div>
                    {"Integrations"}
                </div>
                </Link>
                <Link to="/Manage-Website" style={{textDecoration:"none",color:"inherit"}}>
                <div className="navitem">
                    <div style={{display:"inline-block",float:"left"}}><img src={manage} alt="manage" className="item"/></div>
                    {"Manage Websites"}
                </div>
                </Link>
                <Link to="/Settings" style={{textDecoration:"none",color:"inherit"}}>
                <div className="navitem">
                    <div style={{display:"inline-block",float:"left"}}><img src={settings} alt="settings" className="item"/></div>
                    {"Settings"}
                </div>
                </Link>
                <div>
                    <img src={upgrade} alt="upgarde" id="upgrade"/>
                </div>
                <div className="navitem">
                    <div style={{display:"inline-block",float:"left"}}><img src={logout} alt="logout" style={{width:"40px",height:"30px"}}/></div>
                    {"Logout"}
                </div>
            </div>
        );
    }
}
export default Sidenavbar;