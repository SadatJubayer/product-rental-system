# Product Rental System

A React application to view product-list, search and sort them, view their info, and **book** or **return** them. It uses browser's LocalStorage as a DataBase.

## 📷 ScreenShoot (s)

> Product List

![Product List](/docs/screenshots/product-list.png)

> Product Booking

![Product Booking](/docs/screenshots/product-book.png)

> Product Returning

![Return Product](/docs/screenshots/product-return.png)

## 👨‍💻 Installation and Setup Instructions

To run locally, you will need `node` and `npm` or `yarn` installed globally on your machine.

Install the dependencies

```shell
yarn
```

To run the project locally

```shell
yarn start
```

To run tests

```shell
yarn test
```

To view the test coverage

```shell
yarn test:cov
```

To run eslint and prettier checks

```shell
yarn lint
```

To fix eslint and prettier issues silently

```shell
yarn lint:fix
```

<details>
  <summary> Commands with npm</summary>

Install the dependencies

```shell
npm install
```

To run project locally

```shell
npm start
```

To run tests

```shell
npm test
```

To run test coverage

```shell
npm run test:cov
```

To run eslint and prettier checks

```shell
npm run lint
```

To fix eslint and prettier issues silently

```shell
npm run lint:fix
```

</details>

## 🗄️ Project Structure

Most of the code lives in the `src` folder and the project structure looks like this:

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images,icons,fonts, etc.
|
+-- components        # shared components used across the entire application.
|
+-- constants         # Constants of the applications are here.
|
+-- contexts          # shared contexts used across the entire application.
|
+-- data              # Static datasets.
|
+-- features          # feature based modules, a feature can have components, hooks, assets etc.
|
+-- hooks            # shared hooks used across the entire application.
|
+-- pages            # All pages of the application are here.
|
+-- types            # shared types used across the entire application.
|
+-- utils            # shared utility functions.
|
+ eslintrc.json        # Adds the ESLint configuration for the project.
|
+ prettierrc.js        # Adds the Prettier configuration for the project.
|
+ tailwind.config.js   # TailwindCSS configuration file. Added some global theming here.
```

## 💻 Technical Choices

-   `React` was the requirement.
-   `TypeScript` made the application fully typed.
-   `React Context API` - As this application is comparatively tiny, I have chosen ContextAPI over a global state library like Redux or Recoil.
-   `TailwindCSS` - Tailwind is a utility-based, highly-customizable framework .Used it for styling the whole application without writing a single line of custom CSS. It also provided a customizable theme.
-   `classnames` - It helps to make conditional styling. All it is is a single function, taking different values as arguments and spitting out a single string based on them.

## 💡 Logic

Besides the logic from the provided document, I have added some extra logic to make the application more logical. Here is the the list of all logics -

-   User can book a product only if the product's _Minimum Rental Period_ is smaller than the user's given period.

-   If a user books more than the _Minimum Rental Period_, a 10% discount will be applied. The discount amount is changeable from the constant file.

-   When a user books a product, It will be unavailable for booking.

-   When a user returns a product, It will be available for booking again. But if its durability is greater than 0.

-   When a user returns a product, mileage and durability will be changed based on the user's input.

-   While booking, users can't select a date before today.

## 👌 Improvements

As the time was limited to develop the project, I couldn't make it with all the ideas in my mind. Things I consider adding to make it better -

**More Testing**: I have added some test cases with the `React Testing Library` for some components. Writing more test cases would be great.

**Git Hooks**: Pre-commit hooks can be added to check esLint errors, prettier errors, tests, and build errors. `lint-staged` & `husky` would be a good combination for this.

## Author

-   [@SadatJubayer](https://www.smjubayer.me)
