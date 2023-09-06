import React, { useState } from "react";

import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
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

export function Classes() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="mt-12">
        <button
          className="mr-1 mb-1 rounded bg-blue-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Yangi sinf qo'shish
        </button>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative my-6 mx-auto w-auto max-w-3xl">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                  <div className="relative flex-auto p-6">
                    <form class="w-full max-w-lg">
                      <div class="-mx-3 mb-6 flex flex-wrap">
                        <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                          <label
                            class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            for="grid-first-name"
                          >
                            Sinf raqami
                          </label>
                          <input
                            class="mb-3 block w-full appearance-none rounded border  bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                            id="grid-first-name"
                            type="text"
                            placeholder="8"
                          />
                        </div>
                        <div class="w-full px-3 md:w-1/2">
                          <label
                            class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            for="grid-last-name"
                          >
                            Harfi
                          </label>
                          <input
                            class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="grid-last-name"
                            type="text"
                            placeholder="A"
                          />
                        </div>
                      </div>
                      <div class="-mx-3 mb-6 flex flex-wrap">
                        <div class="w-full px-3">
                          <label
                            class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            for="grid-password"
                          >
                            Tarif bering
                          </label>
                          <input
                            class="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="grid-password"
                            type="text"
                            placeholder="Tarif"
                          />
                          <p class="text-xs italic text-gray-600">
                            Sinf haqida tarif bering
                          </p>
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
                          type="button"
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
              {TABLE_ROWS.map(({ name, job, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {job}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
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
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

export default Classes;
