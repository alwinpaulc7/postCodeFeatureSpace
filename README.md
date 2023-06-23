Open the application in Visual Studio Code.
The application needs node_modules. It is already present in the application, if not, use 'npm install' to install the node modules.
Use the 'ng serve' command in the terminal to run the project.
The application will run on http://localhost:4200

When the application will land on the page where the user can enter UK postcode in an auto-complete input field.
Auto-complete input field is made of angular material and uses DebounceTime and DistinctUntilChanged methods for optimized API call.
The application also consist of Lazyloading.
ForkJoin is used for parallel API calls.
Error handling in services.
It also utilized Rxjs library.
