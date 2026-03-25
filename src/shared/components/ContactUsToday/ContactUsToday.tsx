"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ContactUsToday.module.css";

interface ContactUsTodayProps {
    backgroundImage?: string;
}

type Status = "idle" | "loading" | "success" | "error";

export const ContactUsToday = ({
                                   backgroundImage = "/images/advance-plumbing-home-restoration.jpeg",
                               }: ContactUsTodayProps) => {
    const [phone, setPhone]   = useState("");
    const [status, setStatus] = useState<Status>("idle");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input  = e.target.value.replace(/\D/g, "");
        const zip    = input.substring(0, 3);
        const middle = input.substring(3, 6);
        const last   = input.substring(6, 10);
        if (input.length > 6)      setPhone(`(${zip}) ${middle}-${last}`);
        else if (input.length > 3) setPhone(`(${zip}) ${middle}`);
        else if (input.length > 0) setPhone(`(${zip}`);
        else                       setPhone("");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;
        const data = new FormData(form);

        // Only sends the fields this form has — address/city/state/zip are omitted
        const body = {
            firstName: data.get("firstName") as string,
            lastName:  data.get("lastName")  as string,
            phone,
            email:     data.get("email")     as string,
            service:   data.get("service")   as string,
            message:   data.get("message")   as string,
        };

        try {
            const res = await fetch("/api/send-lead", {
                method:  "POST",
                headers: { "Content-Type": "application/json" },
                body:    JSON.stringify(body),
            });
            if (!res.ok) throw new Error("API error");
            setStatus("success");
            form.reset();
            setPhone("");
        } catch {
            setStatus("error");
        }
    };

    const services = [
        "Drain & Sewer Cleaning", "Filter System Under Sink Installation",
        "Gas Line", "Insurance Pipe Burst Repair", "Pipe Replacement",
        "Plumbing Installation", "Plumbing Repair", "Sewer inspection SeeSnake Camera",
        "Sump Pumps", "Tankless Water Heater Installation", "Toilet Clog Removal",
        "Water Heater Replacement",
    ];

    return (
        <section className={styles.section} data-header-theme="light">
            {/* Background with overlay */}
            <div className={styles.bgWrapper}>
                <Image src={backgroundImage} alt="Home Restoration" fill className={styles.bgImage} />
                <div className={styles.overlay} />
            </div>

            <div className={styles.container}>
                <div className={styles.glassCard}>
                    <h2 className={styles.title}>Contact Us Today</h2>

                    {status === "success" ? (
                        <div className={styles.successMsg}>
                            <p> Request received! We'll be in touch within 24 hours.</p>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <input name="firstName" type="text" placeholder="First Name *" required />
                                </div>
                                <div className={styles.field}>
                                    <input name="lastName" type="text" placeholder="Last Name *" required />
                                </div>
                            </div>

                            <div className={styles.field}>
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="(000) 000-0000"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    maxLength={14}
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <input name="email" type="email" placeholder="Email *" required />
                            </div>

                            <div className={styles.field}>
                                <select name="service" required className={styles.select} defaultValue="">
                                    <option value="" disabled>Please Select Service</option>
                                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>

                            <div className={styles.field}>
                                <textarea name="message" placeholder="Your Message" rows={4} />
                            </div>

                            {status === "error" && (
                                <p className={styles.errorMsg}>
                                    Something went wrong. Please try again or call us directly.
                                </p>
                            )}

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? "SENDING…" : "SUBMIT REQUEST"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};