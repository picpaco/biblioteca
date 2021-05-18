package com.primas.bibliotecaprogettofinale.javaEE.rest;

public class UtenteNotFoundException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1145375909262535570L;

	public UtenteNotFoundException() {
	}

	public UtenteNotFoundException(String message) {
		super(message);
	}

	public UtenteNotFoundException(Throwable cause) {
		super(cause);
	}

	public UtenteNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public UtenteNotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
