package com.primas.javaee.bibliotecafinale.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.primas.javaee.bibliotecafinale.jwt.JwtUtils;
import com.primas.javaee.bibliotecafinale.models.User;
import com.primas.javaee.bibliotecafinale.repository.RoleRepository;
import com.primas.javaee.bibliotecafinale.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/utenti")
public class UtenteController {
	
	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;
	
	@Autowired
	JwtUtils jwtUtils;
	
	@GetMapping("/listaUtenti")
	@PreAuthorize("hasRole('ADMIN')")
	public List<User> getUtenti(){
		return userRepository.findAll();
	}

}
