import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../store/slice/stateSlice";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";
import BasicTable from "../components/BasicTable";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { dataGiaoVien } from "../data/dataGiaoVien";
import axios from "axios";
import { setAddSuccess } from "../store/slice/activeSlice";
import { instanceAxios } from "../services/axios";

const COLUMNS = [
  {
    accessorKey: "msgv",
    header: "Mã Giáo Viên",
    cell: (props) => <p>{props.getValue()}</p>,
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
    accessorKey: "trinh_do",
    header: "Trình Độ",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "khoa_id",
    header: "Khoa",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "thao_tac",
    header: "Thao Tác",
    cell: () => {
      return (
        <div className="flex items-center gap-6">
          <FaEdit className="w-6 h-6 cursor-pointer" />
          <FaTrashAlt className="w-6 h-6 cursor-pointer" />
        </div>
      );
    },
  },
];

function GiaoVien() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const { addSuccess } = useSelector((state) => state.active);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await instanceAxios.get("http://localhost:3055/api/v1/qldt/all-giaovien");
        if (res.data.message === "OK") {
          setData(res.data.metadata.allGiaoVien);
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        dispatch(setAddSuccess(false));
      }
    };
    fetch();
  }, [addSuccess]);

  const handleClick = () => {
    dispatch(
      setState({
        isOpen: true,
        bodyType: "ADD_GIAOVIEN",
        title: "Form Thêm Giáo Viên",
      })
    );
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={handleClick} name="Thêm Giáo Viên" className="bg-green-500 rounded-lg my-2">
          <FaPlus />
        </Button>
      </div>
      <BasicTable COLUMNS={COLUMNS} DATA={data} />
    </div>
  );
}

export default GiaoVien;
