import React from "react";
import { Layout } from "components";
import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-weight: 900;
  font-size: clamp(16px, 8vw, 150px);
  color: var(--primary-light);

  p {
    margin: 0;
    text-align: center;
  }
`;

const Contact = () => {
  return (
    <Layout>
      <Container>
        <section>
          <p>github</p>
          <p>thisisemail.com</p>
          <p>+62 896 7618 1051</p>
        </section>
      </Container>
    </Layout>
  );
};

export default Contact;
