import axios from "axios";

export default class AppointmentService {
  getAvailableDays() {
    return axios.get(
      "http://localhost:8080/api/availableDays/getTeacherAvailableDaysByIsEmptyTrue/1"
    );
  }
  changeStatus(id, status) {
    return axios.post(
      `http://localhost:8080/api/teachers/changeAppointmentStatus/${id}?status=${status}`
    );
  }
  getAppointmentsByTeacherId() {
    return axios.get(
      "http://localhost:8080/api/appointments/getAppointmentsByTeacherId/1"
    );
  }
  setAvailableDays(formattedDate, hour, teacherId) {
    const data = {
      availableDay:String(formattedDate) ,
      hour: hour,
      teacherAvailableDaysId: teacherId,
    };

    return axios.post("http://localhost:8080/api/availableDays/save", data);
  }
  makeAppointment(appointmentData){
    return axios.post("http://localhost:8080/api/appointments/save",appointmentData)
  }
}
