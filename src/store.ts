import { createStore, combineReducers } from "redux";
import accountReducer from "./features/account/accountSlice";

// return the type of the account Reducer function
// type AccountState = ReturnType<typeof accountReducer>;

// type CombineReducerProps = {
//   account: AccountState;
// };

const combineReducer = combineReducers({
  account: accountReducer,
});

const store = createStore(combineReducer);
export default store;

export type RootState = ReturnType<typeof combineReducer>;

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
