import { render } from "@testing-library/react";
import SequenceStepsPage from "../SequenceStepsPage.tsx";
import {SEQUENCE_BREADCRUMBS} from "../../../constants/breadcrumbs.ts";

const { usePageTitle } = jest.requireMock<{ usePageTitle: "usePageTitle" }>(
  "../../../utils/usePageTitle/usePageTitle.ts",
);

describe("SequenceStepsPage", () => {
  test("renders", async () => {
    render(<SequenceStepsPage/>);

    expect(usePageTitle).toHaveBeenCalledWith("Sequence steps");
    expect(SEQUENCE_BREADCRUMBS[0]).toBe(true)
  });
});
