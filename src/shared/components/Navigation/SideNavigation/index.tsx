import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import InboxIcon from "@material-ui/icons/MoveToInbox";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const SideNavigation = ({ isOpen, toggleDrawer }: Props) => {
  const classes = useStyles();
  return (
    <Drawer open={isOpen} onClose={toggleDrawer}>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List component={RouterLink} to="/">
          <Link>
            <ListItem button key={"Home"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link component={RouterLink} to="/weekly-report">
            <ListItem button key={"weekly-report"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Weekly Report"} />
            </ListItem>
          </Link>

          <Link component={RouterLink} to="/testing-aggregate">
            <ListItem button key={"testing-aggregate"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Testing Aggregate"} />
            </ListItem>
          </Link>
        </List>
      </div>
    </Drawer>
  );
};

export default SideNavigation;
