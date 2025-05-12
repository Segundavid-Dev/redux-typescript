import { createStore } from "redux";

type initialStateTypes = {
  loan: number;
  balance: number;
  loanPurpose: string;
};

type Action =
  | { type: "account/deposit"; payload: number }
  | { type: "account/withdraw"; payload: number }
  | { type: "account/requestLoan"; payload: number }
  | { type: "account/payLoan" };

const initialState: initialStateTypes = {
  loan: 0,
  balance: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

// create our store in react
const store = createStore(reducer);
// from this store, we can dispatch actions
store.dispatch(deposit(500));

// Action creators
function deposit(amount: number): Action {
  return { type: "account/deposit", payload: amount };
}

// specifying the return type of this function in typescript

type initialStateCustomersTypes = {
  fullName: string;
  nationalID: string;
  createdAt: string;
};

// Creating more customers, created types for this
const initialStateCustomers: initialStateCustomersTypes = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

type customerActionTypes = {
  type: "customer/createCustomer";
  payload: { fullName: string; nationalID: string; createdAt: string };
};

function customerReducer(
  state = initialStateCustomers,
  action: customerActionTypes
) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload?.fullName,
        nationalID: action.payload?.nationalID,
        createdAt: action.payload?.createdAt,
      };

    default:
      return state;
  }
}

function createCustomer(
  fullName: string,
  nationalID: string
): customerActionTypes {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

const customerStore = createStore(customerReducer);
customerStore.dispatch(createCustomer("Segun David", "20223697"));
