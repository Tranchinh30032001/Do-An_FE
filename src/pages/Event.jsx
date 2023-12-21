import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";
import BasicTable from "../components/BasicTable";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../store/slice/stateSlice";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { dataHoiThao } from "../data/dataHoiThao";
import axios from "axios";
import { setAddSuccess, setHoiThaoActive } from "../store/slice/activeSlice";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { instanceAxios } from "../services/axios";

const COLUMNS = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "hoithao_id",
    header: "Mã Hội Thảo",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "ten_hoithao",
    header: "Tên Hội Thảo",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "ngay_batdau",
    header: "Ngày Bắt Đầu",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "ngay_ketthuc",
    header: "Ngày Kết Thúc",
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

function Event() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(
      setState({
        isOpen: true,
        bodyType: "ADD_HOITHAO",
        title: "Form Hội Thảo",
      })
    );
  };

  const [data, setData] = useState([]);
  const { addSuccess } = useSelector((state) => state.active);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await instanceAxios.get("http://localhost:3055/api/v1/qldt/all-hoithao");
        if (res.data.message === "OK") {
          setData(res.data.metadata.allHoiThao);
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        dispatch(setAddSuccess(false));
      }
    };
    fetch();
  }, [addSuccess]);

  const handleHoiThao = async (item) => {
    dispatch(setHoiThaoActive(item));
    navigate(`/app/diemdanh/${item.ten_hoithao}`);
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={handleClick} name="Thêm Hội Thảo" className="bg-green-500 rounded-lg my-2">
          <FaPlus />
        </Button>
      </div>
      {/* <BasicTable COLUMNS={COLUMNS} DATA={data} /> */}
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên hội thảo</th>
            <th>Người chủ trì</th>
            <th>Ngày bắt đầu</th>
            <th>Ngày kết thúc</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={crypto.randomUUID()}>
                <td className="text-black ">{item.id}</td>
                <td onClick={() => handleHoiThao(item)} className="text-black hover:text-blue-600 cursor-pointer">
                  {item.ten_hoithao}
                </td>
                <td className="text-black">{item.nguoi_chutri}</td>
                <td className="text-black">{dayjs(item.ngay_batdau).format("DD/MM/YYYY")}</td>
                <td className="text-black">{dayjs(item.ngay_ketthuc).format("DD/MM/YYYY")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Event;
