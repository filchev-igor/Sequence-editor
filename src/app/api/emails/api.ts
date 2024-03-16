import { fetchInstance } from "../../modules/fetchInstance/fetchInstance.ts";
import { EmailsJsonType } from "../../types/emails.ts";

export const uploadNewEmails = async (data: EmailsJsonType[]) => {
  await fetchInstance.post("/emails/", data);
};
