package com.microservice.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservice.ecommerce.model.Client;

@Repository
public interface IClientRepository extends JpaRepository<Client, Long> {

	Boolean existsByIdAndStatusTrue(Long id);

	List<Client> findByStatusTrue();

}
