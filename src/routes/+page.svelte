<script lang="ts">
	import Epub from 'epubjs';
	import { lib } from '../globals';
	import Book from './Book.svelte';

	let bookCount = $derived(lib.books.length);

	async function dropHandler(event: DragEvent) {
		if (!event.dataTransfer) return;

		let files = event.dataTransfer.files;
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			if (file.type !== 'application/epub+zip') continue;

			let arrayBuffer = await file.arrayBuffer();
			let book = Epub(arrayBuffer);
			lib.books.push(book);
		}
	}
</script>

<main>
	<h1>Bibly</h1>
	<section>
		<h2>library ({bookCount})</h2>
		<ul id="books">
			{#each lib.books as _, libIndex}
				<li>
					<Book {libIndex}></Book>
				</li>
			{/each}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="book"
				id="drop_zone"
				on:drop|preventDefault={dropHandler}
				on:dragover|preventDefault={() => {}}
			>
				<p>Drag one or more epub files to this <i>drop zone</i>.</p>
			</div>
		</ul>
	</section>
</main>

<style>
	.book {
		border: 5px solid hsl(12, 94%, 62%);
		width: 17rem;
		height: 24rem;
		border-radius: 5px;
		text-align: center;
		display: flex;
		align-items: center;
	}
	#books {
		display: flex;
		flex-flow: wrap;
		gap: 1rem;
		list-style: none;
	}

	main {
		padding: 0 1em;
	}
</style>
