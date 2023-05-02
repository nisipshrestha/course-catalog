import Nav from "./components/Nav";

import CourseCatalog from "./containers/CourseCatalog";
function App() {
  return (
    <div className="App">
      <Nav titleText="Course Catalog" />
      <CourseCatalog />
    </div>
  );
}

export default App;
