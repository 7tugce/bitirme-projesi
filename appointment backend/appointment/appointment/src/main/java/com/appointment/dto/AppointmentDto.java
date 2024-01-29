package com.appointment.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDto {
    private int id;
    private int teacherId;
    private int studentId;
    private int availableDaysId;
    @JsonIgnore
    private boolean status = false;
}
