import { checkFrequency, TFrequency } from './types/Frequency';
import { checkRate } from './utils/checkRate';
import { toDecimal } from './utils/toDecimal';

export type FutureValueArgs = {
	/** Interest rate per annual */
	annualRate: number;

	/** Current value of the asset */
	presentValue: number;

	/** Number of years */
	years: number;

	/** Interest compounding frequency per year*/
	frequency?: TFrequency;

	/** Decimal places to return */
	precision?: number;
};

export type FutureValueReturn = number;

export function futureValue({
	annualRate,
	presentValue: pv,
	years = 1,
	frequency = 'annual',
	precision,
}: FutureValueArgs): FutureValueReturn {
	checkRate(annualRate);
	const _frequency = checkFrequency(frequency);
	const fv = pv * Math.pow(1 + annualRate / _frequency, years * _frequency);
	return toDecimal(fv, precision);
}
