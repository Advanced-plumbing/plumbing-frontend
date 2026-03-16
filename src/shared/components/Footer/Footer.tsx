import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Lado Izquierdo: Logo e ID */}
                <div className={styles.brandSide}>
                    <Image
                        src="/logos/logo-white.png"
                        alt="Advanced Plumbing White"
                        width={250}
                        height={80}
                    />
                    <p className={styles.plumberId}>Plumber ID: 058-199827</p>
                </div>

                {/* Lado Derecho: Contacto y Social */}
                <div className={styles.contactSide}>
                    <h3 className={styles.contactTitle}>Get In Contact</h3>
                    <div className={styles.info}>
                        <p>(815) 666 2286</p>
                        <p>975 Rand Rd, Des Plaines, IL 60016</p>
                        <p>advancedplumbingteam@gmail.com</p>
                    </div>
                    <a href="#" className={styles.socialIcon}>
                        <FaFacebook size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};