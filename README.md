# finance-js

- [Installation](#installation)
- [Present Value](#present-value)
- [Future Value](#future-value)
- [Net Present Value](#net-present-value)
- [Internal Rate of Return](#internal-rate-of-return)
- [Compound interest](#compound-interest)

# Installation

```bash
npm install @chewhx/financejs
```

```bash
yarn add @chewhx/financejs
```

---

# Present Value

- annualRate (required): The interest rate per year in decimal format, between 0 and 1.
- futureValue (required): The current value of the asset.
- years (optional, default: 1): The number of years.
- frequency (optional, default: 'annual'): The interest compounding frequency per year.
- precision (optional): The number of decimal places to return.

```typescript
import { presentValue } from '@chewhx/financejs';

const args = {
	annualRate: 0.05,
	futureValue: 10000,
	years: 5,
	frequency: 'annual',
	precision: 2,
};

const pv = presentValue(args);
console.log('Present Value:', pv);
```

# Future Value

- annualRate (required): The interest rate per year in decimal format, between 0 and 1.
- presentValue (required): The current value of the asset.
- years (optional, default: 1): The number of years.
- frequency (optional, default: 'annual'): The interest compounding frequency per year.
- precision (optional): The number of decimal places to return.

```typescript
import { futureValue } from '@chewhx/financejs';

const args = {
	annualRate: 0.05,
	presentValue: 10000,
	years: 5,
	frequency: 'annual',
	precision: 2,
};

const fv = futureValue(args);
console.log('Future Value:', fv);
```

# Net Present Value

- annualRate (required): The interest rate per year.
- cashFlows (required): An array representing the future cash flows.
- precision (optional): The number of decimal places to return.

```typescript
import { netPresentValue } from '@chewhx/financejs';

const args = {
	annualRate: 0.1,
	cashFlows: [-1000, 500, 300, 200, 100],
	precision: 2,
};

const npv = netPresentValue(args);
console.log('Net Present Value:', npv);
```

# Internal Rate of Return

- cashFlows (required): An array representing the cash flows.
- precision (optional): The number of decimal places to return.

```typescript
import { irr } from '@chewhx/financejs';

const args = {
	cashFlows: [-1000, 300, 300, 300, 300, 300],
	precision: 4,
};

const internalRateOfReturn = irr(args);
console.log('Internal Rate of Return (IRR):', internalRateOfReturn);
```

# Compound interest

- principal (required): The initial principal amount.
- annualRate (required): The interest rate per year.
- years (required): The number of years.
- frequency (optional, default: 'annual'): The compounding frequency per year.
- precision (optional, default: 2): The number of decimal places to return.

```typescript
import { compoundInterest } from '@chewhx/financejs';

const args = {
	principal: 1000,
	annualRate: 0.05,
	years: 5,
	frequency: 'annual',
	precision: 2,
};

const interestAmount = compoundInterest(args);
console.log('Compound Interest:', interestAmount);
```
