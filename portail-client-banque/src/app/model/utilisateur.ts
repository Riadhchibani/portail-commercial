
export class Utilisateur {
    constructor(
        public id?: number,
        public nom?: String,
        public prenom?: String,
        public email?: String,
        public age?: number,
        public date?: String,
        public tel?: number,
        public username?: String,
        public password?: String,
        public role?: String,
        public etat?: boolean
    ) { }

    public get getPassword() {
        return this.password;
    }
}
