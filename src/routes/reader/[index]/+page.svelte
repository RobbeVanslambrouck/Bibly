<script lang="ts">
	import { onMount } from 'svelte';
	import { library } from '../../../stores/stores';
	import type { Rendition } from 'epubjs';
	import type { PageData } from './$types';

	export let data: PageData;

	let rendition: Rendition | undefined;
	onMount(async () => {
		let book = $library[data.index];
		await book.ready;
		console.log(book.load);
		rendition = book.renderTo('book');
		let displayed = await rendition.display();
		rendition.on('keyup', keyUpHandle);
	});

	async function nextHandler(event: MouseEvent) {
		nextPage();
	}
	async function prevHandler(event: MouseEvent) {
		prevPage();
	}

	async function nextPage() {
		if (!rendition) return;
		try {
			await rendition.next();
		} catch (err) {
			return;
		}
	}

	async function prevPage() {
		if (!rendition) return;
		try {
			await rendition.prev();
		} catch (err) {
			return;
		}
	}

	async function keyUpHandle(event: KeyboardEvent) {
		let key = event.key;
		if (key === 'ArrowRight') {
			await nextPage();
		}
		if (key === 'ArrowLeft') {
			await prevPage();
		}
	}
</script>

<svelte:window onkeyup={keyUpHandle} />

<div id="book"></div>

<div id="pageControles">
	<button id="prev" type="button" onclick={prevHandler}>{'<'}</button>
	<button id="next" type="button" onclick={nextHandler}>{'>'}</button>
</div>

<style>
	#pageControles {
		position: fixed;
		top: 10px;
		left: 10px;
		z-index: 1;
	}

	#pageControles button:hover {
		background-color: rgba(20, 20, 20, 0.4);
		color: white;
		transition: 100ms;
	}
	#pageControles button {
		text-align: center;
		color: transparent;
		background-color: transparent;
		font-size: 2em;
		font-weight: bolder;
		transition: 500ms;
	}

	#next {
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		width: 15%;
		border: none;
	}
	#prev {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 15%;
		border: none;
	}
</style>
