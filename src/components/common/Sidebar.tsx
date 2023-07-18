//@mui
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import {
  Drawer,
  IconButton,
  List,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
//
import appRoutes from '~/appRoutes';
import colorConfigs from '../../configs/colorConfigs';
import SidebarItem from './SidebarItem';
//---------------------------------------------------------------------

type Props = {
  width: number | string;
  isDesktop: boolean;
};
const Sidebar = ({ width, isDesktop }: Props) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: width,
          boxSizing: 'border-box',
          borderRight: '0px',
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: '20px' }}>
          <Stack sx={{ width: '100%' }} direction="row" justifyContent="center">
            <IconButton href="/" sx={{ color: 'white' }}>
              <LocalLibraryRoundedIcon sx={{ fontSize: '2rem' }} />
              {isDesktop && (
                <Typography variant="h4" sx={{ mr: 2.5, ml: 0.5 }}>
                  Elearning
                </Typography>
              )}
            </IconButton>
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) => (
          <SidebarItem item={route} key={index} isDesktop={isDesktop} />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
