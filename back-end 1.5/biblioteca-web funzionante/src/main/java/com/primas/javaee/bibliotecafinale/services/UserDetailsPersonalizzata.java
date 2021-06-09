package com.primas.javaee.bibliotecafinale.services;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserDetailsPersonalizzata extends UserDetails {

	public Collection<? extends GrantedAuthority> getAuthorities();
    public String getPassword();
    public String getEmail();
    public Long getId();
    public String getNome();
    public String getCognome();
    
}
