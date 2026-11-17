import { describe, expect, it } from "vitest";
import { toggleTaskCompletion } from "./progress";

describe("toggleTaskCompletion", () => {
  it("reports a newly completed task so the completion sound can play", () => {
    const result = toggleTaskCompletion(new Set(), "week-1-task");

    expect(result.next.has("week-1-task")).toBe(true);
    expect(result.justCompleted).toBe(true);
  });

  it("does not report completion when a checked task is unchecked", () => {
    const result = toggleTaskCompletion(new Set(["week-1-task"]), "week-1-task");

    expect(result.next.has("week-1-task")).toBe(false);
    expect(result.justCompleted).toBe(false);
  });
});
