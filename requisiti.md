#  API REST

landing page
GET https://localhost:8080.biblioteca-web TUTTI I RUOLI

homepage (dopo accesso)
POST /pagina-principale TUTTI I RUOLI

visualizzazione lista libri
GET /libri TUTTI I RUOLI

aggiunta libro
PUT /libri AMMINISTRATORE

rimozione di una copia di un libro
DELETE /libri/copie/codice-copia AMMINISTRATORE

visualizzazione lista utenti e ruoli
GET /utenti AMMINISTRATORE

profilo utente (da aggiungere)
GET /utenti/codice-utente TUTTI I RUOLI

login
POST /accesso TUTTI I RUOLI

registrazione
PUT /registrazione TUTTI I RUOLI
