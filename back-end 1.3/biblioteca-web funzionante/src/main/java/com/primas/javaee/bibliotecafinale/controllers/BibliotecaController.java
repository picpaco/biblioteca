package com.primas.javaee.bibliotecafinale.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	public List<Libro> getLibri() {
		return libroRepository.findAll();
	}

	@PutMapping("/aggiorna")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> aggiornaCopiaLibro(@RequestBody LibroRequest libro) {
		String codice = libro.getCodice();
		Set<Copia> copie = new HashSet<>();
		Optional<Libro> lib;
		if (existsByCodice(codice)) {
			// Integer numeroCopie = (libro.getNumeroCopie()+1);
			lib = findByCodice(codice);
			// copie = libroRepository.copieLibro(codice);
			copie = lib.get().getCopie();
			// libroRepository.copieLibro(codice);
			// libro.getCopie();
			System.out.println("Libro: " + lib);
			Integer numeroCopie = lib.get().getNumeroCopie();
			System.out.println("Numero copie: " + numeroCopie);
			// for (int i = 0; i < numeroCo)
			String numCopie = libro.getCodice();
			
			for (Integer i = 0; i < libro.getCopie().size(); i++) {
			    if ( i == 0) {
			    	
			    	numCopie = numCopie.concat("0");
			    }
			    
			    if ( i == 9) {
			    	
			        numCopie = numCopie.replace('0', ' ').replace(" ", "");
			    }
			    
				Copia copia = new Copia(numCopie.concat((new Integer (i+1)).toString()), lib.get());
				copie.add(copia);
				//copiaRepository.save(copia);
			}
			lib.get().setCopie(copie);
			lib.get().setNumeroCopie(numeroCopie);
			libroRepository.flush();
			copiaRepository.saveAll(copie);
			
			System.out.println("Codice copia: " + libro.getCopie().size());

			// Copia copia = new Copia(codiceCopia, lib.get());
			// copie.add(copia);
			// lib.get().setCopie(copie);
			// lib.get().setNumeroCopie(numeroCopie);
			// libroRepository.flush();

			// libroRepository.save(lib);
			return ResponseEntity.ok(new MessageResponse("Libro esistente, aggiunta una copia: " + lib + ", "));
		} else {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Il libro non esiste"));
		}
	}

	@PostMapping("/aggiungi")
	public ResponseEntity<?> aggiungiCopiaLibro(@RequestBody LibroRequest libro) {
		String codice = libro.getCodice();
		if (!existsByCodice(codice)) {
			Libro lib;
			lib = new Libro(libro.getCodice(), libro.getTitolo(), libro.getAutore());
			Set<Copia> copie = new HashSet<>();
			System.out.println("Numero copie della request:------->" + libro.getCopie().size());
			String codiceCopia = libro.getCodice();
			for (Integer i = 0; i < libro.getCopie().size(); i++) {
			    if ( i == 0) {
			    	codiceCopia = codiceCopia.concat("0");
			    }
			    
			    if ( i == 9) {
			    	codiceCopia = codiceCopia.replace('0', ' ').replace(" ", "");
			    }
			    
				Copia copia = new Copia(codiceCopia.concat((new Integer (i+1)).toString()), lib);
				copie.add(copia);
				//copiaRepository.save(copia);
			}
			lib.setCopie(copie);
			lib.setNumeroCopie(libro.getCopie().size());
			libroRepository.save(lib);
			copiaRepository.saveAll(copie);
			// copiaRepository.flush();
			// libroRepository.flush();
			
			return ResponseEntity.ok(new MessageResponse("Nuovo libro: " + libro + " Copie: " + copie));
		} else {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Il libro già esiste"));
		}
	}

	private Optional<Libro> findByCodice(String codice) {
		List<Libro> listaLibri = getLibri();
		for (Libro libro : listaLibri) {
			if (codice.equals(libro.getCodice())) {
				return Optional.of(libro);
			}
		}
		return Optional.empty();
	}

	private boolean existsByCodice(String codice) {
		List<Libro> listaLibri = getLibri();
		for (Libro libro : listaLibri) {
			if (codice.equals(libro.getCodice())) {
				return true;
			}
		}
		return false;
	}

	@DeleteMapping("/copia/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public void rimuoviCopia(@RequestBody String codiceCopia) {
		if (!libroRepository.existsByCodice(codiceCopia)) {
			ResponseEntity.ok(new MessageResponse("Copia non esistente. " + codiceCopia));
		} else {
			Copia copia = copiaRepository.findByCodice(codiceCopia).get();
			copiaRepository.delete(copia);
			ResponseEntity.ok(new MessageResponse("Copia cancellata. " + copia));
		}
	}

}
