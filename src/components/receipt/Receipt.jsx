import React from "react";

const Receipt = () => {
  return (
    <>
      <div style={{ width: "70%", margin: "0 auto" }}>
        <div className="bg-secondary text-white text-2xl font-semibold tracking-wider py-3 pl-4">
          <h2>Price Summary</h2>
        </div>
        <div>
          {/* <table>
          <thead>
            <tr>
              <th>Details</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Adult * 1</th>
              <th>NRS. 4500</th>
            </tr>
          </tbody>
        </table> */}
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-600">
              <thead class="text-xs text-gray-700 uppercase bg-white">
                <tr>
                  <th scope="col" class="px-6 py-3 text-lg tracking-wider">
                    Detail
                  </th>
                  <th scope="col" class="px-6 py-3 text-lg tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-600 text-lg tracking-wider">
                    Adult * 1
                  </th>
                  <td class="px-6 py-4 font-medium text-gray-600 text-lg tracking-wider">NRS. 4500</td>
                </tr>
                <tr class="bg-white border-b">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-600 text-lg tracking-wider">
                    Children * 2
                  </th>
                  <td class="px-6 py-4 font-medium text-gray-600 text-lg tracking-wider">NRS. 7500</td>
                </tr>
                <tr class="bg-white border-b">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-600 text-lg tracking-wider">
                    Total Payable
                  </th>
                  <td class="px-6 py-4 font-medium text-gray-600 text-lg tracking-wider">NRS. 7500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Receipt;
