import { describe, expect, it } from "vitest";
import { simulModule } from "@vuu-ui/vuu-data-test";

describe("test module creation", () => {
  it("creates a module", () => {
    const dataSource1 = simulModule.createDataSource("instruments");
    expect(dataSource1).toBeDefined;
  });
});
