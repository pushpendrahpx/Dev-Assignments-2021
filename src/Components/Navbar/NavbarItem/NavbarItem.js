import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import './NavbarItem.css';

let NavbarItem = (props)=>{
    if(props?.to){
        return <Link to={props.to}>
            <div className="NavbarItem" style={{padding:"5px"}}>
            {props?.isButton == true ? 
                <Button type="danger" shape="round" onClick={props.tocall}>{props.text}</Button>
            :
                
                <Button style={{border:"none",color:"black"}} >{props.text}</Button>
            }
        </div>
    </Link>
    }else{
        return <div className="NavbarItem" style={{padding:"5px"}}>
            {props?.isButton == true ? 
                <Button type="danger" shape="round" onClick={props.tocall}>{props.text}</Button>
            :
                <Button style={{border:"none",color:"black"}} >{props.text}</Button>
            }
        </div>
    }
}
export default NavbarItem;
