import React, { Component, useEffect, useState } from "react";
import FieldInput from "../../components/Input";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setClose } from "../../store/slice/stateSlice";
import { alertError, alertSuccess } from "../../utils/alert";
import { setAddSuccess } from "../../store/slice/activeSlice";
import axios from "axios";
import { cn } from "../../utils/cn";
import FieldCalender from "../../components/FieldCalendar";
import FieldSelect from "../../components/FieldSelect";
import { instanceAxios } from "../../services/axios";

export const AddHoiThao = () => {
  const [maHoiThao, setMaHoiThao] = useState("");
  const [tenHoiThao, setTenHoiThao] = useState("");
  const [nguoiChuTri, setNguoiChuTri] = useState("");
  const [noiDung, setNoiDung] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [lop, setLop] = useState("");

  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(setClose());
  };

  //Call API
  const [lopApi, setLopApi] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const resLop = instanceAxios.get("http://localhost:3055/api/v1/qldt/all-class");

        const [lop] = await Promise.all([resLop]);

        setLopApi(lop.data.metadata.allClass);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetch();
  }, []);

  const handleSave = async () => {
    const data = {
      hoithao_id: maHoiThao,
      ten_hoithao: tenHoiThao,
      nguoi_chutri: nguoiChuTri,
      des: noiDung,
      ngay_batdau: startDate.startDate,
      ngay_ketthuc: endDate.startDate,
      lop,
    };

    try {
      const res = await instanceAxios.post("http://localhost:3055/api/v1/qldt/create-hoithao", data);
      if (res.data.metadata.code === 201) {
        alertSuccess("Thêm Hội Thảo thành công");
        dispatch(setAddSuccess(true));
      }
    } catch (error) {
      alertError("Thêm Hội Thảo thất bại");
      throw new Error(error);
    } finally {
      dispatch(setClose());
    }
  };
  return (
    <div>
      <FieldInput
        onChange={(e) => setMaHoiThao(e.target.value)}
        label="Mã Hội Thảo"
        className="flex-col items-start"
        required={true}
      />
      <FieldInput
        onChange={(e) => setTenHoiThao(e.target.value)}
        label="Tên Hội Thảo"
        className="flex-col items-start"
        required={true}
      />
      <FieldInput
        onChange={(e) => setNguoiChuTri(e.target.value)}
        label="Nguời chủ trì"
        className="flex-col items-start"
        required={true}
      />

      <FieldSelect
        value={lop}
        onChange={(e) => {
          console.log(e.target.value);
          setLop(e.target.value);
        }}
        label="Chủ Nhiệm"
      >
        {lopApi?.length > 0 &&
          lopApi?.map((item) => (
            <option className="text-[20px]" value={item.lop_id} key={crypto.randomUUID()}>
              {item.ten_lop}
            </option>
          ))}
      </FieldSelect>

      <div className="flex flex-col mt-4">
        <label className={cn("font-medium flex-shrink-0 text-black after:content-['*'] after:ml-1 after:text-red-500")}>
          Mô tả nội dung hội thảo
        </label>
        <textarea
          value={noiDung}
          onChange={(e) => setNoiDung(e.target.value)}
          className="border-[1px] border-gray-300 placeholder:text-[16px] font-normal mt-2 px-2 text-black"
          rows={5}
          placeholder="Nội dung hội thảo"
        />
      </div>
      <div className="grid grid-cols-2 mt-4 gap-10">
        <div className="flex items-center">
          <label
            className={cn(
              "font-medium flex-shrink-0 text-black after:content-['*'] after:ml-1 after:text-red-500 mr-4"
            )}
          >
            Ngày bắt đầu
          </label>
          <FieldCalender value={startDate} onChange={setStartDate} />
        </div>
        <div className="flex items-center">
          <label
            className={cn(
              "font-medium flex-shrink-0 text-black after:content-['*'] after:ml-1 after:text-red-500 mr-4"
            )}
          >
            Ngày bắt đầu
          </label>
          <FieldCalender value={endDate} onChange={setEndDate} />
        </div>
      </div>
      <div className="flex items-start justify-end gap-4 mt-6">
        <Button onClick={handleCancel} name="Cancel" className="bg-red-500 rounded-lg" />
        <Button onClick={handleSave} name="Save" className="bg-blue-400 rounded-lg" />
      </div>
    </div>
  );
};

export default AddHoiThao;
