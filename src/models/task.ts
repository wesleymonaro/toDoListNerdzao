export class Task {
    name: string;
    status: boolean; // false = aberta; true - fechada

    constructor(){
        this.name = '';
        this.status = false;
    }
}