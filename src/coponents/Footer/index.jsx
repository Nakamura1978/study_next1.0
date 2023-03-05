import styles from "@/coponents/Footer/Footer.module.css"

export const Footer = () => {
    return (
        <div>
            <hr />
            <div className={styles.footer}>
                <h2 className={styles.h2}>厚盛太麺　太一商店</h2>
                <div className={styles.plivacy}>
                    <a href="/plivacy">個人情報保護方針|</a>
                    <a href="">特定商取引に関する法律に関する表記</a>
                </div>
                <p className={styles.copyright}>Copyright@2023太一商店All Rights Reserved.</p>
            </div>
        </div>
    );
}