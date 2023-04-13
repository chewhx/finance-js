import { netPresentValue } from './net-present-value';

describe('netPresentValue()', () => {
	it('Should be defined', () => {
		expect(netPresentValue).toBeDefined();
	});
	it('Should compute NPV', () => {
		const res = netPresentValue({
			annualRate: 0.1,
			cashFlows: [-500000, 200000, 300000, 200000],
		});
		expect(res).toBe(80015.03);
	});
});
