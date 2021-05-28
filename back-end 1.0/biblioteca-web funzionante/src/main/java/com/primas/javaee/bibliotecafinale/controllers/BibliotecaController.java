package com.primas.javaee.bibliotecafinale.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.primas.javaee.bibliotecafinale.jwt.JwtUtils;
import com.primas.javaee.bibliotecafinale.models.Copia;
import com.primas.javaee.bibliotecafinale.models.Libro;
import com.primas.javaee.bibliotecafinale.playload.LibroRequest;
import com.primas.javaee.bibliotecafinale.playload.MessageResponse;
import com.primas.javaee.bibliotecafinale.repository.CopiaRepository;
import com.primas.javaee.bibliotecafinale.repository.LibroRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/libri")
public class BibliotecaController {
	
	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	LibroRepository libroRepository;
	
	@Autowired
	CopiaRepository copiaRepository;
	
	
	@GetMapping("/")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public List<Libro> getLibri(){
		return libroRepository.findAll();
	}
	
	@PutMapping("/aggiungi")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> aggiungiCopiaLibro(@RequestBody LibroRequest libro) {
		String codice = libro.getCodice();
		Set<Copia> copie = new HashSet<>();
		Libro lib;
		if (libroRepository.existsByCodice(libro.getCodice())){
			//Integer numeroCopie = (libro.getNumeroCopie()+1);
			lib = libroRepository.findByCodice(codice).get();
			//copie = libroRepository.copieLibro(codice);
			copie = lib.getCopie();
					//libroRepository.copieLibro(codice);
					//libro.getCopie();
			System.out.println("Libro: " + lib);
			Integer numeroCopie = lib.getNumeroCopie() + 1;
			System.out.println("Numero copie: " + numeroCopie);
			String codiceCopia; 
				if (numeroCopie < 10) {
					codiceCopia = codice.concat("0").concat(numeroCopie.toString());
				}
				else {
					codiceCopia = codice.concat(numeroCopie.toString());
				}
				System.out.println("Codice copia: " + codiceCopia);
			
			Copia copia = new Copia(codiceCopia, lib);
			copie.add(copia);
			lib.setCopie(copie);
			lib.setNumeroCopie(numeroCopie);
			libroRepository.flush();
			copiaRepository.save(copia);
			
			//libroRepository.save(lib);
			return ResponseEntity.ok(new MessageResponse("Libro esistente, aggiunta una copia: " + lib + ", " + copia));
		}
		else {
			 lib = new Libro(
						libro.getCodice(),
						libro.getTitolo(),
						libro.getAutore()
						);
			Copia copia = new Copia(libro.getCodice().concat("01"), lib);
			copie.add(copia);
			lib.setCopie(copie);
			lib.setNumeroCopie(1);
			libroRepository.save(lib);
			copiaRepository.save(copia);
			//copiaRepository.flush();
			
			//libroRepository.flush();
			return ResponseEntity.ok(new MessageResponse("Nuovo libro: "+ libro + " Copia: " + copia));
		}
		
	}
	
	@DeleteMapping("/copia")
	@PreAuthorize("hasRole('ADMIN')")
	public void rimuoviCopia(@RequestBody String codiceCopia) {
		if (!libroRepository.existsByCodice(codiceCopia)) {
			ResponseEntity.ok(new MessageResponse("Copia non esistente. " + codiceCopia));
		}
		else {
			Copia copia = copiaRepository.findByCodice(codiceCopia).get();
			copiaRepository.delete(copia);
			ResponseEntity.ok(new MessageResponse("Copia cancellata. " + copia));
		}
	}
	
}
