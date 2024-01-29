package com.appointment.service;

import com.appointment.core.mapper.dtoConverter.DtoConverterService;
import com.appointment.dto.TeacherDto;
import com.appointment.model.Appointment;
import com.appointment.model.Teacher;
import com.appointment.repository.AppointmentRepository;
import com.appointment.repository.TeacherRepository;
import org.springframework.stereotype.Service;

@Service
public class TeacherService {

    private final TeacherRepository teacherRepository;
    private final DtoConverterService dtoConverterService;
    private final AppointmentRepository appointmentRepository;

    public TeacherService(TeacherRepository teacherRepository, DtoConverterService dtoConverterService, AppointmentRepository appointmentRepository) {
        this.teacherRepository = teacherRepository;
        this.dtoConverterService = dtoConverterService;
        this.appointmentRepository = appointmentRepository;
    }

    public Teacher save (TeacherDto teacherDto){
        return teacherRepository.save((Teacher) dtoConverterService.dtoClassConverter(teacherDto, Teacher.class));
    }

    public boolean changeAppointmentStatus(int appointmentId, boolean status) {
        Appointment appointment = appointmentRepository.findById(appointmentId).get();
        appointment.setStatus(status);
        appointment.setStatusChanged(true);
        appointmentRepository.save(appointment);
        return appointment.isStatusChanged();
    }
}
