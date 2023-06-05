import { AppBar, IconButton, Typography, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface Props {
  openSidebar: boolean;
  setOpenSidebar: (value: boolean) => void;
}

const Bar = ({ openSidebar, setOpenSidebar }: Props) => {
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const navigate = useNavigate();

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
        height: "50px",
        px: 4,
      }}
    >
      <IconButton onClick={toggleSidebar}>
        <Menu />
      </IconButton>

      <Box>
        <Typography
          onClick={() => navigate("/")}
          component={"div"}
          sx={{
            "&:hover": { cursor: "pointer" },
            width: "100px",
            height: "44px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          noWrap
          fontSize={18}
        >
          Little Town
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Bar;
