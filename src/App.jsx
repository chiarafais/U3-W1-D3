import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import WelcomeAlert from "./Components/WelcomeAlert";
import BookList from "./Components/BookList";
import MyFooter from "./Components/MyFooter";
import romance from "./data/romance.json";

function App() {
  return (
    <div className="App">
      <MyNav brandName="EpiBooks" />
      <WelcomeAlert />
      <BookList books={romance} />
      <MyFooter />
    </div>
  );
}

export default App;
