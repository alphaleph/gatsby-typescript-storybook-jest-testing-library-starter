<p align="center">
    <img alt="Gatsby Icon" src="/github/icon.png" width="192" />
</p>
<h1 align="center">
  Gatsby-TypeScript-Storybook-Jest-Testing-Library Starter
</h1>
<h2 align="center"></h2>

Gatsby + TypeScript + Storybook + Jest + Testing-Library all in a preconfigured starter, based on the [gatsby-default-starter][gatsbydefaultstarterurl] and restructured for Component-Driven Development (CPP)! Also includes a script to deploy to [GitHub Pages][ghpagesurl]!

## ⚠️ Before You Start

_For the most out-of-box usage, use this starter with [VS Code][vscodeurl] and its [ESLint][eslintexturl] and [Prettier][prettierexturl] extensions._

_Note: The Node.js scripts for Storybook are configured for **Windows**._
For Linux environments, make these changes in `package.json`:

```
"storybook": "NODE_ENV=production start-storybook -s public -p 6006",
"build-storybook": "NODE_ENV=production build-storybook -s public"
```

## 🚀 Quick start

1.  **Create a Gatsby site.**

    TODO: Replace URL when posted to Gatsby Starters Library
    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

1.  **Test your components with Jest!**

    ```sh
    npm test
    ```

1.  **Run Storybook to visually test your components during development!**

    ```sh
    npm run storybook
    ```

    The Storybook site runs at `http://localhost:6006`.

1.  **Deploy your website to GitHub Pages!**
    _\*Requires a gh-pages branch in your GitHub repository by default. For custom URLs and other configurations, see [link][gatsbyghpurl]_
    ```sh
    npm run deploy:github
    ```

## 🧐 What's inside?

    A [Gatsby][GatsbyUrl] development environment that works out-of-the box configured with:

-   [Storybook][storybookurl]
-   [Jest][jesturl]
-   [Testing-Library][testing-libraryurl]
-   [TypeScript][typescripturl]

    Also, it's configured to deploy to GitHub Pages!

[gatsbydefaultstarterurl]: https://github.com/gatsbyjs/gatsby-starter-default
[gatsbyurl]: https://www.gatsbyjs.org/
[ghpagesurl]: https://pages.github.com/
[gatsbyghpurl]: https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/
[storybookurl]: https://storybook.js.org/
[jesturl]: https://jestjs.io/
[testing-libraryurl]: https://testing-library.com/
[typescripturl]: https://www.typescriptlang.org/
[vscodeurl]: https://code.visualstudio.com/
[eslintexturl]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettierexturl]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
