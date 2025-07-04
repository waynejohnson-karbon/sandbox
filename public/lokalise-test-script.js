import { LokaliseApi } from "@lokalise/node-api";

const projectId = '66835468677f4447c39f72.08805740';

const lokaliseApi = new LokaliseApi({
  apiKey: process.env.LOKALISE_KEY
});

const processes = await lokaliseApi.queuedProcesses().list({
  project_id: projectId,
});

const readyToCreatePR = processes.items[processes.items.length-1].type === 'file-import'

console.log('Ready To Create PR?: ', readyToCreatePR);
if (readyToCreatePR){
  const process = await lokaliseApi.files().async_download(projectId,
    {
      format: 'yaml', 
      "original_filenames": true,
      "directory_prefix": "/",
      "all_platforms": true,
      "export_sort": "a_z",
      "export_empty_as": "empty",
      "include_comments": false,
      "include_description": false,
      "replace_breaks": false,
      "disable_references": false,
      "plural_format": "icu",
      "placeholder_format": "icu",
      "icu_numeric": true,
      "indentation": "2sp",
      "yaml_include_root": false,
      "triggers": [
        "github"
      ]
    }
  );

  console.log('Process complete. PR being created. Process details: ', process);

} else {
  console.log('Already downloaded. No new content available to make a PR.');
}
