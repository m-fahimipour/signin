import { Box, Stack, Typography } from "@mui/material";
import { LoginPic } from "./components/SVGLogin";
import { LogoPic } from "./components/SVGLogo";
import { CustomForm } from "./components/CustomForm";
export default function App() {
  return (
    <Stack
      direction={"row"}
      minHeight={"100vh"}
    >
      <Box
        sx={{
          width: "35%",
          paddingRight: "80px",
          paddingLeft: "112px",
          py: "80px",
        }}
      >
        <Box marginBottom={"175px"}>
          <LogoPic />
        </Box>
        <Box marginBottom={"32px"}>
          <Typography variant="h4">به دایار خوش آمدید</Typography>
          <Typography variant="body1">
            پلتفرم جامع ثبت نام مهدکودک‌ها
          </Typography>
        </Box>
        {/* text input */}
        <CustomForm />
      </Box>
      <Box
        sx={{
          backgroundColor: "#F3F3F3",
          width: "65%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginPic />
      </Box>
    </Stack>
  );
}
