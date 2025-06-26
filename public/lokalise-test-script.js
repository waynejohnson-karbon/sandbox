import { LokaliseApi } from "@lokalise/node-api";

const lokaliseApi = new LokaliseApi({
  apiKey: 'b56292353456ae5b0eb793dabb1f4cb7f73fa85b'
});

const processes = await lokaliseApi.queuedProcesses().list({
  project_id: '66835468677f4447c39f72.08805740',
});

const readyToCreatePR = processes.items[processes.items.length-1].type === 'file-import'

console.log('ready To Create PR: ', readyToCreatePR);


// lokaliseDevhub.auth('b56292353456ae5b0eb793dabb1f4cb7f73fa85b');
// lokaliseDevhub.listAllProcesses({project_id: '66835468677f4447c39f72.08805740'})
//   .then(({ data }) => console.log('script console output: ', data))
//   .catch(err => console.error('console error: ', err));