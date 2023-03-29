import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Blog } from "./pages/Blog/Blog";
import { NotFoundPage } from "./pages/notFond/NotFound";
import { Post } from "./pages/Post/Post";
import { useEffect } from "react";

import ReactGA from 'react-ga';

export function Router() {

  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Blog />} />
          <Route path="/post/:number_issue" element={<Post/>} /> 
        </Route>

        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    // </BrowserRouter>
  );
}
