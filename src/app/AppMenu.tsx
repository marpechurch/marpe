import "react";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { Link } from "react-router";

import "./AppMenu.css";

function AppMenu() {
  return (
    <div className="appMenu">
      <MenuTrigger>
        <Button aria-label="Menu" className="menuButton">
          ☰
        </Button>
        <Popover>
          <Menu className="menu">
            <MenuItem>
              <Link className="link" to="church">
                교회 소개
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="link" to="community">
                공동체 소개
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="link" to="service">
                예배 안내
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="link" to="videos">
                설교 영상
              </Link>
            </MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    </div>
  );
}

export default AppMenu;
