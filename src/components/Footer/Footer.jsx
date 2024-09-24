import s from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={s.footerStyling}>
            <h4>Ingen Kaj-kager kom til skade under produktionen af denne side – men deres udseende kan muligvis skræmme svage sjæle. © 2024 Kajkage Galleri™. Alle rettigheder forbeholdes, selv de skæve!</h4>
            <p>Gunnar</p>
            <p>Christian</p>
            <img src="./src/assets/images/favicon.png" />
        </footer>
    )
}