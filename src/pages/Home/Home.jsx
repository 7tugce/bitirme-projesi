import React from "react";
import AntdCalendar from "../../components/AntdCalendar";
import { Tabs } from "antd";
import Events from "../../components/Events";
import "./home.css";

const Home = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Randevular",
      children: <Events />,
    },
    {
      key: "2",
      label: "Takvim",
      children: <AntdCalendar />,
    },
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        centered
        items={items}
        onChange={onChange}
        indicatorSize={(origin) => origin + 20}
      />
    </div>
  );
};

export default Home;
