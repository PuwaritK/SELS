<script lang="ts">
	let { form } = $props();
</script>

<p class="justify-self-center text-8xl">Gamba</p>
<div class="flex flex-row justify-center">
	<div class="">
		<div class="m-8">
			<form action="?/one" method="post">
				<button type="submit" class="outline-double outline-2 outline-offset-4">1x</button>
			</form>
		</div>
		<div class="m-8">
			<form action="?/ten" method="post">
				<button type="submit" class="outline-double outline-2 outline-offset-4">10x</button>
			</form>
		</div>
		<div>
			{#if typeof form?.result === typeof ''}
				<p class=" text-red-600">Insufficient currency</p>
			{/if}
		</div>
	</div>
</div>
