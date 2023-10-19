package com.microservice.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.ecommerce.model.Admin;

public interface IAdminRepository extends JpaRepository<Admin, Long> {

	public abstract Admin findByUsername(String username);
}
