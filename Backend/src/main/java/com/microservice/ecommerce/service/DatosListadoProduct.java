package com.microservice.ecommerce.service;

import java.util.List;

import com.microservice.ecommerce.model.Category;
import com.microservice.ecommerce.model.Product;

public record DatosListadoProduct(Long id, String name,Double price, List<String> images, Category category, Integer quantity, Boolean discount) {

	public DatosListadoProduct(Product producto) {
		this(producto.getId(), producto.getName(), producto.getPrice(), producto.getImages(), producto.getCategory(), producto.getQuantity(), producto.getDiscount());
	}
	
	
}
