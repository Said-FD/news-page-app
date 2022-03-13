### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm install`

And then:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### Unfortunately, I couldn't implement some features of the task, as API don't have these kind of options.
1. API does not have a `category` field in the response (actually it has, but by the different endpoint which lacks `title`).
2. I can't request 10 articles by the Load More button after the first request which is 11 items, as further I'll face incorrect pagination.
I'll have 10 results for the first Load More click, and I'll need to skip the first item because it will be a duplicate of the last item in the current list. So I'll get only 9 results.
Or I'll need to request 11 articles all the time, but throw one from the response, so I'll lose articles.
I decided to go with 11 items for the Load More option, to have the correct quantity on the initial state.
