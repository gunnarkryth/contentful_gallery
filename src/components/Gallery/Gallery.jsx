import * as contentful from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { useEffect, useState } from "react";

import s from "./Style.module.scss";

export const Gallery = () => {
  const [header, setHeader] = useState();
  const [description, setDescription] = useState();
  const [gallery, setGallery] = useState();

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  useEffect(() => {
    client.getEntries({ content_type: "header" }).then(
      (res) => setHeader(res)
      // console.log(res)
    );
  }, []);
  useEffect(() => {
    client
      .getEntries({ content_type: "description" })
      .then((res) => setDescription(res));
  }, []);
  useEffect(() => {
    client
      .getEntries({ content_type: "kajkageGallery" })
      .then((res) => setGallery(res));
  }, []);
  return (
    <>
      <header>
        <img
          src={header?.items[0]?.fields.headerImage.fields.file.url}
          alt=""
        />
      </header>
      <section>
        <article>
          {documentToReactComponents(description?.items[0]?.fields.description)}
        </article>
      </section>
      <section className={s.image_grid}>
        {gallery?.items?.map((item) => (
          <figure>
            <figcaption>
              <h3>{item.fields.title}</h3>
            </figcaption>
            <img src={item.fields.image.fields.file.url} alt="" />
          </figure>
        ))}
      </section>
    </>
  );
};
