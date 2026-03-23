// app/api/send-lead/route.ts
//
// ENV VARS needed:
//   RESEND_API_KEY
//   NOTIFICATION_EMAIL  (default: bbalabarca@advancedteamelite.com)
//
// Works with two forms:
//   • ContactBlue     — full fields (address, city, state, zip)
//   • ContactUsToday  — minimal (firstName, lastName, phone, email, service, message)

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend     = new Resend(process.env.RESEND_API_KEY);
const TEAM_EMAIL = process.env.NOTIFICATION_EMAIL ?? "bbalabarca@advancedteamelite.com";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface LeadBody {
    // Required in both forms
    firstName: string;
    lastName:  string;
    phone:     string;
    email:     string;
    service?:  string;
    message?:  string;
    // Optional — only sent by ContactBlue
    address?:  string;
    city?:     string;
    state?:    string;
    zip?:      string;
}

// ─── Email template ─────────────────────────────────────────────────────────────
function teamEmailHtml(d: LeadBody): string {
    const hasAddress = d.address || d.city || d.state || d.zip;

    return `
    <div style="font-family:sans-serif;line-height:1.6;color:#333;max-width:620px;">

        <!-- Header -->
        <div style="background:#004393;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:20px;">🔧 New Plumbing Lead</h2>
            <p style="color:#93c5fd;margin:4px 0 0;font-size:13px;">
                Advanced Plumbing & HVAC · Contact Form
            </p>
        </div>

        <!-- Body -->
        <div style="background:#fff;padding:32px;border:1px solid #e5e7eb;border-top:none;">

            <!-- Contact info -->
            <h3 style="color:#004393;font-size:13px;margin:0 0 12px;
                        text-transform:uppercase;letter-spacing:0.07em;">
                Contact Information
            </h3>
            <table style="width:100%;font-size:14px;border-collapse:collapse;margin-bottom:28px;">
                <tr>
                    <td style="padding:6px 0;color:#6b7280;width:130px;">Name:</td>
                    <td style="font-weight:700;">${d.firstName} ${d.lastName}</td>
                </tr>
                <tr>
                    <td style="padding:6px 0;color:#6b7280;">Phone:</td>
                    <td>
                        <a href="tel:${d.phone}"
                           style="color:#004393;font-weight:700;font-size:15px;">
                            ${d.phone}
                        </a>
                    </td>
                </tr>
                <tr>
                    <td style="padding:6px 0;color:#6b7280;">Email:</td>
                    <td>
                        <a href="mailto:${d.email}" style="color:#004393;">
                            ${d.email}
                        </a>
                    </td>
                </tr>
            </table>

            <!-- Address — only shown if at least one field was sent -->
            ${hasAddress ? `
            <h3 style="color:#004393;font-size:13px;margin:0 0 12px;
                        text-transform:uppercase;letter-spacing:0.07em;">
                Address
            </h3>
            <table style="width:100%;font-size:14px;border-collapse:collapse;margin-bottom:28px;">
                ${d.address ? `
                <tr>
                    <td style="padding:6px 0;color:#6b7280;width:130px;">Street:</td>
                    <td>${d.address}</td>
                </tr>` : ""}
                ${d.city ? `
                <tr>
                    <td style="padding:6px 0;color:#6b7280;">City:</td>
                    <td>${d.city}</td>
                </tr>` : ""}
                ${(d.state || d.zip) ? `
                <tr>
                    <td style="padding:6px 0;color:#6b7280;">State / Zip:</td>
                    <td>${[d.state, d.zip].filter(Boolean).join(" ")}</td>
                </tr>` : ""}
            </table>
            ` : ""}

            <!-- Service requested -->
            <h3 style="color:#004393;font-size:13px;margin:0 0 12px;
                        text-transform:uppercase;letter-spacing:0.07em;">
                Service Requested
            </h3>
            <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;
                        padding:16px 20px;font-size:15px;font-weight:700;color:#004393;
                        margin-bottom:28px;">
                ${d.service || "Not specified"}
            </div>

            <!-- Message — only shown if provided -->
            ${d.message ? `
            <h3 style="color:#004393;font-size:13px;margin:0 0 12px;
                        text-transform:uppercase;letter-spacing:0.07em;">
                Message
            </h3>
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;
                        padding:16px 20px;font-size:14px;color:#374151;white-space:pre-wrap;">
                ${d.message}
            </div>
            ` : ""}

        </div>

        <!-- Footer -->
        <div style="background:#f9fafb;padding:14px 32px;border:1px solid #e5e7eb;
                    border-top:none;border-radius:0 0 8px 8px;font-size:12px;
                    color:#9ca3af;text-align:center;">
            Lead from advancedteamelite.com · Advanced Plumbing & HVAC
        </div>
    </div>
    `;
}

// ─── POST handler ───────────────────────────────────────────────────────────────
export async function POST(req: Request) {
    try {
        const body: LeadBody = await req.json();
        const { firstName, lastName, phone, email, service } = body;

        // Only firstName, lastName, phone, email are always required
        if (!firstName || !lastName || !phone || !email) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from:    "Advanced Plumbing Leads <info@contact.advancedteamelite.com>",
            to:      TEAM_EMAIL,
            subject: `New Lead: ${firstName} ${lastName} — ${service || "General Inquiry"}`,
            html:    teamEmailHtml(body),
        });

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("Send Lead API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}