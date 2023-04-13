import { compoundInterest } from './compound-interest';

describe('compoundInterest()', () => {
	it('Should be defined', () => {
		expect(compoundInterest).toBeDefined();
	});
	it('Should compute compound interest', () => {
		const res = compoundInterest({
			annualRate: 0.03,
			principal: 1500,
			precision: 8,
			years: 8,
		});
		expect(res).toBe(400.15512208);
	});
});
