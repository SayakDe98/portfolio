import React from "react";
import withCommonLayout from "../components/common/withCommonLayout";
import {
  Button,
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactMeValidatorSchema from "../validators/contactMeValidatorSchema";
import { Phone } from "@mui/icons-material";
import { sendEmail } from "../utils/sendEmail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactInfo = [
  {
    label: "Email",
    value: "sayakde22@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 7980489637",
  },
  {
    label: "Address",
    value:
      "101, Deshpran Sasmal Road, Shantineketan Apartment, Block - B, Flat No.: 202",
  },
];

const ContactMe = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    register,
  } = useForm({
    resolver: yupResolver(contactMeValidatorSchema),
  });
  const handleSubmitHandler = async (_) => {
    const response = await sendEmail();
    if (response.success) {
      reset({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <Grid container direction={{ xs: "column", md: "row" }}>
      <Grid item xs={6}>
        <Stack alignItems="center">
          <Phone fontSize="large" sx={{ color: "grey" }} />
          <Typography variant="h4" mb={3}>Contact Me</Typography>
          <Typography variant="h5" color="#5D3FD3" mb={3}>
            You can reach me out in the following ways:
          </Typography>
        </Stack>

        <Grid container direction="column" gap={3}>
          {contactInfo.map((info, index) => (
            <Grid
              key={index}
              item
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1}
              flexDirection={{
                xs: "column",
                sm: "row",
              }}
            >
              <Typography variant="h5">{info.label}</Typography>
              <Typography>➡️</Typography>
              <Typography variant="h6">{info.value}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={6} p={2}>
        <Typography variant="h3" mb={3}>
          Leave Me A Message
        </Typography>
        <Typography variant="h6" mb={3}>Please fill up the form below with your name, email and message and I will get an email from you right from this app.</Typography>
        <form onSubmit={handleSubmit(handleSubmitHandler)} id="form">
          <Stack gap={3}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  placeholder="Name"
                  {...register("name")}
                  required
                  error={Boolean(errors.name)}
                  sx={{
                    ".MuiFormLabel-root.Mui-focused": {
                      color: "#5D3FD3 !important",
                    },
                    ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#5D3FD3 !important",
                      },
                  }}
                />
              )}
            />
            {Boolean(errors?.name) && (
              <FormHelperText>
                <span style={{ color: "#d32f2f" }}>{errors.name?.message}</span>
              </FormHelperText>
            )}

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Email"
                  label="Email"
                  {...register("email")}
                  required
                  error={Boolean(errors.email)}
                  sx={{
                    ".MuiFormLabel-root.Mui-focused": {
                      color: "#5D3FD3 !important",
                    },
                    ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#5D3FD3 !important",
                      },
                  }}
                />
              )}
            />
            {Boolean(errors?.email) && (
              <FormHelperText>
                <span style={{ color: "#d32f2f" }}>
                  {errors.email?.message}
                </span>
              </FormHelperText>
            )}
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  multiline
                  required
                  label="Message"
                  {...register("message")}
                  placeholder="Message"
                  minRows={4}
                  sx={{
                    ".MuiFormLabel-root.Mui-focused": {
                      color: "#5D3FD3 !important",
                    },
                    ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#5D3FD3 !important",
                      },
                  }}
                />
              )}
            />
            <Button
              variant="contained"
              sx={{
                background: "#5D3FD3",
                textTransform: "none",
                "&:hover": {
                  background: "#4d37a5",
                },
              }}
              type="submit"
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default withCommonLayout(ContactMe);
