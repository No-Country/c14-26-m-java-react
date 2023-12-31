package com.microservice.ecommerce.controller;

import com.microservice.ecommerce.model.DatosActualizarProducto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.ecommerce.model.Product;

import com.microservice.ecommerce.service.DatosListadoProduct;

import com.microservice.ecommerce.service.ProductService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

@CrossOrigin(origins = "${ALLOWED_ORIGINS}")
@RestController
@RequestMapping("/product")
public class ProductController {

	/*
	 * @PostMapping public void registrarProducto(@RequestBody @Valid
	 * DatosRegistroProducto datosRegistroProducto) { productoRepository.save(new
	 * Produto(datosRegistroProducto)); }
	 */

	@Autowired
	private ProductService service;

	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody Product product) {
		return service.save(product);
	}

	@GetMapping("/get")
	public ResponseEntity<Page<DatosListadoProduct>> listar(@PageableDefault(size = 2) Pageable paginacion) {
		return service.listar(paginacion);
	}

	@GetMapping("/find/{id}")
	public Product save(@PathVariable Long id) {
		return service.findById(id);
	}

	@DeleteMapping("/delete/{id}") // entre corchetes el nombre de la variable
	public ResponseEntity<String> desactivarProducto(@PathVariable Long id) {
		return service.borrar(id);
	}

	@PutMapping("/update")
	public ResponseEntity<String> actualizarProducto(@RequestBody DatosActualizarProducto datosActualizarProducto) {
		return service.update(datosActualizarProducto);
	}

}
