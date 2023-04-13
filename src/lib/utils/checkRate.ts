/**
 * Check rate is between 0 to 1
 */
export function checkRate(rate: number): void {
	if (rate > 1 || rate < 0) {
		throw Error('Rate must be demical between 0 to 1');
	}
}
