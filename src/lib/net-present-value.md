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
