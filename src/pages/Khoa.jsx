import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";
import BasicTable from "../components/BasicTable";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../store/slice/stateSlice";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { dataKhoa } from "../data/dataKhoa";
import { setAddSuccess } from "../store/slice/activeSlice";
import axios from "axios";
import { instanceAxios } from "../services/axios";

const COLUMNS = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "khoa_id",
    header: "Mã Khoa",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "ten_khoa",
    header: "Tên Khoa",
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

function Khoa() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const { addSuccess } = useSelector((state) => state.active);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await instanceAxios.get("http://localhost:3055/api/v1/qldt/all-khoa");
        if (res.data.message === "OK") {
          setData(res.data.metadata.allKhoa);
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
        bodyType: "ADD_KHOA",
        title: "Form Thêm Khoa",
      })
    );
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={handleClick} name="Thêm Khoa" className="bg-green-500 rounded-lg my-2">
          <FaPlus />
        </Button>
      </div>
      <BasicTable COLUMNS={COLUMNS} DATA={data} />
    </div>
  );
}

export default Khoa;
