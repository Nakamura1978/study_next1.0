import Link from "next/link"
import styles from "@/coponents/Header/Header.module.css"

const NAV_ITEMS = [
    {href : "/", label : "Index"},
    {href : "/about", label : "About"},
    {href : "/content", label : "Content"},
    {href : "/product", label : "Product"},
    {href : "/todo", label : "ToDo"}
];

export const Header = () => {
    return(
        <header className={styles.header}>
            {NAV_ITEMS.map((item) => {
                return (
                    <Link
                        key={item.href} href={item.href} className={styles.nav}
                    >
                        {item.label}
                    </Link>
                )
            })}
        </header>
    )
}