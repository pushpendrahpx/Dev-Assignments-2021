import { EditOutlined, EllipsisOutlined, HeartOutlined,LoadingOutlined } from "@ant-design/icons"
import { Avatar, Button, Card, Dropdown, notification, Spin } from "antd"
import Meta from "antd/lib/card/Meta"
import Menu from "rc-menu/lib/Menu"
import React, { useEffect, useState } from "react"

import Hosts from "./../../../Hosts.json"
import Endpoints from "./../../../Endpoints.json";
import cookies from "../../../functions/cookies"
import { Link } from "react-router-dom"



const Pin = async (id,name)=>{
    try{
            console.log(id)
        let response = await fetch(Hosts.localServer+Endpoints.addFavPokemon,{
            method:"PUT",
            headers:{
                "Content-type":"application/json",
                "Authorization":"Bearer "+cookies.getCookie("accessToken")
            },
            body:JSON.stringify({pokemonId:id})
        })
        if(response.ok){
            let data = await response.json();
            notification["success"]({message:"Liked "+name})
        }else{
            
        notification["error"]({message:"Request Failed"})
        }
    }catch(err){
        notification["error"]({message:"Application Error"})
    }
    
}
const UnPin = (id,name)=>{

}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const EachCard = ({eachPokemon,id})=>{
    // console.log(id)
    // console.log(eachPokemon)
    let [es,setes] = useState(undefined)
    let [isLoading,setIsloading] = useState(false)
    // useEffect(,[])
    // const r = async ()=>{
    //         setIsloading(true)
    //         let data = (await (await fetch(eachPokemon.url)).json()).sprites
            
    //         setes({img1:data.front_default,img2:data.front_shiny})
    //         setIsloading(false)
        
    // }
    // r()
    
    return <div>
    <Card
    style={{ width: 300 }}
    act
    actions={[
      <Button onClick={()=>{Pin(id,eachPokemon.name)}}><HeartOutlined key="setting" /></Button>,

    ]}
  >
    <Link to={"/pokemon/"+id} style={{color:"blue"}}>
     <span
        
      >{eachPokemon.name + "(id="+id+")"}
        </span>
    </Link>
  </Card>
    </div>
}
export default EachCard