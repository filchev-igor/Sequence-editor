import { useMutation } from "react-query";
import { EmailsJsonType } from "../../types/emails.ts";
import { uploadNewEmails } from "./api.ts";

export const useNewEmailsUpload = () => {
  const { mutate } = useMutation(
    ({ data }: { data: EmailsJsonType[]; onSettled: () => void }) =>
      uploadNewEmails(data),
    {
      onSettled: (_data, _error, { onSettled }) => {
        onSettled();
      },
    },
  );

  return { handleNewEmailsUpload: mutate };
};
