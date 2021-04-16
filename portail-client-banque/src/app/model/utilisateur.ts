import { Publication } from './Publication';
import { Reclamation } from './Reclamation';
import { Role } from './Role';

export class Utilisateur {
    constructor(
        public id?: number,
        public nom?: string,
        public prenom?: string,
        public email?: string,
        public age?: number,
        public date?: Date,
        public tel?: number,
        public username?: string,
        public password?: string,
        public role?: Role,
        public etat?: boolean,
        public reclamation?: Array<Reclamation>,
        public publication?: Array<Publication>
    ) { }

   
    public setAge(age: number) {
        this.age = age;
    }

    public getId(){
        return this.id;
    }
}
