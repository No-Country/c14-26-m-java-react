package com.microservice.ecommerce.model;

import java.util.List;

public record DatosActualizarProducto(
		Long id,
		String title,
		Double price,
		Category category,
		String description,
		List<String> images
		) {

}
