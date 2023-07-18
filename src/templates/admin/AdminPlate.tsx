//react
import { Box } from '@mui/material';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '~/components/common/Sidebar';
//component
import Footer from '~/components/footers/admin/Footer';
import Header from '~/components/headers/admin/Header';
import useResponsive from '~/hooks/useResponsive';
import Loading from '~/templates/Loading';

//---------------------------------------------------------------------------------

function AdminPlate() {
  const navigate = useNavigate();
  const isDesktop = useResponsive('up', 'md');
  const [width, setWidth] = useState<number | string>(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setWidth(isDesktop ? (!open ? 300 : 0) : !open ? 60 : 0);
  }, [open, isDesktop]);

  useEffect(() => {
    navigate('/admin/QuanLyNguoiDung');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{
          width: width,
          flexShrink: 0,
        }}
      >
        <Sidebar width={width} isDesktop={isDesktop} />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${width})`,
          minHeight: '100vh',
        }}
      >
        <Header onOpenNav={handleOpen} isOpen={open} />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <Footer />
      </Box>
    </Box>
  );
}

export default AdminPlate;
