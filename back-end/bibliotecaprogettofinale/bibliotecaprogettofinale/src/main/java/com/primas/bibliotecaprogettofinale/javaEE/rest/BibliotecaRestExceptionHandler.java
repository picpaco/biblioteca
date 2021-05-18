package com.primas.bibliotecaprogettofinale.javaEE.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;



public class BibliotecaRestExceptionHandler {
	
	@ExceptionHandler
	public ResponseEntity<BibliotecaErrorResponse> handleException(BibliotecaNotFoundException exc) {
		
		// create CustomerErrorResponse
		
		BibliotecaErrorResponse error = new BibliotecaErrorResponse(
											HttpStatus.NOT_FOUND.value(),
											exc.getMessage(),
											System.currentTimeMillis());
		
		// return ResponseEntity
		
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}
	
	
	// Add another exception handler ... to catch any exception (catch all)

	@ExceptionHandler
	public ResponseEntity<BibliotecaErrorResponse> handleException(Exception exc) {
		
		// create CustomerErrorResponse
		
		BibliotecaErrorResponse error = new BibliotecaErrorResponse(
											HttpStatus.BAD_REQUEST.value(),
											exc.getMessage(),
											System.currentTimeMillis());
		
		// return ResponseEntity
		
		return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
	}

}
