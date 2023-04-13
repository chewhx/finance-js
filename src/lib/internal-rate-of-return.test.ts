import { irr } from './internal-rate-of-return';

describe('internalRateOfReturn()', () => {
	it('Should be defined', () => {
		expect(irr).toBeDefined();
	});
	it('Should compute IRR', () => {
		const res = irr({
			cashFlows: [-1000, 200, 300, 400, 500],
			precision: 17,
		});
		expect(res).toBe(0.12825720457786696);
	});
	it('Should compute IRR - default 4 decimal points', () => {
		const res = irr({
			cashFlows: [-1000, 200, 300, 400, 500],
		});
		expect(res).toBe(0.1283);
	});
	it('Should compute IRR - another example', () => {
		const res = irr({
			cashFlows: [-1000, 200, 300, 400, 500, 600],
			precision: 5,
		});
		expect(res).toBe(0.23292);
	});
});
