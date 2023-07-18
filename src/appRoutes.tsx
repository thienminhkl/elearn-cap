import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { RouteType } from './type/side-bar/side-bar';

const appRoutes: RouteType[] = [
  {
    path: '/admin/QuanLyNguoiDung',
    displayText: 'Quản lý Người dùng',
    icon: <ManageAccountsIcon />,
  },
  {
    path: '/admin/QuanLyKhoaHoc',
    displayText: 'Quản lý Khóa học',
    icon: <AutoStoriesIcon />,
  },
];

export default appRoutes;
