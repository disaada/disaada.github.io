import Link from "next/link";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
  makeStyles
} from "@material-ui/core";
import DOMParser from "dom-parser";
import Date from "../../lib/date";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/posts.module.css";
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

const useStyles = makeStyles({
  root: { 
    margin: "0 auto", 
    width: "100%", 
  }
});

export default function Posts({ data }) {
  // let postQueue = 0;
  const parser = new DOMParser();
  const classes = useStyles();

  return (
    <Grid container spacing={3} direction="row" className={classes.root}>
      {data.length > 0
        ? data.map((data) => {
            /* postQueue = postQueue === 5 ? 0 : postQueue;
            postQueue++;
            const cols = postQueue === 1 || postQueue == 2 ? 6 : 4; */
            const html = parser.parseFromString(data.content, "text/html");
            const img = html.getElementsByTagName("img")[0].attributes;
            const filterImgAttrib = img.filter((val) => val.name === "src")[0]
              .value;
            const url = filterImgAttrib || "";
            return (
              <Grid 
                key={data.idx} 
                item xs={12} 
                sm={12} md={6}
                lg={4} xl={3}
                className={styles.content}>
                <Link href={`/posts/${data.id}`} key={data.idx}>
                  <Card elevation={3} key={data.id}>
                    <CardActionArea>
                      <CardHeader
                        subheader={
                          <small className={utilStyles.lightText}>
                            <Date dateString={data.published} />
                          </small>
                        }
                      />
                      <CardMedia
                        className={styles.media}
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
  );
}
