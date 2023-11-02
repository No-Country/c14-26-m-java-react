package com.microservice.ecommerce.service;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.microservice.ecommerce.model.Product;
import com.microservice.ecommerce.model.Ticket;
import com.microservice.ecommerce.model.User;
import org.springframework.web.util.UriComponentsBuilder;
import com.microservice.ecommerce.repository.ProductRepository;
import com.microservice.ecommerce.repository.TicketRepository;
import com.microservice.ecommerce.repository.UserRepository;

@Service
public class TicketService {

	@Autowired
	private TicketRepository ticketRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	public ResponseEntity<String> save(Ticket ticket) {
	        // Puedes establecer las relaciones con User y Product según sus ID y realizar otras validaciones si es necesario.
		ResponseEntity<String> response = null;
		try {
			User user = userRepository.findById(ticket.getUser().getId()).orElse(null);
			Ticket ticketSave = new Ticket();
			ticketSave.setUser(user);
			ticketSave.setPrice(ticket.getPrice());
			
			 List<Product> productos = new ArrayList<>();
			    for (Product product : ticket.getProducts()) {
			        Product producto = productRepository.findById(product.getId()).orElse(null);
			        productos.add(producto);
			    }
			    System.out.println(productos);
			    ticketSave.setProducts(productos);
			    
			    Ticket ticketId =ticketRepository.save(ticketSave);
			    response = ResponseEntity.ok("Compra Exitosa. El Id de su ticket es: " + ticketId.getId());
		} catch (Exception e) {
			e.printStackTrace();
			response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error en la compra");
		}	        
	        return response;
	    }

	public Ticket encontrarTicketPorId(Long id) {
		// TODO Auto-generated method stub
		Ticket ticket = new Ticket();
		try {
			ticket = ticketRepository.findById(id).orElse(null);
			//response = ResponseEntity.ok(ticket);
		}catch(Exception e) {
			e.printStackTrace();
			//response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ticket no Encontrado");
		}
		return ticket;
	}
	
	
	

}