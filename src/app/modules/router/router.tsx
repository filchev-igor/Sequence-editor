import {createBrowserRouter} from "react-router-dom";
import SequenceStepsPage from "../../pages/SequenceStepsPage/SequenceStepsPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <SequenceStepsPage/>,
    },
]);
