package com.appointment.core.mapper.dtoConverter;

import com.appointment.dto.AppointmentDto;
import com.appointment.model.Appointment;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DtoConverterManager implements DtoConverterService{

	private final ModelMapper modelMapper;
	
	@Override
	public <S, T> List<T> dtoConverter(List<S> s, Class<T> targetClass) {
		return s.stream().map(element -> modelMapper.map(element, targetClass)).collect(Collectors.toList());
	}

	@Override
	public <T> Object dtoClassConverter(Object source, Class<T> baseClass) {
		return modelMapper.map(source,baseClass);
	}
}
