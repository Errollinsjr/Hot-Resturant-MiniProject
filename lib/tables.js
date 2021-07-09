class Tables {
    constructor(id, name, contact, guests, time, table) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.guests = guests;
        this.time = time;
        this.table = table;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getContact() {
        return this.contact;
    }

    getGuests() {
        return this.guests;
    }

    getTime() {
        return this.time;
    }

    getTable(){
        return this.table;
    }
    
}


modules.export = Tables;