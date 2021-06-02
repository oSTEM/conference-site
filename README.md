# oSTEM Conference Site

<a href="https://vercel.com/?utm_source=ostem&utm_campaign=oss" style="display: flex; align-items: center;">
Powered by&nbsp;
<img height="16px" src="public/images/powered-by-vercel.svg" alt="Vercel" />
</a>

## Non-code (copy) edits
For most non-code changes, edits can be made in the GitHub interface.

You can edit the page (at `src/pages/[page].mdx`).

## Development environment setup

These steps will get you set up with a development environment for the project.
The development environment will let you preview changes as you edit and should be used for code changes.
For text changes (e.g., changing text in an `.mdx` file), you can just use the GitHub web interface (see above).

### Install NodeJS
First, if you haven't already, [install Node.js](https://nodejs.dev/learn/how-to-install-nodejs).
If in doubt, for MacOS use [Homebrew](https://brew.sh/) (once installed, run `brew install node` in the terminal);
and for Windows use [scoop](https://scoop.sh/) (once installed, run `scoop install nodejs` in PowerShell).

### Clone the repository
If you're not experienced with cloning Git repositories, we recommend using [GitHub Desktop](https://desktop.github.com/).
You can also use the `Git: Clone` command within VSCode.

### Install project dependencies

This will install all of the JavaScript dependencies (such as React and TypeScript) for this project.

```bash
npm install
```

### Starting the development server

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Any edits you make will be reflected in real time (after you save the file).

## Helpful reading

If you're new to React or NextJS, these might be some helpful resources:
* https://nextjs.org/docs

## Directory structure

### `src/pages`

Files in this directory define pages for the site.
For example, `src/pages/foo.mdx` would define the page at the `/foo` URL and `src/pages/bar/spam.mdx` would define a page at the `/foo/spam` URL.
See the NextJS docs for more information about this.

### `src/components`

!!TODO!!
