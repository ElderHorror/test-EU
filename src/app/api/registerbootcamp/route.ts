import { NextResponse } from "next/server";
import nodemailer, { Transporter, SendMailOptions } from "nodemailer";
import { emailTransporter } from "../submit/route";
type Feedback = {
  email: string;
};
const invite = `
BEGIN:VCALENDAR
PRODID:-//Zoom//Zoom Meeting//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VTIMEZONE
TZID:CET
X-LIC-LOCATION:Europe/Copenhagen
BEGIN:DAYLIGHT
TZOFFSETFROM:+0100
TZOFFSETTO:+0200
TZNAME:CEST
DTSTART:19700329T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0200
TZOFFSETTO:+0100
TZNAME:CET
DTSTART:19701025T030000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTART;TZID=CET:20240615T140000
DTEND;TZID=CET:20240615T150000
DTSTAMP:20240615T130000Z
ORGANIZER;CN=Zoom:mailto:no-reply@zoom.us
UID:meeting_1234567890@zoom.us
ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=Attendee Name:mailto:attendee@example.com
DESCRIPTION:Hi there,\n\nYou are invited to a Zoom meeting.\n\nWhen: Jun 15, 2024 02:00 PM Copenhagen \n\nRegister in advance for this meeting:\nhttps://ucph-ku.zoom.us/meeting/register/u5wodu-urTMvHtJGkqeDMWpBaoxW8gm1v9cT \n\nAfter registering, you will receive a confirmation email containing information about joining the meeting.
LAST-MODIFIED:20240615T130000Z
LOCATION:Zoom Meeting
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:Invitation to The Introduction to R for Research. Although with that link they'll still need to register on zoom
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR
`;

export async function POST(request: Request) {
  try {
    const data: Feedback = await request.json();

    const { email } = data;

    if (!email) {
      return NextResponse.json({ error: "email is required" }, { status: 400 });
    }

    // Define the email content
    const mailOptions: SendMailOptions = {
      from: process.env.FEEDBACK_EMAILL,
      to: email,
      subject: "Invitation to The Introduction to R for Research.",
      text: `Hi there, 

    You are invited to a Zoom meeting. 
    When: Jun 15, 2024 02:00 PM Copenhagen 
    
    Register in advance for this meeting:https://ucph-ku.zoom.us/meeting/register/u5wodu-urTMvHtJGkqeDMWpBaoxW8gm1v9cT 
    
    After registering, you will receive a confirmation email containing information about joining the meeting.`,
      attachments: [
        {
          filename: "bootcamp_event_detail.ics",
          contentDisposition: "attachment",
          contentType: "text/calendar",
          content: invite,
        },
      ],
    };

    // Send the email
    await emailTransporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
