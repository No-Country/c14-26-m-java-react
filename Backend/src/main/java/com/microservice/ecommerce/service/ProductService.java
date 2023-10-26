package com.microservice.ecommerce.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.domain.Page;

import com.microservice.ecommerce.model.DatosActualizarProducto;
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
			response = ResponseEntity.ok("producto: " + newProduct.getTitle() + " saved succesfully");
		} catch (Exception e) {
			e.printStackTrace();
			response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al guardar el producto");
		}
		return response;

	}

	public ResponseEntity<Page<DatosListadoProduct>> listar(@PageableDefault(size = 2) Pageable paginacion) {// el pageable llega del FE

		return ResponseEntity.ok(repository.findByStatusTrue(paginacion).map(DatosListadoProduct::new));
	}

	public Product findById(Long id) {
		Optional<Product> product = repository.findById(id);
		return product.isPresent() ? product.get() : null;
	}

	@Transactional
	public ResponseEntity<String> borrar(Long id) {

		ResponseEntity<String> response = null;
		try {
			Product product = repository.getReferenceById(id);
			repository.delete(product); // borra los datos hasta en la base de datos
			response = ResponseEntity.ok("producto: " + id + " delete succesfully");
		} catch (Exception e) {
			e.printStackTrace();
			response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error al borrar el producto");
		}
		return response;
	}

	@Transactional
	public ResponseEntity<String> update(DatosActualizarProducto datosActualizarProducto) {
		ResponseEntity<String> response = null;
		try {
			Product product = repository.getReferenceById(datosActualizarProducto.id());
			product.actualizarDatos(datosActualizarProducto);
			response = ResponseEntity.ok("Producto Actualizado");
		}catch(Exception e) {
			e.printStackTrace();
			response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error al actualizar el producto");
		}
		return response;
	}
	
}
