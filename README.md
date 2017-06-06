# Todo List
Keep track of the things that you need to do with an easy to use interface.

*Note: The repo is 'Todo-App' but the app itself is 'Todo List'.*

## Installation
To download:
```
git clone https://github.com/ianrosedev/Todo-App.git
```
Then from the ```root``` directory:
```
npm run install-all
```
The app and all dependencies will now be installed, the app is ready to go!

## Starting the App
From the ```root``` directory:
```
npm start
```
This will start both the frontend and API servers concurrently. If Chrome is available, the app will open automatically.

The app is now running at: ```http://localhost:3000```

If you need access to the API server, it is running at: ```http://localhost:3001```

## Testing
### Client:
From the ```client``` directory:

Test the whole app:
```
npm test  
```
Test an individual component:
```
npm test -- [ComponentToTest].test.js
```

### API Server:
**Server is *NOT* for production use!**

No tests are currently written for it.

## Build
The ```client``` side is built with React using the Facebook ```create-react-app```. More documentation will be found at the [GitHub page](https://github.com/facebookincubator/create-react-app).

From the ```client``` directory:
```
npm run build
```
A production ready build folder will be produced.

## Usage
An example of usage has been built into the download so you can get a feel for the app. You will be able to interact with the app as if it were in production, but all changes will not be saved and be lost if the local servers are turned off.

Upon starting the app you will be greeted with a login page. No password is required for this example, simply click 'Login'.

On the main screen you will see your tasks arranged by importance. That importance can be changed and the order will be updated by priority. You are able to edit the task names or delete a task. You can also edit your profile.

Clicking on a task name will take you into the task body. Each task allows you to keep track of issues, questions, notes and websites. You can add, edit, delete or mark as completed your sub-tasks. The default is to only show 'open' tasks, but you can also show only  'completed' or 'all ' of your sub-tasks. You can delete the entire task or go back to the main page.

## License
### Internet Systems Consortium license


Copyright (c) 2017, Ian Rose

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.
