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

	private String name;
	private Double price;
	@Column(length = 2048)
	private List<String> images = new ArrayList<>();
	@ManyToOne
	@JoinColumn(name = "category_id") // foreing_key column name
	private Category category;
	private Integer quantity;
	private Boolean discount;

	public Product() {

	}

	public Product(String name, Double price, List<String> images, Category category, Integer quantity, Boolean discount) {
		super();
		this.name = name;
		this.price = price;
		this.images = images;
		this.category = category;
		this.quantity = quantity;
		this.discount = discount;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Boolean getDiscount() {
		return discount;
	}

	public void setDiscount(Boolean discount) {
		this.discount = discount;
	}

	public void actualizarDatos(DatosActualizarProducto datosActualizarProducto) {
		// TODO Auto-generated method stub
		if(datosActualizarProducto.name() != null) {
			this.name = datosActualizarProducto.name();
		}
		if(datosActualizarProducto.price() != null) {
			this.price = datosActualizarProducto.price();
		}
		if(datosActualizarProducto.category() != null) {
			this.category = datosActualizarProducto.category();
		}
		if(datosActualizarProducto.quantity() != null) {
			this.quantity = datosActualizarProducto.quantity();
		}
		if(datosActualizarProducto.discount() != null) {
			this.discount = datosActualizarProducto.discount();
		}
		if(datosActualizarProducto.images() != null) {
			this.images = datosActualizarProducto.images();
		}

	}

	
	
}
