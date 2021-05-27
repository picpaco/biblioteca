export class Utente{
    constructor(
        id : number,
      nome:string,
      email:string,
      cognome:string,
     password:string,
     roles: Set<Ruolo>
    ) { }
  }