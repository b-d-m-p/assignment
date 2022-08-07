<script>
	import { getEventsAction } from "./utils.js";
	import { current_component } from "svelte/internal";
	const events = getEventsAction(current_component);
	export let value;
	export let type;
    
</script>
<input use:events type={type} {value} class="bg-red-300"/>