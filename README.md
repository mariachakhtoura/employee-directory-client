
# emoployee-directory-client

This repository is built using React + Vite + TypeScript.

It uses apis from [employee-directory-services](https://github.com/mariachakhtoura/employee-directory-services).
## Features
 
**UI Component Library:** [Primereact](https://primereact.org) and **CSS Utility Library** [Primeflex](https://primeflex.org/):
- Build & customize components fast
- Ensure adaptive design
- Accessibility

#### This project makes use of react-router-dom's newest router feature in v6.4: [data api router](https://reactrouter.com/en/main/routers/picking-a-router)

- Automatically fetch data based on routes using [loaders](https://reactrouter.com/en/main/hooks/use-loader-data)
- Automatically re-validate & reload data after an action is performed using [fetchers](https://reactrouter.com/en/main/hooks/use-fetcher)


##

- Build dictionary files for internalization with [i18next](https://www.i18next.com/):

- Build forms fast with [react-hook-form](https://react-hook-form.com/)

- Combine css classes with Primeflex using [Sass](https://sass-lang.com/)

##
## Roadmap
This project is still in progress, and these next features are in the pipeline:

- Code splitting

- Configure screen breakpoints with Primeflex

- Add api-pagination to user listing

- Add more validation on fields using react-hook-form

## Lessons Learned

- Primereact is a very rich, customizable and easy to use library for react components. It is on the same level as MUI for being developer friendly and having good documentation. However, looking at the build size of this repo, you will notice the big size this library added to a very small project.
- react-router-dom data api router is almost magical in dealing with fetching data and reloading pages. However, it is essential to pay attention to the code you're using, otherwise you will cause redundant fetch api calls on every page load.

## Run Locally

Clone the project

```bash
  git clone https://github.com/mariachakhtoura/employee-directory-client
```

Go to the project directory

```bash
  cd emoployee-directory-client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

