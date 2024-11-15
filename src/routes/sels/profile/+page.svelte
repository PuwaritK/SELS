<script lang="ts">
	let { data } = $props();
	let sex: string = $state('');
	let type: string = $state('');
	if (data.shownSel != null) {
		switch (data.shownSel?.sex_id) {
			case 1: {
				sex = 'm';
				break;
			}
			case 2: {
				sex = 'f';
				break;
			}
			case 3: {
				sex = 's';
				break;
			}
		}
		switch (data.shownSel.type_id) {
			case 1: {
				type = 'harper';
				break;
			}
			case 2: {
				type = 'grey';
				break;
			}
			case 3: {
				type = 'baikal';
				break;
			}
			case 4: {
				type = 'elephant';
				break;
			}
			case 5: {
				type = 'leopard';
				break;
			}
			case 6: {
				type = 'sealion';
				break;
			}
			case 7: {
				type = 'walrus';
				break;
			}
		}
	}
</script>

<p>profile</p>
<div>
	{#if data.shownSel != null}
		<div>
			<div>
				{#await import(`$lib/sprites/sx-${sex}.png`) then { default: src }}
					<img
						{src}
						alt=""
						class="z-1 absolute"
						style="background-color: {data.shownSel.colour};"
					/>
				{/await}
			</div>
			<div>
				{#await import(`$lib/sprites/type-${type}.png`) then { default: src }}
					<img {src} alt="" class="z-2 absolute" />
				{/await}
			</div>
			<div>
				{#await import(`$lib/sprites/tier-${data.shownSel.tier_id}.png`) then { default: src }}
					<img {src} alt="" class="z-3 absolute" />
				{/await}
			</div>
		</div>
	{:else}
		<div>
			{#await import(`$lib/sprites/sx-s.png`) then { default: src }}
				<img {src} alt="" class="z-3 absolute" />
			{/await}
		</div>
	{/if}
	<div></div>
	<div></div>
</div>
