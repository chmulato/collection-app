import { Collectable } from "./collectable.model";

export class CollectableService {
    
    private collectables : Collectable [] = [
        { description : 'This book is the best book in my collection', type : 'Best Book 1'},
        { description : 'This book is the best book in my collection', type : 'Best Book 2'},
        { description : 'This book is the best book in my collection', type : 'Best Book 3'},
        { description : 'This book is the best book in my collection', type : 'Best Book 4'},
    ];

    private collection: Collectable [] = [];

    public getCollectables() {
          return this.collectables;
    }

    public getCollection() {
        return this.collection;
    }

    public addToCollection(item: Collectable) {
        if (this.collection.indexOf(item) !== -1) {
            return;
        }
        this.collection.push(item);
    }

    public removeFromCollection(item: Collectable) {
        this.collection.splice(this.collection.indexOf(item), 1);
    }
}