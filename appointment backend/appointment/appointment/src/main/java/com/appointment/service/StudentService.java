package com.appointment.service;

import com.appointment.core.mapper.dtoConverter.DtoConverterService;
import com.appointment.dto.StudentDto;
import com.appointment.model.Student;
import com.appointment.repository.StudentRepository;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final DtoConverterService dtoConverterService;

    public StudentService(StudentRepository studentRepository, DtoConverterService dtoConverterService) {
        this.studentRepository = studentRepository;
        this.dtoConverterService = dtoConverterService;
    }

    public Student save(StudentDto studentDto){
        return studentRepository.save((Student) dtoConverterService.dtoClassConverter(studentDto, Student.class));
    }
}

