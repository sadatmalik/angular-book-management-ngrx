import { Component } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { Book } from "../models/book";
import { AddBook, RemoveBook } from "../books/book.actions";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books$: Observable<Book[]>;

  constructor(private store: Store<{books: Book[]}>) {
    this.books$ = store.pipe(select('books'));
  }

  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({id, title, author}));
  }

  removeBook(bookId: string) {
    this.store.dispatch(RemoveBook({bookId}));
  }
}
