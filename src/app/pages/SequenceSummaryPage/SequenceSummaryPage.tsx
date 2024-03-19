import { useLocation, useNavigate } from "react-router-dom";
import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.tsx";
import { SEQUENCE_BREADCRUMBS } from "../../constants/breadcrumbs.ts";
import PageTitle from "../../components/PageTitle/PageTitle.tsx";
import Stepper from "../../components/Stepper/Stepper.tsx";
import { sequenceSummaryPageStepper } from "../SequenceStepsPage/constants.ts";
import { EmailsJsonType } from "../../types/emails.ts";
import { useNewEmailsUpload } from "../../api/emails/queryHooks.ts";
import SequenceActionBlock from "../../components/SequenceActionBlock/SequenceActionBlock.tsx";
import { PATH_NAMES } from "../../modules/router/routes.ts";

const SequenceSummaryPage = () => {
  const navigate = useNavigate();
  const {
    state: { emailsToSend },
  } = useLocation();
  const { handleNewEmailsUpload } = useNewEmailsUpload();

  usePageTitle("Sequence summary");

  const handlePreviousPageGo = () => {
    navigate(PATH_NAMES.sequenceStepsPage, { state: { emailsToSend } });
  };

  const handleEmailsSubmit = () => {
    handleNewEmailsUpload({
      data: emailsToSend,
      onSettled: () => {
        //TODO: requires additional page
        //navigate(PATH_NAMES., { state: { emailsToSend } });
      },
    });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Breadcrumbs breadcrumbs={SEQUENCE_BREADCRUMBS} />

      <PageTitle title={"New sequence"} />

      <Stepper steps={sequenceSummaryPageStepper} />

      <SequenceActionBlock
        title={"Sequence summary"}
        subtitle={"Summary of your sequence"}
        onPreviousButtonClick={handlePreviousPageGo}
        onNextButtonClick={handleEmailsSubmit}
      />

      <hr className={"my-4"} />

      {emailsToSend.map(({ id, subject, editor }: EmailsJsonType) => (
        <div
          key={id}
          className={"grid gap-5 mb-6"}
          style={{ gridTemplateColumns: "280px 1fr", color: "#344054" }}
        >
          <div className={"font-bold"}>Sequence steps and details</div>

          <div className={"grid"}>
            <div style={{ color: "#344054" }}>
              <div>Steps - {id + 1}</div>
            </div>

            <div
              className={"grid"}
              style={{ gridTemplateColumns: "auto 1fr", color: "#475467" }}
            >
              <div>Subject:&nbsp;</div>
              <div>{subject}</div>

              <div>Content:&nbsp;</div>
              <div>
                <pre>
                  {editor?.content?.map(({ content }) => {
                    return content?.[0].text ?? "\n\n";
                  })}
                </pre>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SequenceSummaryPage;
