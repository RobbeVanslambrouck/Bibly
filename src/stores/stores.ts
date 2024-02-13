import { derived, writable, type Readable, type Writable } from "svelte/store"
import Epub, { Book } from "epubjs";



export const library: Writable<Book[]> = writable([]);