# MeddiBuddy 💊

MeddiBuddy is a medicine search application built with **React, Redux Toolkit, and Tailwind CSS**. Users can search for medicines, view search suggestions, and open a dedicated page containing detailed medicine information.

## Features

* 🔍 Search medicines by name
* 📋 Display medicine search results in a dropdown
* 💊 View complete medicine details
* 🔄 Navigate between medicine search and details pages
* 🌐 Fetch medicine information from the FDA API
* 🗂️ Use Redux Toolkit for global medicine state management
* ⚠️ Error Boundaries for handling unexpected application errors
* 📱 Responsive UI using Tailwind CSS

## Tech Stack

* **React** – UI development
* **TypeScript** – Type safety
* **Redux Toolkit** – Global state management
* **React Router** – Client-side routing
* **Tailwind CSS** – Styling
* **Axios** – API requests
* **Lucide React** – Icons
* **Vite** – Development and build tool

## API

Medicine information is fetched from the **OpenFDA Drug Label API**.

Search endpoint:

```text
https://api.fda.gov/drug/label.json?search=openfda.brand_name:"SEARCH_INPUT"&limit=20
```

## Application Flow

```text
Search Medicine
      ↓
Medicine Results Dropdown
      ↓
Select Medicine
      ↓
Medicine Details Page
      ↓
View Complete Medicine Information
```

## State Management

Redux Toolkit is used to store medicine data in a global state.

```text
API
 ↓
createAsyncThunk
 ↓
Medicine Slice
 ↓
Redux Store
 ↓
React Components
```

This allows different components to access the medicine data without passing it through multiple levels of props.

## Error Handling

The application includes **React Error Boundaries** to prevent unexpected component errors from breaking the entire application and to provide a controlled error experience.

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
├── pages/
├── redux/
│   ├── MedicineSlice.ts
│   └── store.ts
├── App.tsx
├── main.tsx
└── ...
```

## Future Improvements

* Add medicine search debounce
* Improve loading and error states
* Add medicine search history
* Add pagination or load-more functionality
* Persist medicine data across page refreshes

---

**Built with React, Redux Toolkit, Tailwind CSS, and Vite.**
