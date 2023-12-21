import React, { useEffect, useState } from "react";
import FieldInput from "../../components/Input";
import FieldSelect from "../../components/FieldSelect";
import { cn } from "../../utils/cn";
import FieldCalender from "../../components/FieldCalendar";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setClose } from "../../store/slice/stateSlice";
import axios from "axios";
import dayjs from "dayjs";
import { instanceAxios } from "../../services/axios";

function DetailSinhVien({ update }) {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [ngaySinh, setNgaySinh] = useState();

  const { mssvActive } = useSelector((state) => state.stateSlice);

  useEffect(() => {
    if (mssvActive) {
      const fetch = async () => {
        try {
          const res = await instanceAxios.get(`http://localhost:3055/api/v1/qldt/info/student/${mssvActive}`);
          setData(res.data.metadata.student);
          setNgaySinh({
            endDate: dayjs(data?.ngay_sinh).format("YYYY-MM-DD"),
            startDate: dayjs(data?.ngay_sinh).format("YYYY-MM-DD"),
          });
        } catch (error) {
          throw new Error(error.message);
        }
      };

      fetch();
    }
  }, [mssvActive]);

  const handleCancel = () => {
    dispatch(setClose());
  };
  return (
    <div>
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-2">
          <FieldInput value={data?.cccd} label="Số CCCD" className="flex-col items-start" readOnly />
          <FieldInput
            value={data?.phone}
            label="Số điện thoại"
            className="flex-col items-start"
            required={true}
            readOnly
          />
          <FieldInput value={data?.email} label="Email" className="flex-col items-start" required={true} readOnly />
          <div className="w-full mt-4 relative">
            <label className="block text-black mb-4">Avatar</label>
            <img src={data?.avatar} className="h-[300px] w-full object-contain" />
          </div>
        </div>
        <div className="col-span-3">
          <FieldInput
            value={data?.mssv}
            label="Mã Sinh Viên"
            className="flex-col items-start"
            required={true}
            readOnly
          />
          <FieldInput
            value={data?.ho_ten}
            label="Họ Và Tên"
            className="flex-col items-start"
            required={true}
            readOnly
          />
          <FieldSelect value={data?.gioi_tinh ? "Nam" : "Nữ"} label="Giới Tính" disable>
            {["Nữ", "Nam"].map((item) => (
              <option className="text-[20px]" key={crypto.randomUUID()} value={item}>
                {item}
              </option>
            ))}
          </FieldSelect>
          <div className="mt-4">
            <label
              className={cn("font-medium flex-shrink-0 text-black after:content-['*'] after:ml-1 after:text-red-500")}
            >
              Ngày Sinh
            </label>
            <FieldCalender value={ngaySinh} />
          </div>
          <FieldInput value={data?.que_quan} label="Quê Quán" className="flex-col items-start" required={true} />
          <FieldSelect value={data?.lop_id} label="Lớp">
            <option value={data?.lop_id}>{data?.lop_id}</option>
          </FieldSelect>
          <FieldSelect label="Khoa">
            <option value={data?.khoa_id}>{data?.khoa_id}</option>
          </FieldSelect>
          <div className="flex items-start justify-end gap-4 mt-6">
            <Button onClick={handleCancel} name="Cancel" className="bg-red-500 rounded-lg" />

            {update && <Button onClick={handleCancel} name="Update" className="bg-blue-500 rounded-lg" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSinhVien;
