# SnowScriptDocs
Use VSCode Intellisense without integrating with SNow

## Server and Client scripts
Either edit the server.ts file or create a new .ts file - making sure to import the appropriate type definitions just like in server.ts and client.ts:

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
