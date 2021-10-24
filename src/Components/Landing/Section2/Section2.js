import Search from "antd/lib/input/Search";
import React, { useState } from "react";
import "./Section2.css"
import shephard from './../../../Assets/shephard.png'
import EachResult from "./EachResult/EachResult";
let Section2 = ()=>{
    const onSearch = value => console.log(value);
    const onChange = value => console.log(value);

    

    let [results,setResults] = useState([
        {icon:"",name:"Pikachu"},
        {icon:"",name:"Pikachu"},
        {icon:"",name:"Pikachu"},
    ])

    return <div className="Section2">
        <div className="section2-row">
            <div className="section2-left">
                <div className="section2-left-container">
                    
                   <div > 
                    <Search
                        placeholder="Search here"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                        loading={false}
                        onChange={onChange}
                        type="danger"
                        defaultValue="Popular Pokemon"
                        />
                    </div>
                    <div style={{textAlign:"left",paddingTop:"10px"}}>
                        <div style={{color:"#555050"}}>Results : </div>
                        <div className="ResultsContainer">
                            {results.map((eachResult,index)=>{
                                return <EachResult eachResult={eachResult} />
                            })}
                        </div>
                    </div>

                </div>
            </div>
            <div className="section2-right">
                <div className="section2-title">
                    <div>Search the</div>
                    <div style={{color:"#FFD63E"}}>Pokemon</div>
                    <div>you love</div>
                </div>
                <img src={shephard} />
            </div>
        </div>
    </div>
}
export default Section2;
