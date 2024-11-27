<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	let { data } = $props();
</script>

<p class="text-xl">Developer Page</p>

<form method="get">
	<label for="user">Username to find:</label>
	<input type="text" name="search" value={$page.url.searchParams.get('search')} maxlength="20"/>
	<button type="submit" class="outline outline-2">Find</button>
</form>
{#if data.found === false}
	<p class="text-red-500">User not found!</p>
{/if}
{#if data.found === true}
	<p>Sels of ParadiseID: {data.paradise_id}</p>
	<table>
		<thead>
			<tr>
				<td>Sel ID</td>
				<td>Name</td>
				<td>Type ID</td>
				<td>Tier ID</td>
				<td>Sex ID</td>
				<td>Colour</td>
				<td>DOB</td>
				<td>Show XP</td>
				<td>Weight</td>
				<td>Price</td>
				<td></td>
				<td
					><form action="/delete" method="post" use:enhance>
						<button
							type="submit"
							class=" text-red-500 hover:text-blue-800"
							name="deleteall"
							value={$page.url.searchParams.get('search')}
						>
							Delete All Sel
						</button>
					</form></td
				>
			</tr>

			{#each data.sels! as sel}
				<tr>
					<td>{sel.sel_id}</td>
					<td>{sel.name}</td>
					<td>{sel.type_id}</td>
					<td>{sel.tier_id}</td>
					<td>{sel.sex_id}</td>
					<td>{sel.colour}</td>
					<td>{sel.dob}</td>
					<td>{sel.show_xp}</td>
					<td>{sel.weight}</td>
					<td>{sel.price}</td>
					<td
						><form action="/edit" method="get">
							<input type="hidden" value={$page.url.searchParams.get('search')} name="search" />
							<button
								type="submit"
								class="text-blue-500 hover:text-blue-800"
								name="sel_id"
								value={sel.sel_id}>Edit Sel</button
							>
						</form></td
					>
					<td
						><form action="/delete" method="post" use:enhance>
							<button
								type="submit"
								class="text-blue-500 hover:text-blue-800"
								name="delete"
								id="delete-{sel.sel_id}"
								value={sel.sel_id}
							>
								Delete Sel
							</button>
						</form></td
					>
				</tr>
			{/each}
		</thead>
	</table>
{/if}

<style>
	td {
		border: 2px solid black;
	}
</style>
