import { createBrowserRouter } from "react-router-dom";
import SequenceStepsPage from "../../pages/SequenceStepsPage/SequenceStepsPage.tsx";
import { PATH_NAMES } from "./routes.ts";
import SequenceSummaryPage from "../../pages/SequenceSummaryPage/SequenceSummaryPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SequenceStepsPage />,
    children: [
      {
        path: PATH_NAMES.sequenceSummaryPage,
        element: <SequenceSummaryPage />,
      },
    ],
  },
]);
