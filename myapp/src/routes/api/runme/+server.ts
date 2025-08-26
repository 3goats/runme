import { run } from 'runme'
//console.log(result.stdout) // outputs: { exitCode: 0, stdout: 'Hello World\r\n', stderr: '' }
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

async function runCommand(command: string) {
    const result = await run([command], )
    return result
  }
  
export const GET = (async ({ url }) => {

  var command = url.searchParams.get('command')
  //convert id string to number
  //console.log(id)
  const response = await runCommand(command)
  
  return new Response(JSON.stringify(response));
}) satisfies RequestHandler;
