export class Goal {
    public name: string;
    public description: string;
    public dueDate: string;

    constructor(name: string, desc: string, dueDate: string) {
        this.name = name;
        this.description = desc;
        this.dueDate = dueDate;
    }
}