package com.microservice.ecommerce.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Catalogue {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Boolean status;
	
	public Catalogue() {
		setStatus(Boolean.TRUE);
	}
	
	public Catalogue(Long id, Boolean status) {
		
		this.id = id;
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}
	
}
