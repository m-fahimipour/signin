import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { TextInput } from "./TextInput";
import { CustomButton } from "./CustomButton";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "react-oidc-context";

export type LoginForm = {
  username: string;
  password: string;
  remember: boolean;
};
export function CustomForm() {
  const { register, handleSubmit, reset, control } = useForm<LoginForm>({
    defaultValues: {
      remember: false,
    },
  });

  const auth = useAuth();

  const handleForm: SubmitHandler<LoginForm> = async (d, e) => {
    const res = await auth.signinRedirect();
    console.log(res);

    reset();
  };

  const formField = ["username", "password"] as const;

  return (
    <FormControl
      component={"form"}
      onSubmit={handleSubmit(handleForm)}
      fullWidth
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {formField.map((field: (typeof formField)[number], index) => {
          return (
            <TextInput
              key={index}
              name={field === "username" ? "نام کاربری" : "رمز عبور"}
              register={register}
              keyObject={field}
            />
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px",
        }}
      >
        <a href="http://#">
          <Typography variant="body1" color={"black"}>
            رمز عبورتان را فراموش کرده اید؟
          </Typography>
        </a>
        <Box sx={{ width: "max-content" }} display={"flex"}>
          <FormControlLabel
            sx={{
              display: "flex",
              marginRight: 0,
              width: "fit-content",
              whiteSpace: "nowrap",
            }}
            control={
              <Controller
                name="remember"
                control={control}
                render={({ field: { value, ...field } }) => {
                  return <Checkbox sx={{ p: 0 }} checked={value} {...field} />;
                }}
              />
              // <Checkbox
              //   {...register("remember")}
              //   sx={{ padding: "0px" }}
              // />
            }
            label="مرا به خاطر بسپار"
          />
        </Box>
      </Box>
      <CustomButton login submit />
    </FormControl>
  );
}
