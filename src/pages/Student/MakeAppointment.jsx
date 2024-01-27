import { useEffect, useState } from "react";
import AppointmentService from "../../services/appointmentService";
import CalendarForStudents from "../../components/CalendarForStudents";
import Header from "../../components/Header";

const MakeAppointment = () => {
  const [availableDays, setAvailableDays] = useState();

  useEffect(() => {
    let appointmentService = new AppointmentService();
    appointmentService
      .getAvailableDays()
      .then((response) => setAvailableDays(response.data));
      console.log(availableDays)
  }, []);

  return (
    <div>
    <Header/>
      <p>Görüşmek istediğiniz tarihi ve saati seçiniz</p>
      <CalendarForStudents />
      <div>
     
      </div>
    </div>
  );
};

export default MakeAppointment;
