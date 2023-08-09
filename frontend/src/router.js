import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import App from "./App";
  import Index from "./pages/Index";
  import { notesLoader, noteLoader } from "./loaders";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={notesLoader} />
      </Route>
    )
  )
  
  export default router
  