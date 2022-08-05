import React from "react";
import { Layout } from "components";
import styled from "styled-components";
import { Input, Button } from "components";
import { dateparse } from "libs";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  height: 100vh;

  time {
    padding: 0 10px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SectionSearch = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  text-align: center;
  max-width: 300px;

  p {
    font-weight: 600;
    text-transform: uppercase;
  }

  button {
    margin: 5px;
  }
`;

const SectionBlogList = styled.section`
  h1 {
    cursor: pointer;
  }

  article {
    border: 1px solid #000;
    padding: 10px;
    opacity: 0.25;

    &:hover {
      opacity: 1;
    }
  }
`;

const Blog = () => {
  const data = new Array(15);
  data.fill(
    {
      id: 12345,
      title: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
      date: 1658908284132,
      category: "Lorem",
    },
    0,
    15
  );

  return (
    <Layout>
      <Container>
        <SectionSearch>
          <Input type="text" placeholder="search" />
          <div>
            <p>category</p>
            <div>
              <Button>topic</Button>
              <Button>topic</Button>
              <Button>topic</Button>
              <Button>topic</Button>
              <Button>topic</Button>
              <Button>topic</Button>
            </div>
          </div>
        </SectionSearch>
        <SectionBlogList className="section-bloglist">
          {data?.length > 0 &&
            data.map((val, idx) => (
              <article key={val + idx}>
                <div>
                  <Button>{val?.category}</Button>
                  <time>{dateparse(val?.date, "DD MMM YYYY | HH:MM")}</time>
                </div>
                <Link href={{ pathname: "/blog/[id]", query: { id: val?.id } }}>
                  <h1>{val?.title}</h1>
                </Link>
              </article>
            ))}
        </SectionBlogList>
      </Container>
    </Layout>
  );
};

export default Blog;
