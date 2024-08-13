import React, { useState } from "react";
import { Layout, Menu, Collapse } from "antd";

const { Sider } = Layout;
const { Panel } = Collapse;

const SiderMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: any) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="菜单1" key="1">
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <span>选项1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>选项2</span>
            </Menu.Item>
          </Menu>
        </Panel>
        <Panel header="菜单2" key="2">
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["3"]}>
            <Menu.Item key="3">
              <span>选项3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <span>选项4</span>
            </Menu.Item>
          </Menu>
        </Panel>
      </Collapse>
    </Sider>
  );
};

export default SiderMenu;
