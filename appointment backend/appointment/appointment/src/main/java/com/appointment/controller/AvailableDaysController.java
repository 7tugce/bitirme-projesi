package com.appointment.controller;

import com.appointment.dto.AvailableDaysDto;
import com.appointment.dto.AvailableDaysResponseDto;
import com.appointment.model.AvailableDays;
import com.appointment.service.AvailableDaysService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/availableDays")
@CrossOrigin
public class AvailableDaysController {

    private final AvailableDaysService availableDaysService;

    public AvailableDaysController(AvailableDaysService availableDaysService) {
        this.availableDaysService = availableDaysService;
    }

    @PostMapping("/save")
    public AvailableDays save(@RequestBody AvailableDaysDto availableDaysDto){
        return availableDaysService.save(availableDaysDto);
    }

    @GetMapping("/getTeacherAvailableDays/{teacherId}")
    public List<AvailableDaysResponseDto> getTeacherAvailableDays(@PathVariable int teacherId){
        return availableDaysService.getTeacherAvailableDays(teacherId);
    }

    @GetMapping("/getTeacherAvailableDaysByIsEmptyTrue/{teacherId}")
    public List<AvailableDaysResponseDto> getTeacherAvailableDaysIsEmptyTrue(@PathVariable int teacherId) {
        return availableDaysService.getTeacherAvailableDaysIsEmptyTrue(teacherId);
    }
}
