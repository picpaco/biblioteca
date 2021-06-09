package com.primas.javaee.bibliotecafinale.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.primas.javaee.bibliotecafinale.models.ERole;
import com.primas.javaee.bibliotecafinale.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	
	Optional<Role> findByNome(ERole nome);

}