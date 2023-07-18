import './App.css';
//react
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//templates
import AdminPlate from './templates/admin/AdminPlate';
import HomePlate from './templates/dashboard/HomePlate';
//---------------------------------------------------------------------------------

export function App() {
  return (
    <Routes>
      <Route path="" element={<HomePlate />}>
        <Route index element={<Home />} />
        <Route path="DangNhap" element={<Login />} />
        <Route path="TimKiemKhoaHoc">
          <Route path=":TenKhoaHoc" element={<Search />} />
        </Route>
        <Route path="HoSo" element={<Profile />} />
        <Route path="ChiTiet">
          <Route path=":MaKhoaHoc" element={<Detail />} />
        </Route>
        <Route path="DanhMucKhoaHoc">
          <Route path=":MaDanhMuc" element={<Courses />} />
        </Route>
        <Route path="DangKy" element={<Register />} />
      </Route>
      <Route path="admin" element={<AdminPlate />}>
        <Route path="QuanLyNguoiDung" element={<ControlUser />}>
          <Route path="NguoiDungMoi" element={<NewUser />} />
          <Route path=":NguoiDung/ChinhSua" element={<NewUser />} />
        </Route>
        <Route path="QuanLyKhoaHoc" element={<ControlCourse />}>
          <Route path="KhoaHocMoi" element={<NewCourse />} />
          <Route path=":KhoaHoc/ChinhSua" element={<NewCourse />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

//---------------------------------------------------------------------------------

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Detail = lazy(() => import('./pages/Detail/Detail'));
const Search = lazy(() => import('./pages/Search/Search'));
const Register = lazy(() => import('./pages/Register/Register'));
const Courses = lazy(() => import('./pages/CoursesCatalog/CoursesCatalog'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const ControlCourse = lazy(() => import('./pages/Admin/ControlCourse'));
const ControlUser = lazy(() => import('./pages/Admin/ControlUser'));
const NewCourse = lazy(() => import('./components/new-form/NewCourse'));
const NewUser = lazy(() => import('./components/new-form/NewUser'));
