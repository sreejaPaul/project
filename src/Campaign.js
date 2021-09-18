import React from 'react';
import {Link,useParams} from 'react-router-dom';
import refresh from './Images/refresh.png';
import inputdata from './Data/data.json';
import './Campaign.css';
import Content from './Content';
function Campaign(){
    
    const pageno = parseInt(useParams().PageNo);
    const datalength = inputdata.length;
        return(
            <div id="campaigndiv">
                <div style={{display:"inline-block"}}>
                    <div style={{display:"inline-block",float:"left",marginLeft:"30px"}}><h1>{"Campaigns"}</h1></div>
                    <div style={{display:"inline-block",float:"left"}}><img src={refresh} alt="refresh" id="refresh"/></div>
                    <div style={{display:"inline-block",float:"left"}}><button id="create">{"+ Create a new campaign"}</button></div>
                </div>
                <div>
                    <div id="allcamp"><b>{"All Campaigns"}</b></div>
                    <div id="quickcamp">{"Quick Campaigns"}</div>
                    <div id="csvcamp">{"CSV Campaigns"}</div>
                    <div id="urlcamp">{"URL Override Campaigns"}</div>
                    <div id="checkbox">
                        <input type="checkbox" name="Show Archieved" />
                        <label>{"Show Archieved"}</label>
                    </div>
                </div >
                <div style={{display:"inline-block",float:"left",width: "128px",marginLeft:"25px",borderBottom:"2px solid orange",padding: "5px"}}></div>
                <div><Content/></div>
                <div id="bottom">
                <div id="btmtext">{"Showing results " + ((pageno < Math.ceil((datalength/4)))? 4 : 1) +" of" + datalength}</div>
                <div id="btnbutton">
                <Link to={"/Campaign/" + ((pageno === 1)? 1 : pageno-1)}>
                    <button className="btn">{"Prev"}</button>
                </Link>
                <Link to="/Campaign/1">
                    <button className="btn">{1}</button>
                </Link>
                <Link to="/Campaign/2">
                    <button className="btn">{2}</button>
                </Link>
                <Link to="/Campaign/3">
                    <button className="btn">{3}</button>
                </Link>
                <Link to={"/Campaign/" + ((pageno < Math.ceil((datalength/4)))? pageno+1 : pageno)}>
                    <button className="btn">{"Next"}</button>
                </Link>
                </div>
                </div>
            </div>
        );
    
}
export default Campaign;