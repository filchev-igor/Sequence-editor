import { useLocation } from "react-router-dom";
import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.tsx";
import { SEQUENCE_BREADCRUMBS } from "../../constants/breadcrumbs.ts";
import PageTitle from "../../components/PageTitle/PageTitle.tsx";
import Stepper from "../../components/Stepper/Stepper.tsx";
import { sequenceSummaryPageStepper } from "../SequenceStepsPage/constants.ts";
import { EmailsJsonType } from "../../types/emails.ts";

const SequenceSummaryPage = () => {
  const {
    state: { emailsToSend },
  } = useLocation();

  usePageTitle("Sequence steps");

  return (
    <div style={{ padding: "1rem" }}>
      <Breadcrumbs breadcrumbs={SEQUENCE_BREADCRUMBS} />

      <PageTitle title={"New sequence"} />

      <Stepper steps={sequenceSummaryPageStepper} />

      <div className={"grid grid-cols-2"}>
        <div className={"grid"}>
          <span className={"font-bold"}>Sequence summary</span>
          <span className={"text-gray-500"}>Summary of your sequence</span>
        </div>

        <div className={"text-right"}>
          <button
            type={"button"}
            className={"border border-gray-200 sm:mr-2 xs: mb-2"}
          >
            Previous
          </button>

          <button
            type={"button"}
            className={"bg-purple-700 text-white" + " border"}
          >
            Next
          </button>
        </div>
      </div>

      <hr className={"my-4"} />

      {emailsToSend.map(({ id, subject }: EmailsJsonType) => (
        <div
          key={id}
          className={"grid gap-5 mb-6"}
          style={{ gridTemplateColumns: "auto 1fr" }}
        >
          <div>Sequence steps</div>

          <div className={"grid"}>
            <div className={"font-bold"}>
              <div>Steps - {id + 1}</div>
            </div>

            <div
              className={"grid text-gray-500"}
              style={{ gridTemplateColumns: "auto 1fr" }}
            >
              <div>Subject:&nbsp;</div>
              <div>{subject}</div>
            </div>

            <div className={"text-gray-500"}>
              <div>Content:&nbsp;</div>
              <div>X</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SequenceSummaryPage;
