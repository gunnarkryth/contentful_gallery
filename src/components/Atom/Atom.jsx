import s from "./Style.module.scss";

export const Atom = () => {
  return (
    <section className={s.Atom}>
      <img src="https://i.makeagif.com/media/7-17-2018/BnNt5M.gif" alt="" />
      <hgroup>
        <h1>React boilerplate</h1>
        <h2>Made by Gunnar Christian Krüth</h2>
      </hgroup>
    </section>
  );
};
