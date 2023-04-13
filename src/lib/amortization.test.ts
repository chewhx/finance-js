import { amortization } from './amortization';

describe('amortization()', () => {
	it('Should be defined', () => {
		expect(amortization).toBeDefined();
	});
	it('Should compute AM (Amortization) for annual payments', () => {
		const res = amortization({
			annualInterestRate: 0.075,
			principal: 20000,
			totalNumOfPayments: 5,
			paymentFrequency: 'annual',
		});
		expect(res.paymentPerPeriod).toBe(4943.29);
	});
	it('Should compute AM (Amortization) for semi-monthly payments', () => {
		const res = amortization({
			annualInterestRate: 0.075,
			principal: 20000,
			totalNumOfPayments: 60,
			paymentFrequency: 'semimonthly',
		});
		expect(res.paymentPerPeriod).toBe(366.08);
	});
	it('Should compute AM (Amortization) for monthly payments', () => {
		const res = amortization({
			annualInterestRate: 0.075,
			principal: 20000,
			totalNumOfPayments: 5 /**years */ * 12 /** monthly */,
			paymentFrequency: 'monthly',
		});
		expect(res.paymentPerPeriod).toBe(400.76);
	});
});
