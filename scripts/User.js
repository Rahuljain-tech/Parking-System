export class User{
    constructor(name,contact)
    {
        this.id="user-"+(new Date()).getTime();
        this.name=name;
        this.contact=contact;
    }
}