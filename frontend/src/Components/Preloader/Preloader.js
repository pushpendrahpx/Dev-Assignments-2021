import React from "react";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Preloader = ({status})=>{
    if(status)
    return <div style={{position:"absolute",display:"grid",placeContent:"center",width:"100vw",height:"calc(100vh-256px)"}}>
        <Spin indicator={antIcon} />
    </div>
}
export default Preloader