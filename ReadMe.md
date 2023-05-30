# TypeScript intro
Assignment repo for TypeScript. Assignments are located [here](./Assignments.md).

# Path to Awesomeness
- Install TypeScript (only once): `npm install -g typescript`
- Clone this repo
- Start the TypeScript transpiler: `tsc --watch`
- Update line 8 in tsconfig.json with your student id
- Write code

# Notes
- Install TypeScript: `npm install -g typescript`
- `tsc --init`
- `tsc` 
- `tsc --watch`
- `npm install --save-dev typescript`
- `tsc -v`

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