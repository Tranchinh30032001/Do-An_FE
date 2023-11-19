import React from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function Portal() {
  const navigate = useNavigate();

  return (
    <div>
      <Heading heading="Trang Chủ" />
      <div className="content grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
        <Card title="Khoa" number={10} />
        <Card onClick={() => navigate("/app/quanly-lop")} className="bg-red-500" title="Lớp" number={10} />
        <Card className="bg-yellow-400" title="Giáo Viên" number={10} />
        <Card className="bg-green-400" title="Sinh Viên" number={10} />
        <Card className="bg-purple-500" title="Hội Thảo" number={10} />
      </div>
    </div>
  );
}

export default Portal;
