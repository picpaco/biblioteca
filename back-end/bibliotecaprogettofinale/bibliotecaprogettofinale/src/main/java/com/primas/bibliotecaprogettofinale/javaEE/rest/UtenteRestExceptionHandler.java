package com.primas.bibliotecaprogettofinale.javaEE.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class UtenteRestExceptionHandler {
	
	@ExceptionHandler
	public ResponseEntity<UtenteErrorResponse> handleException(BibliotecaNotFoundException exc) {
		
		// create CustomerErrorResponse
		
		UtenteErrorResponse error = new UtenteErrorResponse(
											HttpStatus.NOT_FOUND.value(),
											exc.getMessage(),
											System.currentTimeMillis());
		
		// return ResponseEntity
		
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}
	
	
	// Add another exception handler ... to catch any exception (catch all)

	@ExceptionHandler
	public ResponseEntity<UtenteErrorResponse> handleException(Exception exc) {
		
		// create CustomerErrorResponse
		
		UtenteErrorResponse error = new UtenteErrorResponse(
											HttpStatus.BAD_REQUEST.value(),
											exc.getMessage(),
											System.currentTimeMillis());
		
		// return ResponseEntity
		
		return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
	}

}
