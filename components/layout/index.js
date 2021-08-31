import { Container, Box } from "@material-ui/core";
import Header from "./header";
import Footer from "./footer";
import styles from "../../styles/layout.module.css";

export default function Layout({ children, toggleEffect, theme }) {
  return (
    <div>
      <Header toggleEffect={toggleEffect} theme={theme} />
      <div
        style={{
          display: "flex",
          backgroundImage:
            theme === "light"
              ? "url('/images/background-light.png')"
              : "url('/images/background-dark.png')",
        }}
      >
        <Container
          maxWidth="sm"
          style={{ backgroundColor: theme === "light" ? "#FDF6F0" : "#081229" }}
        >
          <Box className={styles.contentBox}>{children}</Box>
          <Footer />
        </Container>
      </div>
    </div>
  );
}
