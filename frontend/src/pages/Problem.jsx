import React from 'react';
import { AlertCircle, FileSpreadsheet, Users, TrendingDown, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Problem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Problem Context
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600 mt-2">
              & Stakeholders
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the challenges faced by Global Horizon University in managing alumni data
          </p>
        </div>

        {/* Main Problem Statement */}
        <Card className="mb-12 border-l-4 border-l-orange-500 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Global Horizon University uses spreadsheets, event sign-up files, and manual updates to maintain alumni data. Such a disjointed design creates a lot of trouble: poor documentation, lack of information, data duplication, and slow checks. Alumni profiles are required by different departments—admissions, career services, institutional research, and fundraising—yet the existing system could not allow them to utilize the data.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stakeholder Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Stakeholder Perspectives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-teal-600" />
                  Administrators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Unable to control updates and monitor event participation as files are taken by numerous sources of various types. Time spent correcting spreadsheets rather than doing analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingDown className="w-6 h-6 text-orange-600" />
                  Fundraising Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Cannot segment alumni effectively. Inaccurate segmentation prevents personalized communication and identification of promising donor groups.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-teal-600" />
                  Admissions Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Alumni career paths are not easily known, which influences recruitment policies and advertising the program. Unable to showcase success stories effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileSpreadsheet className="w-6 h-6 text-orange-600" />
                  Career Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Challenge of establishing relationships with employers whose alumni career paths are either not complete or are not trustworthy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Issues */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Issues</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-slate-50 to-teal-50/30 border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Data Duplication</h3>
                <p className="text-gray-700">Scattered spreadsheets lead to duplicate records and inconsistent details across departments</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-50 to-orange-50/30 border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Poor Visibility</h3>
                <p className="text-gray-700">No centralized view of alumni engagement, making strategic planning difficult</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-50 to-teal-50/30 border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Manual Processes</h3>
                <p className="text-gray-700">Time-consuming manual updates and cross-checking across different sources</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-50 to-orange-50/30 border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Outdated Information</h3>
                <p className="text-gray-700">Alumni have old or wrong profiles, decreasing trust and interaction</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-50 to-teal-50/30 border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Delayed Reporting</h3>
                <p className="text-gray-700">Unable to generate reports on time for leadership due to manual processes</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-50 to-orange-50/30 border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Missed Opportunities</h3>
                <p className="text-gray-700">Poor communication and missed chances for outreach and interaction</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Strategic Impact */}
        <Card className="bg-gradient-to-br from-slate-900 to-teal-900 text-white shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Strategic Impact</h2>
            <div className="space-y-4 text-lg">
              <p className="leading-relaxed">
                Other than being inconvenient in terms of operations, this disjointed system poses strategic constraints to the entire university. The absence of standard data formats causes departments to use their time correcting spreadsheets rather than doing analysis.
              </p>
              <p className="leading-relaxed">
                In the alumni world, poor records usually result in poor communication and old contacts and event invitations. In the long run, these problems undermine the loyalty of alumni and lower the effectiveness of engagement initiatives generally.
              </p>
              <p className="leading-relaxed">
                This also impacts students and future graduates since the successes of alumni may not be fully reflected. The university is unable to show success stories to market and attract new students effectively.
              </p>
              <p className="leading-relaxed font-semibold text-teal-300">
                A unified system is required to do the cleaning, consolidation, and management of the alumni data in a dependable and scalable manner.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Problem;