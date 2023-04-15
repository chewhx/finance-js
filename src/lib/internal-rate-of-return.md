# Net Present Value (NPV)

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
