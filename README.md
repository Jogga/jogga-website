# jogga-website
My personal site

## Usage

### Content Submodule
The website's content is tracked in a seperate repository, integrated as a git submodule. To update the submodule run: `git submodule update --remote --rebase`. After that you will have to commit the changes that occurred in the submodule. For convenience use the update content package script.

### Package Scripts 
For a complete list of the package scripts, have a look at the scripts in package.json. The two most important scripts are listed below.

#### Build
```npm run build```
Will clean `public` and `static/css` and build with distribution in mind: It compresses css and disregards drafts

#### Develop
```npm run dev```
Will build and watch scss. Also builds, watches, and serves the site.

### Update content
```npm run content:update```
Will update the content submodule and commit the changes occurred in the submodule.