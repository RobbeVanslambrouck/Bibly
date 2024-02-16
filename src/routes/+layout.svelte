<script lang="ts">
	import '../app.css';
	let { children } = $props();

	async function detectServiceWorkerUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newServiceWorker = registration.installing;
			newServiceWorker?.addEventListener('statechange', () => {
				if (newServiceWorker.state === 'installed') {
					if (confirm('Update available! Reload to update?')) {
						newServiceWorker.postMessage({ type: 'SKIP_WAITING' });
						window.location.reload();
					}
				}
			});
		});
	}

	$effect(() => {
		detectServiceWorkerUpdate();
	});
</script>

{@render children()}
