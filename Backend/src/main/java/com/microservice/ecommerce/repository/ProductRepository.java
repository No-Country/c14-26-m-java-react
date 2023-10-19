package com.microservice.ecommerce.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.ecommerce.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	
	Page<Product> findByStatusTrue(Pageable paginacion);

}
