---
packageName: finance-js
---

# finance-js

# Installation

---

# Present Value (PV)

```javascript
import { presentValue } from '@chewhx/financejs';
```

## Examples

### Present value of $10,000 in 4 years, annual rate of 5%

```javascript
presentValue({
	annualRate: 0.05,
	years: 4,
	futureValue: 10_000,
});
// 8227.02
```

### Present value of $10,000 in 4 years, annual rate of 5%, accrued monthly

```javascript
presentValue({
	annualRate: 0.05,
	years: 4,
	futureValue: 10_000,
	frequency: 'monthly',
});
// 8190.71
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

---

# Future Value (FV)

```javascript
import { futureValue } from '@chewhx/financejs';
```

## Examples

### Future value of $10,000, annual rate of 5%, 4 years from now

```javascript
futureValue({
	annualRate: 0.05,
	years: 4,
	presentValue: 10_000,
});
// 12155.06
```

### Future value of $10,000, annual rate of 5%, accrued monthly, 4 years from now

```javascript
futureValue({
	annualRate: 0.05,
	years: 4,
	presentValue: 10_000,
	frequency: 'monthly',
});
// 12208.95
```

## Parameters

```typescript
{
	/** Interest rate per annual in decimals, between 0 - 1*/
	annualRate: number;

	/** Current value of the asset */
	presentValue: number;

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
