# Futurama Random Episode Generator
Want to watch an episode of Futurama, but not sure which one to choose? Don't get stuck in analysis paralysis! Simply go open this app and a random episode will be suggested for you. Don't feel like watching that episode? Simply just refresh the page and a different episode will be randomly selected!

## This project was built using [Create React App](https://github.com/facebook/create-react-app).

## All Data comes from the [TVmaze API](http://www.tvmaze.com/api)

I know there are a few API options to get data on television shows such as OMDB, Trakt, and TVDB. I chose to use the TVmaze API simply because it does not require any sort of sign-up or registration, nor does it require an API Key or Authorization Token. Since I will only be reading data and not creating it, keys and tokens seemed unnecessary. 

This project uses the [Axios](https://www.npmjs.com/package/axios) library to make API calls.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.