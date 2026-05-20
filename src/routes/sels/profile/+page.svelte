<script lang="ts">
	let { data } = $props();
	let sex0: string = $state('');
	let type0: string = $state('');
	let sex1: string = $state('');
	let type1: string = $state('');
	let sex2: string = $state('');
	let type2: string = $state('');
	let sex3: string = $state('');
	let type3: string = $state('');
	let sex4: string = $state('');
	let type4: string = $state('');

	if (data.shownSel[0] != null) {
		switch (data.shownSel[0].sex_id) {
			case 1: {
				sex0 = 'm';
				break;
			}
			case 2: {
				sex0 = 'f';
				break;
			}
			case 3: {
				sex0 = 's';
				break;
			}
		}
		switch (data.shownSel[0].type_id) {
			case 1: {
				type0 = 'harper';
				break;
			}
			case 2: {
				type0 = 'grey';
				break;
			}
			case 3: {
				type0 = 'baikal';
				break;
			}
			case 4: {
				type0 = 'elephant';
				break;
			}
			case 5: {
				type0 = 'leopard';
				break;
			}
			case 6: {
				type0 = 'sealion';
				break;
			}
			case 7: {
				type0 = 'walrus';
				break;
			}
		}
	}
	if (data.shownSel[1] != null) {
		switch (data.shownSel[1].sex_id) {
			case 1: {
				sex1 = 'm';
				break;
			}
			case 2: {
				sex1 = 'f';
				break;
			}
			case 3: {
				sex1 = 's';
				break;
			}
		}
		switch (data.shownSel[1].type_id) {
			case 1: {
				type1 = 'harper';
				break;
			}
			case 2: {
				type1 = 'grey';
				break;
			}
			case 3: {
				type1 = 'baikal';
				break;
			}
			case 4: {
				type1 = 'elephant';
				break;
			}
			case 5: {
				type1 = 'leopard';
				break;
			}
			case 6: {
				type1 = 'sealion';
				break;
			}
			case 7: {
				type1 = 'walrus';
				break;
			}
		}
	}
	if (data.shownSel[2] != null) {
		switch (data.shownSel[2].sex_id) {
			case 1: {
				sex2 = 'm';
				break;
			}
			case 2: {
				sex2 = 'f';
				break;
			}
			case 3: {
				sex2 = 's';
				break;
			}
		}
		switch (data.shownSel[2].type_id) {
			case 1: {
				type2 = 'harper';
				break;
			}
			case 2: {
				type2 = 'grey';
				break;
			}
			case 3: {
				type2 = 'baikal';
				break;
			}
			case 4: {
				type2 = 'elephant';
				break;
			}
			case 5: {
				type2 = 'leopard';
				break;
			}
			case 6: {
				type2 = 'sealion';
				break;
			}
			case 7: {
				type2 = 'walrus';
				break;
			}
		}
	}
	if (data.shownSel[3] != null) {
		switch (data.shownSel[3].sex_id) {
			case 1: {
				sex3 = 'm';
				break;
			}
			case 2: {
				sex3 = 'f';
				break;
			}
			case 3: {
				sex3 = 's';
				break;
			}
		}
		switch (data.shownSel[3].type_id) {
			case 1: {
				type3 = 'harper';
				break;
			}
			case 2: {
				type3 = 'grey';
				break;
			}
			case 3: {
				type3 = 'baikal';
				break;
			}
			case 4: {
				type3 = 'elephant';
				break;
			}
			case 5: {
				type3 = 'leopard';
				break;
			}
			case 6: {
				type3 = 'sealion';
				break;
			}
			case 7: {
				type3 = 'walrus';
				break;
			}
		}
	}
	if (data.shownSel[4] != null) {
		switch (data.shownSel[4].sex_id) {
			case 1: {
				sex4 = 'm';
				break;
			}
			case 2: {
				sex4 = 'f';
				break;
			}
			case 3: {
				sex4 = 's';
				break;
			}
		}
		switch (data.shownSel[4].type_id) {
			case 1: {
				type4 = 'harper';
				break;
			}
			case 2: {
				type4 = 'grey';
				break;
			}
			case 3: {
				type4 = 'baikal';
				break;
			}
			case 4: {
				type4 = 'elephant';
				break;
			}
			case 5: {
				type4 = 'leopard';
				break;
			}
			case 6: {
				type4 = 'sealion';
				break;
			}
			case 7: {
				type4 = 'walrus';
				break;
			}
		}
	}
</script>


