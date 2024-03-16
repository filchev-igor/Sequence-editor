import { createBrowserRouter } from "react-router-dom";
import SequenceStepsPage from "../../pages/SequenceStepsPage/SequenceStepsPage.tsx";
import { PATH_NAMES } from "./routes.ts";
import SequenceSummaryPage from "../../pages/SequenceSummaryPage/SequenceSummaryPage.tsx";

export const router = createBrowserRouter([
  {
    path: PATH_NAMES.sequenceStepsPage,
    children: [
      {
        element: <SequenceStepsPage />,
        index: true,
      },
      {
        path: PATH_NAMES.sequenceSummaryPage,
        element: <SequenceSummaryPage />,
      },
    ],
  },
]);
