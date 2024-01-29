package com.appointment.core.mapper.dtoConverter;


import java.util.List;
import java.util.Optional;


public interface DtoConverterService {
	<S, T> List<T> dtoConverter(List<S> s, Class<T> targetClass);
	public <T> Object dtoClassConverter(Object source,Class<T> baseClass);
}
