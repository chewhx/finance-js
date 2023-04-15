# finance-js

- [Installation](#installation)
- [Present Value (PV)](#present-value-pv)
  - [Examples](#examples)
    - [Present value of $10,000 in 4 years, annual rate of 5%](#present-value-of-10000-in-4-years-annual-rate-of-5)
    - [Present value of $10,000 in 4 years, annual rate of 5%, accrued monthly](#present-value-of-10000-in-4-years-annual-rate-of-5-accrued-monthly)
  - [Parameters](#parameters)
  - [Concept](#concept)
- [Future Value (FV)](#future-value-fv)
  - [Examples](#examples-1)
    - [Future value of $10,000, annual rate of 5%, 4 years from now](#future-value-of-10000-annual-rate-of-5-4-years-from-now)
    - [Future value of $10,000, annual rate of 5%, accrued monthly, 4 years from now](#future-value-of-10000-annual-rate-of-5-accrued-monthly-4-years-from-now)
  - [Parameters](#parameters-1)
  - [Concept](#concept-1)
- [Net Present Value (NPV)](#net-present-value-npv)
  - [Examples](#examples-2)
    - [NPV of an initial investment of $50,000, over 5 years](#npv-of-an-initial-investment-of-50000-over-5-years)
  - [Parameters](#parameters-2)
  - [Concept](#concept-2)
- [Internal Rate of Return (IRR)](#internal-rate-of-return-irr)
  - [Examples](#examples-3)
    - [IRR for an initial investment of $50,000, over 5 years](#irr-for-an-initial-investment-of-50000-over-5-years)
  - [Parameters](#parameters-3)
  - [Concept](#concept-3)

# Installation

```bash
npm install @chewhx/financejs
```

```bash
yarn add @chewhx/financejs
```

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

---

# Net Present Value (NPV)

```javascript
import { netPresentValue } from '@chewhx/financejs';
```

## Examples

### NPV of an initial investment of $50,000, over 5 years

```javascript
netPresentValue({
	cashFlows: [-50_000, 10_000, 22_000, 25_000, 36_000, 29_000],
	annualRate: 0.05,
});
// 53413.95
```

## Parameters

```typescript
{
	/** Interest rate per annual in decimals, between 0 - 1*/
	annualRate: number;

  /** Future cash flows */
	cashFlows: number[];

	/** Decimal places to return */
	precision?: number;
};
```

## Concept

Net Present Value (NPV) is a financial metric that measures the present value of the cash inflows and outflows of a project or investment, adjusted for the time value of money. The concept is based on the principle that money available today is worth more than the same amount of money in the future, because of the potential earning capacity of the money in the intervening time.

To calculate NPV, the present value of all expected future cash inflows and outflows of a project or investment are summed up, discounted at a rate that represents the cost of capital or the desired rate of return. The result is the net present value, which can be positive or negative. A positive NPV means that the investment is expected to generate a return greater than the cost of capital, while a negative NPV indicates that the investment is not expected to be profitable.

NPV is a useful tool for evaluating the financial viability of investments or projects, as it takes into account both the amount and timing of cash flows. It is commonly used in capital budgeting, investment analysis, and business valuation.

---

# Internal Rate of Return (IRR)

```javascript
import { irr } from '@chewhx/financejs';
```

## Examples

### IRR for an initial investment of $50,000, over 5 years

```javascript
irr({
	cashFlows: [-50_000, 10_000, 22_000, 25_000, 36_000, 29_000],
});
// 0.3215 -> 32.15%
```

## Parameters

```typescript
{
	cashFlows: number[];
	precision?: number;
};
```

## Concept

Internal Rate of Return (IRR) is a financial metric that measures the profitability of an investment or project, by calculating the discount rate at which the net present value (NPV) of the project equals zero. In other words, it is the rate of return that makes the present value of the cash inflows equal to the present value of the cash outflows.

To calculate the IRR of a project, you need to estimate the future cash flows of the investment and determine the discount rate that results in a zero net present value. This can be done using trial and error, or by using specialized software or financial calculators.

The IRR is expressed as a percentage, and is a useful tool for comparing different investment opportunities. A higher IRR indicates a more profitable investment, as it represents a higher return on investment.

Like NPV, IRR takes into account the time value of money, and can help to evaluate the financial viability of an investment or project. It is commonly used in capital budgeting, investment analysis, and business valuation, and is often used in conjunction with other financial metrics, such as NPV and payback period.
