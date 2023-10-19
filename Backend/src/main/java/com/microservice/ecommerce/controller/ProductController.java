package com.microservice.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.ecommerce.model.Client;
import com.microservice.ecommerce.model.Product;
import com.microservice.ecommerce.repository.ProductRepository;
import com.microservice.ecommerce.service.DatosListadoProduct;
import com.microservice.ecommerce.service.ProductService;

@RestController	
@RequestMapping("/product")
public class ProductController {

	
	
	
	/*@PostMapping
	public void registrarProducto(@RequestBody @Valid DatosRegistroProducto datosRegistroProducto) {
		productoRepository.save(new Produto(datosRegistroProducto));
	}*/
	
	@Autowired
	private ProductService service;

	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody Product product) {
		return service.save(product);
	}
	
	@GetMapping("/get")
	public ResponseEntity<Page<DatosListadoProduct>> listar(@PageableDefault(size= 2) Pageable paginacion){//el pageable llega del frontend
		return service.listar(paginacion);
	}
	
	
	
	
	
}

