import { BiEdit, BiTrashAlt } from 'react-icons/bi';

export default function Table() {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-10 py-2">
            <span className="text-gray-200">Gambar</span>
          </th>
          <th className="px-10 py-2">
            <span className="text-gray-200">Nama Produk</span>
          </th>
          <th className="px-10 py-2">
            <span className="text-gray-200">Harga</span>
          </th>
          <th className="px-10 py-2">
            <span className="text-gray-200">Action</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        <tr className="bg-gray-50 text-center">
          <td className="px-10 py-2">
            {/* <img src="#" alt="" /> */}
            <span>ini gambar</span>
          </td>
          <td className="px-10 py-2">
            <span>Lava Drink</span>
          </td>
          <td className="px-10 py-2">
            <span>Rp. 36,000</span>
          </td>
          <td className="px-10 py-2 flex justify-around gap-2">
            <button className="cursor">
              <BiEdit size={25} color={'rgb(34,197,94)'}></BiEdit>
            </button>
            <button className="cursor">
              <BiTrashAlt size={25} color={'rgb(244,63,94)'}></BiTrashAlt>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
