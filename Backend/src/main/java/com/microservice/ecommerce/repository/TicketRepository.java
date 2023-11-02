package com.microservice.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.ecommerce.model.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long>{

}
