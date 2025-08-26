
//console.log(result.stdout) // outputs: { exitCode: 0, stdout: 'Hello World\r\n', stderr: '' }
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import * as fsPromise from 'fs/promises';
import { exec } from 'node:child_process';

async function getcommands () {
  const ret = await exec('runme list --json');
  const output = {stdout: ret.stdout, stderr: ret.stderr, error: ret.error}
  return output.stdout

  // return ret.stdout, ret.stderr, ret.error
}
    
export const GET = (async ({ url }) => {

  var command = url.searchParams.get('command')
  const response = await getcommands()  
  return new Response(response);
}) satisfies RequestHandler;


