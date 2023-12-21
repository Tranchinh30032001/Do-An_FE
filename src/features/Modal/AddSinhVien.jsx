import React, { useCallback, useEffect, useState } from "react";
import FieldInput from "../../components/Input";
import Button from "../../components/Button";
import FieldSelect from "../../components/FieldSelect";
import { useDispatch } from "react-redux";
import { setClose } from "../../store/slice/stateSlice";
import { alertError, alertSuccess } from "../../utils/alert";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { UploadIcon } from "../../assets/imgs";
import { cn } from "../../utils/cn";
import FieldCalender from "../../components/FieldCalendar";
import { setAddSuccess } from "../../store/slice/activeSlice";
import { instanceAxios } from "../../services/axios";

const IMAGE_MAX_SIZE = 5000000;

function AddSinhVien() {
  const [mssv, setMssv] = useState("");
  const [ten, setTen] = useState("");
  const [gioiTinh, setGioiTinh] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [quequan, setQuequan] = useState("");
  const [lop, setLop] = useState("");
  const [khoa, setKhoa] = useState("");
  const [cccd, setCccd] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [urlThumbnail, setUrlThumbnail] = useState("");
  const [base64Thumbnail, setBase64Thumbnail] = useState("");
  const dispatch = useDispatch();

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      const url = URL.createObjectURL(acceptedFiles[0]);
      const reader = new FileReader();

      reader.onload = (event) => {
        const base64String = event.target.result;

        setBase64Thumbnail(base64String);
      };
      reader.readAsDataURL(acceptedFiles[0]);
      setUrlThumbnail(url);
    }
  }, []);

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".webp", ".gif", ".psd", ".svg", ".bmp"] },
    maxSize: IMAGE_MAX_SIZE,
  });

  const handleCancel = () => {
    dispatch(setClose());
  };

  //Call API
  const [lopApi, setLopApi] = useState([]);
  const [khoaApi, setKhoaApi] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const resLop = instanceAxios.get("http://localhost:3055/api/v1/qldt/all-class");
        const resKhoa = instanceAxios.get("http://localhost:3055/api/v1/qldt/all-khoa");

        const [lop, khoa] = await Promise.all([resLop, resKhoa]);

        setLopApi(lop.data.metadata.allClass);
        setKhoaApi(khoa.data.metadata.allKhoa);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetch();
  }, []);

  const handleSave = async () => {
    const data = {
      data: {
        mssv,
        ho_ten: ten,
        lop_id: lop,
        ngay_sinh: ngaySinh.startDate,
        gioi_tinh: gioiTinh,
        que_quan: quequan,
        email,
        phone,
        khoa_id: khoa,
        avatar: base64Thumbnail,
        role_id: "1",
        cccd,
        tinh_trang: "1",
      },
    };

    try {
      const res = await instanceAxios.post("http://localhost:3055/api/v1/qldt/signup", data);
      console.log({ res });
      if (res.data.metadata.code === 201) {
        alertSuccess("Thêm Sinh Viên thành công");
        dispatch(setAddSuccess(true));
      }
    } catch (error) {
      alertError("Thêm Sinh Viên thất bại");
      throw new Error(error);
    } finally {
      dispatch(setClose());
    }
  };
  return (
    <div className="grid grid-cols-5 gap-10">
      <div className="col-span-2">
        <FieldInput
          onChange={(e) => setCccd(e.target.value)}
          label="Số CCCD"
          className="flex-col items-start"
          required={true}
        />
        <FieldInput
          onChange={(e) => setPhone(e.target.value)}
          label="Số điện thoại"
          className="flex-col items-start"
          required={true}
        />
        <FieldInput
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          className="flex-col items-start"
          required={true}
        />
        <div className="w-full mt-4 relative">
          <label className="block text-black mb-4">Upload Avatar</label>
          <div
            style={{ userSelect: "none" }}
            disabled
            className="w-full  border-dashed border-2 border-yellow-400 rounded-xl p-4 cursor-pointer flex flex-col items-center max-h-[200px] md:max-h-[300px] overflow-hidden"
            {...getRootProps()}
          >
            {urlThumbnail ? (
              <div>
                <img src={urlThumbnail} />
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <p className="text-black">JPG, PNG, WEBM, MAX 100MB</p>
                <img src={UploadIcon} className="w-[40px] md:w-[80px] m-2 bg-black" />
                <p className="text-black">Drag & drop file here</p>
                <p className="text-black">or Browser media on your device</p>
                <input {...getInputProps()} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <FieldInput
          onChange={(e) => setMssv(e.target.value)}
          label="Mã Sinh Viên"
          className="flex-col items-start"
          required={true}
        />
        <FieldInput
          onChange={(e) => setTen(e.target.value)}
          label="Họ Và Tên"
          className="flex-col items-start"
          required={true}
        />
        <FieldSelect
          value={gioiTinh}
          onChange={(e) => {
            setGioiTinh(e.target.value);
          }}
          label="Giới Tính"
        >
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
          <FieldCalender value={ngaySinh} onChange={setNgaySinh} />
        </div>
        <FieldInput
          onChange={(e) => setQuequan(e.target.value)}
          label="Quê Quán"
          className="flex-col items-start"
          required={true}
        />
        <FieldSelect
          value={lop}
          onChange={(e) => {
            setLop(e.target.value);
          }}
          label="Lớp"
        >
          {lopApi?.length > 0 &&
            lopApi?.map((item) => (
              <option className="text-[20px]" value={item.lop_id} key={crypto.randomUUID()}>
                {item.ten_lop}
              </option>
            ))}
        </FieldSelect>
        <FieldSelect
          value={khoa}
          onChange={(e) => {
            setKhoa(e.target.value);
          }}
          label="Khoa"
        >
          {khoaApi?.length > 0 &&
            khoaApi?.map((item) => (
              <option className="text-[20px]" value={item.khoa_id} key={crypto.randomUUID()}>
                {item.ten_khoa}
              </option>
            ))}
        </FieldSelect>
        <div className="flex items-start justify-end gap-4 mt-6">
          <Button onClick={handleCancel} name="Cancel" className="bg-red-500 rounded-lg" />
          <Button onClick={handleSave} name="Save" className="bg-blue-400 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default AddSinhVien;
