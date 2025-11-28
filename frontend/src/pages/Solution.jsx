import React from 'react';
import { Cloud, Shield, Database, TrendingUp, CheckCircle, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Solution = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Proposed
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600 mt-2">
              Solution
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A cloud-based web application to centralize alumni and event data
          </p>
        </div>

        {/* Solution Overview Image */}
        <div className="mb-16">
          <Card className="border-none shadow-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
              alt="Dashboard Analytics" 
              className="w-full h-96 object-cover"
            />
          </Card>
        </div>

        {/* Main Solution Description */}
        <Card className="mb-16 border-none shadow-xl bg-gradient-to-br from-slate-50 to-teal-50/20">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">System Overview</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We created and developed a web application for alumni management, which is cloud-based, to unify all data of alumni and events. <strong>Angular</strong> is used as the front-end, and <strong>Firebase</strong> serves as the authentication provider, host, storage, and file processor.
              </p>
              <p>
                It allows the administrator to have safe access to the site, multi-step uploading of Excel files, detection of the header, mapping of columns, and deduplication automatically based on student ID.
              </p>
              <p>
                Core records are stored in seven <strong>Firestore collections</strong>, namely student, admin, alumni, events, and event alumni. Other collections deal with the upload logs and requests to update alumni profiles.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-teal-600" />
                  Frontend Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg mb-2">Angular</h3>
                <p className="text-gray-700 mb-4">
                  Chosen due to its component architecture that enables a maintainable and structured user interface. Provides robust framework for building complex web applications with excellent performance.
                </p>
                <a 
                  href="https://github.com/chmythri98/Alumni_ManagmentApp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm transition-colors"
                >
                  <Code className="w-4 h-4" />
                  View Frontend Code on GitHub
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Cloud className="w-6 h-6 text-orange-600" />
                  Backend & Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg mb-2">Firebase Platform</h3>
                <p className="text-gray-700 mb-4">
                  Selected for its real-time reporting, high security by Firestore rules, and low maintenance. Serverless platform removes backend infrastructure complexity, enabling scalability without running servers.
                </p>
                <a 
                  href="https://github.com/Arshad123-khan/alumni-backend.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors"
                >
                  <Cloud className="w-4 h-4" />
                  View Backend Code on GitHub
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-teal-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Secure Login</h3>
                <p className="text-gray-700">Firebase Authentication with role-based access control for administrators</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <Database className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Multi-Step Upload</h3>
                <p className="text-gray-700">Excel file processing with header detection, column mapping, and validation</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <CheckCircle className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Auto Deduplication</h3>
                <p className="text-gray-700">Automatic validation and deduplication based on student ID</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Searchable Tables</h3>
                <p className="text-gray-700">All alumni information presented in searchable table format with export capability</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <Database className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Update Requests</h3>
                <p className="text-gray-700">Alumni can submit profile updates via Google Forms for admin review and approval</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Analytics Dashboard</h3>
                <p className="text-gray-700">Complete analytics with graduation trends, major distribution, and employment insights</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Data Collections */}
        <Card className="mb-16 bg-slate-50 border-none shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Firestore Collections</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-teal-600 mb-3">Core Collections</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>alumni</strong> - Verified alumni profiles with career information</li>
                  <li><strong>admin</strong> - Authenticated administrator profiles</li>
                  <li><strong>events</strong> - Event metadata and details</li>
                  <li><strong>event_alumni</strong> - Links alumni to events they attended</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-orange-600 mb-3">Supporting Collections</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>file_upload_logs</strong> - Tracks uploads for auditing purposes</li>
                  <li><strong>Alumni_Form_Requests</strong> - Stores update requests from alumni</li>
                  <li><strong>student</strong> - Current student data for future alumni</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Solution Benefits */}
        <Card className="bg-gradient-to-br from-slate-900 to-teal-900 text-white shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8">Solution Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-teal-300 mb-4">Operational Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                    <span>Minimizes paperwork and manual processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                    <span>Enhances accuracy of the alumni database</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                    <span>Streamlines workflows with automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                    <span>Facilitates verification and approval processes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-300 mb-4">Strategic Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>Empowers decision support for administrators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>Increases alumni engagement levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>Enables data-driven institutional planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>Provides foundation for future enhancements</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Solution;