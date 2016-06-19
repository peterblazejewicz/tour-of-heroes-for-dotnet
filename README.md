# Tour of Heroes for Dotnet Core

The Angular 2 with Polymer components run with Dotnet Core http server.

Requirements:
- `dotnet cli`
- `angular cli`
- NPM
- Bower

## Installation

```
dotnet restore
```
(installs Dotnet deps and calls `npm install` and `bower install`
```
dotnet build
```
builds C# project and calls `ng build`
```
dotnet watch
```
to run C# web application on `localhost:5000` port and (optional):
```
ng serve
```
to host Angular client via built-in Node based server

TODO: 
R&D for `nb build` details (for development and production environment)

## Author
@peterblazejewicz
