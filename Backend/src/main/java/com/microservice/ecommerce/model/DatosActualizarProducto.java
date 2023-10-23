package com.microservice.ecommerce.model;



public record DatosActualizarProducto(
		Long id,
		String name,
		Double price,
		Category category,
		Integer quantity,
		Boolean discount
		) {

}
