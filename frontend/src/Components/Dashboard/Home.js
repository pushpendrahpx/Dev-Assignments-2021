import Search from "antd/lib/input/Search"
import React, { useEffect,useState } from "react"
import { Pagination, Tabs, Spin } from 'antd';
import Title from "antd/lib/skeleton/Title";
import EachCard from "./Home/EachCard";
import { LoadingOutlined } from '@ant-design/icons';


import Hosts from './../../Hosts.json'
import Endpoints from "./../../Endpoints.json"

const { TabPane } = Tabs;


function callback(key) {
    // console.log(key);
  }

  const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;


const Home = ()=>{
    let [pageState,setPageState] = useState({
        paginationPosition:1
    })
    let [pageAssets,setPageAssets] = useState([])
    const onPaginationChangeHandle = (value)=>{
        setPageState((prev)=>{
            return {...prev,paginationPosition:value}
        })
    }


    useEffect(async ()=>{
        let data = await (await (fetch(Hosts.pokeapi + Endpoints.GetPokemonList+"?offset="+String(Number(pageState.paginationPosition-1)*20) + "&limit=20"))).json()
        setPageAssets(data.results)
    },[pageState])
// console.log(pageAssets)
    return <div style={{width:"calc(100vw-256px)"}}>
         <Tabs type="card" defaultActiveKey="1" onChange={callback} style={{width:"100%",padding:"10px"}}>
    <TabPane tab="Home" key="1">


        
    <div style={{padding:'10px', display:'flex',flexWrap:"wrap"}}>


    <Pagination defaultCurrent={1} total={1118/2} onChange={onPaginationChangeHandle} style={{width:"100%"}} />
    <br />
        {pageAssets.length == 0 ? <Spin indicator={antIcon} /> : ""}
        {pageAssets.length != 0 && pageAssets.map((eachPokemon,index)=>{
            // console.log(eachPokemon)
            return <EachCard eachPokemon={eachPokemon} key={index} id={index+1 + (pageState.paginationPosition-1)*20} />
        })}


        
    </div>



    </TabPane>
  </Tabs>

  
    </div>
}
export default Home