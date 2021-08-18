import './App.less';

import Home from './pages/Home';
import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
