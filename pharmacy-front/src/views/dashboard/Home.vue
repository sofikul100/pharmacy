<template>
<div>
    <div class="flex justify-between px-2 sm:px-4 bg-white">
    <h2 class="text-2xl text-[#548DEB] font-bold py-2 flex items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path
          d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z"
        />
        <path
          d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z"
        />
        <path
          d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z"
        />
      </svg>

      Dashboard
    </h2>

    <div class="flex items-center space-x-1 text-xs">
      <a href="#" class="font-bold text-[#548DEB]">Home</a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Dashboard</span>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 px-4 mt-6 sm:grid-cols-3 sm:px-4">
    <div class="flex items-center bg-gradient-to-r from-teal-700 to-teal-800 text-white border rounded-sm overflow-hidden shadow">
      <div class="p-4 bg-teal-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-white">
          <path
            fill-rule="evenodd"
            d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
            clip-rule="evenodd"
          />
          <path
            d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider text-white font-[600]">TOTAL CUSTOMER</h3>
        <p class="text-3xl text-white font-bold text-[26px]">200+</p>
      </div>
    </div>

    <div class="flex items-center bg-gradient-to-r from-sky-700 to-sky-800 border rounded-sm overflow-hidden shadow">
      <div class="p-4 bg-sky-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-white">
          <path
            fill-rule="evenodd"
            d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider font-[600] text-white">TOTAL SUPPLIER</h3>
        <p class="text-3xl text-[26px] font-bold text-white">50+</p>
      </div>
    </div>

    <div class="flex items-center bg-gradient-to-r from-cyan-700 to-cyan-800 border rounded-sm overflow-hidden shadow">
      <div class="p-4 bg-cyan-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-12 h-12 text-white">
          <path
            d="M10.362 1.093a.75.75 0 0 0-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925ZM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0 0 18 14.25V6.443ZM9.25 18.693v-8.25l-7.25-4v7.807a.75.75 0 0 0 .388.657l6.862 3.786Z"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider text-white font-[600]">TOTAL MEDICINE</h3>
        <p class="text-3xl text-white font-bold text-[26px]">500+</p>
      </div>
    </div>

    <div class="flex items-center bg-gradient-to-r from-teal-700 to-teal-800 border rounded-sm overflow-hidden shadow">
      <div class="p-4 bg-teal-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-12 h-12 text-white">
          <path
            d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider font-[600] text-white">TOTAL PURCHES</h3>
        <p class="text-3xl text-[26px] font-bold text-white">15000TK</p>
      </div>
    </div>

    <div class="flex items-center bg-gradient-to-r from-sky-700 to-sky-800 border rounded-sm overflow-hidden shadow">
      <div class="p-4 bg-sky-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-12 h-12 text-white">
          <path
            fill-rule="evenodd"
            d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider font-[600] text-white">TOTAL SELL</h3>
        <p class="text-3xl text-[26px] font-bold text-white">1500TK</p>
      </div>
    </div>

    <div class="flex items-center bg-gradient-to-r from-cyan-700 to-cyan-800 border rounded-sm overflow-hidden shadow">
      <div class="p-4 bg-cyan-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-12 h-12 text-white">
          <path
            fill-rule="evenodd"
            d="M1 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm12 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm13-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM1.75 14.5a.75.75 0 0 0 0 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 0 0-1.5 0v.784a.272.272 0 0 1-.35.25A49.043 49.043 0 0 0 1.75 14.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider font-[600] text-white">TOTAL EXPENSE</h3>
        <p class="text-3xl text-[26px] font-bold text-white">9000TK</p>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 px-4 gap-4 mt-8 sm:grid-cols-3 sm:px-4">
    <div class="px-4 py-2 bg-white border rounded-md overflow-hidden shadow">
      <h3 class="text-xl text-white rounded-sm px-2 mb-4 bg-teal-600 font-[500]">Page View</h3>
      <apexchart type="area" :height="300" :options="pageViewOptions" :series="pageViewSeries"></apexchart>
    </div>

    <div class="px-4 py-2 bg-white border rounded-md overflow-hidden shadow">
      <h3 class="text-xl text-white rounded-sm px-2 mb-4 bg-sky-600 font-[500]">Sessions by device</h3>
      <apexchart type="donut" :height="300" :options="sessionsOptions" :series="sessionsSeries"></apexchart>
    </div>

    <div class="grid grid-rows-2 gap-4">
      <div class="px-4 py-2 bg-white border rounded-md shadow">
        <h3 class="text-xl text-white rounded-sm px-2 mb-4 bg-cyan-600 font-[500]">Popular Post</h3>

        <div class="flex flex-col">
          <div class="align-middle inline-block min-w-full">
            <div class="overflow-hidden border-0">
              <table class="table-auto min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th scope="col" class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Post Title
                    </th>

                    <th scope="col" class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 text-sm text-gray-500">
                  <tr>
                    <td class="py-1">Create an Admin Panel with Vue.js and Tailwind CSS</td>
                    <td class="py-1 text-sm text-gray-500">1,672</td>
                  </tr>
                  <tr>
                    <td class="py-1">How To Center a Div</td>
                    <td class="py-1 text-sm text-gray-500">1,423</td>
                  </tr>
                  <tr>
                    <td class="py-1">Let's Star This Project</td>
                    <td class="py-1 text-sm text-gray-500">926</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-2 bg-white border rounded-md shadow">
        <h3 class="text-xl text-gray-600 mb-2">Top Contributor</h3>

        <div class="flex flex-col">
          <div class="align-middle inline-block min-w-full">
            <div class="overflow-hidden border-0">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th scope="col" class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>

                    <th scope="col" class="py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Commit
                    </th>

                    <th scope="col" class="py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Issue
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 text-sm text-gray-500">
                  <tr>
                    <td class="py-1 whitespace-nowrap">Seto Kuslaksono</td>
                    <td class="py-1 text-right whitespace-nowrap text-sm text-gray-500">41</td>
                    <td class="py-1 text-right whitespace-nowrap text-sm text-gray-500">12</td>
                  </tr>
                  <tr>
                    <td class="py-1 whitespace-nowrap">Some Dude</td>
                    <td class="py-1 text-right whitespace-nowrap text-sm text-gray-500">22</td>
                    <td class="py-1 text-right whitespace-nowrap text-sm text-gray-500">15</td>
                  </tr>
                  <tr>
                    <td class="py-1 whitespace-nowrap">It Could Be You</td>
                    <td class="py-1 text-right whitespace-nowrap text-sm text-gray-500">12</td>
                    <td class="py-1 text-right whitespace-nowrap text-sm text-gray-500">4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-5 sm:px-4">
    <TabGroup>
      <div class="bg-white border rounded-lg shadow sm:col-span-2">
        <div
          class="flex flex-col space-y-2 items-center px-4 mb-2 py-2 border-b-2 text-gray-600 sm:flex-row sm:justify-between"
        >
          <h3 class="tracking-wider">Top Author</h3>
          <TabList class="flex space-x-1">
            <Tab v-slot="{ selected }">
              <button
                class="px-4 py-2 text-xs rounded-md hover:bg-blue-400 hover:text-white"
                :class="selected ? 'bg-blue-400 text-white' : ''"
              >
                Today
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button
                class="px-4 py-2 text-xs rounded-md hover:bg-blue-400 hover:text-white"
                :class="selected ? 'bg-blue-400 text-white' : ''"
              >
                Yesterday
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button
                class="px-4 py-2 text-xs rounded-md hover:bg-blue-400 hover:text-white"
                :class="selected ? 'bg-blue-400 text-white' : ''"
              >
                Last 7 Days
              </button>
            </Tab>
          </TabList>
        </div>

        <TabPanels class="px-4 py-2">
          <TabPanel v-for="topAuthor in topAuthors" :key="topAuthor">
            <table class="min-w-full text-gray-500">
              <tbody>
                <tr v-for="author in topAuthor" :key="author.username">
                  <td class="flex items-center py-2">
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" :src="author.avatar" alt="" />
                    <div class="px-4">
                      <div>{{ author.name }}</div>
                      <div class="font-bold text-sm">
                        <a href="#">@{{ author.username }}</a>
                      </div>
                    </div>
                  </td>
                  <td class="py-2 text-right">
                    <div class="text-2xl">{{ author.postViews }}</div>
                    <div class="text-sm">Post Views</div>
                  </td>
                  <td class="hidden py-2 space-x-2 text-right sm:table-cell">
                    <button class="p-1 rounded-md bg-green-500 text-white hover:bg-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button class="p-1 rounded-md bg-red-500 text-white hover:bg-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
        </TabPanels>
      </div>
    </TabGroup>

    <div class="bg-white border rounded-lg shadow sm:col-span-3">
      <div class="flex justify-between items-center px-4 py-2 mb-2 border-b-2 text-gray-600">
        <h3 class="tracking-wider">Recent Sales</h3>
        <button class="border rounded-sm bg-gray-200 px-4 py-2 text-xs hover:bg-gray-300">View All</button>
      </div>
      <div class="px-4">
        <table class="table-fixed min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>

              <th scope="col" class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item
              </th>

              <th scope="col" class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>

              <th scope="col" class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>

              <th scope="col" class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 text-sm text-gray-500">
            <tr v-for="sales in recentSales" :key="sales.orderId">
              <td class="py-4 whitespace-nowrap">{{ sales.orderId }}</td>
              <td class="py-4 whitespace-nowrap text-sm text-gray-500">{{ sales.item }}</td>
              <td class="py-4 whitespace-nowrap text-sm text-gray-500">${{ sales.amount }}</td>
              <td class="py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="px-2 py-1 rounded text-xs text-white" :class="sales.labelClass">{{ sales.status }}</span>
              </td>
              <td class="py-4 whitespace-nowrap text-sm text-blue-600"><a href="#">View Detail</a></td>
            </tr>
          </tbody>
        </table>

        <div class="py-2 flex items-center justify-between border-t border-gray-200">
          <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p class="text-sm text-gray-500">
                Showing
                <span class="font-medium">1</span>
                to
                <span class="font-medium">5</span>
                of
                <span class="font-medium">42</span>
                results
              </p>
            </div>
            <div>
              <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  class="relative inline-flex items-center px-2 rounded-l-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </a>
                <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                <a
                  href="#"
                  aria-current="page"
                  class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-1 border text-sm font-medium"
                >
                  1
                </a>
                <a
                  href="#"
                  class="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-1 border text-sm font-medium"
                >
                  2
                </a>
                <a
                  href="#"
                  class="border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-1 border text-sm font-medium"
                >
                  3
                </a>
                <span
                  class="relative inline-flex items-center px-4 py-1 border border-gray-300 text-sm font-medium text-gray-700"
                >
                  ...
                </span>
                <a
                  href="#"
                  class="border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-1 border text-sm font-medium"
                >
                  8
                </a>
                <a
                  href="#"
                  class="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-1 border text-sm font-medium"
                >
                  9
                </a>
                <a
                  href="#"
                  class="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-1 border text-sm font-medium"
                >
                  10
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import topAuthors from '@/data/home/topAuthors.json'
import recentSales from '@/data/home/recentSales.json'

export default {
  components: {
    apexchart: VueApexCharts,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },

  setup() {
    const pageViewOptions = {
      chart: {
        id: 'pageview-chart',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7'],
      },
    }

    const pageViewSeries = [
      {
        name: 'Page view',
        data: [3087, 4403, 3456, 2864, 4956, 6023, 7063],
      },
    ]

    const sessionsOptions = {
      chart: {
        id: 'sessions-chart',
      },
      labels: ['Desktop', 'Mobile', 'Tablet'],
      legend: {
        position: 'bottom',
      },
    }

    const sessionsSeries = [70.9, 27.2, 1.9]

    return {
      pageViewOptions,
      pageViewSeries,
      sessionsOptions,
      sessionsSeries,
      topAuthors,
      recentSales,
    }
  },
}
</script>
