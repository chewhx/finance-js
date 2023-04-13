import { discountFactors } from './discount-factors';

describe('getDiscountFactors()', () => {
	it('Should be defined', () => {
		expect(discountFactors).toBeDefined();
	});
	it('Should compute Discount Factors', () => {
		const res = discountFactors({
			annualRate: 0.1,
			years: 6,
		});
		expect(res).toMatchObject([0.9091, 0.8264, 0.7513, 0.683, 0.6209, 0.5645]);
	});
	it('Should compute Discount Factors with 2 decimal points', () => {
		const res = discountFactors({
			annualRate: 0.1,
			years: 6,
			precision: 2,
		});
		expect(res).toMatchObject([0.91, 0.83, 0.75, 0.68, 0.62, 0.56]);
	});
	it('Should compute Discount Factors for 6 years, discounted monthly', () => {
		const res = discountFactors({
			annualRate: 0.1,
			years: 3,
			precision: 4,
			frequency: 'semiannual',
		});
		expect(res).toMatchObject([0.9524, 0.907, 0.8638, 0.8227, 0.7835, 0.7462]);
	});
});
