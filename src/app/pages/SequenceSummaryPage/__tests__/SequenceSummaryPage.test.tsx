import { render } from "@testing-library/react";
import { SEQUENCE_BREADCRUMBS } from "../../../constants/breadcrumbs.ts";
import SequenceSummaryPage from "../SequenceSummaryPage.tsx";

const { usePageTitle } = jest.requireMock<{ usePageTitle: "usePageTitle" }>(
  "../../../utils/usePageTitle/usePageTitle.ts",
);

describe("SequenceSummaryPage", () => {
  test("renders", async () => {
    render(<SequenceSummaryPage />);

    expect(usePageTitle).toHaveBeenCalledWith("Sequence summary");
    expect(SEQUENCE_BREADCRUMBS[0]).toBe(true);
  });
});
