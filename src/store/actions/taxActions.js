export const SET_FILING_STATUS = "SET_FILING_STATUS";
export const SET_DEDUCTIONS = "SET_DEDUCTIONS";
export const SET_TOTAL_TAX_LIABILITY = "SET_TOTAL_TAX_LIABILITY";
export const SET_INCOME_TAX = "SET_INCOME_TAX";
export const SET_S_TAX = "SET_S_TAX";

export const setFilingStatusAction = (status) => ({
  type: SET_FILING_STATUS,
  payload: status,
});

export const setDeductionsAction = (deductions) => ({
  type: SET_DEDUCTIONS,
  payload: deductions,
});

export const setTotalTaxLiabilityAction = (taxLiability) => ({
  type: SET_TOTAL_TAX_LIABILITY,
  payload: taxLiability,
});

export const setStateTaxAction = (IncomeTax) => ({
  type: SET_INCOME_TAX,
  payload: IncomeTax,
});

export const setFederalTaxAction = (STax) => ({
  type: SET_S_TAX,
  payload: STax,
});
