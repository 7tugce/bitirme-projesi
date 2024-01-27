// AntdCalendar.jsx
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Badge, Calendar, Modal } from "antd";
import DatePickerForTeacher from "./DatePickerForTeacher";
import AppointmentService from "../services/appointmentService";

const AntdCalendar = () => {
  const [availableDay, setAvailableDay] = useState(null);
  const [selectedHours, setSelectedHours] = useState([]); // State to store selected hours
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const appointmentService = new AppointmentService();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await appointmentService.getAppointmentsByTeacherId();
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchData(); // Call fetchData directly when the component mounts

    // No need to add 'appointments' as a dependency to prevent an infinite loop
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    alertify.success("Seçilen tarihler müsait olarak işaretlendi");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSelect = (newValue) => {
    showModal();
    setAvailableDay(newValue);
    console.log("new value", newValue);
  };

  const onPanelChange = (newValue) => {
    setAvailableDay(null); // Clear the selected date when changing panels
  };

  const handleHourChange = (selectedHours) => {
    setSelectedHours(selectedHours);
  };

  const handleClick = () => {
    if (availableDay && selectedHours.length > 0) {
      const formattedDate = dayjs(availableDay).format("YYYY.MM.DD");
      const hour = selectedHours.join(", "); // Concatenate selected hours into a single string

      // Send the formatted date and selected hours to the API
      appointmentService
        .setAvailableDays(formattedDate, hour, 1)
        .then((response) => {
          console.log(
            "Selected date and hours sent to the API:",
            formattedDate,
            hour
          );
          console.log(response);
        });
    } else {
      console.warn("No date or hours selected");
    }
  };

  const dateCellRender = (value) => {
    return (
      <ul>
        {appointments.map((appointment) => (
          dayjs(appointment.availableDaysAvailableDay).isSame(value, 'day') && (
            <div key={appointment.id}>
              <Badge
                status="success"
                text={`${appointment.studentFullName} ${appointment.availableDaysHour}`}
              />
            </div>
          )
        ))}
      </ul>
    );
  };
  
  
  
  return (
    <>
      <Calendar
        value={availableDay || undefined}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        dateCellRender={dateCellRender}
      />

      <Modal
        title="Saat seçiniz"
        visible={isModalOpen}
        onOk={() => {
          handleOk();
          handleClick(); // Send the selected date and hours when the modal is confirmed
        }}
        onCancel={handleCancel}
      >
        <DatePickerForTeacher onHourChange={handleHourChange} />
      </Modal>
    </>
  );
};

export default AntdCalendar;
