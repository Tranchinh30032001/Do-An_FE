import React, { useState } from "react";
import FieldInput from "../../components/Input";
import FieldSelect from "../../components/FieldSelect";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setClose } from "../../store/slice/stateSlice";
import axios from "axios";
import { alertError, alertSuccess } from "../../utils/alert";

const options = [
  {
    msgv: "ATTT1",
    ten: "Nguyen Van Hung",
  },
  {
    msgv: "ATTT2",
    ten: "Do Xuan Bao",
  },
  {
    msgv: "ATTT3",
    ten: "Nguyen Van Manh",
  },
  {
    msgv: "ATTT4",
    ten: "Nguyen Phuong Hang",
  },
];

function AddLop() {
  const dispatch = useDispatch();
  const [lopId, setLopId] = useState("");
  const [tenLop, setTenLop] = useState("");
  const [gvChuNhiem, setGvChuNhiem] = useState("");

  const handleCancel = () => {
    dispatch(setClose());
  };

  const handleSave = async () => {
    try {
      const res = await axios.post("http://localhost:3055/api/v1/qldt/create-class", {
        lop_id: lopId,
        ten_lop: tenLop,
        msgv: gvChuNhiem,
        so_sinh_vien_max: 60,
      });
      if (res.data.metadata.code === 201) {
        alertSuccess("Thêm lớp thành công");
      }
    } catch (error) {
      alertError("Thêm lớp thất bại");
      throw new Error(error);
    } finally {
      dispatch(setClose());
    }
  };

  return (
    <div>
      <FieldInput
        value={lopId}
        onChange={(e) => setLopId(e.target.value)}
        label="Mã Lớp"
        className="flex-col items-start"
        required={true}
      />
      <FieldInput
        value={tenLop}
        onChange={(e) => setTenLop(e.target.value)}
        label="Tên Lớp"
        className="flex-col items-start"
        required={true}
      />
      <FieldSelect
        value={gvChuNhiem}
        onChange={(e) => setGvChuNhiem(e.target.value)}
        label="Giáo Viên Chủ Nhiệm"
        options={options}
      />
      <div className="flex items-start justify-end gap-4 mt-6">
        <Button onClick={handleCancel} name="Cancel" className="bg-red-500 rounded-lg" />
        <Button onClick={handleSave} name="Save" className="bg-blue-400 rounded-lg" />
      </div>
    </div>
  );
}

export default AddLop;
