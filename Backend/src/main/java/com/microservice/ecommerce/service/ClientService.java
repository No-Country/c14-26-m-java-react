package com.microservice.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.microservice.ecommerce.model.Client;
import com.microservice.ecommerce.repository.IClientRepository;

@Service
public class ClientService {
	
	@Autowired
	private IClientRepository repository;

	public ResponseEntity<String> save(Client client) {
		ResponseEntity<String> response = null;
		try {
			client.setStatus(Boolean.TRUE);
			Client newClient = repository.save(client);
			response = ResponseEntity.ok("client: " + newClient.getUsername() + " saved succesfully");
		} catch (Exception e) {
			e.printStackTrace();
			response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Failed to save client: " + client.getUsername());
		}
		return response;

	}
	
}
