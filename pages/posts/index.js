// next helpers
import Link from "next/link";
// components
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
// libs
import DOMParser from "dom-parser";
import Date from "../../lib/date";
// styles
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/posts.module.css";
// api calls
import { getPosts } from "../../api/posts";

export async function getStaticProps() {
  try {
    const res = await getPosts();
    const data = await res.data.items;
    return { props: { data } };
  } catch (err) {
    return err;
  }
}

export default function Posts({ data }) {
  let postQueue = 0;
  const parser = new DOMParser();

  return (
    <Grid container spacing={3}>
      {data.length > 0
        ? data.map((data) => {
            postQueue = postQueue === 5 ? 0 : postQueue;
            postQueue++;
            const cols = postQueue === 1 || postQueue == 2 ? 6 : 4;
            const html = parser.parseFromString(data.content, "text/html");
            const img = html.getElementsByTagName("img")[0].attributes;
            const filterImgAttrib = img.filter((val) => val.name === "src")[0].value;
            const url = filterImgAttrib || "";
            return (
              <Grid key={data.idx} item xs={cols} className={styles.content}>
                <Link href={`/posts/${data.id}`}>
                  <Card>
                    <CardActionArea>
                      <CardHeader
                        subheader={
                          <small className={utilStyles.lightText}>
                            <Date dateString={data.published} />
                          </small>
                        }
                      />
                      <CardMedia
                        style={{ height: 0, paddingTop: "56.25%" }}
                        image={url}
                        title={data.id}
                      />
                    </CardActionArea>
                    <CardContent>
                      <h3> {data.title} </h3>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })
        : "There is no post yet"}
    </Grid>
    /*{<section className={utilStyles.headingMd}>
      <p>
        <ul className={utilStyles.list}>
          {data.length > 0
            ? data.map(({ id, published, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={published} />
                  </small>
                </li>
              ))
            : "No post"}
        </ul>
      </p>
    </section>}*/
  );
}
