import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage"
import ErrorPage from "@pages/NotFoundPages/ErrorPage";

function Router() {
    return(
        <BrowserRouter basename="/check-to-do">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />}  />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;