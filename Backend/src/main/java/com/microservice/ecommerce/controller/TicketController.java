package com.microservice.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.ecommerce.model.Ticket;
import com.microservice.ecommerce.service.TicketService;


@RestController
@RequestMapping("/ticket")
public class TicketController {
	
	@Autowired
	private TicketService service;
	
	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody Ticket ticket) {
		return service.save(ticket);
	}
	
	@GetMapping("/find/{id}")
	Ticket encontrarTicketPorId(@PathVariable Long id) {
		return service.encontrarTicketPorId(id);
	}

}