package com.appointment.controller;

import com.appointment.dto.TeacherDto;
import com.appointment.model.Teacher;
import com.appointment.service.TeacherService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/teachers")
@CrossOrigin
public class TeacherController {

    private final TeacherService teacherService;

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @PostMapping("/save")
    public Teacher save (@RequestBody TeacherDto teacherDto){
        return teacherService.save(teacherDto);
    }

    @PostMapping("/changeAppointmentStatus/{appointmentId}")
    public boolean changeAppointmentStatus (@PathVariable int appointmentId, @RequestParam boolean status){
        return teacherService.changeAppointmentStatus(appointmentId, status);
    }
}
