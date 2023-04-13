import { checkFrequency, TFrequency } from './types/Frequency';
import { checkRate } from './utils/checkRate';
import { toDecimal } from './utils/toDecimal';

export type AmortizationArgs = {
	principal: number;
	annualInterestRate: number;
	totalNumOfPayments: number;
	paymentFrequency: number | TFrequency;
};

export type AmortizationReturn = {
	paymentPerPeriod: number;
	amortizationSchedule: {
		period: number;
		paymentPerPeriod: number;
		interestPaid: number;
		principalPaid: number;
		balance: number;
	}[];
};

export function amortization({
	principal,
	annualInterestRate,
	totalNumOfPayments,
	paymentFrequency,
}: AmortizationArgs): AmortizationReturn {
	checkRate(annualInterestRate);

	const _paymentFrequency = checkFrequency(paymentFrequency);
	const _ratePerPeriod = annualInterestRate / _paymentFrequency;
	const _numPeriods = totalNumOfPayments;

	const _paymentPerPeriod =
		(principal * _ratePerPeriod) /
		(1 - Math.pow(1 + _ratePerPeriod, -_numPeriods));

	let balance = principal;
	const amortizationSchedule = [];

	for (let i = 0; i < _numPeriods; i++) {
		const interest = balance * _ratePerPeriod;
		const principalPaid = _paymentPerPeriod - interest;
		balance -= principalPaid;

		amortizationSchedule.push({
			period: i + 1,
			paymentPerPeriod: toDecimal(_paymentPerPeriod, 2),
			interestPaid: toDecimal(interest, 2),
			principalPaid: toDecimal(principalPaid, 2),
			balance: toDecimal(balance, 2),
		});
	}

	return {
		paymentPerPeriod: toDecimal(_paymentPerPeriod, 2),
		amortizationSchedule,
	};
}
