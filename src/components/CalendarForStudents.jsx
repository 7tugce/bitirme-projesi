import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Badge, Calendar, Modal } from "antd";
import _DatePicker from "./_DatePicker";
import DatePickerForTeacher from "./DatePickerForTeacher";
import AppointmentService from "../services/appointmentService";

const CalendarForStudents = () => {
  const [newValue, setValue] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [appointmentsArray, setAppointmentsArray] = useState([]);
  let appointmentService = new AppointmentService();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await appointmentService.getAvailableDays();
        const appointmentsData = response.data;
        const appointmentsArray = Array.isArray(appointmentsData) ? appointmentsData : [appointmentsData];
        console.log("available days array", appointmentsArray);
        setAppointmentsArray(appointmentsArray);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchData();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (!selectedAppointment) {
      console.error("Seçilen randevu bilgisi bulunamadı.");
      alertify.error("Randevu oluşturulurken bir hata oluştu.");
      setIsModalOpen(false);
      return;
    }

    const appointmentData = {
      teacherId: 1,
      studentId: 2,
      availableDaysId: selectedAppointment.id
      
    };
console.log("appointmentData", appointmentData)
    appointmentService
      .makeAppointment(appointmentData)
      .then((res) => {
        if (res.status === 200) {
          alertify.success("Seçilen tarihte randevunuz oluşturuldu");
        } else {
          alertify.error("Randevu oluşturulurken bir hata oluştu.");
        }
        console.log("Yapılan isteğin yanıtı:", res);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("İstek yapılırken bir hata oluştu:", error);
        alertify.error("İstek yapılırken bir hata oluştu.");
        setIsModalOpen(false);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSelect = (newValue) => {
    setValue(newValue);
    const formattedValue = dayjs(newValue).format("YYYY-MM-DD");

    const selectedAppointment = appointmentsArray.find((appointment) => {
      const formattedAppointmentDate = dayjs(appointment.availableDay).format("YYYY-MM-DD");
      console.log("formattedAppointmentDate:", formattedAppointmentDate);
      console.log("availableDaysId:", appointment.availableDaysId);
      return formattedAppointmentDate === formattedValue;
    });
    

    if (selectedAppointment) {
      setSelectedDate({
        availableDay: dayjs(selectedAppointment.availableDay).format("YYYY-MM-DD"),
        hour: selectedAppointment.hour,
      });
      setSelectedAppointment(selectedAppointment);
      showModal();
    }
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  const dateCellRender = (value) => {
    const formattedValue = dayjs(value).format("YYYY-MM-DD");
    const isSelectedDate = appointmentsArray.some(
      (appointment) => dayjs(appointment.availableDay).format("YYYY-MM-DD") === formattedValue
    );

    if (isSelectedDate) {
      return (
        <div onClick={() => onSelect(value)}>
          <Badge status="processing" />
          Bu tarihi seçebilirsiniz
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <>
      <Calendar
        value={newValue}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        dateCellRender={dateCellRender}
      />

      <Modal
        title="Basic Modal"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <_DatePicker />
      </Modal>
    </>
  );
};

export default CalendarForStudents;
