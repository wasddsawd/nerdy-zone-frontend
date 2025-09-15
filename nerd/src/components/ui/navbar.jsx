import * as React from "react";
import { Menubar } from "radix-ui";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "../../../node_modules/@radix-ui/react-icons";
import "../../styles/Geral.css";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const MenubarDemo = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([
    CHECK_ITEMS[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  return (
    <nav>
      <div >
        <Link to="/">
          Home
        </Link>
        <Link to="/perfil">
          Perfil
        </Link>
        <Link to="/login">
        Login</Link>
      </div>
    </nav>
  );
};

export default MenubarDemo;
