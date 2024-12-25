import {
  SET_FILING_STATUS,
  SET_DEDUCTIONS,
  SET_TOTAL_TAX_LIABILITY,
  SET_INCOME_TAX,
  SET_S_TAX,
} from "../actions/taxActions";

const initialState = {
  filingStatus: "",
  deductions: 0,
  totalTaxLiability: 0,
  incomeTax: 0,
  STax: 0,
};

export const taxReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILING_STATUS:
      return { ...state, filingStatus: action.payload };
    case SET_DEDUCTIONS:
      return { ...state, deductions: action.payload };
    case SET_TOTAL_TAX_LIABILITY:
      return { ...state, totalTaxLiability: action.payload };
    case SET_INCOME_TAX:
      return { ...state, stateTax: action.payload };
    case SET_S_TAX:
      return { ...state, federalTax: action.payload };
    default:
      return state;
  }
};
