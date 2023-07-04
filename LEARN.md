# React Router v6

## Browser Data-Router Setup

```js
import {
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider, Route
} from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ /* Layout component */ }>
        <Route index element={ /* Home page component */ } />
        { /* All other routes */ }
        <Route path='*' element={ /* 404-not-found page component */ } />
    </Route>
))

export default const App = () => {
    return <RouterProvider router={router} />
}
```

----------
<br>

## Route Parameters

A certain route can contain a list of objects, each leading to its own page containing information about that object. To avoid static creation of pages for each object, it is possible to create one page with a single-valued parameter linked to the object that differentiates between the pages. To insert a parameter in a route, you must write a colon (":") before it.

```js
...createRoutesFromElements(
    ...
    <Route path='/' element={ /* Home page component */ }>
        <Route path='data' element={ /* List page component */ }>
        <Route path='data/:id' element={ /* Detail page component */ }>
)
```

In order to get access to the parameter in the "Detail" page, for example, the `useParams` hook is needed.

```js
import { useParams } from 'react-router-dom'

export default const DetailPage = () => {
    const { id } = useParams()

    console.log(id)
    ...
}
```

----------
<br>

## Nested Routes & Layout Routes

If there are certain templates that exist on all pages (the navigation bar, for example), it is customary to create a parent route and put all the nested routes inside it. 

The element of the parent route will be a layout that will contain the repeating templates, and also an `Outlet` component that expresses the current page. 

To transfer data that exists in the parent route to all the nested routes, there's a \``context`\` property to the `Outlet` that will contain an object with all the data in it.

```js
import { Outlet } from 'react-router-dom'

export default const Layout = () => {
    const data = ...

    return (
        <Navbar />
        <Outlet context={ {data} } />
        <Footer />
    )
}
```

For the pages to have access to the context data, there's the `useOutletContext` hook.

```js
import { useOutletContext } from 'react-router-dom'

export default const Page = () => {
    const { data } = useOutletContext()
    ...
}
```

----------
<br>

## `Link` & `NavLink` Components

`Link` is an element that lets the user navigate to another page by clicking it (in the background, what's being rendered is an `<a>` element).

```js
export default const Page = () => {
    <Link
        to='..' 
        relative='path'
    >
        Back to previous page
    </Link>
    ...
}
```

`NavLink` is a special kind of `Link` that knows whether or not it is "active" or "pending". Using this feature, it is possible to apply to the \``className`\` property or to the \``style`\` property a function with two parameters (isActive & isPending), and therefore decide what type of design will be obtained.

```js
export default const Navbar = () => {
    return (<nav>
        <NavLink
            to='/' end
            className={ ({isActive, isPanding}) => ... }
        >
            Home
        </NavLink>
        <NavLink
            to='about'
            style={ ({isActive, isPanding}) => ... }
        >
            About
        </NavLink>
        ...
    <nav>)
}

// end - Only if it match to the end and not to a part of link. Otherwise, the "root" link matches to all.
```

In addition, by default, a class called "active" is added to a `NavLink` component when it is active so you can use CSS to style it.

```css
.active {
    color: black;
    text-decoration: underline;
}
```

----------
<br>

## Passing Data Between Pages

In the `Link` and `NavLink` components, the \``state`\` property can be used to pass data as object from the current page to which the links are directed.

```js
import { Link } from 'react-router-dom'

export default const Page = () => {
    return <Link to='page2' state={ { name: 'Bob' } } />
}
```

In order to get the data on the new page, there's the `useLocation` hook that returns an object with a "state" attribute which is itself an object that holds all the transferred information.

```js
import { useLocation } from 'react-router-dom'

export default const Page2 = () => {
    const location = useLocation()

    console.log(location.state?.name) // Output: 'Bob'
    ...
}
```

----------
<br>

## Using Query\Search Parameters

The `useSearchParams` hook is used to read and modify the query string in the URL for the current location. This hook returns an array of two values: the current location's search-params and a function that may be used to update them.

```js
// Getting the parameters `name` and `type` from the url:
// http://localhost:5173/page?name=page1&type=simple

import { useSearchParams } from 'react-router-dom'

export default const Page = () => {
    const [searchParams, setUseParams] = useSearchParams()

    console.log(searchParams.get('name')) // Output: 'page1'
    console.log(searchParams.get('type')) // Output: 'simple'
    console.log(searchParams.get('page')) // Output: undefined

    function handleFilterChange(key, value) {
        setSearchParams(prevSearchParams => {
            if (value === null)
                prevSearchParams.delete(key)
            else
                prevSearchParams.set(key, value)
            return prevSearchParams
        })
    }
    ...
}
```

----------
<br>

## Handling Errors

Errors that arise can be treated in way that will provide a better UX, thanks to the \``errorElement`\` property on the `Route` components (preferably it should be in a route that will wrapped all the other routes, below the main route with the layout design).

```js
...createRoutesFromElements(
    <Route path='/' element={ /* Layout component */ } >
        <Route
            errorElement={ /* Error occurred component */ } 
        >
            { /* All other routes */ }
        </Route>
    </Route>
)
```

To get acsess to the details of the error, use the `useRouteError` hook that will return the error object, whather if it's a custom error or a system error.

```js
import { useRouteError } from 'react-router-dom'

export default const ErrorOccurred = () => {
    const err = useRouteError() // { statusCode, statusText, message } - EXAMPLE for custom error

    return <h1>Error: {err.message} ({err.statusCode} - {err.statusText})</h1>
}

```

----------
<br>

## The `loader` Function

Each route can define a "loader" function to provide data to the route element before it renders. In this way, a better user experience happens by the fact that the page comes up with all the necessary data. The steps needed to make it work are:

1. Creating the `loader` function.

```js
export const loader = async ({params, request}) => {
    // Fetching & returning data.
}
```

2. Importing the `loader` function and applying it to the relevant route.

```js
import { loader } from './folder'

...createRoutesFromElements(
    ...
    <Route path='page' element={ /* Page component */ } loader={loader} />
)
```

3. Obtaining the data from the loader using the `useLoaderData` hook.

```js
import { useLoaderData } from 'react-router-dom'

export default const Page = () => {
    const data = useLoaderData()
    ...
}
```

----------
<br>

## The `action` Function

```js

```

----------
<br>

## Protected Routes (`<Navigate/>` or `redirect()`?)

temp

```js
```

----------
<br>

## `useNavigate` (?)

temp

```js
const navigate = useNavigate()
navigate("/host", { replace: true })
```

----------
<br>

## Temp

temp

```js
```

----------
<br>

## Temp

temp

```js
```

----------
<br>

## Temp

temp

```js
```

----------
<br>

## Temp

temp

```js
```