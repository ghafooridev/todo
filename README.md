# Contributing to Task (Todo) management app for Shab inc.

The following is a set of guidelines for contributing to the Task App.
These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

---

# Guideline

### Structure of folders

1.  The components folder includes reusable components which are used globally across the other components or pages locating in `src/app/components`

2.  The lib folder includes the main configuration of using some services or 3rd party packages like redux locating in `src/lib`

3.  The constant folder includes all the constant data which are used globally locating in `src/lib/constants`.

4.  The redux folder located in `src/lib` contain features folder for maintaing the slices and also store for global store and a hook for accessing better to the built-in hooks of redux-toolkit

5.  The pages and layouts are the same for standard Next.js app for creating the pages and layouts located in `src/app`.

6.  eslint file expose the rules for linting the project also prettier file help to format code properly

7.  tsconfig file include the configuration of TypeScript

8.  next.config file include the configuration of next

---

# References

we are using some frameworks and third parties in this app and we could refer to them by following links

- Next.js official documentation [here](https://nextjs.org/)
- ReactJS official documentation [here](https://reactjs.org/)
- TypeScript official documentation [here](https://www.typescriptlang.org/)
- ESlint Rules [here](https://eslint.org/docs/latest/rules)
- State management [here](https://redux-toolkit.js.org/)
- Javascript style guide from Airbnb [here](https://github.com/airbnb/javascript)
- SASS guidelines [here](https://sass-guidelin.es/#architecture)

---

# Project setup

```
npm install
```

# Project run

```
npm run dev
```

# Project build for production

```
npm run build
```

# Project lint

```
npm run lint
```
