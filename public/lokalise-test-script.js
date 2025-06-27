import { LokaliseApi } from "@lokalise/node-api";

const lokaliseApi = new LokaliseApi({
  apiKey: 'b56292353456ae5b0eb793dabb1f4cb7f73fa85b'
});

const processes = await lokaliseApi.queuedProcesses().list({
  project_id: '66835468677f4447c39f72.08805740',
});

const readyToCreatePR = processes.items[processes.items.length-1].type === 'file-import'

console.log('ready To Create PR: ', readyToCreatePR);
if (readyToCreatePR){
  const process = await lokaliseApi.files().async_download('66835468677f4447c39f72.08805740',
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

const process_id = process.process_id;

} else {
  console.log('Already downloaded. No new content available to make a PR.');
}