<section  class=" bg-green-100">
	<div class=" flex flex-col">
		<div class="bot-1 top-1 flex flex-col rounded-2xl bg-pink-100">
			<div class="bot-1 left-1 right-1 top-1 flex-col">
				<div class="ml-1 h-48 max-h-48 w-48 max-w-48 gap-4 shadow-black outline outline-1">
					{#if data.shownSel[0] != null}
						<div>
							<div>
								{#await import(`$lib/sprites/sx-${sex0}.png`) then { default: src }}
									<img
										{src}
										alt=""
										class="z-1 absolute h-48 w-48"
										style="background-color: {data.shownSel[0].colour}"
									/>
								{/await}
							</div>
							<div>
								{#await import(`$lib/sprites/type-${type0}.png`) then { default: src }}
									<img {src} alt="" class="z-2 absolute h-48 w-48" />
								{/await}
							</div>
							<div>
								{#await import(`$lib/sprites/tier-${data.shownSel[0].tier_id}.png`) then { default: src }}
									<img {src} alt="" class="z-3 absolute h-48 w-48" />
								{/await}
							</div>
						</div>
					{:else}
						<div class="justify-center align-middle">
							<p class="text-center">No Sel to show.</p>
						</div>
					{/if}
				</div>
			</div>
			<div  class=" text-xl">
				<div >Username: {data.username}</div>
				<div >SEL Amount: {data.selCount}<br /></div>
				<div >Highest Rarity: {data.highestRarityName?.name}<br /></div>
			</div>
		</div>
	</div>
</section>
<div class="min-h-64 flex-col gap-6 bg-blue-100">
	<div  class=" rounded-2xl">
		<a
			href="./profile/manage"
			class=" rounded-2xl bg-yellow-100 text-2xl transition-all hover:scale-110"
			>Manage SEL!<br /></a
		>
	</div>
	<div class="">
		<div  class="h-48 max-h-48 w-48 max-w-48 gap-4 shadow-black outline outline-1">
			{#if data.shownSel[1] != null}
				<div>
					<div>
						{#await import(`$lib/sprites/sx-${sex1}.png`) then { default: src }}
							<img
								{src}
								alt=""
								class="z-1 absolute h-48 w-48"
								style="background-color: {data.shownSel[1].colour}"
							/>
						{/await}
					</div>
					<div>
						{#await import(`$lib/sprites/type-${type1}.png`) then { default: src }}
							<img {src} alt="" class="z-2 absolute h-48 w-48" />
						{/await}
					</div>
					<div>
						{#await import(`$lib/sprites/tier-${data.shownSel[1].tier_id}.png`) then { default: src }}
							<img {src} alt="" class="z-3 absolute h-48 w-48" />
						{/await}
					</div>
				</div>
			{:else}
				<div class="justify-center align-middle">
					<p class="text-center">No Sel to show.</p>
				</div>
			{/if}
		</div>
	</div>
	<div  class="gjs-grid-column">
		<div  class="h-48 max-h-48 w-48 max-w-48 gap-4 shadow-black outline outline-1">
			{#if data.shownSel[2] != null}
				<div>
					<div>
						{#await import(`$lib/sprites/sx-${sex2}.png`) then { default: src }}
							<img
								{src}
								alt=""
								class="z-1 absolute h-48 w-48"
								style="background-color: {data.shownSel[2].colour}"
							/>
						{/await}
					</div>
					<div>
						{#await import(`$lib/sprites/type-${type2}.png`) then { default: src }}
							<img {src} alt="" class="z-2 absolute h-48 w-48" />
						{/await}
					</div>
					<div>
						{#await import(`$lib/sprites/tier-${data.shownSel[2].tier_id}.png`) then { default: src }}
							<img {src} alt="" class="z-3 absolute h-48 w-48" />
						{/await}
					</div>
				</div>
			{:else}
				<div class="justify-center align-middle">
					<p class="text-center">No Sel to show.</p>
				</div>
			{/if}
		</div>
	</div>
	<div  class="gjs-grid-column">
		<div class="h-48 max-h-48 w-48 max-w-48 gap-4 shadow-black outline outline-1">
			{#if data.shownSel[3] != null}
				<div>
					<div>
						{#await import(`$lib/sprites/sx-${sex3}.png`) then { default: src }}
							<img
								{src}
								alt=""
								class="z-1 absolute h-48 w-48"
								style="background-color: {data.shownSel[3].colour}"
							/>
						{/await}
					</div>
					<div>
						{#await import(`$lib/sprites/type-${type3}.png`) then { default: src }}
							<img {src} alt="" class="z-2 absolute h-48 w-48" />
						{/await}
					</div>
					<div>
						{#await import(`$lib/sprites/tier-${data.shownSel[3].tier_id}.png`) then { default: src }}
							<img {src} alt="" class="z-3 absolute h-48 w-48" />
						{/await}
					</div>
				</div>
			{:else}
				<div class="justify-center align-middle">
					<p class="text-center">No Sel to show.</p>
				</div>
			{/if}
		</div>
	</div>
	<div class="gjs-grid-column">
		<div  class="h-48 max-h-48 w-48 max-w-48 gap-4 shadow-black outline outline-1">
			{#if data.shownSel[4] != null}
				<div>
					<div>
						{#await import(`$lib/sprites/sx-${sex4}.png`) then { default: src }}
							<img
								{src}
								alt=""
								class="z-1 absolute h-48 w-48"
								style="background-color: {data.shownSel[4].colour}"
							/>
						{/await}
					</div>
					<div>
						{#await import(`$lib/sprites/type-${type4}.png`) then { default: src }}
							<img {src} alt="" class="z-2 absolute h-48 w-48" />
						{/await}
					</div>
					<div>
						{#await import(`$lib/sprites/tier-${data.shownSel[4].tier_id}.png`) then { default: src }}
							<img {src} alt="" class="z-3 absolute h-48 w-48" />
						{/await}
					</div>
				</div>
			{:else}
				<div class="justify-center align-middle">
					<p class="text-center">No Sel to show.</p>
				</div>
			{/if}
		</div>
	</div>
</div>
