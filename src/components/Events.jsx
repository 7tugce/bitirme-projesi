import React, { useEffect, useState } from "react";
import "./styles.css";
import { Badge, Divider } from "antd";
import { Icon } from "@iconify/react";
import AppointmentService from "../services/appointmentService";

const Events = () => {
  const [appointments, setAppointments] = useState();
  const [availableDays, setAvailableDays] = useState();
  const appointmentService = new AppointmentService();
  
  
  const handleChangeStatusToTrue = (appointmentId) => {
    appointmentService
      .changeStatus(appointmentId, true)
      .then(() => {
        // Fetch updated appointments after successful status change
        appointmentService
          .getAppointmentsByTeacherId()
          .then((res) => setAppointments(res.data));
      })
      .catch((error) => console.error("Error changing status:", error));
  };

  const handleChangeStatusToFalse = (appointmentId) => {
    appointmentService
      .changeStatus(appointmentId, false)
      .then(() => {
        // Fetch updated appointments after successful status change
        appointmentService
          .getAppointmentsByTeacherId()
          .then((res) => setAppointments(res.data));
      })
      .catch((error) => console.error("Error changing status:", error));
  };

  useEffect(() => {
    appointmentService
      .getAvailableDays()
      .then((res) => setAvailableDays(res.data));
    console.log("Avaliable days ", availableDays);
  }, []);

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

    // No need to add 'appointments' as a dependency to prevent infinite loop
  }, []);

  return (
    <div className="event-page-content">
      <div className="event-table">
        <div className="event-table-head">Randevularınız</div>
        {appointments &&
          appointments.map((appointment) => (
            <div className="event-table-body">
              <div className="event-info">
                <Badge color="#AC87C5" />
                <div className="student-info">
                  <div>
                    <span>Öğrenci:</span> {appointment.studentFullName}
                  </div>
                  <div>
                    <span>Numarası:</span> {appointment.studentEmail}
                  </div>
                  <div>
                    {appointment.isStatusChanged}
                  </div>
                  <div>
                    <span>Tarih:</span>
                    {appointment.availableDaysAvailableDay}
                  </div>
                  <div>
                    <span>Saat:</span> {appointment.availableDaysHour}
                  </div>
                  <div>
                    <span>Onay Durumu:</span>{" "}
                    {appointment.status ? <>Onaylandı</> : <>Reddedildi</>}
                  </div>
                  <Divider orientation="right" plain>
                    <Icon icon="ph:student-light" />
                  </Divider>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="event-table">
  <div className="event-table-head">Bekleyenler</div>
  {appointments &&
    appointments
      .filter(appointment => appointment.statusChanged===false)
      .map(filteredAppointment => (
        <div className="event-table-body">
          <div className="event-info">
            <Badge status="processing" />
            <div className="student-info">
              <div>
                <span>Öğrenci:</span> {filteredAppointment.studentFullName}
              </div>
              <div>
                <span>Numarası:</span> {filteredAppointment.studentEmail}
              </div>
              <div>
                <span>Tarih:</span> {filteredAppointment.availableDaysAvailableDay}
              </div>
              <div>
                <span>Saat:</span>
                {filteredAppointment.availableDaysHour}
              </div>
              <div>
                <span>Onay Durumu:</span>{" "}
                <button
                  className="confirm-btn"
                  onClick={() => handleChangeStatusToTrue(filteredAppointment.id)}
                >
                  Onayla
                </button>{" "}
                <button
                  className="deny-btn"
                  onClick={() => handleChangeStatusToFalse(filteredAppointment.id)}
                >
                  Reddet
                </button>
              </div>
              <Divider orientation="right" plain>
                <Icon icon="ph:student-light" />
              </Divider>
            </div>
          </div>
        </div>
      ))}
</div>


      </div>
   
  );
};

export default Events;
