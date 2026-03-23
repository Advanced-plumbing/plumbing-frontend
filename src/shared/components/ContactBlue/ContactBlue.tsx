"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ContactBlue.module.css';
import Link from "next/link";

const services = [
    "Drain & Sewer Cleaning",
    "Filter System Under Sink Installation",
    "Gas Line",
    "Insurance Pipe Burst Repair",
    "Pipe Replacement",
    "Plumbing Installation",
    "Plumbing Repair",
    "Sewer inspection SeeSnake Camera",
    "Sump Pumps",
    "Tankless Water Heater Installation",
    "Toilet Clog Removal",
    "Water Heater Replacement",
];

type Status = "idle" | "loading" | "success" | "error";

const ContactBlue = () => {
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState<Status>("idle");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, '');
        const size = input.length;
        if (size === 0)       setPhone('');
        else if (size <= 3)   setPhone(`(${input}`);
        else if (size <= 6)   setPhone(`(${input.slice(0, 3)}) ${input.slice(3)}`);
        else                  setPhone(`(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;
        const data = new FormData(form);

        const body = {
            firstName: data.get("firstName")  as string,
            lastName:  data.get("lastName")   as string,
            phone:     phone,
            email:     data.get("email")      as string,
            address:   data.get("address")    as string,
            city:      data.get("city")       as string,
            state:     data.get("state")      as string,
            zip:       data.get("zip")        as string,
            service:   data.get("service")    as string,
            message:   data.get("message")    as string,
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
            setPhone('');
        } catch {
            setStatus("error");
        }
    };

    return (
        <>
            <section className={styles.contactSection}>
                <div className={styles.container}>

                    {/* Left side */}
                    <div className={styles.infoSide}>
                        <h2 className={styles.mainTitle}>
                            Ready to Work with <br />
                            <span>Advanced Plumbing & HVAC?</span>
                        </h2>
                        <div className={styles.divider} />
                        <p className={styles.description}>
                            When you need a plumbing team that's professional, reliable, and ready to tackle any challenge,
                            Advanced Plumbing & HVAC is here for you. We welcome you to learn more about our services,
                            ask questions, and schedule an appointment.
                        </p>
                        <Link href="/contact-us" className={styles.outlineBtn}>CONTACT US</Link>
                    </div>

                    {/* Right side — form */}
                    <div className={styles.formSide}>
                        <div className={styles.formCard}>
                            <h2 className={styles.formTitle}>CONTACT US</h2>

                            {status === "success" ? (
                                <div className={styles.successMsg}>
                                    <p>Message sent! We'll be in touch within 24 hours.</p>
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

                                    <div className={styles.row}>
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
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <input name="address" type="text" placeholder="Address *" required />
                                        </div>
                                        <div className={styles.field}>
                                            <input name="city" type="text" placeholder="City *" required />
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <input name="state" type="text" placeholder="State *" required />
                                        </div>
                                        <div className={styles.field}>
                                            <input name="zip" type="text" placeholder="Zip Code *" required />
                                        </div>
                                    </div>

                                    <div className={styles.field}>
                                        <select name="service" className={styles.select} required defaultValue="">
                                            <option value="" disabled>Please Select Service</option>
                                            {services.map(s => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.field}>
                                        <textarea name="message" placeholder="Your Message" rows={3} />
                                    </div>

                                    <div className={styles.captchaRow}>
                                        <div className={styles.captchaBox}>
                                            <div className={styles.captchaLeft}>
                                                <input type="checkbox" id="robot" required />
                                                <label htmlFor="robot">I'm not a robot</label>
                                            </div>
                                            <div className={styles.captchaRight}>
                                                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                                                <span>reCAPTCHA</span>
                                            </div>
                                        </div>
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
                                        {status === "loading" ? "SENDING…" : "SEND MESSAGE"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner image */}
            <div className={styles.banner}>
                <Image
                    src="/images/contact-banner-alt.png"
                    alt="Advanced Plumbing team"
                    fill
                    className={styles.bannerImg}
                    priority={false}
                />
            </div>
        </>
    );
};

export default ContactBlue;