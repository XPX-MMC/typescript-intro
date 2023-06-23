# TypeScript intro
Assignment repo for TypeScript. Assignments are located [here](./Assignments.md).

# Path to Awesomeness
- Install TypeScript (only once): `npm install -g typescript`
- Clone this repo
- Start the TypeScript transpiler: `tsc --watch`
- CD to your student directory, make a change to `compiler-variables.ts`
- CD to dist/{student directory} and execute: `node compiler-variables.js`

# Launch.json
```
{
    "version": "0.2.0",
    "configurations": [  
      {
        "type": "node",
        "request": "launch",
        "name": "Debug TypeScript",
        "program": "${workspaceFolder}/stu0/app.ts",
        "preLaunchTask": "tsc: build - tsconfig.json",
        "outFiles": [
          "${workspaceFolder}/dist/**/*.js"
        ],
        "sourceMaps": true
      }
    ]
}
```