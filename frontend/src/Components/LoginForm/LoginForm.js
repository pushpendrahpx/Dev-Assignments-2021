import { Form, Input, Button, Checkbox, notification } from 'antd';
import { useContext, useState } from 'react';
import Hosts from "./../../Hosts.json";
import Endpoints from "./../../Endpoints.json"

import cookies from '../../functions/cookies';
import { Redirect } from 'react-router';

import mainContext from "./../../ContextAPIs/ContextAPI";


const LoginForm = ({visible,onOk,confirmLoading,onCancel})=>{
    let [formState,setFormState] = useState({
        isLoading:false,
        isSuccess:false
    })

    let appState = useContext(mainContext);

    const onFinish = async (values) => {
        try{
            // console.log('Success:', values);
            setFormState({isLoading:true})


            let response = await fetch(Hosts.localServer+Endpoints.login,{
              method:"POST",
              headers:{
                'Content-type':"application/json"
              },
              body:JSON.stringify({
                email:values.email,
                Password:values.password
              })
            });




            if(response.ok){
              let responseJSON = await response.json();
              appState.setUser(responseJSON.data)
              localStorage.setItem("mainuser",JSON.stringify(responseJSON));
              cookies.setCookie("accessToken",responseJSON.accessToken, 1);
              setFormState({isLoading:false,isSuccess:true})


            }else{
              cookies.eraseCookie("accessToken");
              localStorage.removeItem("mainuser");
              notification["error"]({message:"Response Error"})
              setFormState({isLoading:false,isSuccess:false})
            }
        }catch(err){

          cookies.eraseCookie("accessToken");
          localStorage.removeItem("mainuser");
          notification["error"]({message:"Request Failed - Catched"})
          setFormState({isLoading:false,isSuccess:false})

        }
      };
    
      const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
      };



    if(formState.isSuccess === true){
      return <Redirect to="/home" />
    }
    return <div>
        <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        
        rules={[{ type:"email",required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary"loading={formState.isLoading} htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
}
export default LoginForm;