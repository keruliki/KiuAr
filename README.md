# Tailwind Boilerplate

A barebones but configurable starter project for playing around with Tailwind in a proper PostCSS environment. Forked from https://github.com/tailwindcss/playground.

Changes include:
- stripped down the playground homepage for getting started quickly
- imported `base.css` and `custom.css` files for adding custom styles with @apply
- font family, text sizes, and screens ready to be configured in `tailwind.config.js`
- replaced color palette with theme-ready lt/md/dk colors
- moved CSS files into `/css` folder
- added screen for print styles
- reorganized serve and build tasks
- implemented custom CSS linting with Stylelint

To get started:

1. Clone the repository:

    ```bash
    git clone https://github.com/dylanized/tailwind-minimal.git tailwind-minimal

    cd tailwindcss-playground
    ```

2. Install the dependencies:

    ```bash
    # Using npm
    npm install

    # Using Yarn
    yarn
    ```

3. Start the development server:

    ```bash
    # Using npm
    npm run serve

    # Using Yarn
    yarn run serve
    ```

    Now you should be able to see the project running at localhost:8080.

4. Open `public/index.html` in your editor and start experimenting!

## Building for production

Even though this isn't necessarily a starter kit for a proper project, we've included an example of setting up both [Purgecss](https://www.purgecss.com/) and [cssnano](https://cssnano.co/) to optimize your CSS for production.

To build an optimized version of your CSS, simply run:

```bash
# Using npm
npm run production

# Using Yarn
yarn run production
```

After that's done, check out `./public/build/tailwind.css` to see the optimized output.
# KiuAr
