import { useRouter } from "next/router";
import { useState } from "react";
import { Tooltip, Snackbar, Fade } from "@material-ui/core";
import { AlternateEmail, LinkedIn, GitHub, Twitter } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

const content = (snackbar, setSnackbar, handleCopyEmail) => (
  <div style={{ textAlign: 'center' }}>
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={snackbar}
      autoHideDuration={2000}
      onClose={() => setSnackbar(false)}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity="success"
        onClose={() => setSnackbar(false)}
      >
        Email copied !
      </Alert>
    </Snackbar>
    <Tooltip title="Click for copy the email" placement="top">
      <AlternateEmail
        onClick={() => handleCopyEmail()}
        style={{ cursor: "pointer" }}
      />
    </Tooltip>
    <LinkedIn
      onClick={() => window.open("https://www.linkedin.com/in/disaada/")}
      style={{ cursor: "pointer" }}
    />
    <GitHub
      onClick={() => window.open("https://github.com/disaada")}
      style={{ cursor: "pointer" }}
    />
    <Twitter
      onClick={() => window.open("https://twitter.com/disaada")}
      style={{ cursor: "pointer" }}
    />
  </div>
);

export default function Footer() {
  const [snackbar, setSnackbar] = useState(false);
  const router = useRouter();
  const path = router.pathname;

  const handleCopyEmail = () => {
    const email = "disaada@gmail.com";
    navigator.clipboard.writeText(email).then(() => setSnackbar(true));
  };

  return (
    <>
      {path === "/" ? (
        <Fade in timeout={5000} style={{ transitionDelay: "8s" }}>
          {content(snackbar, setSnackbar, handleCopyEmail)}
        </Fade>
      ) : content(snackbar, setSnackbar, handleCopyEmail)}
    </>
  )
}
