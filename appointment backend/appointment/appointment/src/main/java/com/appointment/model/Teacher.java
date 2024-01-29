package com.appointment.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@EqualsAndHashCode(callSuper = false)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "teachers")
@PrimaryKeyJoinColumn(name = "id")
public class Teacher extends User{

    @Column(columnDefinition = "varchar default teacher")
    private String role = "teacher";


    @OneToMany(mappedBy = "teacherAvailableDays")
    private List<AvailableDays> teacherAvailableDays;
}
