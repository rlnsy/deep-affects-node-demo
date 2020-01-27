### Webhook:
A placeholder hook can be run locally by calling ```node hook.js```
### Sample request to run:
```
curl -X POST \
"https://proxy.api.deepaffects.com/audio/generic/api/v2/async/denoise?apikey=<INSERT API KEY>&webhook=localhost:3000" -H 'content-type: application/json' -d @data.json
```
Note that the "audio" data is corrupt but the goal of this is to verify our API credentials.
