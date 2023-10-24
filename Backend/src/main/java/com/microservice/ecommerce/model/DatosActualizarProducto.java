package com.microservice.ecommerce.model;

import java.util.List;

public record DatosActualizarProducto(
		Long id,
		String name,
		Double price,
		Category category,
		Integer quantity,
		Boolean discount,
		List<String> images
		) {

}
