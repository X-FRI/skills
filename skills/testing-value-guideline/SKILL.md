---
name: testing-value-guideline
description: Use when writing, reviewing, pruning, or refactoring tests and there is risk of low-value tests, implementation-detail assertions, over-mocking, redundant coverage, brittle setup, or tests that do not protect a real public contract.
---

# Testing Value Guideline

Use this skill to keep tests focused on useful behavior instead of incidental implementation.

Vitest is used only for examples. The rules apply regardless of test framework, programming language, application type, or runtime.

## Core Standard

A test should fail when a public contract that callers rely on is broken. It should not fail merely because an equivalent implementation replaced the old one.

Public contracts include return values, errors, Result variants, state changes, persisted records, emitted events, HTTP responses, queue messages, files, logs that are part of an operational contract, and other observable outputs at a module or system boundary.

## Rule 1: Test Public Contracts, Not Private Implementation

Bad: the test locks a private helper.

```ts
import { describe, expect, it, vi } from "vitest";

describe("invoice service", () => {
  it("calls the internal tax helper", () => {
    const service = new InvoiceService();
    const calculateTax = vi.spyOn(service as never, "calculateTax");

    service.createInvoice({ subtotal: 100 });

    expect(calculateTax).toHaveBeenCalledWith(100);
  });
});
```

Good: the test verifies the contract callers depend on.

```ts
import { describe, expect, it } from "vitest";

describe("invoice service", () => {
  it("creates an invoice with the correct total", () => {
    const service = new InvoiceService();

    const invoice = service.createInvoice({ subtotal: 100 });

    expect(invoice).toMatchObject({
      subtotal: 100,
      tax: 8,
      total: 108,
    });
  });
});
```

## Rule 2: Do Not Assert Incidental Calls, Collaborators, or Intermediates

Bad: the test would fail if the implementation changed from two internal collaborators to one equivalent implementation.

```ts
import { describe, expect, it, vi } from "vitest";

describe("patient importer", () => {
  it("normalizes and validates through collaborators", () => {
    const normalizer = { normalize: vi.fn((value: string) => value.trim()) };
    const validator = { validate: vi.fn(() => true) };
    const importer = new PatientImporter(normalizer, validator);

    importer.import(" Alice ");

    expect(normalizer.normalize).toHaveBeenCalledWith(" Alice ");
    expect(validator.validate).toHaveBeenCalledWith("Alice");
  });
});
```

Good: the test verifies the externally visible result.

```ts
import { describe, expect, it } from "vitest";

describe("patient importer", () => {
  it("imports a patient after accepting harmless surrounding whitespace", () => {
    const importer = new PatientImporter();

    const patient = importer.import(" Alice ");

    expect(patient.name).toBe("Alice");
  });
});
```

## Rule 3: Every Test Must Protect a Specific Risk

Bad: the test only proves that a hard-coded constant still equals itself.

```ts
import { describe, expect, it } from "vitest";

describe("queue constants", () => {
  it("has the queue name", () => {
    expect(MAILER_QUEUE_NAME).toBe("mailer");
  });
});
```

Good: the test protects a real integration risk.

```ts
import { describe, expect, it } from "vitest";

describe("mailer queue registration", () => {
  it("registers the queue used by the mail dispatcher", () => {
    const queueOptions = buildMailerQueueOptions();

    expect(queueOptions.name).toBe(MAILER_QUEUE_NAME);
    expect(queueOptions.connection).toEqual({
      host: "127.0.0.1",
      port: 6379,
    });
  });
});
```

Before adding a test, be able to name the risk: business rule, boundary condition, error path, integration contract, historical bug, security rule, compatibility requirement, or operational behavior.

## Rule 4: Prefer Strong Assertions Over Existence Assertions

Bad: the test passes even if most behavior is wrong.

```ts
import { describe, expect, it } from "vitest";

describe("discounts", () => {
  it("calculates a discount", () => {
    expect(calculateDiscount(100, 10)).toBeDefined();
  });
});
```

Good: the test would catch meaningful mutations.

```ts
import { describe, expect, it } from "vitest";

describe("discounts", () => {
  it("subtracts the configured percentage from the original price", () => {
    expect(calculateDiscount(100, 10)).toBe(90);
    expect(calculateDiscount(50, 20)).toBe(40);
  });
});
```

## Rule 5: Test Boundary and Error Semantics Explicitly

Bad: the test only covers a comfortable happy path.

```ts
import { describe, expect, it } from "vitest";

describe("age policy", () => {
  it("accepts adults", () => {
    expect(canEnroll(30)).toBe(true);
  });
});
```

Good: the test covers the boundary and rejection contract.

