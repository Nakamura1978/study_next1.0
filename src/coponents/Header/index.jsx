import Link from "next/link"
import styles from "@/coponents/Header/Header.module.css"

const NAV_ITEMS = [
    {href : "/", label : "トップ"},
    {href : "/menu", label : "メニュー"},
    {href : "/media", label : "メディア掲載情報"},
    {href : "/online", label : "オンラインショップ"},
    {href : "/adaption", label : "採用情報"},
    {href : "/inquiry", label : "お問い合わせ"}
];

export const Header = () => {
    return(
        <header className={styles.header}>
            <h1 className={styles.h1}>厚盛太麺　太一商店</h1>
            <div className={styles.links}>
                {NAV_ITEMS.map((item) => {
                    return (
                        <Link
                            key={item.href} href={item.href} className={styles.nav}
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </div>
        </header>
    )
}