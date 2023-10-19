package com.microservice.ecommerce.model;

import java.time.LocalDate;

import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Person extends Catalogue {
	
	private String name;
	private String lastName;
	private String username;
	private String password;
	private String email;
	private LocalDate birthday;
	
	public Person () {
		
	}

	public Person(Long id, Boolean status, String name, String lastName, String username, String password, String email,
			LocalDate birthday) {
		super(id, status);
		this.name = name;
		this.lastName = lastName;
		this.username = username;
		this.password = password;
		this.email = email;
		this.birthday = birthday;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDate getBirthday() {
		return birthday;
	}

	public void setBirthday(LocalDate birthday) {
		this.birthday = birthday;
	}
}
