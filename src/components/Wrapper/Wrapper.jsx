import s from "./Style.module.scss";

export const Wrapper = (props) => {
  return <div className={s.Atom}>{props.children}</div>;
};
