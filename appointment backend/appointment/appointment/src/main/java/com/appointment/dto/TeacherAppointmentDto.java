package com.appointment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeacherAppointmentDto {

    private int id;
    private String StudentFullName;
    private String StudentEmail;
    private String availableDaysHour;
    private String availableDaysAvailableDay;
    private boolean status;
    private boolean isStatusChanged;
}
