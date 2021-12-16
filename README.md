# Interview Scheduler

This is a single-page app built on React.js that allows users to book, edit or cancel interviews for each day of the week (Monday - Friday).

## Screenshots

![ ](https://github.com/belalelmi/Scheduler/blob/production/public/images/main.png?raw=true)

![ ](https://github.com/belalelmi/Scheduler/blob/production/public/images/addAppointment.png?raw=true)

## Setup

### To Run App Locally

1. Fork this repository & then clone the forked repository.
2. Go to the [scheduler-api](https://github.com/belalelmi/scheduler-api) that contains the database and fork it & follow the steps to get it up and running.
3. Install dependencies for both (scheduler & shceduler-api) using the `npm install` command.
4. Open two terminals, one for scheduler and the second for scheduler-api.
5. Run the both servers using the `npm start` command.
6. Go to <http://localhost:8000/> in your browser and book an interview :)

### Running Webpack Development Server

Install dependencies with `npm install`.

```sh
npm start
```

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```

### Dependencies

```
Axios
Babel-loader
React
React-dom
React-scripts
React-test-renderer
Prop-types
Babel/core
Classnames
Storybook/addon-actions
Storybook/addon-backgrounds
Storybook/addon-links
Storybook/addons
Storybook/react
Testing-library/jest-dom
Testing-library/react
Testing-library/react-hooks
Node-sass
```
