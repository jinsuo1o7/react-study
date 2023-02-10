import "./App.css";
import AppProduct from "./component/AppProduct";
import Counter from "./component/Counter";
import Mentor from "./component/Mentor";
import Profile from "./component/Profile";
import AppMentors from "./component/AppMentors";

function App() {
  return (
    <>
      <Mentor />
      <AppMentors />
      {/* <Counter />
      <Profile name="jinsuo" age="24" newUser={true} />
      <AppProduct /> */}
    </>
  );
}

export default App;
