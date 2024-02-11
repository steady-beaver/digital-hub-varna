##Architecture

_Server_ project is added just for registration purposes. It is using Atlas Mongo service with free account.

The app topic is book manager. User can search books and save favorites. You can search books with infinite scroll technic in external API. Searched queries are cached. There is a detailed book view where user can click the heart and add book to favorites. Favorite books are shown in dynamic grid.

##Fancy things
Infinite scroll technique on the search page

##Demonstrated features

__Routing__
react-router-dom v6, 
protected routes, 
layout, 
dynamic route for /book/:id

__Responsive design__
tablet and mobile

__Registration form__
Formik
yup validator
RegEx pattern for the password
with registration API (please check the server folder)

__Content: 3 dynamic pages__
search
book details
favorites

__Styles__
Custom styles with _styled-components_ for the content pages
CSS framework _Material-UI_ v4 for registration form
I used it to accelerate the development

__TypeScript__
Static types

__Requests__
axios 
React Query (aka TanStack Query) v6

__State management__
React context, two times - for authentication and for the books logic
React Query (aka TanStack Query) v6 - async state manager for requests to the servers. Provides caching

__Notifications__
react-toastify



```
npm install
```

```
npm start
```