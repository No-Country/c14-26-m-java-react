package com.microservice.ecommerce.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Category")
public class Category extends Catalogue {

	private String name;
	@Column(length = 2048)
	private String details;

	public Category() {

	}

	public Category(Long id, Boolean status, String name, String details) {
		super(id, status);
		this.name = name;
		this.details = details;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public void actualizarDatos(Category category) {
		if(category.getName()!= null) {
			this.name = category.name;
		}
		if(category.getDetails()!= null) {
			this.details = category.details;
		}
	}
}
