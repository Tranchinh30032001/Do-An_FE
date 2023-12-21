import { useSelector } from "react-redux";
import dayjs from "dayjs";
import InforStudent from "./InforStudent";

function DiemDanh() {
  const { hoiThaoActive } = useSelector((state) => state.active);
  return (
    <div className="grid grid-cols-3">
      <div className="shadow-lg col-span-1 h-screen">
        <div className="bg-blue-400 py-6 px-2 text-white">
          <h1 className="text-[24px] font-bold">Điểm Danh Sinh Viên</h1>
        </div>
        <form className="p-4">
          <div className="mb-4">
            <label className="text-[24px] font-semibold mb- 2">Tên hội thảo</label>
            <input
              className="block outline-none w-full border-[1px] border-gray-300 h-[40px] rounded-lg px-4 font-semibold"
              defaultValue={hoiThaoActive?.ten_hoithao}
            />
          </div>
          <div className="mb-4">
            <label className="text-[24px] font-semibold mb-2">Người chủ trì</label>
            <input
              className="block outline-none w-full border-[1px] border-gray-300 h-[40px] rounded-lg px-4 font-semibold"
              defaultValue={hoiThaoActive?.nguoi_chutri}
            />
          </div>
          <div className="mb-4">
            <label className="text-[24px] font-semibold mb-2">Nội dung</label>
            <input
              className="block outline-none w-full border-[1px] border-gray-300 h-[40px] rounded-lg px-4 font-semibold"
              defaultValue={hoiThaoActive?.des}
            />
          </div>
          <div className="mb-4">
            <label className="text-[24px] font-semibold mb-2">Thời gian bắt đầu</label>
            <input
              className="block outline-none w-full border-[1px] border-gray-300 h-[40px] rounded-lg px-4 font-semibold"
              defaultValue={dayjs(hoiThaoActive.ngay_batdau).format("DD/MM/YYYY")}
            />
          </div>
        </form>
      </div>
      <div className="">
        <InforStudent />
      </div>
    </div>
  );
}

export default DiemDanh;
