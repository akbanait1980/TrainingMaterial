import Employee from "./components/Employee";
import Person from "./components/Person";
import ProductList from "./components/ProductList";
import Student from "./components/Student";

function App() {
  return (
    <div className="container">
      {/* <h1>App Component</h1> */}
{/* 
      <Person name="Mark" />
      <Person name="John" />
      <Person name="Stacy" /> */}


      {/* <Employee id="101" name="mark"  email="m@gmail.com" />
      <Employee id="102" name="paul"  email="m@gmail.com" />
      <Employee id="103" name="watson"  email="m@gmail.com" /> */}

      {/* <ProductList /> */}

      <Student data={ { id: 1, name: 'Mark', email: 'm@gmail.com' } } />
      <Student data={ { id: 2, name: 'Paul', email: 'p@gmail.com' } } />


    </div>
  );
}

export default App;
