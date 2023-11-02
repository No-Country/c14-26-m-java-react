package com.microservice.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.ecommerce.model.Category;
import com.microservice.ecommerce.service.CategoryService;

@CrossOrigin(origins = "${ALLOWED_ORIGINS}")
@RestController	
@RequestMapping("/category")
public class CategoryController {
	
	@Autowired
	private CategoryService service;

	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody Category category) {
		return service.save(category);
	}
	
	@GetMapping("/list")
	public List<Category> findAll() {
		return service.findAll();
	}

	@PutMapping("/update")
	public ResponseEntity<String> update(@RequestBody Category category) {
		return service.update(category);
	}

}
