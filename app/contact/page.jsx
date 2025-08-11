import React from "react";

const Page = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 mt-2">
            Punya pertanyaan atau ingin bekerja sama? Silakan isi formulir di bawah ini.
          </p>
        </div>

        {/* Contact Form + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Nama</label>
              <input
                type="text"
                placeholder="Masukkan nama"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Pesan</label>
              <textarea
                placeholder="Tulis pesan anda..."
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Kirim Pesan
            </button>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-green-700">Alamat</h3>
              <p className="text-gray-600">
                Jl. HIU PUTIH GG SALAP NO.7, Palangka Raya, Kalimantan Tengah
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700">Email</h3>
              <p className="text-gray-600">petrusgeyu34@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700">Telepon</h3>
              <p className="text-gray-600">+62 822-5634-9834</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
