# React useState Examples

This project demonstrates various uses of the `useState` hook in React. It includes examples of how to manage state with different data types: basic values, arrays, objects, and arrays of objects.

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Components](#components)
   - [Counter](#counter)
   - [TodoList](#todolist)
   - [Profile](#profile)
   - [ShoppingList](#shoppinglist)
4. [App Integration](#app-integration)

## Introduction

In this exercise, we cover the following concepts:

- **Basic useState**: How to manage simple state like numbers.
- **useState with Arrays**: Managing an array of items, e.g., a list of to-dos.
- **useState with Objects**: Managing structured data, such as a user profile.
- **useState with Arrays of Objects**: Managing a list of objects, like shopping items.

Each component demonstrates a different use case for `useState`, which helps you understand the versatility of the hook in React.

## Getting Started

To get started, follow the steps below:

## Components

### Counter

The `Counter` component demonstrates basic state management with a number. A button increments the counter by 1 each time it's clicked.

### TodoList

The `TodoList` component manages an array of to-do items. Users can add new items to the list through an input form.

### Profile

The `Profile` component manages a user profile object, including name and age. Input fields allow the user to update the profile information.

### ShoppingList

The `ShoppingList` component manages an array of objects, each representing a shopping item. Each item has a name and quantity. Users can add new shopping items through an input form.

## App Integration

In the `App.jsx` file, all four components (`Counter`, `TodoList`, `Profile`, and `ShoppingList`) are imported and rendered inside the main `App` component:

```jsx
import Counter from "./Counter";
import TodoList from "./TodoList";
import Profile from "./Profile";
import ShoppingList from "./ShoppingList";

function App() {
  return (
    <div>
      <h1>React useState Examples</h1>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </div>
  );
}

export default App;
```
