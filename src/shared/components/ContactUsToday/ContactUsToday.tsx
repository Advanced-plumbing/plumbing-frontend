"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ContactUsToday.module.css";

interface ContactUsTodayProps {
    backgroundImage?: string; // Prop opcional para el fondo
}

export const ContactUsToday = ({
                                   backgroundImage = "/images/advance-plumbing-home-restoration.jpeg" // Valor por defecto
                               }: ContactUsTodayProps) => {
    const [phone, setPhone] = useState("");

    // Manejador de máscara (000) 000-0000
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, "");
        const zip = input.substring(0, 3);
        const middle = input.substring(3, 6);
        const last = input.substring(6, 10);

        if (input.length > 6) {
            setPhone(`(${zip}) ${middle}-${last}`);
        } else if (input.length > 3) {
            setPhone(`(${zip}) ${middle}`);
        } else if (input.length > 0) {
            setPhone(`(${zip}`);
        } else {
            setPhone("");
        }
    };

    const services = [
        "Drain & Sewer Cleaning", "Filter System Under Sink Installation",
        "Gas Line", "Insurance Pipe Burst Repair", "Pipe Replacement",
        "Plumbing Installation", "Plumbing Repair", "Sewer inspection SeeSnake Camera",
        "Sump Pumps", "Tankless Water Heater Installation", "Toilet Clog Removal",
        "Water Heater Replacement"
    ];

    return (
        <section className={styles.section}>
            {/* Background con Overlay */}
            <div className={styles.bgWrapper}>
                <Image
                    src={backgroundImage}
                    alt="Home Restoration"
                    fill
                    className={styles.bgImage}
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.container}>
                <div className={styles.glassCard}>
                    <h2 className={styles.title}>Contact Us Today</h2>

                    <form className={styles.form}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <input type="text" placeholder="First Name *" required />
                            </div>
                            <div className={styles.field}>
                                <input type="text" placeholder="Last Name *" required />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <input
                                type="tel"
                                placeholder="(000) 000-0000"
                                value={phone}
                                onChange={handlePhoneChange}
                                maxLength={14}
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <input type="email" placeholder="Email *" required />
                        </div>

                        <div className={styles.field}>
                            <select required className={styles.select}>
                                <option value="">Please Select Service</option>
                                {services.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>

                        <div className={styles.field}>
                            <textarea placeholder="Your Message" rows={4}></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            SUBMIT REQUEST
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};