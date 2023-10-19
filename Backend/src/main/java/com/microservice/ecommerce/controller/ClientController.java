package com.microservice.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.ecommerce.model.Client;
import com.microservice.ecommerce.service.ClientService;


@RestController
@RequestMapping("/client")
public class ClientController {

	@Autowired
	private ClientService service;

	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody Client client) {
		return service.save(client);
	}
	

	

}
