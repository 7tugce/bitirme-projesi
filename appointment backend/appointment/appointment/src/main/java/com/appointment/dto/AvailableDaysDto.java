package com.appointment.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AvailableDaysDto {
    private int id;
    private String availableDay;
    private String hour;
    @JsonIgnore
    private boolean isEmpty = true;
    private int teacherAvailableDaysId;
}
