package com.microservice.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import com.microservice.ecommerce.model.Product;
import com.microservice.ecommerce.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository repository;
	
	public ResponseEntity<String> save(Product product) {
		ResponseEntity<String> response = null;
		try {
			product.setStatus(Boolean.TRUE);
			Product newProduct = repository.save(product);
			response = ResponseEntity.ok("producto: " + newProduct.getName() + " saved succesfully");
		} catch (Exception e) {
			e.printStackTrace();
			response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error al guardar el producto");
		}
		return response;

	}
	
	
	public ResponseEntity<Page<DatosListadoProduct>> listar(@PageableDefault(size= 2) Pageable paginacion){//el pageable llega del frontend
				
		return ResponseEntity.ok(repository.findByStatusTrue(paginacion).map(DatosListadoProduct:: new ));
	}
	
	
	
}
