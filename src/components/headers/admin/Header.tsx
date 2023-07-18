// @mui
import { AppBar, IconButton, Stack, Toolbar } from '@mui/material';
// components
import Iconify from '~/components/iconify/Iconify';
import AccountPopover from '~/components/profile-setting/AccoutPopover';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav: VoidFunction;
  isOpen: boolean;
};

export default function Header({ onOpenNav, isOpen }: Props) {
  return (
    <AppBar
      sx={{ backgroundColor: '#181d5b', opacity: 0.8, position: 'relative' }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        <IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
          <Iconify
            icon={
              !isOpen ? 'carbon:text-indent-less' : 'carbon:text-indent-more'
            }
          />
        </IconButton>

        <Stack
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <AccountPopover />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
