<script lang="ts">
	import { lib } from '../globals';

	let { libIndex } = $props<{ libIndex: number }>();
	let book = lib.books[libIndex];
</script>

<a href={`./reader/${libIndex}`}>
	{#await lib.books[libIndex].loaded.metadata then meta}
		{#await book.coverUrl()}
			<p>{meta.title}</p>
			-
			<p>{meta.creator}</p>
		{:then coverUrl}
			{#if coverUrl}
				<img src={coverUrl} alt={`${meta.title} cover`} />
			{/if}
		{/await}
	{/await}
</a>

<style>
	a {
		display: flex;
		border: 5px hsl(12, 94%, 62%);
		width: 17rem;
		height: 24rem;
		border-radius: 5px;
		text-align: center;
		cursor: pointer;
	}

	img {
		width: 17rem;
		height: 24rem;
		object-fit: contain;
	}
</style>
