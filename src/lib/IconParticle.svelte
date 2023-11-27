<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';
	import { randumb } from './foobar';

	export let icon: string;

	const size = randumb(20) + 25;
	const d = 50;

	let particle: HTMLElement;

	onMount(() => {
		particle.style.top = `${window.innerHeight / 2}px`;
		particle.style.left = `${window.innerWidth / 2}px`;

		particle.style.transition = 'top left opacity';
		particle.style.transitionDuration = `${randumb(2000)}ms`;

		setTimeout(() => {
			particle.style.top = `${Math.random() * window.innerHeight}px`;
			particle.style.left = `${Math.random() * window.innerWidth}px`;
			particle.style.opacity = `${Math.random()}`;
		}, 50);
	});
</script>

<div out:fade={{ duration: randumb(200) + 100 }} class="fixed opacity-60" bind:this={particle}>
	<Icon {icon} width={size} height={size} />
</div>
