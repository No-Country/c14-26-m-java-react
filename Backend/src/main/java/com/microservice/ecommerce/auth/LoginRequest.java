package com.microservice.ecommerce.auth;

import lombok.Data;

@Data
public class LoginRequest {

	String username;
	String password;
}
