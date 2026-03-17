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
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d740.6091886481609!2d-87.90169453607591!3d42.05525687389495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb77c666f7f6b%3A0x5577d70df4b2fc7c!2s975%20Rand%20Rd%2C%20Des%20Plaines%2C%20IL%2060016!5e0!3m2!1ses!2sus!4v1773776651029!5m2!1ses!2sus"
                            width="100%"
                            height="450"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
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