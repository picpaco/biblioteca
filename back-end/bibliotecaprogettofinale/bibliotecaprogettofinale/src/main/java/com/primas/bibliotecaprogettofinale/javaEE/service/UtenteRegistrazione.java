package com.primas.bibliotecaprogettofinale.javaEE.service;

import com.primas.bibliotecaprogettofinale.javaEE.entity.Utente;
import com.primas.bibliotecaprogettofinale.javaEE.rest.UtenteDto;

public interface UtenteRegistrazione {

	Utente registerNewUserAccount(UtenteDto accountDto);
}
