import { lazy } from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Home = lazy(() => import("./views/home"))
const PageNotFound = lazy(() => import("./views/notFound"))

const CustomRouter = (props) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default CustomRouter
