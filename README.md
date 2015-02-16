# Usage

Building DDT requires a working install of Node.js and npm.

Clone the GitHub repository and switch to the master branch:

    $ git clone https://github.com/metapolator/ddt
    $ cd ddt
    $ git checkout master

Install project dependencies from npm:

    $ npm install

Install Gulp globally:

    $ npm install -g gulp

Build DDT and run a server to serve up the built files:

    $ gulp
    $ gulp server

This will serve DDT on http://localhost:8080 on your computer. Products of the build are placed in the `build/` directory.

All development happens on the master branch. The `gh-pages` branch is used to publish the work in progress version of DDT to GitHub Pages. See http://testmyfont.com/demo/.

To publish a fresh build of DDT to GitHub Pages, you can use the `gh-pages` Gulp task:

    $ gulp gh-pages

This will `git stash` your current work in progress, create a fresh build of DDT using your current HEAD, and push it to the `gh-pages` branch.


# Layout of the Source Tree

- The `ddt/` directory is the root of the source tree.
- `ddt/app/` contains code for the main views within DDT. Each of these views is mapped to a route.
- `ddt/lib/services/` contains services, and `ddt/lib/directives/` contains directives.
- `vendor/` contains third party libraries that are not available on npm.

