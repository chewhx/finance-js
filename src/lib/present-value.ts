import { checkFrequency, TFrequency } from './types/Frequency';
import { checkRate } from './utils/checkRate';
import { toDecimal } from './utils/toDecimal';

export type PresentValueArgs = {
	/** Interest rate per annual in decimals, between 0 - 1*/
	annualRate: number;

	/** Current value of the asset */
	futureValue: number;

	/** Number of years */
	years: number;

	/** Interest compounding frequency per year*/
	frequency?: TFrequency;

	/** Decimal places to return */
	precision?: number;
};

export type PresentValueReturn = number;

export function presentValue({
	annualRate,
	futureValue: fv,
	years = 1,
	frequency = 'annual',
	precision,
}: PresentValueArgs): PresentValueReturn {
	checkRate(annualRate);
	const _frequency = checkFrequency(frequency);
	const pv = fv / Math.pow(1 + annualRate / _frequency, years * _frequency);
	return toDecimal(pv, precision);
}
