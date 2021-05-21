package com.primas.javaee.bibliotecaweb.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.primas.javaee.bibliotecaweb.models.ERole;
import com.primas.javaee.bibliotecaweb.models.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
