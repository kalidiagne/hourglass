0.2.0 / 2017-04-15
==================

  * Gaucho is now "Frameless" so the window style will be the same on every OS
  * Running tasks time will be updated each second using the same timer
  * Add and delete suite buttons disabled when action is invalid
  * Increased minimum window width
  * Tab supported for command input
  * Pressing F11 will no longer make gaucho "fullscreen"
  * Number of tasks per suite limited to 8. Gaucho now supports a maximum of 48 tasks
  * Fixed problem when closing and reopening a maximized window
  * Fixed timers problems when deleting running tasks
  * Fixed problem "Cannot read property 'scrollTop' of null" when deleting a running task
  * Fixed listeners memory leak when deleting tasks or suites
  * General code refactoring
  * Improvements in Readme file

0.1.3 / 2017-03-30
==================

  * All running tasks will stop when closing gaucho
  * Gaucho icon added to navbar
  * Readme updated with better instructions for usage and development
  * Removed moment.js dependency
  * Hours support in execution time
  * Loading times slightly improved
  * Fixed resizing with dev tools bug
  * Build will no longer contain config.json file
  * Task.json will be saved when closing gaucho
  * Added icon as part of the build

0.1.2 / 2017-03-25
==================

  * Added icon
  * Electron and materialize versions fixed
  * Task collapsed after saving in edit mode
  * Added running time to tasks
  * Texts are no longer selectable (except logs and inputs)

0.1.1 / 2016-12-20
==================

  * Window size will be part of the userConfig
  * Task edit menu added
  * Added minimum size to the window
  * Stopping a running task icon changed, now it will be the same as idle task
  * Fixed problem when cleaning output
  * Changed project structure
  * .jshintrc, .gitignore and task.json removed from build
  * Task.json renamed to tasks.json
  * Added changelog file
  * Added config.json as a separate file from tasks.json

0.1.0 / 2016-12-12
==================

  * Electron packager
  * Yerbamate integration
  * Basic UI
  * Materializecss integration
  * Vue.js framework integration
  * User configuration handler
  * Edit tasks controls
  * Run/Stop tasks controls
  * Multiple suits support
