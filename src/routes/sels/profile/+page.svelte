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
	import sel_banner from '$lib/sel_banner.png';

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

<div id="i9bnk" class="gjs-image-banner">
	<img src={sel_banner} class="gjs-image-banner" alt="" />
</div>
<!-- <div id="i9v8g" class="navbar">
	<div data-gjs="navbar" id="imytl" class="navbar-container">
		<div id="i19a8" class="navbar-burger"></div>
		<div data-gjs="navbar-items" id="i9z21" class="navbar-items-c">
			<nav id="itl8d" class="navbar-menu">
				<a id="ii8su" title="" class="navbar-menu-link">SEL Paradise<br /></a><a
					id="i7brx"
					class="navbar-menu-link">Get SEL<br /></a
				><a id="izuli" class="navbar-menu-link">Trade SEL [WIP]<br /></a><a
					id="itq25"
					class="navbar-menu-link">Add SPC<br /></a
				><a id="iykz8" class="navbar-menu-link">Help</a>
			</nav>
		</div>
	</div>
</div> -->
<section id="i4q5js" class="gjs-section">
	<div id="ivircb" class="gjs-container">
		<div id="i46onn" class="gjs-grid-row">
			<div id="ijyrjn" class="gjs-grid-column">
				<div id="iic6w" class="gjs-image-box gap-4 shadow-lg shadow-black">
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
						<div>
							{#await import(`$lib/sprites/sx-s.png`) then { default: src }}
								<img {src} alt="" class="z-3 absolute" />
							{/await}
						</div>
					{/if}
				</div>
			</div>
			<div id="imzuni" class="gjs-grid-column">
				<div id="ilcgqj">Username:</div>
				<div id="iz3kji">SEL Amount:<br /></div>
				<div id="ixthae">Highest Rarity:<br /></div>
			</div>
			<div id="iojh5j" class="gjs-grid-column">
				<div id="usrnme_show">{data.username}<br /></div>
				<div id="selamnt_show">{data.selCount}</div>
				<div id="maxrare_show" title="">REPLACE WITH OUTPUT</div>
			</div>
		</div>
	</div>
</section>
<div id="ia9992" class="gjs-grid-row">
	<div id="i8p0ce" class="gjs-grid-column">
		<a id="icomdq" href="./profile/manage" class="gjs-link">Manage SEL!<br /></a>
	</div>
	<div id="i8o103" class="gjs-grid-column">
		<div id="imlwxq" class="gjs-image-box gap-4 shadow-lg shadow-black">
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
				<div>
					{#await import(`$lib/sprites/sx-s.png`) then { default: src }}
						<img {src} alt="" class="z-3 absolute" />
					{/await}
				</div>
			{/if}
		</div>
	</div>
	<div id="idueqb" class="gjs-grid-column">
		<div id="ipo6ij" class="gjs-image-box gap-4 shadow-lg shadow-black">
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
				<div>
					{#await import(`$lib/sprites/sx-s.png`) then { default: src }}
						<img {src} alt="" class="z-3 absolute" />
					{/await}
				</div>
			{/if}
		</div>
	</div>
	<div id="i9155v" class="gjs-grid-column">
		<div id="im274b" class="gjs-image-box gap-4 shadow-lg shadow-black">
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
				<div>
					{#await import(`$lib/sprites/sx-s.png`) then { default: src }}
						<img {src} alt="" class="z-3 absolute" />
					{/await}
				</div>
			{/if}
		</div>
	</div>
	<div id="ic3xtq" class="gjs-grid-column">
		<div id="i3u0u6" class="gjs-image-box gap-4 shadow-lg shadow-black">
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
				<div>
					{#await import(`$lib/sprites/sx-s.png`) then { default: src }}
						<img {src} alt="" class="z-3 absolute" />
					{/await}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
	}

	.text-content {
		line-height: 20px;
	}

	.text-main-content {
		line-height: 30px;
		font-size: 1.2rem;
	}

	#iau9 {
		font-family: Arial, Helvetica, sans-serif;
		background-image: linear-gradient(180deg, rgba(59, 130, 245, 0.11), white 14%);
		background-position: 0px 0px;
		background-size: 100% 100%;
		background-repeat: repeat;
		background-attachment: scroll;
		background-origin: padding-box;
		color: #475569;
	}

	.gjs-grid-column.feature-item {
		padding-top: 15px;
		padding-right: 15px;
		padding-bottom: 15px;
		padding-left: 15px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		min-width: 30%;
	}

	.gjs-grid-column.testimonial-item {
		padding-top: 15px;
		padding-right: 15px;
		padding-bottom: 15px;
		padding-left: 15px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		min-width: 45%;
		background-color: rgba(247, 247, 247, 0.23);
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
		align-items: flex-start;
		border-top-width: 1px;
		border-right-width: 1px;
		border-bottom-width: 1px;
		border-left-width: 1px;
		border-top-style: solid;
		border-right-style: solid;
		border-bottom-style: solid;
		border-left-style: solid;
		border-top-color: rgba(0, 0, 0, 0.06);
		border-right-color: rgba(0, 0, 0, 0.06);
		border-bottom-color: rgba(0, 0, 0, 0.06);
		border-left-color: rgba(0, 0, 0, 0.06);
	}

	.gjs-button {
		vertical-align: top;
		max-width: 100%;
		display: inline-block;
		text-decoration: none;
		color: white;
		padding-right: 15px;
		padding-bottom: 10px;
		padding-left: 15px;
		background-color: rgb(36, 99, 235);
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
		padding-top: 10px;
		font-size: 1.1rem;
		text-align: center;
	}

	.gjs-text-blue {
		color: rgb(36, 99, 235);
	}

	.gjs-link:hover {
		color: rgb(36, 99, 235);
		text-decoration: underline;
	}

	.gjs-icon.gjs-feature-icon {
		padding-top: 10px;
		padding-right: 10px;
		padding-bottom: 10px;
		padding-left: 10px;
		background-color: rgb(36, 99, 235);
		color: white;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
	}

	.gjs-image-box {
		height: 12rem;
		width: 12rem;
		max-height: 12rem;
		max-width: 12rem;
	}
	.gjs-image-banner {
		height: fit-content;
		width: 100%;
	}

	#i9bnk {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
		background-size: contain;
		background-position: center center;
		background-attachment: scroll;
		background-repeat: no-repeat;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
	}

	.navbar {
		background-color: #222;
		color: #ddd;
		min-height: 50px;
		width: 100%;
	}

	.navbar-container {
		max-width: 950px;
		margin: 0 auto;
		width: 95%;
	}

	.navbar-items-c {
		display: inline-block;
		float: right;
	}

	.navbar-container::after {
		content: '';
		clear: both;
		display: block;
	}

	.navbar-brand {
		vertical-align: top;
		display: inline-block;
		padding: 5px;
		min-height: 50px;
		min-width: 50px;
		color: inherit;
		text-decoration: none;
	}

	.navbar-menu {
		padding: 10px 0;
		display: block;
		float: right;
		margin: 0;
	}

	.navbar-menu-link {
		margin: 0;
		color: inherit;
		text-decoration: none;
		display: inline-block;
		padding: 10px 15px;
	}

	.navbar-burger {
		margin: 10px 0;
		width: 45px;
		padding: 5px 10px;
		display: none;
		float: right;
		cursor: pointer;
	}

	.navbar-burger-line {
		padding: 1px;
		background-color: white;
		margin: 5px 0;
	}

	#i9v8g {
		background-color: rgba(190, 190, 190, 1);
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
		width: 100%;
	}

	#imytl {
		margin-right: 0px;
		margin-left: 0px;
		width: 100%;
		max-width: 100%;
		display: flex;
		flex-direction: column;
	}

	#ii8su {
		color: rgba(0, 0, 0, 1);
		border-top-style: double;
		border-right-style: double;
		border-bottom-style: double;
		border-left-style: double;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		text-align: left;
		width: 33%;
	}

	#itl8d {
		padding-top: 5px;
		padding-right: 5px;
		padding-bottom: 5px;
		padding-left: 5px;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	#izuli {
		color: rgba(0, 0, 0, 1);
		border-top-style: double;
		border-right-style: double;
		border-bottom-style: double;
		border-left-style: double;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		text-align: left;
		width: 33%;
	}

	#itq25 {
		color: rgba(0, 0, 0, 1);
		border-top-style: double;
		border-right-style: double;
		border-bottom-style: double;
		border-left-style: double;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		text-align: left;
		width: 33%;
	}

	#iykz8 {
		color: rgba(0, 0, 0, 1);
		border-top-style: double;
		border-right-style: double;
		border-bottom-style: double;
		border-left-style: double;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		text-align: left;
		width: 33%;
	}

	#i7brx {
		color: rgba(0, 0, 0, 1);
		border-top-style: double;
		border-right-style: double;
		border-bottom-style: double;
		border-left-style: double;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		text-align: left;
		width: 33%;
	}

	#iic6w {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
		background-size: contain;
		background-position: center center;
		background-attachment: scroll;
		background-repeat: no-repeat;
		width: 200px;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
	}

	.gjs-container {
		width: 90%;
		margin: 0 auto;
		max-width: 1200px;
	}

	.gjs-section {
		display: flex;
		padding: 50px 0;
	}

	#i4q5js {
		padding-top: 30px;
		padding-bottom: 30px;
		justify-content: space-around;
		display: block;
	}

	#ivircb {
		flex: 1 1 0%;
		display: flex;
		flex-direction: column;
	}

	#ilcgqj {
		padding: 10px;
		flex: 1 1 0%;
		align-self: flex-start;
	}

	#iz3kji {
		padding: 10px;
		flex: 1 1 0%;
		align-self: flex-start;
	}

	.gjs-grid-column {
		flex: 1 1 0%;
		padding: 5px 0;
	}

	.gjs-grid-row {
		display: flex;
		justify-content: flex-start;
		align-items: stretch;
		flex-direction: row;
		min-height: auto;
		padding: 10px 0;
	}

	#i46onn {
		background-color: rgba(190, 190, 190, 1);
		padding-top: 0px;
		padding-bottom: 0px;
	}

	#ijyrjn {
		flex: 0 1 auto;
		padding-top: 5px;
		padding-right: 5px;
		padding-bottom: 5px;
		padding-left: 5px;
	}

	#ixthae {
		padding: 10px;
		flex: 1 1 0%;
		align-self: flex-start;
	}

	#imzuni {
		padding-top: 0px;
		padding-bottom: 0px;
		flex: 0 1 auto;
	}

	#iilzb {
		background-image: url('https://placehold.co/150/777/white.png?text=IMAGE');
		background-position: 0px 0px;
		background-size: 150px 150px;
		background-repeat: repeat;
		background-attachment: scroll;
		background-origin: padding-box;
	}

	#i8p0ce {
		flex-basis: 30%;
		flex-grow: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
	}

	#ia9992 {
		min-height: 250px;
	}

	#i8o103 {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
	}

	#ic3xtq {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
	}

	#i9155v {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
	}

	#idueqb {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
	}

	#i9z21 {
		display: flex;
		justify-content: space-around;
	}

	.gjs-link {
		vertical-align: top;
		max-width: 100%;
		display: inline-block;
		text-decoration: none;
		color: inherit;
	}

	#icomdq {
		color: rgba(0, 0, 0, 1);
		background-color: rgba(190, 190, 190, 1);
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
		height: 66%;
		text-align: center;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		width: 66%;
	}

	#imlwxq {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
		background-size: contain;
		background-position: center center;
		background-attachment: scroll;
		background-repeat: no-repeat;
		width: 200px;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
	}

	#ipo6ij {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
		background-size: contain;
		background-position: center center;
		background-attachment: scroll;
		background-repeat: no-repeat;
		width: 200px;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
	}

	#im274b {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
		background-size: contain;
		background-position: center center;
		background-attachment: scroll;
		background-repeat: no-repeat;
		width: 200px;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
	}

	#i3u0u6 {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
		background-size: contain;
		background-position: center center;
		background-attachment: scroll;
		background-repeat: no-repeat;
		width: 200px;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
	}

	#iq491 {
		background-image: url('https://placehold.co/150/777/white.png?text=IMAGE');
		background-position: 0px 0px;
		background-size: 150px 150px;
		background-repeat: repeat;
		background-attachment: scroll;
		background-origin: padding-box;
	}

	#ilw2j {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
		background-size: contain;
		background-position: center center;
		background-attachment: scroll;
		background-repeat: no-repeat;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
	}

	#is70z {
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
		background-color: rgba(190, 190, 190, 1);
	}

	#ivmp0j {
		flex-direction: column;
		align-items: flex-end;
		gap: 5px;
		display: flex;
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		justify-content: space-around;
	}

	#i6addv {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		justify-content: space-around;
		align-items: flex-start;
	}

	#izkads {
		text-align: center;
	}

	#iaqogc {
		text-align: center;
	}

	#io9ldo {
		display: flex;
		justify-content: space-around;
	}

	#iojh5j {
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		flex: 1 1 0%;
		align-self: flex-start;
	}

	#i19a8 {
		width: 0px;
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		margin-top: 0px;
		margin-right: 0px;
		margin-bottom: 0px;
		margin-left: 0px;
	}

	#usrnme_show {
		padding: 10px;
	}

	#maxrare_show {
		padding: 10px;
	}

	#selamnt_show {
		padding: 10px;
	}

	#itdoz2 {
		background-color: rgba(190, 190, 190, 1);
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		padding-top: 0px;
		min-height: 50px;
	}

	#irwezo {
		padding: 10px;
		text-align: center;
	}

	#iqdukq {
		background-image: url('https://placehold.co/150/777/white.png?text=IMAGE');
		background-position: 0px 0px;
		background-size: 150px 150px;
		background-repeat: repeat;
		background-attachment: scroll;
		background-origin: padding-box;
	}

	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
	}

	#ilw2j-2 {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
		background-size: contain;
		background-position: center center;
		background-attachment: scroll;
		background-repeat: no-repeat;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
	}

	#is70z-2 {
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
		background-color: rgba(190, 190, 190, 1);
	}

	#ivmp0j-2 {
		flex-direction: column;
		align-items: flex-end;
		gap: 5px;
		display: flex;
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		justify-content: space-around;
	}

	#i6addv-2 {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 5px;
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		justify-content: space-around;
	}

	#izkads-2 {
		text-align: center;
	}

	#iaqogc-2 {
		text-align: center;
	}

	#io9ldo-2 {
		display: flex;
		justify-content: space-around;
	}

	#itdoz2-2 {
		background-color: rgba(190, 190, 190, 1);
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		padding-top: 0px;
		min-height: 50px;
	}

	#irwezo-2 {
		padding: 10px;
		text-align: center;
	}

	#i5r0m {
		background-image: url('https://placehold.co/150/777/white.png?text=IMAGE');
		background-position: 0px 0px;
		background-size: 150px 150px;
		background-repeat: repeat;
		background-attachment: scroll;
		background-origin: padding-box;
	}

	#i7yb5m {
		text-align: center;
	}

	#i63ytn {
		text-align: center;
	}

	#igck37 {
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		min-height: 50px;
	}

	#ioigrj {
		background-color: rgba(190, 190, 190, 1);
	}

	#textoutput {
		padding: 10px;
		text-align: center;
	}

	#if6st2 {
		padding: 10px;
		text-align: center;
	}

	#ig4w4m {
		background-color: rgba(190, 190, 190, 1);
	}

	#ihkgv1 {
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		min-height: 50px;
	}

	#iujupk {
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
		background-color: rgba(190, 190, 190, 1);
	}

	#ihq9s2 {
		padding: 10px;
		text-align: center;
	}

	#i29kmi {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
		background-size: contain;
		background-position: center center;
		background-attachment: scroll;
		background-repeat: no-repeat;
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		width: 200px;
	}

	#iyx96j {
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		justify-content: space-around;
		flex-direction: column;
		align-items: center;
	}

	#i9i3qv {
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
	}

	#im9mga {
		padding-top: 0px;
		padding-right: 0px;
		padding-bottom: 0px;
		padding-left: 0px;
		display: flex;
		justify-content: space-around;
		align-self: stretch;
		flex: 0 0 auto;
	}

	#ihu1so {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
		background-size: contain;
		background-position: center center;
		background-attachment: scroll;
		background-repeat: no-repeat;
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		width: 200px;
	}

	#ipa1om {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+');
		background-size: contain;
		background-position: center center;
		background-attachment: scroll;
		background-repeat: no-repeat;
		border-top-style: groove;
		border-right-style: groove;
		border-bottom-style: groove;
		border-left-style: groove;
		border-top-color: rgba(0, 0, 0, 1);
		border-right-color: rgba(0, 0, 0, 1);
		border-bottom-color: rgba(0, 0, 0, 1);
		border-left-color: rgba(0, 0, 0, 1);
		width: 200px;
	}

	#iqa4ai {
		display: flex;
		justify-content: space-around;
	}

	@media (max-width: 992px) {
		.gjs-grid-row {
			flex-direction: column;
		}
	}

	@media (max-width: 768px) {
		.navbar-items-c {
			display: none;
			width: 100%;
		}

		.navbar-burger {
			display: block;
		}

		.navbar-menu {
			width: 100%;
		}

		.navbar-menu-link {
			display: block;
		}
	}
</style>
