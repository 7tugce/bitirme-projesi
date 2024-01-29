package com.appointment.service;

import com.appointment.core.mapper.dtoConverter.DtoConverterService;
import com.appointment.dto.AvailableDaysDto;
import com.appointment.dto.AvailableDaysResponseDto;
import com.appointment.model.AvailableDays;
import com.appointment.repository.AvailableDaysRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvailableDaysService {

    private final AvailableDaysRepository availableDaysRepository;
    private final DtoConverterService dtoConverterService;

    public AvailableDaysService(AvailableDaysRepository availableDaysRepository, DtoConverterService dtoConverterService) {
        this.availableDaysRepository = availableDaysRepository;
        this.dtoConverterService = dtoConverterService;
    }

    public AvailableDays save(AvailableDaysDto availableDaysDto){
        return availableDaysRepository.save((AvailableDays) dtoConverterService.dtoClassConverter(availableDaysDto, AvailableDays.class));
    }

    public List<AvailableDaysResponseDto> getTeacherAvailableDays(int teacherId){
        return (dtoConverterService.dtoConverter(availableDaysRepository.findByTeacherAvailableDaysId(teacherId), AvailableDaysResponseDto.class));
    }

    public boolean getTeacherAvailableDaysByAvailableDaysId(int availableDaysId) {
        return availableDaysRepository.existsIsEmptyTrueById(availableDaysId);
    }

    public void updateAvailableIsEmpty(int id) {
        AvailableDays availableDays = availableDaysRepository.findById(id).get();
        availableDays.setEmpty(false);
        availableDaysRepository.save(availableDays);
    }

    public List<AvailableDaysResponseDto> getTeacherAvailableDaysIsEmptyTrue(int teacherId){
        return (dtoConverterService.dtoConverter(availableDaysRepository.findEmptyAvailableDaysByTeacherId(teacherId), AvailableDaysResponseDto.class));
    }
}
