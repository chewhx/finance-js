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
