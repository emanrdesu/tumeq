<script lang="ts">
	import hedgehog from '$lib/hedgehog.gif';
	import IconBomb from '$lib/IconBomb.svelte';
	import { randelt } from '$lib/foobar';
	import { browser } from '$app/environment';
	import { fade, fly, scale, slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let q = 0;

	let unclickable: HTMLButtonElement;
	let emojiTime = false;
	const duration = 2000;

	const emojis = [
		'twemoji:kiss-mark',
		'noto:pink-heart',
		'foundation:heart',
		'fluent-emoji-flat:smiling-face-with-heart-eyes',
		'noto-v1:kissing-face-with-closed-eyes',
		'line-md:heart-filled',
		'noto-v1:kissing-cat'
	];

	const respuestas = [
		'Te quiero mi amor',
		'Te necesito sirena',
		'Tu eres para mi',
		'TKM',
		'Tu y yo para siempre',
		'Me encantas',
		'Besame',
		'Abrazame',
		'Acariciame',
		'Porcupinaaa'
	];

	function tkm() {
		q++;
		emojiTime = true;

		setTimeout(() => {
			emojiTime = false;
		}, duration);
	}

	function nop() {
		const e = unclickable;

		const vpw = window.innerWidth;
		const vph = window.innerHeight;

		const ew = e.offsetWidth;
		const eh = e.offsetHeight;

		const mx = vpw - ew;
		const my = vph - eh;

		const rx = Math.floor(Math.random() * mx);
		const ry = Math.floor(Math.random() * my);

		e.style.position = 'fixed';
		e.style.left = `${rx}px`;
		e.style.top = `${ry}px`;
	}

	if (browser) {
		window.addEventListener('resize', nop);
	}
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<div class="flex flex-col justify-center items-center">
				<span class="text-2xl font-bold countdown">
					💕<span style="--value:{q};"></span>
				</span>

				<div>
					<img src={hedgehog} class="max-w-[300px]" alt="hedgehog" />
					<h1 class="text-3xl pb-4 font-bold">Tu me quieres?</h1>
					<button in:fade on:click={tkm} class="btn btn-primary">Sip</button>

					<button
						in:fade
						bind:this={unclickable}
						class="relative left-0 top-0 btn btn-secondary"
						on:mouseenter={nop}
						on:click={nop}
						tabindex="-1"
					>
						No
					</button>
				</div>
			</div>
		</div>
	</div>

	{#if emojiTime}
		<div out:scale>
			<IconBomb icon={randelt(emojis)} />
		</div>

		<div transition:slide class="z-10 opacity-80 translate-y-5 toast-middle">
			<div class="alert alert-info bg-red-950">
				<span class="text-xl flex gap-2 items-center"
					>{randelt(respuestas)}
					<Icon icon={randelt(emojis)} width={20} color="red" />
				</span>
			</div>
		</div>
	{/if}
</div>

<style>
	button {
		transition-property: left, top;
		transition-duration: 300ms;
	}
</style>
