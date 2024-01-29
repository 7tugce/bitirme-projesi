package com.appointment.controller;

import com.appointment.dto.AppointmentDto;
import com.appointment.dto.AppointmentResponseDto;
import com.appointment.dto.TeacherAppointmentDto;
import com.appointment.model.Appointment;
import com.appointment.service.AppointmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin
public class AppointmentController {

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping("/save")
    public Appointment save(@RequestBody AppointmentDto appointmentDto) {
        return appointmentService.save(appointmentDto);
    }

    @GetMapping("/getAppointmentsByStudentId/{studentId}")
    public List<AppointmentResponseDto> getByStudentAppointments(@PathVariable int studentId){
        return appointmentService.getByStudentAppointments(studentId);
    }

    @GetMapping("/getAppointmentsByTeacherId/{teacherId}")
    public List<TeacherAppointmentDto> getTeacherAppointments(@PathVariable int teacherId){
        return appointmentService.getTeacherAppointments(teacherId);
    }
}
