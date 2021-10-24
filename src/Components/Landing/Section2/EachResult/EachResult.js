import React from "react"
import './eachResult.css';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const listData = [{
    href: 'https://ant.design',
    title: `ant design part `,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  }];

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  


const EachResult = ({eachResult}) =>{
    return (<>
    <List
    itemLayout="vertical"
    size="large"
    dataSource={listData}
    style={{padding:0,border: '1px solid #dedede',padding:"10px"}}
    renderItem={item => (
    
      <List.Item
        key={item.title}
        style={{padding:0}}
        
      >
        <List.Item.Meta
    style={{padding:0}}
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
      </List.Item>
    )}
  />
    </>)
}
export default EachResult