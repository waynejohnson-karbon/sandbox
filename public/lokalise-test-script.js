import { LokaliseApi } from "@lokalise/node-api";

const lokaliseApi = new LokaliseApi({
  apiKey: 'b56292353456ae5b0eb793dabb1f4cb7f73fa85b'
});

const projects = await lokaliseApi.projects().list();
console.log('script console output: ', projects);

// lokaliseDevhub.auth('b56292353456ae5b0eb793dabb1f4cb7f73fa85b');
// lokaliseDevhub.listAllProcesses({project_id: '66835468677f4447c39f72.08805740'})
//   .then(({ data }) => console.log('script console output: ', data))
//   .catch(err => console.error('console error: ', err));