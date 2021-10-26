import React, { useEffect, useState } from "react";
import { List, Typography, Divider,Card, Spin } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';


import Hosts from "./../../Hosts.json"
import Endpoints from "./../../Endpoints.json"
import cookies from "./../../functions/cookies"
import { Link } from "react-router-dom";

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;


const Favs = ()=>{
    let [pokemons,setPokemons] = useState([])
    useEffect(async ()=>{
        let res = await fetch(Hosts.localServer+Endpoints.getFavPokemon,{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "Authorization":"Bearer "+ cookies.getCookie("accessToken")
            }
        })
        let data = await res.json()
        // console.log(data)
    
        let ids = data.data
        let allpoks = []
        let i = 0;
        while(i < ids.length){
            let r = await fetch(Hosts.pokeapi+Endpoints.GetPokemonList+"/"+ids[i])
            let d = await r.json()
            allpoks.push({name:d.name,id:ids[i]})

            if(i == ids.length-1){
                // console.log(allpoks)
                setPokemons(allpoks)
            }
            i++;
        }
    },[])
    return <div>
         <Card title="List of your favourite pokemons" style={{textAlign:"center"}}>
         {pokemons.length == 0 ? <Spin indicator={antIcon} /> : ""}
         {pokemons?.map((each,i)=>{
              return <div key={i} style={{paddingLeft:"10px",paddingRight:"10px"}}>
                  <Card.Grid style={gridStyle}>
                      <Link to={"/pokemon/"+each.id}>{each.name}</Link>
                  </Card.Grid>
                  
                  
              </div>
          })}
            
        </Card>
    </div>
}
export default Favs