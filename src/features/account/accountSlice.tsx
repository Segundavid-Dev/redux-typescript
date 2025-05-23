// A slice is basically a piece, take one slice of that state
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

export default function accountReducer(state = initialState, action: Action) {
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
