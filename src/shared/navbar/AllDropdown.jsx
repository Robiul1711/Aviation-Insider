import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const AllDropdown = ({ label = "Dropdown", items = [] }) => {
  const menuItems = items.map((item, index) => ({
    key: item.path || index,
    label: <Link className="text-base " to={item.path}>{item.label}</Link>,
  }));

  return (
    <Dropdown menu={{ items: menuItems }} trigger={["hover"]}>
      <span className="cursor-pointer ">
        <Space >
          {label}
          <DownOutlined className="text-sm"/>
        </Space>
      </span>
    </Dropdown>
  );
};

export default AllDropdown;
