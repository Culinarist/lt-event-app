import {
  useTheme,
  Theme,
  useMediaQuery,
  CircularProgress,
  Box,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSidebar } from "../../../contexts";
import { Bar } from "../shellComponents";
import { AllRoutes } from "../../Routes";

export function Shell() {
  const { loading: loadSidebar, sidebar } = useSidebar();
  const currentLocation = useLocation();

  const theme = useTheme();
  const tempSidebar = useMediaQuery(theme.breakpoints.down(2561));
  const isMobile = useMediaQuery(theme.breakpoints.down(426));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  useEffect(() => {
    if (tempSidebar) {
      setOpenSidebar(false);
    }
  }, [currentLocation]);

  // const sidebarComponent = loadSidebar == true ? <CircularProgress /> : </>

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Bar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Box sx={{ height: "100%", pt: "40px" }}>
        <AllRoutes />
      </Box>
    </Box>
  );
}

export default Shell;
