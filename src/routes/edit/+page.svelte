<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	import { page } from '$app/stores';

	const convertToDateTimeLocalString = (date: Date) => {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');

		return `${year}-${month}-${day}T${hours}:${minutes}`;
	};
</script>

<div class="flex flex-col items-center justify-center">
	<p class="mb-8 text-2xl">Configure sel</p>
	<form method="post">
		<div>
			<label for="sel_name">Sel name: </label>
			<input type="text" name="sel_name" value={data.selToConfigure?.name} required />
		</div>
		<div>
			<label for="sel_type">Sel race: </label>
			<select name="sel_type" id="seltype">
				{#each data.selTypes as type}
					<option value={type.type_id} selected={type.type_id == data.selToConfigure?.type_id}
						>{type.type_name}</option
					>
				{/each}
			</select>
		</div>
		<div>
			<label for="sel_colour">Sel colour:</label>
			<input type="color" name="sel_colour" id="selcolour" value={data.selToConfigure?.colour} />
		</div>
		<div>
			<label for="sel_sex">Sel sex:</label>
			<select name="sel_sex" id="selsex">
				{#each data.selSex as sex}
					<option value={sex.sex_id} selected={sex.sex_id == data.selToConfigure?.sex_id}
						>{sex.name}</option
					>
				{/each}
			</select>
		</div>
		<div>
			<label for="sel_dob">Sel DOB:</label>
			<input
				type="datetime-local"
				name="sel_dob"
				value={convertToDateTimeLocalString(data.selToConfigure?.dob!)}
			/>
		</div>
		<div>
			<label for="sel_weight">Sel Weight:</label>
			<input type="text" name="sel_weight" value={data.selToConfigure?.weight} />
		</div>
		<div>
			<label for="sel_showxp">Sel ShowXP:</label>
			<input type="text" name="sel_showxp" value={data.selToConfigure?.show_xp} />
		</div>
		<div>
			<label for="sel_price">Sel Price:</label>
			<input type="text" name="sel_price" value={data.selToConfigure?.price} />
		</div>
		<div>
			<label for="sel_tier">Sel Tier:</label>
			<select name="sel_tier" id="selsex">
				{#each data.selTier as Tier}
					<option value={Tier.tier_id} selected={Tier.tier_id == data.selToConfigure?.tier_id}
						>{Tier.name}</option
					>
				{/each}
			</select>
		</div>
		<input type="hidden" name="sel_id" value={$page.url.searchParams.get('sel_id')} />
		<input type="text" name="username" value={$page.url.searchParams.get('search')} hidden />
		<div>
			<button type="submit" class="outline outline-2">Confirm</button>
		</div>
	</form>
</div>
