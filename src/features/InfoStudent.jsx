import React, { useState } from "react";
import { Avatar } from "../assets/imgs";
import InfoForm from "../components/FormInfo";
import { Tabs, Radio } from "antd";
import useQuery from "../hook/useQuery";
import Bangdiem from "../components/Bangdiem";
import Qrcode from "../components/Qrcode";

const listTabs = ["Thông tin cá nhân", "Bảng Điểm", "Mã QRCODE"];

const mappingComponent = {
  "Thông tin cá nhân": <InfoForm />,
  "Bảng Điểm": <Bangdiem />,
  "Mã QRCODE": <Qrcode />,
};

function InfoStudent() {
  const [name, setName] = useState("Trần Văn Chính");
  const [khoa, setKhoa] = useState("AT16C");

  const onChange = (e) => {
    setTabs(e.target.value);
  };

  const [tabs, setTabs] = useState(listTabs[0]);

  return (
    <section className="container">
      <Radio.Group
        className="mt-8"
        onChange={onChange}
        style={{
          marginBottom: 16,
        }}
      >
        <Radio.Button value="Thông tin cá nhân">Thông tin cá nhân</Radio.Button>
        <Radio.Button value="Bảng Điểm">Bảng Điểm</Radio.Button>
        <Radio.Button value="Mã QRCODE">Mã QRCODE</Radio.Button>
      </Radio.Group>
      <h1 className="text-[32px] font-semibold mt-4">Thông tin sinh viên</h1>

      <div className="grid grid-cols-3 mt-8">
        <div className="col-span-1 flex flex-col items-center">
          <img className="w-[80%] h-[200px] object-cover" src={Avatar} />
          <div>
            <p className="mt-4 text-[20px]">Họ tên: {name} </p>
            <p className="text-[20px]">Lớp: {khoa}</p>
          </div>
        </div>
        <div className="col-span-2">{mappingComponent[tabs]}</div>
      </div>
    </section>
  );
}

export default InfoStudent;
