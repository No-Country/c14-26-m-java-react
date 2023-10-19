package com.microservice.ecommerce.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Admin")
public class Admin extends Person {

	private ERol rol;

	public Admin() {

	}

	public Admin(Long id, Boolean status, String name, String lastName, String username, String password, String email,
			LocalDate birthday) {
		super(id, status, name, lastName, username, password, email, birthday);
	}

	@Override
	public String getName() {
		// TODO Auto-generated method stub
		return super.getName();
	}

	@Override
	public void setName(String name) {
		// TODO Auto-generated method stub
		super.setName(name);
	}

	@Override
	public String getLastName() {
		// TODO Auto-generated method stub
		return super.getLastName();
	}

	@Override
	public void setLastName(String lastName) {
		// TODO Auto-generated method stub
		super.setLastName(lastName);
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return super.getUsername();
	}

	@Override
	public void setUsername(String username) {
		// TODO Auto-generated method stub
		super.setUsername(username);
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return super.getPassword();
	}

	@Override
	public void setPassword(String password) {
		// TODO Auto-generated method stub
		super.setPassword(password);
	}

	@Override
	public String getEmail() {
		// TODO Auto-generated method stub
		return super.getEmail();
	}

	@Override
	public void setEmail(String email) {
		// TODO Auto-generated method stub
		super.setEmail(email);
	}

	@Override
	public LocalDate getBirthday() {
		// TODO Auto-generated method stub
		return super.getBirthday();
	}

	@Override
	public void setBirthday(LocalDate birthday) {
		// TODO Auto-generated method stub
		super.setBirthday(birthday);
	}

	public ERol getRol() {
		return rol;
	}

	public void setRol(ERol rol) {
		this.rol = rol;
	}

}
