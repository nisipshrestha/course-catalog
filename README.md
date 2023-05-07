# Course Catalog

A responsive course catalog page with various filters available. All the data responses received from the APIs used in the application are made available via json-server.


## Env File Setup

Create a .env file with the key ```REACT_APP_BASE_URL=http://localhost:5500```
or any API_URL you prefer to use in the app.

Or, just simply copy the example.env to .env. 

```bash
  cp example.env .env  
```
    
## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run json-server`

Launches the mock server i.e, json-server for API usage in the app, with data.json as the data
source.
