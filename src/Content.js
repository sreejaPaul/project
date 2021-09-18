import inputdata from './Data/data.json';
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import { useEffect } from 'react';
import './content.css';
import statitics from './Images/statistics.png';
import download from './Images/download.png';
import files from './Images/files.png';

function Content(){
    const[lowerlimit,setlimit] = useState(0);
    const Pageno =parseInt(useParams().PageNo);
    const namedata = inputdata.map((data)=>{
        return data.CampaignName;
    });
    const status = inputdata.map((data)=>{
        return data.status;
    });
    const date = inputdata.map((data)=>{
        return data.CreatedAt;
    });
    const method = inputdata.map((data)=>{
        return data.Method;
    });
    
    useEffect(()=>{
        setlimit((Pageno*4)-4);
    },[Pageno])
    return(
        <div id="content">
            <div style={{backgroundColor: "#EFF4F5"}}>
                <div className="clm">
                        <input type="checkbox" name="Show Archieved"/>
                        <label>{"Campaign Name"}</label>
                </div>
                
                <div className="clm">{"Status"}</div>
                <div className="clm">{"Created at"}</div>
                <div className="clm" >{"Method"}</div>
                <div className="clm" >{"Media"}</div>
                <div className="clm">{"Actions"}</div>

            </div>
            <div>
            {namedata.map((data,index)=>{
                    if((index>=lowerlimit && index<=(Pageno*4)-1))
                        return (
                            <div key={data+index} style={{display:"inline-block",borderBottom:"1px solid grey"}}>
                                        <div className="body" id="cname">
                                            <input type="checkbox" name="Show Archieved"/>
                                            <label>{data}</label>
                                        </div>
                                        <div className="body" id="statusname">{((status[index]==="Success")? <div id="Success">{"Success"}</div>:<div id="fail">{"Failed"}</div>)}</div>
                                        <div className="body" id="createdat">{date[index]}</div>
                                        <div className="body" id="methodname">{method[index]}</div>
                                        <div className="body" id="medianame">{"Video"}</div>
                                        <div className="body" id="actions">
                                            <div style={{display:"inline-block"}}><img src={statitics} alt="stat" style={{height:"35px",width:"35px"}}/></div>
                                            <div style={{display:"inline-block"}}><img src={download} alt="download" style={{height:"35px",width:"35px"}}/></div>
                                            <div style={{display:"inline-block"}}><img src={files} alt="files" style={{height:"35px",width:"35px"}}/></div>
                                        </div>
                            </div>
                        );
                        })}
            </div>
        </div>
    );
}
export default Content;