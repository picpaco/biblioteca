package com.primas.bibliotecaprogettofinale.javaEE.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "credenziali")
public class Utente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_utente")
	private int codiceUtente;

	@Column(name = "nome")
	private String nome;

	@Column(name = "cognome")
	private String cognome;

	@Pattern(regexp = "[A-z0-9\\.\\+_-]+@[A-z0-9\\._-]+\\.[A-z]{2,6}", message = "Campo mail non valido")
	@Column(name = "email")
	private String email;

	@Pattern(regexp = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@*#&!?])[a-zA-Z0-9!?@#*&]{8,8}", message = "Campo password non valido")
	@Column(name = "password")
	private String password;

	@Column(name = "Ruolo")
	private String ruolo;

	/*
	 * @Transient private int numeroOperazioni = 0;
	 * 
	 * 
	 * public void incrementaNumeroOperazioni() { numeroOperazioni++; } public int
	 * getNumeroOperazioni() { return numeroOperazioni; }
	 * 
	 * public void setNumeroOperazioni(int numeroOperazioni) { this.numeroOperazioni
	 * = numeroOperazioni; }
	 */

	public int getId() {
		return codiceUtente;
	}

	public void setId(int id) {
		this.codiceUtente = id;
	}

	public String getNome() {
		return nome;
	}

	public String getCognome() {
		return cognome;
	}

	public String getEmail() {
		return email;
	}

	@Override
	public String toString() {
		return "Utente [nome=" + nome + ", cognome=" + cognome + ", email=" + email + ", password=" + password + "]";
	}

	public String getPassword() {
		return password;
	}

	public Utente() {
		this.ruolo = "ROLE_USER";

	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Utente(String nome, String cognome, String email, String password) {
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.password = password;
		this.ruolo = "ROLE_USER";

	}

	public String getRuolo() {
		return ruolo;
	}

	public void setRuolo(String ruolo) {
		this.ruolo = ruolo;
	}

	@Override
	public boolean equals(Object o) {
		boolean uguale = false;
		if (email.equals(((Utente) o).getEmail())) {
			uguale = true;
		} else {
			uguale = false;
		}
		return uguale;
	}

}
