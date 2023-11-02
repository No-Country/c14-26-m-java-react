package com.microservice.ecommerce.dto;

public class UserDTO {

	private String token;
	private String name;
	private String lastName;
	private String username;

	public UserDTO() {

	}

	public UserDTO(String token, String name, String lastName, String username) {
		this.token = token;
		this.name = name;
		this.lastName = lastName;
		this.username = username;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
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
}
