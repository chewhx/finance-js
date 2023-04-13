import { netPresentValue } from './net-present-value';
import { toDecimal } from './utils/toDecimal';
export type IrrArgs = {
	cashFlows: number[];
	precision?: number;
};

export type IrrReturn = number;

function derivative(cashflows: number[], rate: number) {
	let cfSum = 0;
	const denominator = Math.pow(1 + rate, cashflows.length - 1);
	for (let i = 1; i < cashflows.length; i++) {
		cfSum += cashflows[i] * i * Math.pow(1 + rate, i - 1);
	}
	return -cfSum / denominator;
}

export function irr({ cashFlows, precision = 4 }: IrrArgs): IrrReturn {
	const epsilon = 0.000001; // the desired level of precision
	let guess = 0.1; // initial guess for IRR

	for (;;) {
		const newGuess =
			guess -
			netPresentValue({ cashFlows, annualRate: guess }) /
				derivative(cashFlows, guess);
		if (Math.abs(newGuess - guess) < epsilon) {
			return toDecimal(newGuess, precision);
		}
		guess = newGuess;
	}
}
