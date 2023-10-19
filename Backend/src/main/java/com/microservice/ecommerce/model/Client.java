package com.microservice.ecommerce.model;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table (name = "Client")
public class Client extends Person{
	
	private ERol rol;
	
	public Client () {
		
	}

	public Client(Long id, Boolean status, String name, String lastName, String username, String password, String email,
			LocalDate birthday, ERol rol) {
		super(id, status, name, lastName, username, password, email, birthday);
		this.rol = rol;
	}

	public ERol getRol() {
		return rol;
	}

	public void setRol(ERol rol) {
		this.rol = rol;
	}

}
