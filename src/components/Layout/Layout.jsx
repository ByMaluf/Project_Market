import Footer from "../footer/footer";
import Header from "../header/header";
import style from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <section className={style.mainContent}>
        {children}
      </section>
      <Footer />
    </>
  );
}
