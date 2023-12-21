import React, { useState } from "react";
import dayjs from "dayjs";
import { Badge, Calendar, Modal } from "antd";
import _DatePicker from "./DatePicker";

const AntdCalendar = () => {
  const [newValue, setValue] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    alertify.success("Seçilen tarihte randevunuz oluşturuldu");

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSelect = (newValue) => {
    showModal();
    setValue(newValue);
    console.log("new value", newValue);
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Calendar
        value={newValue}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />

      <Modal
        title="Basic Modal"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <_DatePicker value={newValue} />
      </Modal>
    </>
  );
};

export default AntdCalendar;
