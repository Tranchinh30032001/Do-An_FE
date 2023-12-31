import React, { useState } from "react";
import FieldInput from "../../components/Input";
import FieldSelect from "../../components/FieldSelect";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setClose } from "../../store/slice/stateSlice";
import axios from "axios";
import { alertError, alertSuccess } from "../../utils/alert";
import { setAddSuccess } from "../../store/slice/activeSlice";
import { instanceAxios } from "../../services/axios";

const options = [
  {
    msgv: "ATTT1",
    ten: "Nguyễn Văn Hưng",
  },
  {
    msgv: "ATTT2",
    ten: "Đặng Xuân Bảo",
  },
  {
    msgv: "ATTT3",
    ten: "Nguyễn Văn Mạnh",
  },
  {
    msgv: "ATTT4",
    ten: "Nguyễn Phương Hằng",
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
      const res = await instanceAxios.post("http://localhost:3055/api/v1/qldt/create-class", {
        lop_id: lopId,
        ten_lop: tenLop,
        msgv: gvChuNhiem,
        so_sinh_vien_max: 60,
      });
      if (res.data.metadata.code === 201) {
        alertSuccess("Thêm lớp thành công");
        dispatch(setAddSuccess(true));
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
      >
        {options?.map((item) => (
          <option key={crypto.randomUUID()} value={item.msgv}>
            {item.ten}
          </option>
        ))}
      </FieldSelect>
      <div className="flex items-start justify-end gap-4 mt-6">
        <Button onClick={handleCancel} name="Cancel" className="bg-red-500 rounded-lg" />
        <Button onClick={handleSave} name="Save" className="bg-blue-400 rounded-lg" />
      </div>
    </div>
  );
}

export default AddLop;
