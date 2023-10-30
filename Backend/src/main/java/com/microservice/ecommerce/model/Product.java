package com.microservice.ecommerce.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Product")
public class Product extends Catalogue {

	private String title;
	private Double price;
	@Column(length = 2048)
	private List<String> images = new ArrayList<>();
	@ManyToOne
	@JoinColumn(name = "category_id") // foreing_key column name
	private Category category;
	@Column(length = 2048)
	private String description;

	public Product() {

	}

	public Product(String title, Double price, List<String> images, Category category, String description) {
		super();
		this.title = title;
		this.price = price;
		this.images = images;
		this.category = category;
		this.description = description;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public List<String> getImages() {
		return images;
	}

	public void setImages(List<String> images) {
		this.images = images;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void actualizarDatos(DatosActualizarProducto datosActualizarProducto) {
		
		if (datosActualizarProducto.title() != null) {
			this.title = datosActualizarProducto.title();
		}
		if (datosActualizarProducto.price() != null) {
			this.price = datosActualizarProducto.price();
		}
		if (datosActualizarProducto.category() != null) {
			this.category = datosActualizarProducto.category();
		}
		if (datosActualizarProducto.description() != null) {
			this.description = datosActualizarProducto.description();
		}
		if (datosActualizarProducto.images() != null) {
			this.images = datosActualizarProducto.images();
		}

	}

}
