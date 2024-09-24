import * as contentful from "contentful";
import { useEffect, useState } from "react";

import s from "./Style.module.scss";

export const Gallery = () => {
  const [gallery, setGallery] = useState();

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  useEffect(() => {
    client
      .getEntries({ content_type: "kajkageGallery" })
      .then((res) => setGallery(res));
  }, []);
  return (
    <>
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
