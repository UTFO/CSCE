/* eslint-disable prettier/prettier */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Employers from './pages/Employers';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Mentorship from './pages/Mentorship';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="mentorship" element={<Mentorship />} />
      <Route path="employers" element={<Employers />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
