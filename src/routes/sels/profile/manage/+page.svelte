<script>
	import { enhance } from '$app/forms';
</script>

<div class="flex min-h-60 flex-row justify-center align-middle">
	<form action="?/play" method="post" use:enhance>
		<button type="submit" class="size-20">Play with Sels</button>
	</form>
	<form action="?/show" method="post" use:enhance>
		<button type="submit" class="size-20">Host Sels show</button>
	</form>
	<form action="?/feed" method="post" use:enhance>
		<button type="submit" class="size-20">Feed Sels</button>
	</form>
</div>
