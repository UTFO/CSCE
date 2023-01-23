/* eslint-disable prettier/prettier */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Mentorship from './pages/Mentorship';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="mentorship" element={<Mentorship />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
