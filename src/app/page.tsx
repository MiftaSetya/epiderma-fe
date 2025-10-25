export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-800 pb-10">
      <nav className="w-full py-4 px-10 shadow-sm bg-white flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl text-green-600">Epiderma AI</h1>
          <p className="text-sm text-gray-500 leading-none">Skin Disease Detection System</p>
        </div>
      </nav>

      <div className="text-center mt-10 mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-green-700 mb-3">
          Deteksi Penyakit Kulit dengan <span className="text-green-500">Epiderma AI</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Aplikasi cerdas berbasis website untuk mendeteksi penyakit kulit menggunakan teknologi{" "}
          <span className="text-green-600 font-semibold">Convolutional Neural Network (CNN)</span>. 
          Dapatkan analisis cepat, akurat, dan edukatif untuk menjaga kesehatan kulit Anda.
        </p>
      </div>

      <div className="mx-10 mt-10 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center lg:text-left">
            Fitur Utama
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full font-semibold shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="none" stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Deteksi Otomatis</h3>
                <p className="text-sm text-gray-600">Mendeteksi penyakit kulit secara cepat menggunakan teknologi AI berbasis CNN.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full font-semibold shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M15.131 2.5A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.458-3"/><path d="M17 12a5 5 0 1 1-5-5m7.5-2.5L12 12m7.5-7.5V2m0 2.5H22"/></g></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Confidence Score</h3>
                <p className="text-sm text-gray-600">Memberikan nilai tingkat kepercayaan model terhadap hasil deteksi untuk kejelasan hasil.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full font-semibold shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="#22C55E" d="M21.17 2.06A13.1 13.1 0 0 0 19 1.87a12.94 12.94 0 0 0-7 2.05a12.94 12.94 0 0 0-7-2a13.1 13.1 0 0 0-2.17.19a1 1 0 0 0-.83 1v12a1 1 0 0 0 1.17 1a10.9 10.9 0 0 1 8.25 1.91l.12.07h.11a.91.91 0 0 0 .7 0h.11l.12-.07A10.9 10.9 0 0 1 20.83 16A1 1 0 0 0 22 15V3a1 1 0 0 0-.83-.94ZM11 15.35a12.87 12.87 0 0 0-6-1.48H4v-10a8.69 8.69 0 0 1 1 0a10.86 10.86 0 0 1 6 1.8Zm9-1.44h-1a12.87 12.87 0 0 0-6 1.48V5.67a10.86 10.86 0 0 1 6-1.8a8.69 8.69 0 0 1 1 0Zm1.17 4.15a13.1 13.1 0 0 0-2.17-.19a12.94 12.94 0 0 0-7 2.05a12.94 12.94 0 0 0-7-2.05a13.1 13.1 0 0 0-2.17.19A1 1 0 0 0 2 19.21a1 1 0 0 0 1.17.79a10.9 10.9 0 0 1 8.25 1.91a1 1 0 0 0 1.16 0A10.9 10.9 0 0 1 20.83 20a1 1 0 0 0 1.17-.79a1 1 0 0 0-.83-1.15Z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Edukasi Penyakit</h3>
                <p className="text-sm text-gray-600">Memberikan informasi dan penjelasan lengkap seputar penyakit kulit yang terdeteksi.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-green-100 rounded-2xl shadow-md hover:shadow-xl transition px-8 py-6">
          <h2 className="text-3xl font-bold text-green-700 mb-5 text-center lg:text-left">
            Cara Penggunaan
          </h2>
          <div className="space-y-8 text-gray-700">
            <div className="flex items-center gap-4">
              <div className="bg-green-500 text-lg text-white w-12 h-12 flex items-center justify-center rounded-full font-semibold shadow-md">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg">Unggah Gambar Kulit</h3>
                <p className="text-sm text-gray-600">Pilih atau seret foto bagian kulit yang ingin diperiksa.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-500 text-lg text-white w-12 h-12 flex items-center justify-center rounded-full font-semibold shadow-md">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg">Tunggu Analisis</h3>
                <p className="text-sm text-gray-600">Sistem akan memproses gambar untuk mengenali kemungkinan penyakit kulit.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-500 text-lg text-white w-12 h-12 flex items-center justify-center rounded-full font-semibold shadow-md">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg">Lihat Hasil</h3>
                <p className="text-sm text-gray-600">Hasil deteksi dan tingkat kepercayaan akan muncul, disertai informasi penyakit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-10 bg-white border border-gray-100 shadow-md rounded-2xl p-8 transition hover:shadow-xl">
        <h1 className="font-semibold text-[22px] mb-4 text-center text-green-700">
          Upload Gambar Kulit
        </h1>
        <div className="w-full flex flex-col justify-center items-center py-8 border-2 border-dashed border-green-300 rounded-xl bg-green-50 hover:bg-green-100 cursor-pointer transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24">
            <path
              fill="#4caf50"
              d="M5.23 20q-.666 0-1.14-.475q-.475-.474-.475-1.14V5.615q0-.666.475-1.14Q4.564 4 5.23 4h7.885q.213 0 .357.144q.143.144.143.357q0 .212-.143.356q-.144.143-.357.143H5.231q-.27 0-.443.173t-.173.442v12.77q0 .269.173.442q.174.173.443.173H18q.27 0 .442-.173t.173-.442V10.5q0-.213.144-.356t.357-.144q.213 0 .356.144t.143.356v7.885q0 .666-.474 1.14Q18.666 20 18 20H5.23ZM17.386 6.23h-1.5q-.213 0-.357-.143t-.143-.357q0-.213.143-.356q.144-.143.357-.143h1.5v-1.5q0-.213.144-.356q.143-.144.356-.144t.356.144q.144.143.144.356v1.5h1.5q.212 0 .356.144t.144.356q0 .213-.144.356q-.144.144-.356.144h-1.5v1.5q0 .212-.144.356t-.357.144q-.213 0-.356-.144t-.143-.356v-1.5Zm-6.558 9.808L9.4 14.313q-.13-.142-.313-.142t-.314.162l-1.154 1.52q-.161.212-.045.43q.116.217.35.217h7.538q.232 0 .349-.217q.116-.218-.026-.43l-2.02-2.713q-.13-.161-.323-.161q-.192 0-.324.166l-2.291 2.893ZM11.615 12Z"
            />
          </svg>
          <h1 className="font-semibold text-xl mt-3 text-gray-700">Klik atau Drag & Drop</h1>
          <p className="text-gray-600 my-1">gambar kulit anda untuk dianalisis</p>
          <p className="text-sm text-gray-500">Format: PNG, JPG, JPEG (max. 10MB)</p>
        </div>
        <button className="w-full py-3 mt-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition">
          Analisis Gambar
        </button>
      </div>

      <div className="flex-1 mx-10 mt-10 bg-white border border-gray-100 shadow-md rounded-2xl p-8 transition hover:shadow-xl">
        <h1 className="font-semibold text-[22px] mb-4 text-black">
          Hasil Analisis
        </h1>
        <div className="flex flex-col w-full justify-center items-center my-16">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 32 32"><path fill="#99a1af" d="M12 11h2v6h-2zm-5 2h2v4H7zM2 7h2v10H2z"/><path fill="#99a1af" d="m30 28.586l-7.552-7.552A10.946 10.946 0 0 0 25 14c0-6.065-4.935-11-11-11c-2.403 0-4.685.76-6.601 2.2l1.2 1.6A8.922 8.922 0 0 1 14 5c4.963 0 9 4.037 9 9s-4.037 9-9 9a8.932 8.932 0 0 1-7.2-3.6l-1.6 1.202A10.917 10.917 0 0 0 14 25c2.673 0 5.126-.96 7.034-2.552L28.586 30z"/></svg>
          <h1 className="text-gray-400 mt-3">Hasil analisis akan muncul di sini</h1>
        </div>
      </div>
    </div>
  );
}
