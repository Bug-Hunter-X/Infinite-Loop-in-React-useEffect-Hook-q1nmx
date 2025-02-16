# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by improper use of the `useEffect` hook.

The `bug.js` file contains a component with an `useEffect` hook that attempts to increment the `count` state variable on every render, leading to an infinite loop.  The solution is in `bugSolution.js`.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the error in your browser's developer console.

## Solution

The solution involves correctly managing the dependency array of the `useEffect` hook to prevent unnecessary re-renders. See `bugSolution.js` for the corrected code.