export default function Form() {
  return (
    <form action="" className="grid lg-grid-cols-2 w-4/6 gap-4">
      <div className="input-type">
        {/* <input type="file" name="image" className="border w-full px-5 py-3 focus:outline-none rounded-md" /> */}
        <input type="text" name="name" placeholder="Nama Produk" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
      </div>
      <div className="input-type">
        <input type="text" name="price" placeholder="Harga Produk" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
      </div>
      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:text-gray-500">Add</button>
    </form>
  );
}
