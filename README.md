# 🧠 Section B: React Syntax

### ✍️ Write Only Syntax (No Explanation Required)

---

### 1️⃣ Write syntax to create a React Functional Component.
```js
function MyComponent() {
  return <h1>Hello</h1>;
}

export default MyComponent;
```     
---

### 2️⃣ Write syntax of `useState`.
```js
import { useState } from "react";

const [count, setCount] = useState(0);
```

---

### 3️⃣ Write syntax of `useEffect`.
```js
import { useEffect } from "react";

useEffect(() => {
  
});


```
---

### 4️⃣ Write syntax of `useEffect` with dependency array.
```js
useEffect(() => {
  
}, [count]);

```
---

### 5️⃣ Write syntax of `useEffect` that runs only once.
```js
useEffect(() => {
  
}, []);

```
---

### 6️⃣ Write syntax to install and setup React Router.
```js
npm install react-router-dom

import { BrowserRouter, Routes, Route } from "react-router-dom";
```
---

### 7️⃣ Write basic routing setup using `BrowserRouter`, `Routes`, and `Route`.
```js
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>

```
---

### 8️⃣ Write syntax for navigation using `Link`.
```js
import { Link } from "react-router-dom";

<Link to="/about">About</Link>

```
---

### 9️⃣ Write syntax to get route parameter using `useParams`.
```js
import { Link } from "react-router-dom";

<Link to="/about">About</Link>

```
---

### 🔟 Write syntax for conditional rendering using ternary operator in JSX.
```js
import { useParams } from "react-router-dom";

const { id } = useParams();

```