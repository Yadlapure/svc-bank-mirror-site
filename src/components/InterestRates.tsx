
const InterestRates = () => {
  return (
    <section id="rates" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Facilities Available Header */}
        <div className="bg-pink-500 text-white text-center py-4 rounded-t-lg mb-8">
          <h2 className="text-2xl font-bold">Facilities Available in our Bank</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Fixed Deposits Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-400 text-white text-center py-3">
              <h3 className="text-lg font-semibold">Attractive Rate of Interest on Fixed Deposits</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Sl No.</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Period</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Interest Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm">1.</td>
                    <td className="px-4 py-3 text-sm">46 To 90 Days</td>
                    <td className="px-4 py-3 text-sm">5.00%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm">2.</td>
                    <td className="px-4 py-3 text-sm">91 To 180 Days</td>
                    <td className="px-4 py-3 text-sm">5.50%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">3.</td>
                    <td className="px-4 py-3 text-sm">181 To 364 Days</td>
                    <td className="px-4 py-3 text-sm">6.00%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm">4.</td>
                    <td className="px-4 py-3 text-sm">365 To 2 Years</td>
                    <td className="px-4 py-3 text-sm">7.00%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">5.</td>
                    <td className="px-4 py-3 text-sm">2 Years To 3 Years Above</td>
                    <td className="px-4 py-3 text-sm">8.00%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm">6.</td>
                    <td className="px-4 py-3 text-sm">Senior Citizens</td>
                    <td className="px-4 py-3 text-sm">0.50% More</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">7.</td>
                    <td className="px-4 py-3 text-sm">Savings Account</td>
                    <td className="px-4 py-3 text-sm">3.50%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm">8.</td>
                    <td className="px-4 py-3 text-sm">Above three years Rs. 15.00 lakh for bulk deposit</td>
                    <td className="px-4 py-3 text-sm">0.50% More</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Financial Status */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-400 text-white text-center py-3">
              <h3 className="text-lg font-semibold">Financial Status of the Bank</h3>
              <p className="text-sm text-blue-100">as on 31-03-2024(In lakhs)</p>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm font-medium">Capital Shares</span>
                  <span className="text-sm">201.38</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm font-medium">RF & OF</span>
                  <span className="text-sm">285.51</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm font-medium">Deposits</span>
                  <span className="text-sm">2004.17</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm font-medium">Loans And Advances</span>
                  <span className="text-sm">1353.74</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm font-medium">Investments</span>
                  <span className="text-sm">966.97</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm font-medium">Working Capital</span>
                  <span className="text-sm">2630.22</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm font-medium">C.R.A.R</span>
                  <span className="text-sm">36.34%</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm font-medium">Gross N.P.A</span>
                  <span className="text-sm">414.24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Profit</span>
                  <span className="text-sm">24.48</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Rates Section */}
        <div className="bg-pink-500 text-white text-center py-4 rounded-t-lg mb-2">
          <h2 className="text-2xl font-bold">Revised Rate of Interest on Loans</h2>
        </div>

        <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Sl No.</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Details</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Current Interest Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm">1.</td>
                  <td className="px-4 py-3 text-sm">Construction/purchase of Home</td>
                  <td className="px-4 py-3 text-sm">12.00%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm">2.</td>
                  <td className="px-4 py-3 text-sm">Mortgage loan</td>
                  <td className="px-4 py-3 text-sm">12.5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">3.</td>
                  <td className="px-4 py-3 text-sm">Personal Loan</td>
                  <td className="px-4 py-3 text-sm">16.00%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm">4.</td>
                  <td className="px-4 py-3 text-sm">Vehicle Loan</td>
                  <td className="px-4 py-3 text-sm">12.00%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">5.</td>
                  <td className="px-4 py-3 text-sm">Gold Loan</td>
                  <td className="px-4 py-3 text-sm">10.00%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm">6.</td>
                  <td className="px-4 py-3 text-sm">Consumer Loan</td>
                  <td className="px-4 py-3 text-sm">16.00%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">7.</td>
                  <td className="px-4 py-3 text-sm">Overdraft</td>
                  <td className="px-4 py-3 text-sm">16.00%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestRates;
