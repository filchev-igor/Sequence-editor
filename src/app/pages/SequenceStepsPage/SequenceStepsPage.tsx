import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import Stepper from "../../components/Stepper/Stepper.tsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.tsx";
import { SEQUENCE_BREADCRUMBS } from "../../constants/breadcrumbs.ts";
import PageTitle from "../../components/PageTitle/PageTitle.tsx";
import { sequenceStepperSteps } from "./constants.ts";
import AddNewStepsButton from "./AddNewStepsButton.tsx";
import EmailBlock from "./EmailBlock.tsx";
import useEditorData from "../../utils/usePageTitle/useEditorData.ts";
import EmailEditor from "./EmailEditor.tsx";
import { useEffect, useState } from "react";
import { Editor } from "@tiptap/react";
import type { EmailsRawType } from "../../types/emails.ts";
import { useNewEmailsUpload } from "../../api/emails/queryHooks.ts";

const SequenceStepsPage = () => {
  usePageTitle("Sequence steps");

  const { handleNewEmailsUpload } = useNewEmailsUpload();

  const initialEditor = useEditorData();

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

    handleNewEmailsUpload({ data: emailsToSend, onSettled: () => {} });
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

      <Stepper steps={sequenceStepperSteps} />

      <div className={"grid grid-cols-2"}>
        <div className={"grid"}>
          <span className={"font-bold"}>Sequence steps</span>
          <span className={"text-gray-500"}>
            Create steps for your sequence
          </span>
        </div>

        <div className={"text-right"}>
          <button type={"button"} className={"border border-gray-200 mr-2"}>
            Previous
          </button>

          <button
            type={"button"}
            className={"bg-purple-700 text-white" + " border"}
            onClick={handleEmailsSubmit}
          >
            Next
          </button>
        </div>
      </div>

      <hr className={"my-4"} />

      {emails.map(({ id, subject, editor }) => {
        const handleSubjectChange = (newSubject: string) => {
          const updatedEmailsSubject = [
            ...emails,
            {
              id,
              subject: newSubject,
              editor,
            },
          ];

          setEmails(updatedEmailsSubject);
        };

        return (
          <EmailBlock
            key={id}
            subject={subject}
            onSubjectChange={handleSubjectChange}
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
