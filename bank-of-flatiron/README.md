# Components in the React Bank Transactions App

## 1. Table Component

### Description

The Table component is responsible for rendering the table of transactions. It receives an array of transactions as a prop and maps through them to display date, description, category, and amount in a tabular format.

### Props

- `transactions`: An array of transaction objects.

## 2. Form Component

### Description

The Form component handles the form for adding new transactions. It includes input fields for date, description, category, and amount. The component manages the form state using the `useState` hook and triggers a callback function (`onAddTransaction`) on form submission.

### Props

- `onAddTransaction`: A callback function to handle the addition of a new transaction.

## 3. SearchBar Component

### Description

The SearchBar component provides a search input field to filter transactions by description. It utilizes the `useState` hook to manage the search term state and triggers a callback function (`onSearch`) on input change.

### Props

- `onSearch`: A callback function to handle the search functionality.


