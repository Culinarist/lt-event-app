import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import cat from "../../../assets/Images/cat.svg";
import cum from "../../../assets/Images/cum.svg";
import fish from "../../../assets/Images/fish.svg";
import skull from "../../../assets/Images/skull.svg";
import ketchup from "../../../assets/Images/ketchup.svg";
import redHat from "../../../assets/Images/redHat.svg";
import foot from "../../../assets/Images/foot.svg";
import astral from "../../../assets/Images/astral.svg";
import blackHeart from "../../../assets/Images/blackHeart.svg";
import greenLootBeam from "../../../assets/Images/greenLootBeam.gif";
import littleTown from "../../../assets/Images/Little_Town.png";

const Home = () => {
  const [breakpoint, setBreakpoint] = useState<string>("");
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (window.length <= 600) {
      setBreakpoint("sm");
    } else {
      setBreakpoint("");
    }
  }, [window.length, breakpoint]);

  const gangIcons = [
    cat,
    cum,
    fish,
    skull,
    ketchup,
    redHat,
    foot,
    astral,
    blackHeart,
  ];

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to bottom, #2A9D8F, #0d0d0d)",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        pr: 5,
        pl: 5,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "top",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          textAlign: "start",
          pt: 15,
          pl: 2,
        }}
      >
        <Typography variant="h1" fontSize={48}>
          Welcome to Little Town!
        </Typography>

        <Box
          sx={{
            display: "flex",
            width: "65%",
            justifyContent: "space-between",
            p: 1,
          }}
        >
          {gangIcons.map((name, index) => (
            <img
              aria-label={"Little Town Gang Logos"}
              key={index}
              width="25"
              height="auto"
              src={name}
            />
          ))}
        </Box>
        <Typography
          variant={"body1"}
          fontWeight={500}
          fontSize={sm ? "1rem" : md ? "1.3rem" : "1.5rem"}
          pt={1}
          pl={0.5}
          width={sm ? "100%" : "65%"}
        >
          In this Little Town, we strive to create a welcoming and inclusive
          community for all players. We believe that diversity is what makes our
          clan strong and interesting. We celebrate our differences and
          encourage everyone to be themselves, as we understand that
          individuality is a key ingredient in building a vibrant community!
        </Typography>
      </Box>

      {sm ? (
        <></>
      ) : (
        <Box
          sx={{
            width: "40%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            pb: 5,
          }}
        >
          <img
            src={greenLootBeam}
            alt={"Loot Beam"}
            width="140"
            height="auto"
            style={{ transform: "rotate(8deg)" }}
          />
          <img
            src={littleTown}
            alt="Little Town Logo"
            width="60"
            height="60"
            style={{
              borderRadius: "10px",
              transform: "rotate(15deg)",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Home;
