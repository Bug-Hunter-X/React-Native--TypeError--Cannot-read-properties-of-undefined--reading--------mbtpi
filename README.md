# React Native: Handling TypeError: Cannot read properties of undefined (reading '...')

This repository demonstrates a common error in React Native applications: `TypeError: Cannot read properties of undefined (reading '...')`. This error arises when trying to access a property of an object that is currently null or undefined.  This often happens when dealing with asynchronous data fetching or deeply nested object structures.

## Problem
The `bug.js` file showcases the problematic code.  It fetches data from an API and attempts to render a user's name. If the API request fails or returns incomplete data, accessing `data.user.name` throws the error.

## Solution
The `bugSolution.js` file presents two solutions to prevent this error:

1. **Optional Chaining (?.)**: This operator allows you to safely access nested properties, returning `undefined` if any part of the chain is null or undefined.
2. **Nullish Coalescing (??):** This operator provides a default value if the preceding expression is null or undefined. 

These techniques ensure that the application gracefully handles missing data and avoids the error.