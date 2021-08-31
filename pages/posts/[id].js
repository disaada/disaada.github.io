import Link from "next/link";
import Date from "../../lib/date";
import utilStyles from "../../styles/utils.module.css";
import { getPostsByID, getPosts } from "../../api/posts";

export default function PostById({ data }) {
  return (
    <section className={utilStyles.headingMd}>
      <p>
        <div>
          <Link href="/posts">🔙 Back/Kembali</Link>
        </div>
        <article>
          <h1 className={utilStyles.headingXl}>{data.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={data.published} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </article>
      </p>
    </section>
  );
}

export async function getStaticPaths() {
  try {
    const res = await getPosts();
    const data = await res.data.items;
    const paths = data.map((val) => {
      return {
        params: {
          id: val.id
        }
      }
    });
    return { paths, fallback: false };
  } catch (err) {
    return err;
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await getPostsByID(params.id);
    const data = await res.data;
    return { props: { data } };
  } catch (err) {
    return err;
  }
}
