package com.microservice.ecommerce.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.microservice.ecommerce.model.ERole;
import com.microservice.ecommerce.model.User;
import com.microservice.ecommerce.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	public ResponseEntity<String> save(User user) {
		ResponseEntity<String> response = null;
		try {
			Optional<User> existingUser = repository.findByUsername(user.getUsername());
			if (existingUser.isPresent() && existingUser.get().getUsername().equals(user.getUsername())) {
				response = ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username is already in use");
			} else {
				user.setStatus(Boolean.TRUE);
				user.setPassword(passwordEncoder.encode(user.getPassword()));
				user.setRole(ERole.USER);
				User newUser = repository.save(user);
				response = ResponseEntity.ok("user: " + newUser.getUsername() + " saved succesfully");
			}

		} catch (Exception e) {
			e.printStackTrace();
			response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Failed to save user: " + user.getUsername());
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
		if (repository.existsByIdAndStatusTrue(id)) {
			try {
				Errors result = new BeanPropertyBindingResult(user, "user");
				if (!result.hasErrors()) {
					user.setId(id);
					user.setStatus(Boolean.TRUE);
					user.setRole(ERole.USER);
					user.setPassword(passwordEncoder.encode(user.getPassword()));
					repository.save(user);
					response = ResponseEntity.ok("user: " + user.getUsername() + " updated succesfully");
				} else {
					response = ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error updating user");
				}
			} catch (Exception e) {
				e.printStackTrace();
				response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
						.body("Failed to update user: " + user.getUsername());
			}
		} else {
			response = ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with ID " + id + " not found");
		}

		return response;
	}

	public ResponseEntity<String> delete(Long id) {
		ResponseEntity<String> response = null;
		try {
			if (repository.existsById(id)) {
				repository.deleteById(id);
				response = ResponseEntity.ok("user: " + id + " deleted succesfully");
			} else {
				response = ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with ID " + id + " not found");
			}
		} catch (Exception e) {
			e.printStackTrace();
			response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete user: " + id);
		}
		return response;
	}
}
