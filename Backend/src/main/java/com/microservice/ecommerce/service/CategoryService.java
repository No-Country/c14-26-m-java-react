package com.microservice.ecommerce.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.microservice.ecommerce.model.Category;
import com.microservice.ecommerce.model.Product;
import com.microservice.ecommerce.repository.CategoryRepository;

import jakarta.transaction.Transactional;

import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository repository;

	public ResponseEntity<String> save(Category category) {
		ResponseEntity<String> response = null;
		try {
			Optional<Category> existingCategory = repository.findByName(category.getName());
			if (existingCategory.isPresent() && existingCategory.get().getName().equals(category.getName())) {
				response = ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Categoria ya registrada");
			} else {
				repository.save(category);
				response = ResponseEntity.ok("Category: " + category.getName() + " saved succesfully");
			}

		} catch (Exception e) {
			e.printStackTrace();
			response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Failed to save category: " + category.getName());
		}
		return response;
	}

	public List<Category> findAll() {
		// TODO Auto-generated method stub
		List<Category> result = new ArrayList<>();
		try {
			result = repository.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Transactional
	public ResponseEntity<String> update(Category category) {
		// TODO Auto-generated method stub
		ResponseEntity<String> response = null;
		try {
			Category categoryA = repository.getReferenceById(category.getId());
			categoryA.actualizarDatos(category);
			response = ResponseEntity.ok("Categoria Actualizada");
		}catch(Exception e) {
			e.printStackTrace();
			response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error al actualizar la categoria");
		}
		return response;
	}

}
