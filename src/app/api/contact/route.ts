import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  console.log("RESEND_API_KEY loaded:", apiKey ? `yes (${apiKey.slice(0, 6)}...)` : "NO - missing!");
  
  const resend = new Resend(apiKey);
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "The Girl Essence Contact Form <contact@thegirlessence.org>",
      to: ["thegirlessenceinitiative@gmail.com"],
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          
          <!-- Outer wrapper -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style=" padding:  0px;">
            <tr>
              <td align="center">
                
                <!-- Email card -->
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(200,51,90,0.08);">
                  
                  <!-- Gradient accent bar -->
                  <tr>
                    <td style="height: 5px; background: linear-gradient(135deg, #c8335a, #e85d7e, #a02847);"></td>
                  </tr>

                  <!-- Header -->
                  <tr>
                    <td style="padding: 36px 20px 20px 20px; text-align: center;">
                      <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                        <tr>
                          <td style="width: 42px; height: 42px; background: linear-gradient(135deg, #c8335a, #a02847); border-radius: 12px; text-align: center; vertical-align: middle;">
                            <span style="font-size: 20px; line-height: 42px;">💌</span>
                          </td>
                          <td style="padding-left: 14px;">
                            <p style="margin: 0; font-size: 22px; font-weight: 700; color: #1a1118; font-family: Georgia, 'Times New Roman', serif; letter-spacing: -0.3px;">The Girl <span style="color: #c8335a; font-style: italic;">Essence</span></p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Badge -->
                  <tr>
                    <td align="center" style="padding: 0 20px 24px 20px;">
                      <table role="presentation" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background-color: rgba(200,51,90,0.08); border: 1px solid rgba(200,51,90,0.15); border-radius: 100px; padding: 6px 18px;">
                            <p style="margin: 0; font-size: 12px; font-weight: 600; color: #c8335a; letter-spacing: 0.08em; text-transform: uppercase;">New Contact Message</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Divider -->
                  <tr>
                    <td style="padding: 0 20px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="height: 1px; background: linear-gradient(90deg, transparent, #ede4e9, transparent);"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Sender info cards -->
                  <tr>
                    <td style="padding: 28px 20px 12px 20px;">
                      <p style="margin: 0 0 14px 0; font-size: 11px; font-weight: 700; color: #b8a8b0; letter-spacing: 0.12em; text-transform: uppercase;">Sender Details</p>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <!-- Name card -->
                        <tr>
                          <td style="padding-bottom: 8px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf8f9; border: 1px solid #f0eaed; border-radius: 12px;">
                              <tr>
                                <td style="padding: 14px 18px;">
                                  <p style="margin: 0 0 2px 0; font-size: 11px; font-weight: 600; color: #b8a8b0; letter-spacing: 0.06em; text-transform: uppercase;">Name</p>
                                  <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1a1118;">${name}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <!-- Email card -->
                        <tr>
                          <td style="padding-bottom: 8px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf8f9; border: 1px solid #f0eaed; border-radius: 12px;">
                              <tr>
                                <td style="padding: 14px 18px;">
                                  <p style="margin: 0 0 2px 0; font-size: 11px; font-weight: 600; color: #b8a8b0; letter-spacing: 0.06em; text-transform: uppercase;">Email</p>
                                  <p style="margin: 0; font-size: 16px; color: #1a1118;"><a href="mailto:${email}" style="color: #c8335a; text-decoration: none; font-weight: 500;">${email}</a></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <!-- Subject card -->
                        <tr>
                          <td style="padding-bottom: 8px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf8f9; border: 1px solid #f0eaed; border-radius: 12px;">
                              <tr>
                                <td style="padding: 14px 18px;">
                                  <p style="margin: 0 0 2px 0; font-size: 11px; font-weight: 600; color: #b8a8b0; letter-spacing: 0.06em; text-transform: uppercase;">Subject</p>
                                  <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1a1118;">${subject}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Divider -->
                  <tr>
                    <td style="padding: 8px 20px 0 20px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="height: 1px; background: linear-gradient(90deg, transparent, #ede4e9, transparent);"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Message body -->
                  <tr>
                    <td style="padding: 24px 20px 32px 20px;">
                      <p style="margin: 0 0 14px 0; font-size: 11px; font-weight: 700; color: #b8a8b0; letter-spacing: 0.12em; text-transform: uppercase;">Message</p>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #fdfbfc; border: 1px solid #f0eaed; border-radius: 14px; border-left: 4px solid #c8335a;">
                        <tr>
                          <td style="padding: 22px 18px;">
                            <p style="margin: 0; font-size: 15px; color: #2d2028; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Reply CTA -->
                  <tr>
                    <td align="center" style="padding: 0 20px 32px 20px;">
                      <table role="presentation" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background: linear-gradient(135deg, #c8335a, #a02847); border-radius: 12px; text-align: center;">
                            <a href="mailto:${email}" style="display: inline-block; padding: 14px 36px; font-size: 14px; font-weight: 600; color: #ffffff; text-decoration: none; letter-spacing: 0.02em;">Reply to ${name} →</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer divider -->
                  <tr>
                    <td style="padding: 0 20px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="height: 1px; background: linear-gradient(90deg, transparent, #ede4e9, transparent);"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 20px 32px 20px; text-align: center;">
                      <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 600; color: #5a4a52;">The Girl Essence Initiative</p>
                      <p style="margin: 0 0 12px 0; font-size: 12px; color: #b8a8b0; line-height: 1.6;">Raising Whole Women · Nigeria</p>
                      <p style="margin: 0; font-size: 11px; color: #d4c8ce;">This email was sent via the contact form on thegirlessence.org</p>
                    </td>
                  </tr>

                </table>
                <!-- End email card -->

              </td>
            </tr>
          </table>
          <!-- End outer wrapper -->

        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Failed to send email. Please try again.", details: error },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
