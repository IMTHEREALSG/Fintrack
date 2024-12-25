import {
  setStateTaxAction,
  setFederalTaxAction,
} from "../../../store/actions/taxActions";

export const calculateTaxLiability = (
  deductions,
  filingStatus,
  totalIncome,
  IncomeTaxRates,
  STaxRates,
  dispatch,
) => {
  const deductionsNum = deductions ? parseFloat(deductions) : 0;

  const calculateTaxLiabilityForBracket = (bracket, remainingIncome, func) => {
    let taxLiability = 0;
    for (const [key, value] of Object.entries(bracket)) {
      if (remainingIncome > 0) {
        const taxableIncome = Math.min(remainingIncome, value.limit);
        taxLiability += taxableIncome * (value.rate / 100);
        remainingIncome -= taxableIncome;
        dispatch(func(value.rate));
      } else {
        break;
      }
    }
    return taxLiability;
  };

  const incomeTaxBrackets = IncomeTaxRates[filingStatus];
  let remainingIncome = totalIncome - deductionsNum;
  const incomeTaxLiability = calculateTaxLiabilityForBracket(
    incomeTaxBrackets,
    remainingIncome,
    setStateTaxAction,
  );

  const STaxBrackets = STaxRates[filingStatus];
  remainingIncome = totalIncome - deductionsNum;
  const STaxLiability = calculateTaxLiabilityForBracket(
    STaxBrackets,
    remainingIncome,
    setFederalTaxAction,
  );

  const CTaxLiability = totalIncome * (12.5 / 100);

  const totalTaxLiability =
    incomeTaxLiability + STaxLiability + CTaxLiability;

  return totalTaxLiability.toFixed(2);
};
