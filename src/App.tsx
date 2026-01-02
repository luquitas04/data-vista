import { routes } from "./app/router/router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageSwitcher } from "./shared/ui/LanguageSwitcher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <LanguageSwitcher />
    </BrowserRouter>
  );
}

export default App;
