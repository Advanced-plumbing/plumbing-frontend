import React from 'react';
import styles from './GetInContact.module.css';

export const GetInContact = () => {
    return (
        <section className={styles.section} data-header-theme="dark">
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* Lado del Mapa */}
                    <div className={styles.mapSide}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d880.1646928276892!2d-87.9378812685671!3d42.09656120241383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fba2b9c572589%3A0x128202f10f7639a4!2s10%20N%20Elmhurst%20Rd%2C%20Prospect%20Heights%2C%20IL%2060070%2C%20EE.%20UU.!5e0!3m2!1ses!2spe!4v1775514106238!5m2!1ses!2spe"
                            width="100%"
                            height="450"
                            style={{border: 0, display: 'block'}} // 'display: block' elimina espacios extra abajo
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
                            10 North Elmhurst Rd,<br />
                            Prospect Heights, IL 60016
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