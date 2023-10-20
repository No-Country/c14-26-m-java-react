package com.microservice.ecommerce.auth;

import com.microservice.ecommerce.model.Catalogue;
import com.microservice.ecommerce.model.ERole;

public class RegisterRequest extends Catalogue {

	private String name;
	private String lastName;
	private String username;
	private String password;
	private String email;
	private ERole role;

	public RegisterRequest() {

	}

	public RegisterRequest(Long id, Boolean status, String name, String lastName, String username, String password,
			String email, ERole role) {
		super(id, status);
		this.name = name;
		this.lastName = lastName;
		this.username = username;
		this.password = password;
		this.email = email;
		this.role = role;
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

	public ERole getRole() {
		return role;
	}

	public void setRole(ERole role) {
		this.role = role;
	}

}
