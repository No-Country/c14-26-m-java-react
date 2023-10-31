package com.microservice.ecommerce.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.ecommerce.model.Category;


public interface CategoryRepository extends JpaRepository<Category, Long>{

	Optional<Category> findByName(String name);

}
