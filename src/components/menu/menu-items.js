import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RedeemIcon from "@mui/icons-material/Redeem";
import CodeIcon from "@mui/icons-material/Code";
const MENU_ITEMS = [
  {
    label: "Home",
    icon: HomeIcon,
    path: "/",
  },
  {
    label: "Projects",
    icon: CodeIcon,
    path: "/",
  },
  {
    label: "Experience",
    icon: BusinessCenterIcon,
    path: "/experience",
  },
  {
    label: "Skills",
    icon: PsychologyIcon,
    path: "/skills",
  },
  {
    label: "Certifications",
    icon: RedeemIcon,
    path: "/certifications",
  },
  {
    label: "Education",
    icon: SchoolIcon,
    path: "/education",
  },
];

export default MENU_ITEMS;
