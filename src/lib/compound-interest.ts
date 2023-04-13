import { checkFrequency, TFrequency } from './types/Frequency';
import { toDecimal } from './utils/toDecimal';

export type CompoundInterestArgs = {
	principal: number;
	annualRate: number;
	years: number;
	frequency?: TFrequency;
	precision?: number;
};

export type CompoundInterestReturn = number;

export function compoundInterest({
	principal,
	annualRate,
	years,
	frequency = 'annual',
	precision = 2,
}: CompoundInterestArgs): CompoundInterestReturn {
	const _compoundFrequency = checkFrequency(frequency);
	const ratePerCompoundingPeriod = annualRate / _compoundFrequency;
	const totalCompoundingPeriods = _compoundFrequency * years;

	const interestMultiplier =
		Math.pow(1 + ratePerCompoundingPeriod, totalCompoundingPeriods) - 1;

	const amount = principal * interestMultiplier;

	return toDecimal(amount, precision);
}
