import { Book } from "epubjs";

export class library {
    books: Book[] = $state([]);

    constructor(initial: Book[] = []) {
        this.books = initial;
    }
}
