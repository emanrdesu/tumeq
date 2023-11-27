<script lang="ts">
	import IconParticle from './IconParticle.svelte';
	import { randumb } from './foobar';

	export let icon: string;

	let number = randumb(50) + 20;
</script>

{#each Array(number) as _}
	<IconParticle {icon} />
{/each}
