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
