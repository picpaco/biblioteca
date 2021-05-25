package com.primas.javaee.bibliotecafinale.repository;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.primas.javaee.bibliotecafinale.models.Copia;
import com.primas.javaee.bibliotecafinale.models.Libro;

public interface LibroRepository extends JpaRepository<Libro, Long>{
	
	Optional<Libro> findByCodice(String codice);
	
	Boolean existsByCodice(String codice);
	
//	@Query(value = "SELECT numeroCopie FROM Libro l WHERE l.codice = ?1")
//	Integer getNumCopieByCodice(String codice);
	
	@Query(value = "SELECT l.copie FROM Libro l WHERE l.codice = ?1")
	Set<Copia> copieLibro(String codice);
	
}
