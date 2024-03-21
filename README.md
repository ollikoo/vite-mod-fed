# Module Federation with Vite and React

This is a sample with multiple packages with multiple applications to simulate usecase for developing
an application using module federation.

## Getting Started

### Build & Run the project

Following command will install the dependencies.

`yarn install`

Following command will build all the packages.

`yarn build`

Next open up two terminals and enter each of following commands to run each of the projects.

**App**

```
cd packages/host
yarn install
yarn build && yarn preview
```

**Dashboard**

```
cd packages/dashboard
yarn install
yarn build && yarn preview
```

**Stations**

```
cd packages/stations
yarn install
yarn build && yarn preview
```

**UI**

```
cd packages/ui
yarn install
yarn build && yarn preview
```

Running applications can be access through these URLs

**Host Application**

`http://localhost:3000/`
