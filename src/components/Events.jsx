import React from "react";
import "./styles.css";
import { Badge } from "antd";

const Events = () => {
  return (
    <div>
      <div className="event-table">
        <div className="event-table-head">Randevularınız</div>
        <div className="event-table-body">
       
          <div className="event-info">
          <Badge status="processing" />
            <div>Öğrenci: Tuğçe Özelmaci Tarih: 11.12.2024</div>{" "}
          </div>
          <div className="event-info">
          <Badge status="processing" />
            <div>Öğrenci: Tuğçe Özelmaci Tarih: 11.12.2024</div>{" "}
          </div>
          <div className="event-info">
          <Badge status="processing" />
            <div>Öğrenci: Tuğçe Özelmaci Tarih: 11.12.2024</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
