import {
  AppBar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/slices/theme";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import { LightModeOutlined } from "@mui/icons-material";

function Navbar() {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black.main",
        boxShadow: "none",
        top: "0",
        zIndex: "999",
        borderBottom: "2px solid",
        borderColor: `${theme.palette.black[200]} !important`,
      }}
    >
      <Toolbar
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "0 0 0 4px", sm: "0 16px" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography
              component="span"
              sx={{ color: "white.500", fontWeight: 600, fontSize: "32px" }}
            >
              Nifty
            </Typography>
            <Typography
              component="span"
              sx={{ color: "primary.main", fontWeight: 600, fontSize: "32px" }}
            >
              Research
            </Typography>
          </Link>
        </Box>

        <CustomList />
        {/* <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              color: "primary.contrastText",
              backgroundColor: "btn",
              boxShadow: theme.shadows.btn,
              height: { xs: "28px", sm: "46px" },
              width: { xs: "28px", sm: "46px" },
            }}
            onClick={() => dispatch(toggleTheme())}
          >
            {theme.palette.mode === "light" ? (
              <NightlightOutlinedIcon
                sx={{ transform: "rotate(-25deg)", color: "black.main" }}
              />
            ) : (
              <LightModeOutlined sx={{ color: "black.main" }} />
            )}
          </IconButton>
        </Stack> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

function CustomList() {
  const theme = useTheme();
  return (
    <List sx={{ display: "flex", alignItems: "center" }}>
      {ListData.map((item, index) => {
        return (
          <ListItem key={index}>
            <Link
              to={`${item.href}`}
              style={{
                textDecoration: "none",
                whiteSpace: "nowrap",
                color:
                  index === 0
                    ? theme.palette.white.main
                    : theme.palette.white[200],
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {item.name}
            </Link>
          </ListItem>
        );
      })}
      <ListItem>
        <Button
          href="https:t.me/s7hyam"
          sx={{
            "color": "black.500",
            "backgroundColor": "primary.500",
            "borderRadius": "4px",
            "boxShadow": "btn",
            "fontSize": "12px",
            "padding": "5px 10px",
            "whiteSpace": "nowrap",
            "&:hover": {
              backgroundColor: "primary.500",
              color: "white.500",
            },
          }}
        >
          Join Telegram
        </Button>
      </ListItem>
    </List>
  );
}

const ListData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/about",
  },
];
