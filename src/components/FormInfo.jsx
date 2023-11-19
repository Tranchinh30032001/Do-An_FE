import React from "react";
// ten, mssv, lop, ngaysinh, sdt, khoa, chuyennghanh, tinhtrang, email, quequan, gioitinh;
const InfoForm = ({}) => {
  const name = "Tran van chinh";
  const mssv = "AT160307";
  const lop = "AT16C";
  const ngaysinh = "30/03/2001";
  const khoa = "ATTT";
  const chuyennghanh = "Công nghệ phần mềm";
  const tinhtrang = "Đang học";
  const email = "Chinhlong30032001@gmail.com";
  const quequan = "Nghe An";
  const gioitinh = "Nam";
  const sdt = "0961194135";
  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Họ tên
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={name}
          />
        </div>
        <div>
          <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            MSSV
          </label>
          <input
            type="text"
            id="last_name"
            value={mssv}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Lớp
          </label>
          <input
            type="text"
            id="company"
            value={lop}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nghanh
          </label>
          <input
            type="tel"
            id="phone"
            value={khoa}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Chuyên Nghành
          </label>
          <input
            type="url"
            id="website"
            value={chuyennghanh}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Ngày Sinh
          </label>
          <input
            type="text"
            id="visitors"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            readOnly
            value={ngaysinh}
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Số điện thoại
        </label>
        <input
          type="text"
          value={sdt}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
        />
      </div>
      <div className="mb-6">
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Giới tính
        </label>
        <input
          type="text"
          id="confirm_password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
          value={gioitinh}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Quê Quán
        </label>
        <input
          type="text"
          id="confirm_password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
          value={quequan}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Tình trạng
        </label>
        <input
          type="text"
          id="confirm_password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
          value={tinhtrang}
        />
      </div>
    </form>
  );
};
export default InfoForm;
