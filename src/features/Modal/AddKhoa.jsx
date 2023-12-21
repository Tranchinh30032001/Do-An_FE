import React, { useState } from "react";
import FieldInput from "../../components/Input";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setClose } from "../../store/slice/stateSlice";
import axios from "axios";
import { alertSuccess, alertError } from "../../utils/alert";
import { setAddSuccess } from "../../store/slice/activeSlice";
import { instanceAxios } from "../../services/axios";

function AddKhoa() {
  const [maKhoa, setMakhoa] = useState();
  const [tenKhoa, setTenKhoa] = useState();
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(setClose());
  };

  const handleSave = async () => {
    try {
      const res = await instanceAxios.post("http://localhost:3055/api/v1/qldt/create-khoa", {
        khoa_id: maKhoa,
        ten_khoa: tenKhoa,
      });
      if (res.data.metadata.code === 201) {
        alertSuccess("Thêm Khoa thành công");
        dispatch(setAddSuccess(true));
      }
    } catch (error) {
      alertError("Thêm Khoa thất bại");
      throw new Error(error);
    } finally {
      dispatch(setClose());
    }
  };

  return (
    <div>
      <FieldInput
        value={maKhoa}
        onChange={(e) => setMakhoa(e.target.value)}
        label="Mã Khoa"
        className="flex-col items-start"
        required={true}
      />
      <FieldInput
        value={tenKhoa}
        onChange={(e) => setTenKhoa(e.target.value)}
        label="Tên Khoa"
        className="flex-col items-start"
        required={true}
      />
      <div className="flex items-start justify-end gap-4 mt-6">
        <Button onClick={handleCancel} name="Cancel" className="bg-red-500 rounded-lg" />
        <Button onClick={handleSave} name="Save" className="bg-blue-400 rounded-lg" />
      </div>
    </div>
  );
}

export default AddKhoa;
