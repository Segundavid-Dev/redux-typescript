import { useState } from "react";
// to consume the state from redux store that is been passed as a props
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const customer = useSelector((store: RootState) => store.account.balance);

  function handleClick() {}

  return (
    <div>
      <h2>Create new customer</h2>
      {customer}
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
