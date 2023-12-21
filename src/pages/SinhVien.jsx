import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../store/slice/stateSlice";
import Button from "../components/Button";
import { FaEye, FaPlus, FaSearch } from "react-icons/fa";
import BasicTable from "../components/BasicTable";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { dataGiaoVien } from "../data/dataGiaoVien";
import FieldCalender from "../components/FieldCalendar";
import FieldSelect from "../components/FieldSelect";
import FieldInput from "../components/Input";
import axios from "axios";
import { setAddSuccess } from "../store/slice/activeSlice";
import { FaRegEye } from "react-icons/fa";
import { instanceAxios } from "../services/axios";

const COLUMNS = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "mssv",
    header: "Mã Sinh Viên",
    cell: (props) => (
      <p
        onClick={() => {
          console.log(props.getValue());
        }}
        className="cursor-pointer hover:text-blue-600"
      >
        {props.getValue()}
      </p>
    ),
  },
  {
    accessorKey: "ho_ten",
    header: "Họ Tên",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "phone",
    header: "SĐT",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "lop_id",
    header: "Lớp",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "khoa_id",
    header: "Khoa",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

function SinhVien() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const { addSuccess } = useSelector((state) => state.active);

  const [detailSv, setDetailSv] = useState("");

  const handleClick = () => {
    dispatch(
      setState({
        isOpen: true,
        bodyType: "ADD_SINHVIEN",
        title: "Form Thêm Sinh Viên",
      })
    );
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        axios.defaults.headers["Authorization"] = localStorage.getItem("token");
        const res = await instanceAxios.get("http://localhost:3055/api/v1/qldt/all-sinhvien");
        if (res.data.message === "OK") {
          setData(res.data.metadata.allSinhVien);
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        dispatch(setAddSuccess(false));
      }
    };
    fetch();
  }, [addSuccess]);

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={handleClick} name="Thêm Sinh Viên" className="bg-green-500 rounded-lg my-2">
          <FaPlus />
        </Button>
      </div>
      <div className="w-[60%] px-10 pb-2 grid grid-cols-2 items-center gap-4">
        <FieldCalender />
        <FieldSelect options={["Chọn Khoa", "CNTT"]}>
          {["Chọn Khoa", "CNTT"]?.map((item) => (
            <option key={crypto.randomUUID()} value={item}>
              {item}
            </option>
          ))}
        </FieldSelect>
        <FieldInput className="" placeholder="Tìm mã sinh viên" />
        <FieldInput className="" placeholder="Tìm mã tên viên" />
        <FieldSelect options={["Chọn Lớp", "AT16C"]}>
          {["Chọn Lớp", "AT16C"]?.map((item) => (
            <option key={crypto.randomUUID()} value={item}>
              {item}
            </option>
          ))}
        </FieldSelect>
        <Button className="bg-blue-400 w-fit" name="Tìm Kiếm">
          <FaSearch />
        </Button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Mã Sinh Viên</th>
            <th>Họ Tên</th>
            <th>SĐT</th>
            <th>Lớp</th>
            <th>Khoa</th>
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={crypto.randomUUID()}>
                <td className="text-black ">{item.id}</td>
                <td className="text-black hover:text-blue-600 cursor-pointer">{item.mssv}</td>
                <td className="text-black">{item.ho_ten}</td>
                <td className="text-black">{item.phone}</td>
                <td className="text-black">{item.lop_id}</td>
                <td className="text-black">{item.khoa_id}</td>
                <td className="flex items-center gap-2">
                  <FaEye
                    onClick={() => {
                      dispatch(
                        setState({
                          isOpen: true,
                          bodyType: "DETAIL_SINHVIEN",
                          title: "Form Thông tin Sinh Viên",
                          mssvActive: item.mssv,
                        })
                      );
                    }}
                    className="text-black w-6 h-6 mt-1 cursor-pointer hover:opacity-40 active:opacity-80"
                  />
                  <FaEdit
                    onClick={() => {
                      dispatch(
                        setState({
                          isOpen: true,
                          bodyType: "DETAIL_SINHVIEN",
                          title: "Update Thông tin Sinh Viên",
                          mssvActive: item.mssv,
                        })
                      );
                    }}
                    className="text-black w-6 h-6 cursor-pointer hover:opacity-40 active:opacity-80"
                  />
                  <FaTrashAlt
                    onClick={() => {
                      dispatch(
                        setState({
                          isOpen: true,
                          bodyType: "DELETE",
                          title: "Delete Sinh Viên",
                          size: "md",
                          mssvActive: item.mssv,
                        })
                      );
                    }}
                    className="text-black w-6 h-6 cursor-pointer hover:opacity-40 active:opacity-80"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SinhVien;
