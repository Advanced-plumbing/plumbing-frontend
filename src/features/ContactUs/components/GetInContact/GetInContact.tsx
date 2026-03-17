import React from 'react';
import styles from './GetInContact.module.css';

export const GetInContact = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* Lado del Mapa */}
                    <div className={styles.mapSide}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.333333333333!2d-87.9015056!3d42.046048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb7fc!2s975%20Rand%20Rd%2C%20Des%20Plaines%2C%20IL%2060016!5e0!3m2!1sen!2sus!4v1710000000000"
                            width="100%"
                            height="450"
                            style={{ border: 0, display: 'block' }} // 'display: block' elimina espacios extra abajo
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Lado de la Información */}
                    <div className={styles.infoSide}>
                        <h2 className={styles.title}>GET IN CONTACT</h2>

                        <div className={styles.contactItem}>
                            <p className={styles.label}>(815) 666 2286</p>
                        </div>

                        <div className={styles.contactItem}>
                        <p className={styles.address}>
                                975 Rand Rd,<br />
                                Des Plaines, IL 60016
                            </p>
                        </div>

                        <div className={styles.contactItem}>
                            <p className={styles.email}>advancedplumbingteam@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};