This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



Assignment: 

Reacting to APIs
Getting Started
Create a new project with Create React App.
Delete the src directory and all of its contents.
Create a new src directory and a new index.js file inside of src.
Create a new directory named components inside of src.
You should now have a project structure that resembles the following:

node_modules/
public/
src/
|- components/
|- index.js
.gitignore
package-lock.json
package.json
README.md
Before starting the following tasks, make sure that the Chrome Developer Tools are open in your "localhost:3000" tab, and that you also have the React Developer Tools installed. You should be checking these as much as possible to not only troubleshoot these tasks, but to confirm your understanding of what you are doing.

In this lab, it is also helpful to check your 'Network' tab in the Chrome Developer Tools when you are making HTTP Requests (or expecting HTTP Responses).

Each time you save your files while completing these tasks, check the terminal and browser for compilation errors, and pay attention to what they are telling you. For example, if something is "undefined", why does React think that? What should be defined, and where?
Objectives
DESIGN CONSTRAINT: You may only render one component in index.js.

In this lab assignment, your primary objective is to request data from a third-party API, handle the response, and then display the data in the browser.

The API we will start with is the Studio Ghibli API. If you visit that website, you will be able to see what a traditional API explorer looks like. Spend a few minutes familiarizing yourself with the website, and see if you can determine what endpoints are exposed in the API.

When reading the requirements below, think about what kind of user interface this will be, and how many components you may need in order to accomplish these tasks. Which components have state and which ones can just rely on props? Before you jump right into the lab, consider how you will need to organize your application now that you have data being brought in from an API.

After each phase, commit your changes in Git, and push them to a GitHub repository on your GitHub profile. If you need a refresher on creating repositories and pushing to GitHub, check out the "Getting Started at Covalence" course for more updated videos.
PHASE ONE
Your first task is to retrieve all films from this API, and then parse the response to display a "card" for each film. You will need to use the fetch method in order to do this, and you should invoke fetch when the component is mounted to the application.

Since we all should be using Chrome, you may get away with not importing the isomorphic-fetch node module, but for best practices you should import it as well as the es6-promises.

Consider styling your card at this point so that it is easier to read. Bootstrap 4 should make this pretty easy for you.

At a minimum, you should display the film title and description, but you may use as many properties as you want.

Hint: Don't forget your keys!

PHASE TWO
Your second task is to conditionally render films. More specifically, you should be able to manually "load" the films with a button click.

When the project first compiles, the only thing you should see is the Studio Ghibli logo image and a button with the text "Load Films". Upon clicking the button, the films should load and be displayed on the screen.

Hint: your fetch method from Phase One does not need to change in order to complete this section. Instead, consider toggling a property in state with the button click.

PHASE THREE
Your third task is to combine both objectives from Phase One and Two in order to conditionally load data from another endpoint in the Studio Ghibli API. Furthermore, you may only make one HTTP request at a time.

For example, you may choose to load Films or People with a button for the respective endpoint, which means the project should only display two buttons (one for "Load Films", one for "Load People") when it first loads. The data loaded, and therefore rendered, depends on which button is pressed.

At a minimum, if you choose the "People" endpoint, you should display the person's name, age, gender, and a link to that particular person's JSON response that will open in a new tab, but you may use as many properties as you want. If you choose something else as your second endpoint, just be sure to display at least two properties in addition to opening up the link to the item's ID in a new tab.

And that's all for this lab! The great thing about APIs, though, is that they give you creative freedom to use the data as much as you see fit, so if you have another idea of how to manipulate this data and display it for your "users", then go right ahead! We're looking forward to seeing what you create.
Resources (click to download):