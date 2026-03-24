"use client";

import React, { useState, useCallback } from 'react';
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

const TOTAL_FIELDS = 10; // firstName, lastName, phone, email, address, city, state, zip, service, message

type Status = "idle" | "loading" | "success" | "error";

const ContactBlue = () => {
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState<Status>("idle");
    const [filledFields, setFilledFields] = useState<Record<string, boolean>>({});

    const waterLevel = Math.round((Object.values(filledFields).filter(Boolean).length / TOTAL_FIELDS) * 100);

    const handleFieldChange = useCallback((name: string, value: string) => {
        setFilledFields(prev => ({ ...prev, [name]: value.trim().length > 0 }));
    }, []);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, '');
        const size = input.length;
        let formatted = '';
        if (size === 0)       formatted = '';
        else if (size <= 3)   formatted = `(${input}`;
        else if (size <= 6)   formatted = `(${input.slice(0, 3)}) ${input.slice(3)}`;
        else                  formatted = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
        setPhone(formatted);
        handleFieldChange('phone', formatted);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;
        const data = new FormData(form);

        const body = {
            firstName: data.get("firstName")  as string,
            lastName:  data.get("lastName")   as string,
            phone,
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
            setFilledFields({});
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

                            {/* Water fill effect */}
                            <div
                                className={styles.waterFill}
                                style={{ height: `${waterLevel}%` }}
                                aria-hidden="true"
                            >
                                <svg
                                    className={styles.waveSvg}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1200 60"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        className={styles.wavePath}
                                        d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,60 L0,60 Z"
                                    />
                                </svg>
                            </div>

                            <div className={styles.formContent}>
                                <h2 className={styles.formTitle}>CONTACT US</h2>

                                {status === "success" ? (
                                    <div className={styles.successMsg}>
                                        <p>Message sent! We'll be in touch within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form className={styles.form} onSubmit={handleSubmit}>
                                        <div className={styles.row}>
                                            <div className={styles.field}>
                                                <input name="firstName" type="text" placeholder="First Name *" required
                                                       onChange={e => handleFieldChange('firstName', e.target.value)} />
                                            </div>
                                            <div className={styles.field}>
                                                <input name="lastName" type="text" placeholder="Last Name *" required
                                                       onChange={e => handleFieldChange('lastName', e.target.value)} />
                                            </div>
                                        </div>

                                        <div className={styles.row}>
                                            <div className={styles.field}>
                                                <input
                                                    name="phone" type="tel" placeholder="(000) 000-0000"
                                                    value={phone} onChange={handlePhoneChange}
                                                    maxLength={14} required
                                                />
                                            </div>
                                            <div className={styles.field}>
                                                <input name="email" type="email" placeholder="Email *" required
                                                       onChange={e => handleFieldChange('email', e.target.value)} />
                                            </div>
                                        </div>

                                        <div className={styles.row}>
                                            <div className={styles.field}>
                                                <input name="address" type="text" placeholder="Address *" required
                                                       onChange={e => handleFieldChange('address', e.target.value)} />
                                            </div>
                                            <div className={styles.field}>
                                                <input name="city" type="text" placeholder="City *" required
                                                       onChange={e => handleFieldChange('city', e.target.value)} />
                                            </div>
                                        </div>

                                        <div className={styles.row}>
                                            <div className={styles.field}>
                                                <input name="state" type="text" placeholder="State *" required
                                                       onChange={e => handleFieldChange('state', e.target.value)} />
                                            </div>
                                            <div className={styles.field}>
                                                <input name="zip" type="text" placeholder="Zip Code *" required
                                                       onChange={e => handleFieldChange('zip', e.target.value)} />
                                            </div>
                                        </div>

                                        <div className={styles.field}>
                                            <select name="service" className={styles.select} required defaultValue=""
                                                    onChange={e => handleFieldChange('service', e.target.value)}>
                                                <option value="" disabled>Please Select Service</option>
                                                {services.map(s => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className={styles.field}>
                                            <textarea name="message" placeholder="Your Message" rows={3}
                                                      onChange={e => handleFieldChange('message', e.target.value)} />
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
                </div>
            </section>

            {/* Banner image */}
            <div className={styles.banner}>
                <Image
                    src="/images/contact-banner-2.png"
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