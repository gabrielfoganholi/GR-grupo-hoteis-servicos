import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PackageDetails from "./pages/PackageDetails";
import Schedule from "./pages/Schedule";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacote/:slug" element={<PackageDetails />} />
        <Route path="/agendamento" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;