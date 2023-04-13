export const Frequency = {
	annual: 1,
	semiannual: 2,
	quarterly: 4,
	bimonthly: 6,
	monthly: 12,
	semimonthly: 24,
	biweekly: 26,
	weekly: 52,
	daily: 365,
} as const;

export type TFrequencyKey = keyof typeof Frequency;
export type TFrequency = number | TFrequencyKey;

export function checkFrequency(value: TFrequency) {
	if (typeof value === 'number') {
		return value;
	}
	return Frequency[value];
}
