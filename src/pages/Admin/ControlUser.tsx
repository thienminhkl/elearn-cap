import {
  Button,
  Card,
  Container,
  InputAdornment,
  MenuItem,
  Stack,
  TableContainer,
  TextField,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '~/components/iconify/Iconify';
//----------------------------------------------------------
const optionsRole = [
  { id: 'gv', label: 'Giáo viên' },
  { id: 'hv', label: 'Học viên' },
];

const ControlUser = () => {
  return (
    <>
      <Container>
        <Button
          component={RouterLink}
          to={'admin/QuanLyNguoiDung/NguoiDungMoi'}
          variant="contained"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          New User
        </Button>

        <Card>
          <Stack>
            <TextField
              fullWidth
              select
              label="Role"
              // value={filterRole}
              // onChange={onFilterRole}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      maxHeight: 260,
                    },
                  },
                },
              }}
              sx={{
                maxWidth: { sm: 240 },
                textTransform: 'capitalize',
              }}
            >
              {optionsRole.map((option) => (
                <MenuItem
                  key={option.id}
                  value={option.id}
                  sx={{
                    mx: 1,
                    borderRadius: 0.75,
                    typography: 'body2',
                    textTransform: 'capitalize',
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              // value={filterName}
              // onChange={onFilterName}
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify
                      icon="eva:search-fill"
                      sx={{ color: 'text.disabled' }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <TableContainer
            sx={{ position: 'relative', overflow: 'unset' }}
          ></TableContainer>
        </Card>
      </Container>

      <Button
        variant="contained"
        color="error"
        // onClick={() => {
        //   handleDeleteRows(selected);
        //   handleCloseConfirm();
        // }}
      >
        Delete
      </Button>
    </>
  );
};

export default ControlUser;
