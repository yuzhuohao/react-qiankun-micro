import React from 'react';
import RouterView from "@router/Index";
import { PageProps } from '@/types/common';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Logo from '@components/logo/Index'
import './index.less'

const menuList = [
    {
        name: "文章管理",
        path: "/article",
    },
    {
        name: "用户管理",
        path: "/user",
    },
]

const Index: React.FC<PageProps> = (props) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const [current, setCurrent] = React.useState('');

    // React.useEffect(() => {
    //     if (props.location.pathname == "/") {
    //         // 挂载与更新时触发
    //         setCurrent(menuList[0].path);
    //         props.history.push(menuList[0].path);
    //     }
    //     setCurrent("/" + props.location.pathname.split("/")[1]);
    //     return () => {
    //         // 卸载时触发
    //     }
    // })

    function toggle() {
        setCollapsed(!collapsed,);
    };

    function jumpTo(path: string) {
        if (props.location.pathname.startsWith(path)) {
            window.location.reload();
        } else {
            props.history.push(path);
        }
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Logo />
                <Menu selectedKeys={[current]} theme="dark" mode="inline">
                    {menuList.map((item) => {
                        return (
                            <Menu.Item key={item.path} icon={<UserOutlined />}>
                                <a onClick={() => jumpTo(item.path)}>{item.name}</a>
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: "calc( 100vh - 112px)",
                    }}
                >
                    <RouterView routes={props.routes} />
                </Content>
            </Layout>
        </Layout >
    );
}

export default Index;