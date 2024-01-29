package com.appointment.repository;

import com.appointment.model.AvailableDays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AvailableDaysRepository extends JpaRepository<AvailableDays, Integer> {
    List<AvailableDays> findByTeacherAvailableDaysId(int teacherId);

    boolean existsIsEmptyTrueById(int availableDaysId);

    @Query("SELECT ad FROM AvailableDays ad WHERE ad.teacherAvailableDays.id = :teacherId AND ad.isEmpty = true")
    List<AvailableDays> findEmptyAvailableDaysByTeacherId(@Param("teacherId") int teacherId);
}
