import React from "react";
import BrandLogo from "../../MicroComponents/BrandLogo/BrandLogo";
import './Navbar.css';
import NavbarItem from "./NavbarItem/NavbarItem";
import { Modal, Button } from 'antd';
import LoginForm from "../LoginForm/LoginForm";
import { Link } from "react-router-dom";


let Navbar = ()=>{
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');
  
    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };
    
    return <div className="Navbar" >
        <div className="Navbar_left">
            <BrandLogo />
        </div>
        <div style={{display:'flex'}}>
            <NavbarItem text="Home" to="/home" />
            <NavbarItem text="Trending" to="/home" />
            <NavbarItem text="Merchandise" to="/home" />
            <NavbarItem text="Forums" to="/home" />
            <a href="mailto:u19ee003@eed.svnit.ac.in"> <NavbarItem text="Reach Us" isButton={true} /> </a>
            <NavbarItem text="Log In/Register"  tocall={showModal} isButton={true} />
        </div>
        <Modal
            title="Account Form"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            maskClosable={false}
            footer={null}
        >   It doesn't matter you have an account or not with us. We will do everything in single step 😊, just for you.
            <LoginForm 
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel} />
        </Modal>
    </div>
}
export default Navbar;
