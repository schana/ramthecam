## Important configuration notes

1. Before building, be sure to update the stream url in App.js

To serve using nginx, we need to make sure all the routes are handled by React.

```
location / {
  try_files $uri $uri/ /index.html;
}
```

To build, enter the repo:
```
npm install
npm run build
```

To serve, copy the build to whatever directory is being served:
```
# Remove whatever was present before
rm -rf /var/www/html/*
# Insert the newly-built app
cp -r ./build/* /var/www/html/
# Restart nginx
systemctl restart nginx
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
