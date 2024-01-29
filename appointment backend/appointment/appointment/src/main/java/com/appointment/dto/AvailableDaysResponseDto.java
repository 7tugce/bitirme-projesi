package com.appointment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AvailableDaysResponseDto {
    private int id;
    private String availableDay;
    private String hour;
    private boolean isEmpty;
}
