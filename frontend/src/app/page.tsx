import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1595236629937-aadaf7c1d99d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWluaW1hbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)] font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="align-item-center">
          <p className="text-bold text-4xl">
            Login Perpusatakaan
          </p>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <form className="width-full p-2 position-relative">
          <div className="display-flex mb-1">
            <label className="w-2 display-flex align-items-center justify-content-center background-gray-300" htmlFor="username">
            </label>
            <input id="username" className="flex p-1 border-1 color-gray text-m mb-5" placeholder='Username' type='text'/>
          </div>
          <div className="display-flex mb-1">
            <label className="w-2 display-flex align-items-center justify-content-center background-gray-300"  htmlFor="password">
            </label>
            <input id="password" className="flex p-1 border-1 color-gray text-m mb-5" placeholder='Password' type='password'/>
          </div>
          <div className="display-flex mb-1">
            <a href="./anggota" className="p-1 w-full border-1 color-white text-m font-weight-medium hover:bg-gray-500 hover:text-white" type='submit'>Login</a>
            </div>
          <a className=" mt-2 color-green-300 font-size-sm text-align-center position-relative;" href='#'>Forgot password?</a>
        </form>
      </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
