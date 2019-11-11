# Account-Owner Client
This is an ASP.NET Core Web API application. It uses a MySQL database and employs a Repository pattern, generics, LINQ, and Entity Framework Core. The architecture and code organization uses multiple projects and services to demonstrate good practices, and to make the code more readable and maintainable.

## Summary
This is a React client application that consumes a REST API implemented on a .NET Core Web API server. It is deployed on Heroku at [here](https://damp-bastion-23446.herokuapp.com/)<br><br>
The back-end code is located at [here](https://github.com/mcast045/account-owner-server)
1. Used React Router and Bootstrap to implement a navigation component.
2. Used Axios for API calls to handle GET, POST, PUT and DELETE calls.
3. Used Redux with repository actions and reducers.
4. Implemented a lazy loading Higher Order Component (HOC) to load components asynchronously.
5. Centralized error handling using the Redux workflow.
6. Created reusable modal window components using Bootstrap.
7. Created a configuration object to dynamically generate our forms.

## Installation
```
npm install
npm start
```
