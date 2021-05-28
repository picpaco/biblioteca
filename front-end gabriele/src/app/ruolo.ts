export class Ruolo{

    nome: string = "";

    constructor(
        id: number
    ) { 
        this.controllaRuolo(id);
    }

    controllaRuolo(id: number): string {
        if (id === 1) {
            this.nome = "AMMINISTRATORE";
        }
        else {
            this.nome = "UTENTE";
        }
        return this.nome;
    }

}