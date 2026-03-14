import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ── Config ────────────────────────────────────────────────────────────────────
const RECIPIENT_EMAIL = "info@vedantix.io";
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const get = (key: string) => (formData.get(key) as string) || "—";

    const fullName = get("fullName");
    const email = get("email");
    const jobTitle = get("jobTitle");
    const jobDept = get("jobDepartment");
    const resume = formData.get("resume") as File;

    if (!resume || resume.size === 0) {
      return NextResponse.json(
        { error: "Resume is required." },
        { status: 400 },
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("[apply] EMAIL_USER or EMAIL_PASS not set in environment.");
      return NextResponse.json(
        { error: "Email not configured." },
        { status: 500 },
      );
    }

    const buffer = Buffer.from(await resume.arrayBuffer());
    const appliedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // ── Compact info row ──────────────────────────────────────────────────────
    const row = (label: string, value: string) =>
      `<tr style="border-bottom:1px solid rgba(66,134,244,0.08);">
        <td style="padding:7px 16px 7px 7px;color:#6b7280;font-size:12.5px;white-space:nowrap;width:38%;vertical-align:top;">${label}</td>
        <td style="padding:7px 0;color:#e8ecf1;font-size:12.5px;font-weight:500;vertical-align:top;">${value}</td>
      </tr>`;

    const linkRow = (label: string, href: string) =>
      href === "—"
        ? row(label, href)
        : `<tr style="border-bottom:1px solid rgba(66,134,244,0.08);">
        <td style="padding:7px 16px 7px 7px;color:#6b7280;font-size:12.5px;white-space:nowrap;width:38%;vertical-align:top;">${label}</td>
        <td style="padding:7px 0;font-size:12.5px;font-weight:500;vertical-align:top;">
          <a href="${href}" style="color:#4286f4;text-decoration:none;">${href}</a>
        </td>
      </tr>`;

    // ── Section block ─────────────────────────────────────────────────────────
    const block = (emoji: string, title: string, rows: string) =>
      `<div style="margin-bottom:20px;">
        <table style="margin-bottom:10px;border-collapse:collapse;" cellpadding="0" cellspacing="0">
          <tr>
            <td style="width:26px;height:26px;background:rgba(66,134,244,0.18);border-radius:6px;text-align:center;vertical-align:middle;font-size:13px;padding:0;">${emoji}</td>
            <td style="padding-left:10px;vertical-align:middle;">
              <span style="font-size:10.5px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#4286f4;">${title}</span>
            </td>
          </tr>
        </table>
        <table style="width:100%;border-collapse:collapse;background:rgba(66,134,244,0.04);border-radius:8px;overflow:hidden;">
          ${rows}
        </table>
      </div>`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Application — ${fullName}</title></head>
<body style="margin:0;padding:0;background:linear-gradient(135deg,#1a2a4a 0%,#0f1419 60%,#1c1f2e 100%);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;min-height:100vh;">

<div style="padding:28px 12px;">
<div style="max-width:580px;margin:0 auto;">

  <!-- ── TOP BADGE ── -->
  <div style="text-align:center;margin-bottom:16px;">
    <span style="display:inline-block;background:linear-gradient(135deg,#4286f4,#00d9ff);border-radius:999px;padding:4px 18px;">
      <span style="color:#fff;font-weight:800;font-size:13px;letter-spacing:0.5px;">Vedantix.io</span>
    </span>
  </div>

  <!-- ── HERO CARD ── -->
  <div style="background:linear-gradient(135deg,rgba(66,134,244,0.18) 0%,rgba(0,217,255,0.06) 100%);border:1px solid rgba(66,134,244,0.3);border-radius:14px;padding:24px 28px;margin-bottom:12px;text-align:center;">
    <div style="margin-bottom:8px;">
      <span style="display:inline-block;background:rgba(66,134,244,0.2);border:1px solid rgba(66,134,244,0.35);color:#4286f4;font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;padding:3px 12px;border-radius:999px;">${jobDept}</span>
    </div>
    <h1 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#e8ecf1;line-height:1.2;">New Application Received</h1>
    <p style="margin:0 0 4px;font-size:14px;color:#9ca3af;">
      <strong style="color:#e8ecf1;">${fullName}</strong> applied for
      <strong style="background:linear-gradient(90deg,#4286f4,#00d9ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${jobTitle}</strong>
    </p>
    <p style="margin:10px 0 0;font-size:11px;color:#4b5563;">🕐 ${appliedAt} IST</p>
  </div>

  <!-- ── CONTENT CARD ── -->
  <div style="background:rgba(13,21,37,0.85);border:1px solid rgba(66,134,244,0.2);border-radius:14px;padding:24px 28px;backdrop-filter:blur(10px);">

    ${block(
      "👤",
      "Personal Details",
      [
        row("Full Name", fullName),
        row(
          "Email",
          `<a href="mailto:${email}" style="color:#4286f4;text-decoration:none;">${email}</a>`,
        ),
        row("Phone", get("phone")),
        row("Alt Phone", get("alternatePhone")),
        row("Date of Birth", get("dateOfBirth")),
        row("Gender", get("gender")),
        row("Nationality", get("nationality")),
        row("City", get("currentCity")),
        row("Address", get("currentAddress")),
      ].join(""),
    )}

    ${block(
      "🎓",
      "Education",
      [
        row("Qualification", get("highestQualification")),
        row("Degree / Major", get("degree")),
      ].join(""),
    )}

    ${block(
      "💼",
      "Experience",
      [
        row("Total Experience", get("totalExperience") + " yrs"),
        row("Current Title", get("currentJobTitle")),
        row("Current Company", get("currentCompany")),
        row("Previous Company", get("previousCompany")),
        row("Current CTC", get("currentSalary")),
        row("Expected CTC", get("expectedSalary")),
        row("Notice Period", get("noticePeriod") + " days"),
      ].join(""),
    )}

    ${block(
      "🔗",
      "Links & Profiles",
      [
        linkRow("LinkedIn", get("linkedInProfile")),
        linkRow("GitHub", get("githubProfile")),
        linkRow("Portfolio", get("portfolioWebsite")),
      ].join(""),
    )}

    <!-- ── RESUME PILL ── -->
    <div style="margin-top:8px;display:flex;align-items:center;gap:12px;background:rgba(66,134,244,0.1);border:1px solid rgba(66,134,244,0.25);border-radius:10px;padding:12px 16px;">
      <span style="font-size:20px;">�</span>
      <div>
        <div style="font-size:12.5px;font-weight:700;color:#e8ecf1;">Resume Attached</div>
        <div style="font-size:11px;color:#6b7280;margin-top:2px;">${fullName.replace(/\s+/g, "_")}_Resume.pdf</div>
      </div>
    </div>

  </div>

  <!-- ── FOOTER ── -->
  <div style="text-align:center;padding:18px 0 4px;">
    <p style="margin:0 0 6px;font-size:12px;color:#4b5563">
          This Is Auto Generated Email from Vedantix Careers Portal.
    </p>
    <p style="margin:0;font-size:12px">
          <a href="https://vedantix.io/careers" style="color:#4286f4;text-decoration:none;font-weight:600" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://vedantix.io/careers&amp;source=gmail&amp;ust=1772436361716000&amp;usg=AOvVaw3UxQKEz56C4p7M7Isj5uKs">vedantix.io/careers</a>
          <span style="color:#374151;margin:0 8px">·</span>
          <a href="https://vedantix.io" style="color:#4286f4;text-decoration:none;font-weight:600" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://vedantix.io&amp;source=gmail&amp;ust=1772436361716000&amp;usg=AOvVaw2jyx0YE6i0c0K2BKZ2Gk5B">vedantix.io</a>
        </p>
  </div>
</div>
</div>
</body>
</html>`;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // use smtp.gmail.com since credentials are for gmail
      port: 465,
      secure: true, // SSL
      auth: { user: emailUser, pass: emailPass },
    });

    await transporter.sendMail({
      from: `"Vedantix Careers" <${emailUser}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Application  ${jobTitle} ${jobDept}  ${fullName}`,
      html,
      attachments: [
        {
          filename: `${fullName.replace(/\s+/g, "_")}_Resume.pdf`,
          content: buffer,
          contentType: "application/pdf",
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[apply] Unexpected error:", error);
    return NextResponse.json(
      { error: "Failed to process application. Please try again." },
      { status: 500 },
    );
  }
}
