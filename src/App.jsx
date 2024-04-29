import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

import MainPage from "./layouts/mainpage";
import HomePage from "./pages/HomePage"
import MovieDetail from "./pages/MovieDetail";
import NotFound404 from "./pages/NotFound404";
import Tranding from "./pages/Tranding";
import TopReted from "./pages/TopRated";
import Upcaming from "./pages/Upcaming";
import Discover from "./pages/Discover";
import TvSeries from "./pages/TvSeries";
import Example from "./components/Video";
import MoviePlaying from "./components/NowPlaying";
// import TrandingAlls from "./pages/TrandingAlls";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainPage />}>
        <Route index element={<HomePage />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
        <Route path="/tranding" element={<Tranding />} />
        <Route path="/nowPlaying" element={<MoviePlaying />} />
        <Route path="/topreted" element={<TopReted />} />
        <Route path="/upcaming" element={<Upcaming />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/video" element={<Example />} />
        <Route path="/discover/:id" element={<TvSeries />} />
        <Route path="*" element={<NotFound404 />} />
      </Route >
    )
  )
  return (
    <RouterProvider router={router} />

  )
}
