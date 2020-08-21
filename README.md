# SnowScriptDocs
Use VSCode Intellisense without integrating with SNow

## Server and Client scripts
You have the following options for scripting:
* Edit the server.ts file for server-side scripting
* Edit the client.ts file for client-side scripting
* Create a new .ts file, making sure to import the appropriate type definitions just like in server.ts and client.ts:

Inside server.ts:
```
import './lib/dts/serverAPI';
```

Inside client.ts:
```
import './lib/dts/clientAPI';
```

## Export script to SNow 
Simply copy everything below the import statement and paste into the appropriate SNow script field. Even though this is a TypeScript file, make sure to only use ES5 JS syntax.
