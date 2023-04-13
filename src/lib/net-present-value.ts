import { checkFrequency, TFrequency } from './types/Frequency';
import { checkRate } from './utils/checkRate';
import { toDecimal } from './utils/toDecimal';

export type NetPresentValueArgs = {
	/** Interest rate per annual */
	annualRate: number;

	/** Future cash flows */
	cashFlows: number[];

	/** Frequency of future cash flows*/
	frequency?: TFrequency;

	/** Decimal places to return */
	precision?: number;
};

export type NetPresentValueReturn = number;

export function netPresentValue({
	annualRate,
	cashFlows,
	frequency = 'annual',
	precision,
}: NetPresentValueArgs): NetPresentValueReturn {
	checkRate(annualRate);
	let npv: number = cashFlows[0];

	const _frequency = checkFrequency(frequency);

	for (let i = 1; i < cashFlows.length; i++) {
		npv += cashFlows[i] / Math.pow(1 + annualRate / _frequency, i);
	}
	return toDecimal(npv, precision);
}
