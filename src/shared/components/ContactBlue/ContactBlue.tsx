"use client";

import React, { useState } from 'react';
import styles from './ContactBlue.module.css';

const ContactBlue = () => {
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, '');
        const size = input.length;

        if (size === 0) setPhone('');
        else if (size <= 3) setPhone(`(${input}`);
        else if (size <= 6) setPhone(`(${input.slice(0, 3)}) ${input.slice(3)}`);
        else setPhone(`(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`);
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>

                {/* Lado Izquierdo: Texto con mejor balance */}
                <div className={styles.infoSide}>
                    <h2 className={styles.mainTitle}>
                        Ready to Work with <br />
                        <span>Advanced Plumbing & HVAC?</span>
                    </h2>
                    <div className={styles.divider}></div>
                    <p className={styles.description}>
                        When you need a plumbing team that's professional, reliable, and ready to tackle any challenge,
                        Advanced Plumbing & HVAC is here for you. We welcome you to learn more about our services,
                        ask questions, and schedule an appointment.
                    </p>
                    <button className={styles.outlineBtn}>LEARN MORE</button>
                </div>

                {/* Lado Derecho: Formulario Estilizado */}
                <div className={styles.formSide}>
                    <div className={styles.formCard}>
                        <h2 className={styles.formTitle}>CONTACT US</h2>
                        <form className={styles.form}>
                            <div className={styles.row}>
                                <div className={styles.field}><input type="text" placeholder="First Name *" required /></div>
                                <div className={styles.field}><input type="text" placeholder="Last Name *" required /></div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <input type="tel" placeholder="(000) 000-0000" value={phone} onChange={handlePhoneChange} maxLength={14} required />
                                </div>
                                <div className={styles.field}><input type="email" placeholder="Email *" required /></div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.field}><input type="text" placeholder="Address *" required /></div>
                                <div className={styles.field}><input type="text" placeholder="City *" required /></div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.field}><input type="text" placeholder="State *" required /></div>
                                <div className={styles.field}><input type="text" placeholder="Zip Code *" required /></div>
                            </div>

                            <div className={styles.field}>
                                <select className={styles.select} required defaultValue="">
                                    <option value="" disabled>Please Select Service</option>
                                    <option value="1">Plumbing Replacement</option>
                                    <option value="2">Water Heater</option>
                                    <option value="3">Sump Pump</option>
                                </select>
                            </div>

                            <div className={styles.field}>
                                <textarea placeholder="Your Message" rows={3}></textarea>
                            </div>

                            <div className={styles.captchaRow}>
                                <div className={styles.captchaBox}>
                                    <div className={styles.captchaLeft}>
                                        <input type="checkbox" id="robot" />
                                        <label htmlFor="robot">No soy un robot</label>
                                    </div>
                                    <div className={styles.captchaRight}>
                                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="re" />
                                        <span>reCAPTCHA</span>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className={styles.submitBtn}>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBlue;