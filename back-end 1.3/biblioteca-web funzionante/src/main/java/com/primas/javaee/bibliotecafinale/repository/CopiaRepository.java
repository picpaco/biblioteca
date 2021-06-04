package com.primas.javaee.bibliotecafinale.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.primas.javaee.bibliotecafinale.models.Copia;

public interface CopiaRepository extends JpaRepository<Copia, Long> {
	
	Optional<Copia> findByCodice(String codice);
	
	Boolean existsByCodice(String codice);

}
