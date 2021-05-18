package com.primas.bibliotecaprogettofinale.javaEE.rest;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.primas.bibliotecaprogettofinale.javaEE.entity.Copia;
import com.primas.bibliotecaprogettofinale.javaEE.entity.Libro;
import com.primas.bibliotecaprogettofinale.javaEE.service.BibliotecaService;
import com.primas.bibliotecaprogettofinale.javaEE.service.UtenteService;




@RestController
@RequestMapping("/pagina-principale")
public class BibliotecaRestController {
	
	// autowire the CustomerService
	@Autowired
	private BibliotecaService bibliotecaService;
	
	
	
	
	
	// add mapping for GET /customers
	@GetMapping("/libri")
	public Set<Libro> getLibri() {
		
		return bibliotecaService.visualizzaLibri();
		
	}
	
	// add mapping for GET /customers/{customerId}
	
	/*@GetMapping("/libri/")
	
	public Customer getCustomer(@RequestParam("customerId") int theId) {
		
		
		Customer theCustomer = bibliotecaService.getCustomer(theId);
		
		if (theCustomer == null) {
			throw new CustomerNotFoundException("Customer id not found - " + theId);
		}
		
		return theCustomer;
	}*/
	
	// add mapping for POST /customers  - add new customer
	
	@PutMapping("/libri/aggiungi")
	public void aggiungiCopiaLibro(@RequestBody Libro libro) {
		
		// also just in case the pass an id in JSON ... set id to 0
		// this is force a save of new item ... instead of update
		
		bibliotecaService.aggiungiCopiaLibro(libro);;
	
	}
	

	

	
	// add mapping for DELETE /customers/{customerId} - delete customer
	
	@DeleteMapping("/libri/copie/{codiceCopia}")
	public void rimuoviCopia(@PathVariable String codiceCopia) {
		
		Copia tempLibro = bibliotecaService.getCopia(codiceCopia);
		
		// throw exception if null
		
		if (tempLibro == null) {
			throw new BibliotecaNotFoundException("copia non trovata - " + codiceCopia);
		}
				
		bibliotecaService.rimuoviCopia(codiceCopia);;
		
	}
	
		

}
