import React from "react";
import { KmaIcon } from "../assets/imgs";
import { Avatar, Dropdown, Menu } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="profile">
      <a href="/profile">Profile</a>
    </Menu.Item>
    <Menu.Item key="logout">
      <a href="/logout">Logout</a>
    </Menu.Item>
  </Menu>
);

function HeaderMain() {
  return (
    <div className="flex items-center justify-between px-10 bg-bgHeader h-20 ">
      <div>
        <img src={KmaIcon} className="w-20 h-20" />
      </div>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <Avatar
            size={52}
            src="https://images.unsplash.com/photo-1621359748534-8a83aba26934?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZsYXNofGVufDB8fDB8fHww"
          />
        </a>
      </Dropdown>
    </div>
  );
}
export default HeaderMain;
