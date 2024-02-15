import Epub from "epubjs";
import { library } from "./lib/library.svelte";

export const lib = new library([Epub("https://s3.amazonaws.com/moby-dick/moby-dick.epub")]);