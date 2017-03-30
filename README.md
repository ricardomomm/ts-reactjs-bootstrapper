# TS + ReactJS Bootstrapper
TypeScript + ReactJS bootstrapper project

## Installing Dependencies

In order to build, you need to have **Node.js 4.x** and **git 2.x**.

For Windows you have to download and install [Git for Windows](https://git-for-windows.github.io/) and [Node.js](http://nodejs.org/download/) and [Visual C++ Build Tools](http://landinghub.visualstudio.com/visual-cpp-build-tools).

Mac OS users should install [Homebrew](http://mxcl.github.com/homebrew/). Once Homebrew is installed, run `brew install git` to install git, and `brew install node` to install Node.js.

Linux users can use the [distributions provided by NodeSource](https://github.com/nodesource/distributions) or their package managers to install `git` and `nodejs`.

### Build

Clone a copy of the repository by running

```bash
git clone https://github.com/ricardomomm/ts-reactjs-bootstrapper.git
```

Enter the repository directory

```bash
cd ts-reactjs-bootstrapper
```

Install project dependecies

```bash
npm install
```

Run the build script:
```bash
npm run build
```

## Test

After completing the step above you just need to run the test script:
```bash
npm run test
```

## Other Scripts

Running Lint:
```bash
npm run lint
```

Serving the application:
```bash
npm run start
```
