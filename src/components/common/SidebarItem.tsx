//@mui
import { ListItemButton, ListItemIcon } from '@mui/material';
//react
import { Link } from 'react-router-dom';
//config
import colorConfigs from '../../configs/colorConfigs';
//type
import { RouteType } from '~/type/side-bar/side-bar';
//---------------------------------------------------------------------

type Props = {
  item: RouteType;
  isDesktop: boolean;
};

const SidebarItem = ({ item, isDesktop }: Props) => {
  return (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        '&: hover': {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        backgroundColor: '#182f53',
        paddingY: '12px',
        paddingX: '24px',
      }}
    >
      <ListItemIcon
        sx={{
          color: colorConfigs.sidebar.color,
        }}
      >
        {item.icon && item.icon}
      </ListItemIcon>
      {isDesktop && item.displayText}
    </ListItemButton>
  );
};

export default SidebarItem;
