import { presentValue } from './present-value';

describe('getPresentValue()', () => {
	it('Should be defined', () => {
		expect(presentValue).toBeDefined();
	});
	it('Should compute PV to 2 decimal point', () => {
		const res = presentValue({
			annualRate: 0.05,
			years: 1,
			futureValue: 100,
		});
		expect(res).toBe(95.24);
	});
	it('Should compute PV to 2 decimal point for periods', () => {
		const res = presentValue({
			annualRate: 0.05,
			years: 2,
			futureValue: 100,
			precision: 2,
		});
		expect(res).toBe(90.7);
	});
	it('Should compute PV to 3 decimal point', () => {
		const res = presentValue({
			annualRate: 0.05,
			years: 1,
			futureValue: 100,
			precision: 3,
		});
		expect(res).toBe(95.238);
	});
});
