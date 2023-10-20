package com.microservice.ecommerce.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.ecommerce.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Boolean existsByIdAndStatusTrue(Long id);

	List<User> findByStatusTrue();
	
	Optional<User> findByUsername(String username);

}
