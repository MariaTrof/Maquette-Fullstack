import { MainPage } from "./Pages/white-pages/MainPage/MainPage";
import { SecondPage } from "./Pages/white-pages/SecondPage/SecondPage";
import { InteractivePage } from "./Pages/interactive-page/InteractivePage";
import { TitleOne } from "./titles/TitleOne/TitleOne";
import { TitleTwo } from "./titles/TitleTwo/TitleTwo";
import "./styles/index.scss";

function App() {
  return (
    <div className="app">
      <div className="container">
        <MainPage />
        <TitleOne />
        <SecondPage />
        <TitleTwo />
      </div>
      <InteractivePage />
    </div>
  );
}

export default App;
