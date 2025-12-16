<script lang="ts">
	import favicon from '$lib/assets/logo.svg';
	import Box from '$lib/comps/Box.svelte';
	import '$lib/scss/global.scss';
	import type { LayoutProps } from './$types';
	type Data = {
		posts: {
			title: string;
			body: string;
		}[];
	};
	let { data }: { data: Data } = $props();
	// Tag
	console.log(
		'%c * Made by Fred Wordie, Say hi if it dont work * ',
		'background: #f4f1e6; color: #115545; padding: 10px 20px; line-height:100px;'
	);
	let innerWidth = $state(0);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window bind:innerWidth />

<main>
	{#each { length: Math.round(innerWidth / 400) }, index}
		<Box posts={data.posts} number={index}></Box>
	{/each}
</main>

<style lang="scss">
	main {
		max-height: 100lvh;
		height: 100lvh;
		display: flex;
		width: 100dvw;
		overflow-y: hidden;
		overflow-x: hidden;
		position: relative;
		gap: 20px;
		padding-inline: 20px;
	}
</style>
