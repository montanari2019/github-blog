import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Blog } from "./pages/Blog/Blog";
import { Post } from "./pages/Post/Post";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Blog />} />
          <Route path="/post" element={<Post/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
