import { checkFrequency, TFrequency } from './types/Frequency';
import { checkRate } from './utils/checkRate';
import { toDecimal } from './utils/toDecimal';

export type DiscountFactorsArgs = {
	annualRate: number;
	years: number;
	precision?: number;
	frequency?: TFrequency;
};

export type DiscountFactorsReturn = number[];

export function discountFactors({
	annualRate,
	years,
	precision = 4,
	frequency = 'annual',
}: DiscountFactorsArgs): DiscountFactorsReturn {
	checkRate(annualRate);

	const _frequency = checkFrequency(frequency);
	const _numPeriods = _frequency * years;

	const discountFactors: number[] = [];

	for (let i = 0; i < _numPeriods; i++) {
		const discountFactor = 1 / Math.pow(1 + annualRate / _frequency, i + 1);
		discountFactors.push(toDecimal(discountFactor, precision));
	}

	return discountFactors;
}
