#Blocommerce Front End code base

##Libraries used
React for view components
Redux for state management
fetch API polyfill for HTTP requests

##Adding a new dependency
run yarn add <Dependency-name> in root folder of frontend code where +package.json is located. use --dev if it is a development dependency
This will result in mainly three changes which must be checked-in to repo
changes in offline-mirror
changes in yarn.lock ( according to git it is a binary file )
changes in package.json
##Development Environment Setup

##Build and Run

##Requirements

env config
nodejs version 6 and above
yarn latest
If you are behind proxy make sure you have proxy settings for npm

##Build
open terminal in ~customer-app/src/directory
run yarn install to install packages
run yarn run build to build source code


##Run unit test cases
run yarn install
run yarn test
run npm run test -- --coverage --watchAll=false
##Source code directory structure Note: This directory structure may not be found in current source This is placed here to make open for discussion so we can ammend the changes and implement the same



```
src
|--API //An API for all business logic, validation logic etc can go in isolated from framework
|--Components
|  |....
|--Pages
|  |--App
|--styles
|  |--layouts
|  |--selectors
.  .....
....
```


##Page Composition
```
+-----------------------------------------------+
|                                               |
|        PAGE / An Instance of application      |
|                                               |
| +-------------------------------------------+ |
| |                                           | |
| |               COMPONENTS                  | |
| |                                           | |
| | Buttons, Cards, Carousels,Search panel..  | |
| |                                           | |
| +-------------------------------------------+ |
|                                               |
| +-------------------------------------------+ |
| |                                           | |
| |              Integrations                 | |
| |                                           | |
| |  Action creators, Epics,Business logic... | |
| |                                           | |
| +-------------------------------------------+ |
| +-------------------------------------------+ |
| |                                           | |
| |                  Store                    | |
| |                                           | |
| |  State, Reducers, Middlewares ....        | |
| |                                           | |
| +-------------------------------------------+ |
|                                               |
+-----------------------------------------------+
```

##Unit testing ###Libraries for unit testing

jest
enzyme for shallow rendering react components
jest-fetch-mock for mocking fetch HTTP API ??

## License

This project is licensed under the MIT license, Copyright (c) 2019 Maximilian Stoiber.
For more information see `LICENSE.md`.
