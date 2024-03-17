import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import Stepper from "../../components/Stepper/Stepper.tsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.tsx";
import { SEQUENCE_BREADCRUMBS } from "../../constants/breadcrumbs.ts";
import PageTitle from "../../components/PageTitle/PageTitle.tsx";
import { sequenceStepsPageStepper } from "./constants.ts";
import AddNewStepsButton from "./AddNewStepsButton.tsx";
import EmailBlock from "./EmailBlock.tsx";
import useEditorData from "../../utils/usePageTitle/useEditorData.ts";
import EmailEditor from "./EmailEditor.tsx";
import { useEffect, useState } from "react";
import { Editor } from "@tiptap/react";
import type { EmailsRawType } from "../../types/emails.ts";
import { useNavigate } from "react-router-dom";
import { PATH_NAMES } from "../../modules/router/routes.ts";
import SequenceActionBlock from "../../components/SequenceActionBlock/SequenceActionBlock.tsx";

const SequenceStepsPage = () => {
  const navigate = useNavigate();
  const initialEditor = useEditorData();

  usePageTitle("Sequence steps");

  const [emails, setEmails] = useState<EmailsRawType[]>([
    { id: 0, subject: "", editor: initialEditor },
  ]);

  const handleNewEmailBlockAdd = (newEditor: Editor | null) => {
    const extendedEmails = [
      ...emails,
      { id: emails.length, subject: "", editor: newEditor },
    ];

    setEmails(extendedEmails);
  };

  const handleEmailsSubmit = () => {
    const emailsToSend: { editor: any; subject: string; id: number }[] =
      emails.map(({ id, subject, editor }) => ({
        id,
        subject,
        editor: editor?.getJSON(),
      }));

    navigate(PATH_NAMES.sequenceSummaryPage, { state: { emailsToSend } });
  };

  useEffect(() => {
    const updatedEmailsEditor = emails.map(({ id, subject, editor }) => ({
      id,
      subject,
      editor: id === emails[emails.length - 1].id ? initialEditor : editor,
    }));

    setEmails(updatedEmailsEditor);
  }, [initialEditor]);

  return (
    <div style={{ padding: "1rem" }}>
      <Breadcrumbs breadcrumbs={SEQUENCE_BREADCRUMBS} />

      <PageTitle title={"New sequence"} />

      <Stepper steps={sequenceStepsPageStepper} />

      <SequenceActionBlock
        title={"Sequence steps"}
        subtitle={"Create steps for your sequence"}
        onNextButtonClick={handleEmailsSubmit}
      />

      <hr className={"my-4"} />

      {emails.map(({ id, subject, editor }) => {
        const handleSubjectChange = (itemId: number, newSubject: string) => {
          const updatedEmailsSubject = emails.map((value) => ({
            id: value.id,
            subject: value.id === itemId ? newSubject : value.subject,
            editor: value.editor,
          }));

          setEmails(updatedEmailsSubject);
        };

        return (
          <EmailBlock
            key={id}
            subject={subject}
            onSubjectChange={(updatedSubject: string) =>
              handleSubjectChange(id, updatedSubject)
            }
          >
            {editor ? <EmailEditor editor={editor} /> : <></>}
          </EmailBlock>
        );
      })}

      <AddNewStepsButton onAddNewBlock={handleNewEmailBlockAdd} />
    </div>
  );
};

export default SequenceStepsPage;
