# Present Value (PV)

```javascript
import { presentValue } from 'finance-js';
```

## Examples

### PV of $50,000 with discount rate of 4% in 5 years

```javascript
presentValue({
	annualRate: 0.04,
	years: 5,
	futureValue: 50000,
});
```

### PV of $50,000 with discount rate of 4% in 5 years, discounted monthly'

```javascript
presentValue({
	annualRate: 0.04,
	years: 5,
	futureValue: 50000,
	frequency: 'monthly',
});
```

## Parameters

```typescript
{
	/** Interest rate per annual */
	annualRate: number;

	/** Current value of the asset */
	futureValue: number;

	/** Number of years */
	years: number;

	/** Interest compounding frequency per year*/
	frequency?: TFrequency;

	/** Decimal places to return */
	precision?: number;
};
```

## Concept

Present value (PV) is a financial metric that represents the current value of a future payment, investment, or cash flow, based on the assumption that it will earn a certain rate of interest or return over time. It is the amount of money that needs to be invested today in order to have a certain amount of money in the future, after earning a certain rate of return.

In other words, present value is the amount of money that would be required today to generate a specific amount of money in the future, taking into account the time value of money and the expected rate of return.

The calculation of present value involves discounting the future cash flow by a certain interest rate to reflect the time value of money. For example, if you are expecting to receive $1,000 in five years, with an interest rate of 5%, the present value of that payment would be $783.53.

Present value is an important financial metric that can help individuals and businesses make investment decisions and evaluate the profitability of projects. It is often used in conjunction with other financial metrics such as future value, net present value, and internal rate of return to make more informed financial decisions.
