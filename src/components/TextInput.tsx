import { Box, FormControlLabel, TextField, Typography } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import type { LoginForm } from "./CustomForm";
export function TextInput({
  name,
  register,
  keyObject,
}: {
  name: string;
  register: UseFormRegister<LoginForm>;
  keyObject: keyof LoginForm;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "52px",
        borderRadius: "8px",
        backgroundColor: "#F7F7F7",
        fontSize: "14px",
        fontWeight: "400",
        p: "16px",
        gap: "16px",
      }}
    >
      <FormControlLabel
        sx={{
          gap: "16px",
          width: "100%",
          margin: 0,
        }}
        label={name}
        labelPlacement="start"
        control={
          <TextField
            sx={{
              flexBasis: 0,
              flexGrow: 1,
            }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            {...register(keyObject)}
          />
        }
      />
    </Box>
  );
}
