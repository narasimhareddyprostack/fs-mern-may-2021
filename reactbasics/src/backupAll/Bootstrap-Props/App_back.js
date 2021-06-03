import Header from "./Bootstrap-Props/Header";

import "./assets/bootstrap/fk.css";
function App() {
  var name = "Kavitha";
  var salary = 50000;
  var loc = "Bangalore";

  var Order = { orderId: 101, order_Value: 5000 };

  return (
    <div>
      <h1> Employee Name : {name}</h1>
      <h1> Employee Salary: {salary}</h1>
      <h1> Employee Location:{loc}</h1>
      <hr />
      <Header one={name} two={salary} four={Order} />
      <button className="btn btn-success">Submit</button>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>

      <button type="button" class="btn btn-link">
        Link
      </button>
    </div>
  );
}
export default App;
