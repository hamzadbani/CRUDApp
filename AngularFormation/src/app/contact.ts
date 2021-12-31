export class Contact {
    id : number;
    nom: string;
    prenom: string;
    tel: number;
    status: string;
    etat: string;

  constructor(){
    this.id = 0;
    this.nom = "";
    this.prenom = "";
    this.tel = 0;
    this.status = "inactive";
    this.etat = "occuper";
  }
}
