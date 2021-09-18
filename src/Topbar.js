import React from 'react';
import top from './Images/top.png';
import hiemoji from './Images/hiemoji.png';
import query from './Images/query.png';
import profilepic from './Images/profilepic.png';
import './Topbar.css';

class Topbar extends React.Component{
    render(){
        return(
            <div id="top">
                    <div style={{display:"inline-block",float:"left"}}><img src={top} alt="bar" id="bar"/></div>
                    <div style={{display:"inline-block",float:"left"}}>{"How are you doing today "}<b>{"Inder?"}</b></div>
                    <div style={{display:"inline-block",float:"left"}}><img src={hiemoji} alt="emoji" id="emoji"/></div>
                    <div style={{display:"inline-block",float:"left"}}>
                        <select id="dropdown">
                            <option defaultValue>{"Web Campaign"}</option>
                        </select>
                    </div>
                    <div style={{display:"inline-block",float:"left"}}>{"Credits : "}<b>{"200"}</b></div>
                    <div style={{display:"inline-block",float:"left"}}><img src={query} alt="query" id="query"/></div>
                    <div style={{display:"inline-block",float:"left"}}><img src={profilepic} alt="profile" id="profile"/></div>
            </div>
        );
    }
}

export default Topbar;