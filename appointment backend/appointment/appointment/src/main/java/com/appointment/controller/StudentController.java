package com.appointment.controller;

import com.appointment.dto.StudentDto;
import com.appointment.model.Student;
import com.appointment.service.StudentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/students")
@CrossOrigin
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/save")
    public Student save(@RequestBody StudentDto studentDto){
        return studentService.save(studentDto);
    }
}
