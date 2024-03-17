import { fetchInstance } from "../../../modules/fetchInstance/fetchInstance.ts";
import { uploadNewEmails } from "../api.ts";
import { mockedEmailsJson } from "./__data__/emails.ts";

describe("emails", () => {
  test("uploadNewEmails", async () => {
    const mockPost = jest.fn();
    fetchInstance.post = mockPost;

    // Call the function
    await uploadNewEmails([mockedEmailsJson]);

    expect(mockPost).toHaveBeenCalledWith("/emails/", [mockedEmailsJson]);
  });
});