```ts
import { describe, expect, it } from "vitest";

describe("age policy", () => {
  it("accepts adults and rejects minors at the exact boundary", () => {
    expect(canEnroll(18)).toBe(true);
    expect(canEnroll(17)).toBe(false);
  });
});
```

## Rule 6: Mock Only Real Boundaries

Bad: the test mocks simple internal logic and stops testing the unit's behavior.

```ts
import { describe, expect, it, vi } from "vitest";

describe("cart", () => {
  it("returns the cart total", () => {
    const calculator = { add: vi.fn(() => 30) };
    const cart = new Cart(calculator);

    expect(cart.total([{ price: 10 }, { price: 20 }])).toBe(30);
  });
});
```

Good: the test uses real logic and mocks only external systems.

```ts
import { describe, expect, it, vi } from "vitest";

describe("order submission", () => {
  it("charges the total price through the payment gateway", async () => {
    const paymentGateway = { charge: vi.fn().mockResolvedValue({ id: "pay_1" }) };
    const service = new OrderService(paymentGateway);

    const result = await service.submit([{ price: 10 }, { price: 20 }]);

    expect(result.paymentId).toBe("pay_1");
    expect(paymentGateway.charge).toHaveBeenCalledWith({ amount: 30 });
  });
});
```

External boundaries include network services, databases, queues, file systems, clocks, randomness, third-party SDKs, and process-level resources.

## Rule 7: Avoid Tests That Only Mirror the Implementation

Bad: the expected value duplicates the same algorithm as production code.

```ts
import { describe, expect, it } from "vitest";

describe("slug", () => {
  it("creates a slug", () => {
    const input = "Hello World";
    const expected = input.toLowerCase().replaceAll(" ", "-");

    expect(toSlug(input)).toBe(expected);
  });
});
```

Good: the expected value is an independent statement of the contract.

```ts
import { describe, expect, it } from "vitest";

describe("slug", () => {
  it("lowercases words and joins them with hyphens", () => {
    expect(toSlug("Hello World")).toBe("hello-world");
  });
});
```

## Rule 8: Keep Tests Focused on One Contract

Bad: a broad eager test makes failures hard to diagnose.

```ts
import { describe, expect, it } from "vitest";

describe("account service", () => {
  it("handles the account lifecycle", async () => {
    const account = await service.create({ email: "a@example.com" });
    await service.verifyEmail(account.id);
    await service.changePassword(account.id, "new-password");
    await service.disable(account.id);

    expect(await service.find(account.id)).toMatchObject({
      emailVerified: true,
      disabled: true,
    });
  });
});
```

Good: each test protects one contract.

```ts
import { describe, expect, it } from "vitest";

describe("account service", () => {
  it("marks an account as email verified", async () => {
    const account = await createAccountFixture();

    await service.verifyEmail(account.id);

    expect(await service.find(account.id)).toMatchObject({
      emailVerified: true,
    });
  });
});
```

Use broader workflow tests intentionally at integration or end-to-end layers, not as a default unit-test shape.

## Rule 9: Prefer Table-Driven Tests for Equivalent Cases

Bad: repeated tests obscure the actual rule.

```ts
import { describe, expect, it } from "vitest";

describe("role policy", () => {
  it("allows admins", () => {
    expect(canManageUsers("admin")).toBe(true);
  });

  it("allows owners", () => {
    expect(canManageUsers("owner")).toBe(true);
  });
});
```

Good: the table states the rule surface compactly.

```ts
import { describe, expect, it } from "vitest";

describe("role policy", () => {
  it.each([
    ["admin", true],
    ["owner", true],
    ["member", false],
  ] as const)("returns %s permission as %s", (role, expected) => {
    expect(canManageUsers(role)).toBe(expected);
  });
});
```

## Rule 10: Delete or Rewrite Tests That Cannot Fail for the Right Reason

Bad: the test passes as long as no exception is thrown, but no contract is asserted.

```ts
import { describe, it } from "vitest";

describe("report export", () => {
  it("exports a report", async () => {
    await exportReport({ month: "2026-06" });
  });
});
```

Good: the test checks the observable artifact.

```ts
import { describe, expect, it } from "vitest";

describe("report export", () => {
  it("exports a report with the requested month and totals", async () => {
    const report = await exportReport({ month: "2026-06" });

    expect(report).toMatchObject({
      month: "2026-06",
      totalPatients: 42,
    });
  });
});
```

If a test cannot be rewritten to assert a meaningful contract, delete it.

## Review Checklist

For each test, answer:

- What public contract does this protect?
- What risk would this catch?
- Would an equivalent refactor break this test?
- Are assertions strong enough to catch a plausible bug?
- Are mocks limited to real boundaries?
- Is this test redundant with a stronger nearby test?
- If this test failed, would the failure point to a real behavior problem?

If the answer is unclear, rewrite or remove the test.
