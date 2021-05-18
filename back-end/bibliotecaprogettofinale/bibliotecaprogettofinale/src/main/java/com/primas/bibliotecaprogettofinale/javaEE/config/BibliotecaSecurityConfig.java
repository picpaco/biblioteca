package com.primas.bibliotecaprogettofinale.javaEE.config;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
@EnableWebSecurity
public class BibliotecaSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private DataSource dataSource;
	

	
	 @Bean 
	 public PasswordEncoder passwordEncoder() { 
		 return new BCryptPasswordEncoder(); 
		 }
	 

	

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication().dataSource(dataSource)
				.passwordEncoder(passwordEncoder())
				.usersByUsernameQuery("SELECT email, password,'true' as enabled from credenziali where email = ?")
				.authoritiesByUsernameQuery("SELECT email, Ruolo " + "FROM  credenziali  " + "WHERE email = ? ");
	
	}
	
	
	   @Override protected void configure(HttpSecurity http) throws Exception {
		   
		   http.authorizeRequests()
		   //.antMatchers("/").permitAll()
			.antMatchers(HttpMethod.GET, "/pagina-principale").hasRole("USER")
			.antMatchers(HttpMethod.GET, "/libri").hasRole("USER")
			.antMatchers(HttpMethod.PUT, "/libri/aggiungi").hasAnyRole("USER", "ADMIN")
			.antMatchers(HttpMethod.DELETE, "libri/copie/**").hasAnyRole("USER", "ADMIN")
			.antMatchers(HttpMethod.GET, "/utenti").hasAnyRole("USER", "ADMIN")
			.antMatchers(HttpMethod.GET, "/utenti/**").hasAnyRole("USER", "ADMIN").and()
			.formLogin()
			.loginPage("/accesso") // ß questo è l'URI del form // URI cui inviare dati
			  //con un POST dopo l'autenticazione 
			  .loginProcessingUrl("/autenticazione") //
			 // Tutti possono vedere il login form 
			  .permitAll().and() // Tutti possono
				 // accedere al logout 
			  .logout() .logoutSuccessUrl("/").permitAll().and()
				.exceptionHandling().accessDeniedPage("/access-denied")
			//.antMatchers(HttpMethod.DELETE, "/api/customers/**").hasRole("ADMIN")
			.and()
			.httpBasic()
			.and()
			.csrf().disable();
			//.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	  
	  /*http.authorizeRequests().antMatchers("/").permitAll()
	  .antMatchers("/pagina-principale").hasRole("USER")
	  .antMatchers("/libri").hasAnyRole("USER",
	  "ADMIN").antMatchers("/libri/*").hasAnyRole("USER","ADMIN")
	  .antMatchers("/utenti").hasRole("ADMIN")
	  //.antMatchers("/utenti/*").hasAnyRole("USER" , "ADMIN");
	  .and()
	  .formLogin() // useremo un form di login personalizzato:
		   
	  .loginPage("/accesso") // ß questo è l'URI del form // URI cui inviare dati
	  //con un POST dopo l'autenticazione 
	  .loginProcessingUrl("/autenticazione") //
	 // Tutti possono vedere il login form 
	  .permitAll() .and() // Tutti possono
	 // accedere al logout 
	  .logout() .logoutSuccessUrl("/").permitAll().and()
		.exceptionHandling().accessDeniedPage("/access-denied");*/
	  
	  }
	 
}
