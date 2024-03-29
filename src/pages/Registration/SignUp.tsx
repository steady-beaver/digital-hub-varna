import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import { useSignUp } from "queries";
import { CredentialsT } from "types";
import { useStyles } from "./styles";
import validationSchema from "./validationScheme";

export default function SignUp() {
  const classes = useStyles();
  const { mutate: signUp } = useSignUp();

  const onSubmit = async (values: CredentialsT) => {
    try {
      signUp(values);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    isValid,
    handleSubmit,
  } = useFormik<CredentialsT>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}
                helperText="Small and big letter, number, special character [8-21]"
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isSubmitting || !isValid}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
