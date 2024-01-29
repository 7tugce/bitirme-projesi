package com.appointment.service;

import com.appointment.core.mapper.dtoConverter.DtoConverterService;
import com.appointment.dto.AppointmentDto;
import com.appointment.dto.AppointmentResponseDto;
import com.appointment.dto.TeacherAppointmentDto;
import com.appointment.model.Appointment;
import com.appointment.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final DtoConverterService dtoConverterService;
    private final AvailableDaysService availableDaysService;

    public AppointmentService(AppointmentRepository appointmentRepository, DtoConverterService dtoConverterService, AvailableDaysService availableDaysService) {
        this.appointmentRepository = appointmentRepository;
        this.dtoConverterService = dtoConverterService;
        this.availableDaysService = availableDaysService;
    }

    public Appointment save(AppointmentDto appointmentDto){
        Appointment appointment = null;

        if(availableDaysService.getTeacherAvailableDaysByAvailableDaysId(appointmentDto.getAvailableDaysId())){
            appointment = appointmentRepository.save((Appointment) dtoConverterService.dtoClassConverter(appointmentDto, Appointment.class));
            availableDaysService.updateAvailableIsEmpty(appointment.getAvailableDays().getId());
        }
       return appointment;
    }

    public List<AppointmentResponseDto> getByStudentAppointments(int studentId){
        return (dtoConverterService.dtoConverter(appointmentRepository.findByStudentId(studentId), AppointmentResponseDto.class));
    }

    public List<TeacherAppointmentDto> getTeacherAppointments(int teacherId) {
        return (dtoConverterService.dtoConverter(appointmentRepository.findByTeacherId(teacherId), TeacherAppointmentDto.class));
    }
}
