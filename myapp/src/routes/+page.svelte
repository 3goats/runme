<h1>Firefly Use Case Demos</h1>
<p>Showcases the different use cases for Firefly </p>

<div>
	{#each commands as command, i}
		<button class="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
            on:click={() => reset()}
            on:click={() => runCommand(command.name)}>{i + 1} {command.name}</button>
	{/each}
</div>

<pre class="text-xs">
    <p>{@html output}</p>
</pre>


<script lang="ts">


import {onMount} from "svelte";
import { AnsiUp } from "ansi_up"


var ansi_up = new AnsiUp();

let commands: any;
let data;
let output: string;

function reset(){
    data = null
    output = "Running Command ...."
}

async function runCommand(command: string) {
   const response = await fetch(`/api/runme?command=` + command); 
   data = await response.json()
   output = ansi_up.ansi_to_html(data.stdout)
}

onMount(async () => {
    const response = await fetch(`/api/getcommands`); 
    commands = await response.json()
})
</script>

