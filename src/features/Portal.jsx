import React from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActive } from "../store/slice/activeSlice";

function Portal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (url, active) => {
    navigate(url);
    dispatch(setActive(active));
  };

  return (
    <div>
      <Heading heading="Trang Chủ" />
      <div className="content grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
        <Card onClick={() => handleClick("/app/quanly-khoa", "Khoa")} title="Khoa" number={40} />
        <Card onClick={() => handleClick("/app/quanly-lop", "Lớp")} className="bg-red-500" title="Lớp" number={30} />
        <Card
          onClick={() => handleClick("/app/quanly-giaovien", "Giáo Viên")}
          className="bg-yellow-400"
          title="Giáo Viên"
          number={80}
        />
        <Card
          onClick={() => handleClick("/app/quanly-sinhvien", "Sinh Viên")}
          className="bg-green-400"
          title="Sinh Viên"
          number={3000}
        />
        <Card
          onClick={() => handleClick("/app/quanly-hoithao", "Quản Lý Điểm Danh")}
          className="bg-purple-500"
          title="Hội Thảo"
          number={5}
        />
      </div>
    </div>
  );
}

export default Portal;
