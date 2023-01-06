import React from "react";

const locations = [
  {
    id: 1,
    name: 'Las Vegas',
    href: '#',
    code: 'NV (LAS)',
  },
  {
    id: 2,
    name: 'Los Angeles',
    href: '#',
    code: 'CA (LAX)',
  },
  {
    id: 3,
    name: 'New York City',
    href: '#',
    code: 'NY (NYC)',
  },
  {
    id: 4,
    name: 'Palm Springs',
    href: '#',
    code: 'CA (PSP)',
  },
  {
    id: 5,
    name: 'Portland',
    href: '#',
    code: 'OR (POX)',
  },
  {
    id: 6,
    name: 'All Cities',
    href: '#',
    code: 'CA (PSP)',
  },
]


const Main = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="border-b border-slate-200 p-2">
          <input
            id="draft"
            class="peer/draft"
            type="radio"
            name="status"
            className="mx-2"
            checked
          />
          <label for="draft" className="peer-checked/draft:text-sky-500">
            Round Trip
          </label>

          <input
            id="published"
            class="peer/published"
            type="radio"
            name="status"
            className="mx-2"
          />
          <label for="published" className="peer-checked/published:text-sky-500">
            One Way
          </label>

          <input
            id="published"
            class="peer/published"
            type="radio"
            name="status"
            className="mx-2"
          />
          <label for="published" className="peer-checked/published:text-sky-500">
            Multi City
          </label>
        </div>
        <div className="bg-white w-full">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-5xl text-center my-6">Book From <span className="text-fuchsia-800 font-semibold">San Francisco</span> to</h1>

        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {locations.map((location) => (
            <a key={location.id} href={location.href} className="group p-2 ring ring-slate-400 ring-offset-0">
              <h3 className="mt-4 text-sm text-gray-700">{location.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{location.code}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Main;
