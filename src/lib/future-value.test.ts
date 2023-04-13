import { futureValue } from './future-value';

describe('futureValue()', () => {
	it('Should be defined', () => {
		expect(futureValue).toBeDefined();
	});
	it('Should compute FV to 2 decimal point', () => {
		const res = futureValue({
			annualRate: 0.03,
			presentValue: 100,
			years: 1,
		});
		expect(res).toBe(103);
	});
	it('Should compute FV to 2 decimal point for periods', () => {
		const res = futureValue({
			annualRate: 0.05,
			presentValue: 100,
			years: 5,
		});
		expect(res).toBe(127.63);
	});
	it('Should compute FV to 3 decimal point', () => {
		const res = futureValue({
			annualRate: 0.05,
			presentValue: 100,
			precision: 6,
			years: 5,
		});
		expect(res).toBe(127.628156);
	});
});
