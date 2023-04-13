/**
 * Convert number to decimal precision
 */
export function toDecimal(value: number, precision = 2): number {
	return +value.toFixed(precision);
}
