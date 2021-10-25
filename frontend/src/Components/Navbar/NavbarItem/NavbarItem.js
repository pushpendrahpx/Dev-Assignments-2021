import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../ContextAPIs/ContextAPI";
import './NavbarItem.css';

let NavbarItem = (props)=>{
    // MainContext
    let appState = useContext(MainContext);

    
    if(props?.to){
        return <Link to={props.to}>
            <div className="NavbarItem" style={{padding:"5px"}}>
            {props?.isButton == true ? 
                <>
                    {props.isSpecial == true && appState.appState.isLoggedIn == true ? 
                        <Button type="danger" shape="round" onClick={props.tocall}>{appState.appState.user.email }</Button>
                    : 
                        <Button type="danger" shape="round" onClick={props.tocall}>{props.text}</Button>
                    }
                </>
                
            :
                
                <Button style={{border:"none",color:"black"}} >{props.text}</Button>
            }
        </div>
    </Link>
    }else{
        return <div className="NavbarItem" style={{padding:"5px"}}>
            {props?.isButton == true ? 
                <>
                    {props.isSpecial == true &&appState.appState.isLoggedIn == true ? 
                    <Link to="/home"><Button type="danger" shape="round">{appState.appState.user.email}</Button></Link>
                    :
                    <Button type="danger" shape="round" onClick={props.tocall}>{props.text}</Button>
                    }
                </>
                
            :
                <Button style={{border:"none",color:"black"}} >{props.text}</Button>
            }
        </div>
    }
}
export default NavbarItem;
