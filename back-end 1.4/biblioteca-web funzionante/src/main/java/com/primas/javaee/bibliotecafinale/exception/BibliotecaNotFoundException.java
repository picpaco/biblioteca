package com.primas.javaee.bibliotecafinale.exception;

public class BibliotecaNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2551911579518279605L;

	public BibliotecaNotFoundException() {
	}

	public BibliotecaNotFoundException(String message) {
		super(message);
	}

	public BibliotecaNotFoundException(Throwable cause) {
		super(cause);
	}

	public BibliotecaNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public BibliotecaNotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}
	
}
