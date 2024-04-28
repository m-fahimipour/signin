import { Button, Stack } from "@mui/material";

export function CustomButton({
  login,
  submit,
}: {
  login: boolean;
  submit: boolean;
}) {
  return (
    <Stack
      sx={{
        width: "100%",
        mt: "56px",
      }}
      useFlexGap
      spacing={2}
    >
      <Button
        sx={{
          backgroundColor: login ? "success.main" : "transparent",
          color: login ? "white" : "success.main",
          borderRadius: "8px",
          px: "24px",
          py: "12px",
          "&:hover": {
            backgroundColor: "success.main",
          },
          fontWeight: "700",
          fontSize: "16px",
        }}
        type={submit ? "submit" : "button"}
      >
        ورود
      </Button>
      <Button
        sx={{
          backgroundColor: login ? "transparent" : "success.main",
          color: login ? "success.main" : "white",
          borderRadius: "8px",
          px: "24px",
          py: "12px",
          fontWeight: "700",
          fontSize: "16px",
        }}
      >
        ثبت نام
      </Button>
    </Stack>
  );
}
