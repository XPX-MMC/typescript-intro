# TypeScript intro
Assignment repo for TypeScript. Assignments are located [here](./Assignments.md).

# Path to Awesomeness
- Install TypeScript (only once): `npm install -g typescript`
- Clone this repo
- Update line 2 in `tsconfig.json` with your student id
- Start the TypeScript compiler: `tsc --watch`
- Open a new terminal (optionally split the terminals) and CD to `dist`
- Execute: `node compiler-variables.js`

# Debugging
To debug TypeScript projects, use this `launch.json` file and update it with your student id:
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