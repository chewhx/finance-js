import { checkRate } from './utils/checkRate';
import { toDecimal } from './utils/toDecimal';

export type NetPresentValueArgs = {
	/** Interest rate per annual */
	annualRate: number;

	/** Future cash flows */
	cashFlows: number[];

	/** Decimal places to return */
	precision?: number;
};

export type NetPresentValueReturn = number;

export function netPresentValue({
	annualRate,
	cashFlows,
	precision,
}: NetPresentValueArgs): NetPresentValueReturn {
	checkRate(annualRate);
	let npv: number = cashFlows[0];

	for (let i = 1; i < cashFlows.length; i++) {
		npv += cashFlows[i] / Math.pow(1 + annualRate, i);
	}
	return toDecimal(npv, precision);
}
