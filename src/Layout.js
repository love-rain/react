import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem, NavLink,
} from 'reactstrap';
import {Link} from "react-router-dom";

import {Icon, Layout,Input, Menu} from 'antd';
import RouterGuest from "./router/RouterGuest";
import RouterManagement from "./router/RouterManagement";

const {Sider} = Layout;


const Search = Input.Search;
export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">HOME</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Search
                                    placeholder="Search ..."
                                    onSearch={value => console.log(value)}
                                />
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/new'}>NEW</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/courses'}>COURSES</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/companies'}>COMPANIES</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/contact'}>CONTACT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/login'}>LOGIN</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <Menu.Item key="1"><Link to="/management/courses"><Icon type="appstore-o"/><span>MANAGEMENT</span></Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/management/courses"><Icon type="profile"/><span>COURSES</span></Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/management/companies"><Icon type="user"/><span>COMPANIES</span></Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/management/lecturers"><Icon type="user"/><span>LECTURERS</span></Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/management/interns"><Icon type="user"/><span>INTERNS</span></Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <RouterGuest/>
                        <RouterManagement/>
                    </Layout>
                </Layout>
            </div>
        );
    }
}