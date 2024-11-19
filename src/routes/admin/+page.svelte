<script lang="ts">
	import { enhance } from '$app/forms';

	let { data, form } = $props();
</script>

admin page

<form method="post" action="?/find" use:enhance>
	<label for="user">Username to find:</label>
	<input type="text" name="user" />
	<button type="submit">Find</button>
</form>

<p>Sels of ParadiseID: {form?.userParadiseID?.paradise_id}</p>
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
			<td>Edit Sel</td>
			<td>Delete Sel</td>
		</tr>
		{#if form?.sels}
			{#each form.sels as sel}
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
						><form action="/edit" method="post">
							<button
								type="submit"
								class="text-blue-500 hover:text-blue-800"
								name="edit"
								value={sel.sel_id}>Edit Sel</button
							>
						</form></td
					>
					<td
						><form action="/delete" method="post">
							<button
								type="submit"
								class="text-blue-500 hover:text-blue-800"
								name="delete"
								value={sel.sel_id}>Edit Sel</button
							>
						</form></td
					>
				</tr>
			{/each}
		{/if}
	</thead>
</table>

<style>
	td {
		border: 2px solid black;
	}
</style>
