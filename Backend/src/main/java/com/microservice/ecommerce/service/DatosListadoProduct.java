package com.microservice.ecommerce.service;

import java.util.List;

import com.microservice.ecommerce.model.Category;
import com.microservice.ecommerce.model.Product;

public record DatosListadoProduct(Long id, String title, Double price, List<String> images, Category category,
		String description) {

	public DatosListadoProduct(Product producto) {
		this(producto.getId(), producto.getTitle(), producto.getPrice(), producto.getImages(), producto.getCategory(),
				producto.getDescription());
	}

}
