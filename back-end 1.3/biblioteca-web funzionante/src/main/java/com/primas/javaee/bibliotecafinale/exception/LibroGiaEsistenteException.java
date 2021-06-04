package com.primas.javaee.bibliotecafinale.exception;

public class LibroGiaEsistenteException extends RuntimeException {

	private static final long serialVersionUID = 2551911579518279605L;

	public LibroGiaEsistenteException() {
	}

	public LibroGiaEsistenteException(String message) {
		super(message);
	}

	public LibroGiaEsistenteException(Throwable cause) {
		super(cause);
	}

	public LibroGiaEsistenteException(String message, Throwable cause) {
		super(message, cause);
	}

	public LibroGiaEsistenteException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
