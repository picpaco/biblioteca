package com.primas.javaee.bibliotecafinale.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.primas.javaee.bibliotecafinale.models.Libro;

public interface LibroRepository extends JpaRepository<Libro, Long>{
	
	Optional<Libro> findByCodice(String codice);
	
	Boolean existsByCodice(String codice);
	
//	@Query(value = "SELECT numeroCopie FROM Libro l WHERE l.codice = ?1")
//	Integer getNumCopieByCodice(String codice);
	
//	@Query(value = "SELECT l.coie FROM Libro l WHERE l.codice = ?1")
//	Set<Copia> copieLibro(String codice);
	
}
