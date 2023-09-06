import React, { useState, useEffect, useRef } from "react";

import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Sarlavha", "Tarifi", "Rasm", "created", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
    created: "asfgdg",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router";

export function News() {
  const [showModal, setShowModal] = React.useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1234/api/add/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Set the Authorization header with the bearer token
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming your token is stored in localStorage
      },
      body: JSON.stringify({
        title: Email,
        password: password,
        image: image,
      }),
    });

    if (res.status === 200) {
      const { token } = await res.json();
      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
        toast.success("Yaratildi!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error("Email yoki Parol xato kiritilgan", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("errrorr");
    }
  };

  const notify = () => toast();

  return (
    <>
      <div className="mt-12">
        <button
          className="mr-1 mb-1 rounded bg-blue-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Yangilik qo'shish
        </button>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative my-6 mx-auto w-auto max-w-3xl">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                  <div className="relative flex-auto p-6">
                    <form
                      className="w-full max-w-lg"
                      onSubmit={handleLogin}
                      onClick={notify}
                      encType="multipart/form-data"
                    >
                      <div className="-mx-3 mb-6 flex flex-wrap">
                        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                          <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-first-name"
                          >
                            Sarlavha kiriting
                          </label>
                          <input
                            className="mb-3 block w-full appearance-none rounded border  bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                            id="grid-first-name"
                            type="text"
                            placeholder="Sarlavha"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                        <div className="w-full px-3 md:w-1/2">
                          <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-last-name"
                          >
                            Yangilik haqida kiriting
                          </label>
                          <input
                            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="grid-last-name"
                            type="text"
                            placeholder="Yangilik haqida malumot"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="-mx-3 mb-6 flex flex-wrap">
                        <div className="w-full px-3">
                          <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-password"
                          >
                            Rasm tanlang:
                          </label>
                          <input
                            className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="grid-password"
                            type="file"
                            placeholder="Tarif"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="border-slate-200 flex items-center justify-center rounded-b border-t border-solid p-6">
                        <button
                          className="mr-1 mb-1 rounded bg-pink-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Bekor qilish
                        </button>
                        <button
                          className="mr-1 mb-1 rounded bg-green-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
                          type="submit"
                          onClick={() => setShowModal(false)}
                        >
                          Qo'shish
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
      <div className="mt-12">
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }, index) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

export default News;
