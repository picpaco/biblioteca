package com.primas.javaee.bibliotecafinale.controllers;

import java.util.HashSet;
import java.util.Iterator;
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
import com.primas.javaee.bibliotecafinale.playload.CopiaRequest;
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

	
	
	public List<Copia> getCopia() {
		return copiaRepository.findAll();
	}
	
	@PutMapping("/prestito")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> prestito(@RequestBody LibroRequest libro) {
		String codice = libro.getCodice();
		Set<Copia> copieDalDb = new HashSet<>();
		Optional<Libro> lib;
		
		if (existsByCodice(codice)) {
			// Integer numeroCopie = (libro.getNumeroCopie()+1);
			lib = findByCodiceLibro(codice);
			// copie = libroRepository.copieLibro(codice);
			copieDalDb = lib.get().getCopie();
			
			
			
			
		    for(Copia copiaRequest : libro.getCopie()) {
		    	for(Iterator<Copia> iterator = copieDalDb.iterator(); iterator.hasNext();) {
		    		Copia c = iterator.next();
		    		if( c.getCodice().equals(copiaRequest.getCodice())) {
		    			//System.out.println("Trovata copia:"+copiaRequest.getCodice());
		    			
						c.setInPrestito(copiaRequest.isInPrestito());
						
						
						//System.out.println("");
						
					}
				}
		    	
		    }
		
			libroRepository.flush();
			copiaRepository.saveAll(copieDalDb);
			return ResponseEntity.ok(new MessageResponse("Stato prestito della copia aggiornato" ));	
		}else {
			return ResponseEntity.badRequest().body(new MessageResponse("Errore il libro non esiste"));
		}
	}

	
	
	@PutMapping("/aggiorna")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> aggiornaCopiaLibro(@RequestBody LibroRequest libro) {
		String codice = libro.getCodice();
		Set<Copia> copie = new HashSet<>();
		Optional<Libro> lib;
		if (existsByCodice(codice)) {
			// Integer numeroCopie = (libro.getNumeroCopie()+1);
			lib = findByCodiceLibro(codice);
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
			lib.setNumeroCopie(libro.getNumeroCopie());
			Set<Copia> copie = new HashSet<>();
			System.out.println("Numero copie della request:------->" + libro.getNumeroCopie());
			String codiceCopia = libro.getCodice();
			
			//for (Integer i = 0; i < libro.getCopie().size(); i++) {
			for (Integer i = 0; i < libro.getNumeroCopie(); i++) {
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
			//lib.setNumeroCopie(libro.getCopie().size());
			libroRepository.save(lib);
			copiaRepository.saveAll(copie);
			// copiaRepository.flush();
			// libroRepository.flush();
			
			return ResponseEntity.ok(new MessageResponse("Nuovo libro: " + libro + " Copie: " + copie));
		} else {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Il libro già esiste"));
		}
	}

	private Optional<Libro> findByCodiceLibro(String codice) {
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
	
	private Optional<Copia> findByCodiceCopia(String codiceCopia) {
		String codiceLibro=codiceCopia.substring(0, 5);
		System.out.println("METODO FINDBYCODICECOPIA SUBSTRING CODICECOPIA "+codiceCopia);
		System.out.println("METODO FINDBYCODICECOPIA SUBSTRING "+codiceLibro);
		if(existsByCodice(codiceLibro)) {
			Optional<Libro> libro=findByCodiceLibro(codiceLibro);
			
			Set<Copia> tutteLeCopie=libro.get().getCopie();
			for (Copia copia : tutteLeCopie) {
				if (copia.getCodice().equals(codiceCopia)) {
					return Optional.of(copia);
				}
			}
			
		}else {
			return Optional.empty();
		}
	
		
		
		
		return null;
	}
	@DeleteMapping("/copia/")
	@PreAuthorize("hasRole('ADMIN')")
	public void rimuoviCopia(@RequestBody Copia copia) {
	
		System.out.println("CODICE COPIA "+copia);
		
		//System.out.println("COPIA REPOSITORY "+copiaRepository.existsByCodice(copia));
		Optional <Copia> copieDaCancellare=findByCodiceCopia(copia.getCodice());
		
		if (!copieDaCancellare.isPresent()) {
		    System.out.println("DENTRO IF");
			ResponseEntity.ok(new MessageResponse("Copia non esistente. " + copia));
		} else {
			System.out.println("Trovata copia con codice"+copia);
			
		    Long id=copieDaCancellare.get().getId();
			//System.out.println("COPIA FINDBYCODICECOPIA"+copia);
		    String codiceLibro=copia.getCodice().substring(0, 5);
		    Optional<Libro> lib= findByCodiceLibro(codiceLibro);
		    System.out.println("LIB "+lib);
		    lib.get().setNumeroCopie(lib.get().getNumeroCopie()-1);
		    
			copiaRepository.delete(copieDaCancellare.get());
			ResponseEntity.ok(new MessageResponse("Copia cancellata. " + id));
		}
	}



	

}
