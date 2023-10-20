package com.microservice.ecommerce.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.microservice.ecommerce.model.User;
import com.microservice.ecommerce.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;

	public ResponseEntity<String> save(User user) {
		ResponseEntity<String> response = null;
		try {
			user.setStatus(Boolean.TRUE);
			User newUser = repository.save(user);
			response = ResponseEntity.ok("client: " + newUser.getUsername() + " saved succesfully");
		} catch (Exception e) {
			e.printStackTrace();
			response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Failed to save client: " + user.getUsername());
		}
		return response;

	}
	
	public List<User> findAll() {
		List<User> result = new ArrayList<>();
		try {
			result = repository.findByStatusTrue();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public ResponseEntity<String> update(Long id, User user) {
		ResponseEntity<String> response = null;
		try {
			
			// completar
			
		}catch(Exception e) {
			e.printStackTrace();
			response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Failed to update client: " + user.getUsername());
		}
		return response;
	}
	
}
