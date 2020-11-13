import React from "react";

const Videoitem=({item,onVideoSelect})=>{
    return(
    <div onClick={()=>onVideoSelect(item)}className="item" style={{paddingTop:"5px",marginBottom:"5px",backgroundColor:"#303030",borderBottom:"1px solid rgb(226, 226, 226)",display:"flex",alignItems:"center",cursor:"pointer"}}>
        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} className="ui image" style={{width:"168px",height:"94px"}}/>
        <div className="content">
            <h4 className="header" style={{color:"rgb(226, 226, 226)"}}>
                {item.snippet.title}
            </h4>
        </div>
    </div>
    );
}
export default Videoitem;