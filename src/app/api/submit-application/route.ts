import { NextResponse } from "next/server";
import Airtable, { FieldSet, Record } from "airtable";

// Airtable Table Names
const TBL_LOAN_APPLICATIONS = "Loan Applications";
const TBL_PERSONAL_INFO = "Personal Information";
const TBL_PROGRAM_INFO = "Program Information";
const TBL_GUARANTOR_INFO = "Guarantor Information";

// Initialize Airtable
const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = airtable.base(process.env.AIRTABLE_BASE_ID || "");

// Helper function to create records and return the new record ID
const createRecord = async (
  tableName: string,
  fields: FieldSet
): Promise<string> => {
  try {
    const records: readonly Record<FieldSet>[] = await base(tableName).create(
      [{ fields }]
    );
    if (records.length > 0) {
      return records[0].getId();
    }
    throw new Error(`No record was created in ${tableName}.`);
  } catch (error) {
    console.error(`Error creating record in ${tableName}:`, error);
    // Re-throw the error to be caught by the main try-catch block
    throw error;
  }
};

// Helper to format file uploads for Airtable
const formatAttachments = (
  fileUploads: any,
  fieldKeys: string[]
): any | undefined => {
  const attachments: { url: string; filename: string }[] = [];
  for (const key of fieldKeys) {
    const file = fileUploads[key];
    if (file && file.url) {
      attachments.push({
        url: file.url,
        filename: file.name,
      });
    }
  }
  return attachments.length > 0 ? attachments : undefined;
};

export async function POST(request: Request) {
  console.log("Received request to /api/submit-application");
  try {
    const body = await request.json();
    console.log("Request body parsed successfully");
    const { fileUploads, ...formData } = body;
    console.log("Form data and file uploads extracted from body");

    // Step 1: Create Personal Information Record
    const personalInfoFields: FieldSet = {
      Title: formData.title,
      "First Name": formData.firstName,
      "Last Name": formData.lastName,
      "Middle Name": formData.middleName,
      Email: formData.email,
      Pronouns: formData.pronouns,
      Nationality: formData.nationality,
      "Phone Number": formData.phoneNumber,
      "Passport Number": formData.passportNumber,
      "Current Address": formData.currentAddress,
      "Destination Address": formData.destinationAddress,
      "Passport Photograph": formatAttachments(fileUploads, ["passportPhoto"]),
      "Visa Page": formatAttachments(fileUploads, ["visaPage"]),
      "Passport Data Page": formatAttachments(fileUploads, ["passportDataPage"]),
    };
    console.log(
      "Submitting to Personal Information:",
      JSON.stringify(personalInfoFields, null, 2)
    );
    const personalInfoRecordId = await createRecord(
      TBL_PERSONAL_INFO,
      personalInfoFields
    );

    // Step 2: Create Program Information Record
    const programInfoFields: FieldSet = {
      "Name of Host Institution(s)": formData.hostInstitution,
      "Name of Program (Course)": formData.programName,
      "Admission Letter": formatAttachments(fileUploads, ["admissionLetter"]),
      "Confirmation of Award": formatAttachments(fileUploads, [
        "confirmationOfAward",
      ]),
      "Scholarship Contract": formatAttachments(fileUploads, [
        "scholarshipContract",
      ]),
      "Program Coordinator Full Name": formData.programCoordinatorName,
      "Program Coordinator Email": formData.programCoordinatorEmail,
      "Related Personal Information": [personalInfoRecordId],
    };
    console.log(
      "Submitting to Program Information:",
      JSON.stringify(programInfoFields, null, 2)
    );
    const programInfoRecordId = await createRecord(
      TBL_PROGRAM_INFO,
      programInfoFields
    );

    // Step 3: Create Guarantor Information Record (if applicable)
    let guarantorInfoRecordId: string | undefined;
    const hasGuarantorInfo =
      formData.guarantorFullName ||
      formData.guarantorEmail ||
      formData.guarantorPhoneNumber;

    if (hasGuarantorInfo) {
      const guarantorInfoFields: FieldSet = {
        "Full Name": formData.guarantorFullName,
        "Guarantor's Number": formData.guarantorPhoneNumber,
        "Guarantor Email": formData.guarantorEmail,
        "Guarantor ID Number": formData.guarantorIdNumber,
        "Guarantor ID": formatAttachments(fileUploads, ["guarantorId"]),
        "Attestation of Good Behavior": formatAttachments(fileUploads, [
          "attestation",
        ]),
        "Police Report": formatAttachments(fileUploads, ["policeReport"]),
      };
      console.log(
        "Submitting to Guarantor Information:",
        JSON.stringify(guarantorInfoFields, null, 2)
      );
      guarantorInfoRecordId = await createRecord(
        TBL_GUARANTOR_INFO,
        guarantorInfoFields
      );
    }

    // Step 4: Create the main Loan Application Record and link everything
    const loanApplicationFields: FieldSet = {
      Name: `${formData.firstName} ${formData.lastName} - ${formData.loanService}`,
      "Loan Service": formData.loanService,
      "Loan Amount": formData.amountToBorrow,
      "Repayment Terms": formData.repaymentTerms,
      "Installment Structure": formData.installmentStructure,
      "First Timer": formData.isFirstTimer === "yes",
      Applicant: [personalInfoRecordId],
      Program: [programInfoRecordId],
    };

    if (guarantorInfoRecordId) {
      loanApplicationFields["Guarantor"] = [guarantorInfoRecordId];
    }

    console.log(
      "Submitting to Loan Applications:",
      JSON.stringify(loanApplicationFields, null, 2)
    );
    await createRecord(TBL_LOAN_APPLICATIONS, loanApplicationFields);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Airtable submission error:", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'object' && error !== null) {
      errorMessage = JSON.stringify(error);
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to submit application", 
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}
