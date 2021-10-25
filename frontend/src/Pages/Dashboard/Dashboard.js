import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Menu } from 'antd';
import { AppstoreOutlined, FireOutlined, HeartOutlined, HomeOutlined, LogoutOutlined, MailOutlined, SettingOutlined, SyncOutlined } from '@ant-design/icons';
import MainContext from "../../ContextAPIs/ContextAPI";
import { Redirect } from "react-router";
import Home from "../../Components/Dashboard/Home";
import Favs from "../../Components/Dashboard/Favs";
import Trending from "../../Components/Dashboard/Trending";
import RandomC from "../../Components/Dashboard/Random";
const { SubMenu } = Menu;
let Dashboard = ()=>{
    let [dashboardState,SetDashboardState] = useState({
        orig:false,
        result:false,
        section:1
    })
    
    let appState = useContext(MainContext)
    console.log(appState)


     
    useEffect(()=>{
        SetDashboardState(prev=>{
            return { ...prev,
                orig:true,
                result:appState.appState.isLoggedIn
            }
        })
    },[])



    let handleClick = e => {
        SetDashboardState(prev=>{
            return {...prev,section:e.key}
        })
        if(e.key == 5){
            appState.logOutUser()
            SetDashboardState(prev=>{
                return {...prev,orig:true,result:false}
            })
        }
      };
      
   


      console.log(dashboardState)
    if( dashboardState.orig == true  && dashboardState.result==false){
        return  <Redirect to="/" /> 
    }
    return <div style={{width:"100%", height:"100%",display:'flex'}}>
        <Menu
        onClick={handleClick}
        style={{ width: 256, height:"100vh" }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        
      >   
      <Menu.Item key="0" disabled={true} style={{textAlign:"center"}}> <span  style={{color:"#000"}}>  <HomeOutlined /> Dashboard Actions </span> </Menu.Item>
        <Menu.Item key="1"> <HomeOutlined /> Home</Menu.Item>
        <Menu.Item key="2"> <HeartOutlined /> Favs</Menu.Item>
        <Menu.Item key="3"> <FireOutlined /> Trending</Menu.Item>
        <Menu.Item key="4"> <SyncOutlined  /> Random</Menu.Item>
        <Menu.Item key="5" > <LogoutOutlined /> Logout</Menu.Item>
      </Menu>
      <div style={{width:"100%"}}>
        <div>
            {dashboardState.section == 1 ? <Home /> : ""}
            {dashboardState.section == 2 ? <Favs /> : ""}
            {dashboardState.section == 3 ? <Trending /> : ""}
            {dashboardState.section == 4 ? <RandomC /> : ""}
        </div>
      </div>
    </div>
}
export default Dashboard;