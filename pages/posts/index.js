import Link from "next/link";
import { Grid, Card, CardContent, makeStyles } from "@material-ui/core";
import Date from "../../lib/date";
import utilStyles from "../../styles/utils.module.css";
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
  },
  content: {
    backgroundColor: "transparent !important",
    border: "1px solid #de667a",
  },
});

export default function Posts({ data }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} direction="row" className={classes.root}>
      {data.length > 0
        ? data.map((data) => {
            return (
              <Grid key={data.idx} item xs={6}>
                <Link href={`/posts/${data.id}`} key={data.idx}>
                  <Card elevation={0} key={data.id} className={classes.content}>
                    <CardContent>
                      <small className={utilStyles.lightText}>
                        <Date dateString={data.published} />
                      </small>
                      <div>
                        <h3> {data.title} </h3>
                      </div>
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
