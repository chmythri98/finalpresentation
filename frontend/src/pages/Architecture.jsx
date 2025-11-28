import React from 'react';
import { Layers, Database, Shield, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Architecture = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Architecture
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600 mt-2">
              & Data Design
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            System architecture and data design for scalable alumni management
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Three-Layer Architecture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Layers className="w-6 h-6 text-teal-600" />
                  Business Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Provides fundamental operations and standardizes data flow through departments.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Alumni data management processes</li>
                  <li>• Event processing workflows</li>
                  <li>• Profile update processes</li>
                  <li>• Institutional reporting</li>
                  <li>• Long-term planning support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-orange-600" />
                  Information Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Contains the application interface and data processing logic.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Angular web interface</li>
                  <li>• Multi-step file upload process</li>
                  <li>• Column mapping and Excel parsing</li>
                  <li>• Deduplication checks</li>
                  <li>• Administration dashboard</li>
                  <li>• Firestore collections management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Cloud className="w-6 h-6 text-teal-600" />
                  Technology Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Platform infrastructure ensuring security and scalability.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Firebase Authentication</li>
                  <li>• Firebase Hosting</li>
                  <li>• Cloud Storage for uploads</li>
                  <li>• Firestore Security Rules</li>
                  <li>• Real-time synchronization</li>
                  <li>• Minimal maintenance overhead</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-16">
          <Card className="border-none shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Solution Architecture Diagram</h2>
              <div className="bg-slate-50 rounded-lg p-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_a461abec-4b44-4563-88d2-c473c7d79229/artifacts/97aeprfp_Solution%20ARchitecture%20%20MRP%2015.pdf" 
                  alt="Solution Architecture" 
                  className="w-full h-auto rounded"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hidden text-center py-12">
                  <a 
                    href="https://customer-assets.emergentagent.com/job_a461abec-4b44-4563-88d2-c473c7d79229/artifacts/97aeprfp_Solution%20ARchitecture%20%20MRP%2015.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-lg"
                  >
                    <Layers className="w-6 h-6" />
                    View Solution Architecture Diagram (PDF)
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Design Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="erd">ER Diagram</TabsTrigger>
              <TabsTrigger value="collections">Collections</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card className="border-none shadow-xl bg-gradient-to-br from-slate-50 to-teal-50/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Design Overview</h3>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      The system is based on a flexible <strong>NoSQL data structure</strong> with the implementation of Google Firestore data storage that enables scaling storage, quick document access, and easy schema development. As alumni ecosystems constantly change with new features like job history or patterns of certain events, the document model of Firestore allows dynamic fields without having to re-architect it significantly.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-white p-6 rounded-lg shadow">
                        <h4 className="font-bold text-teal-600 mb-3">Data Cleaning & Validation</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Deduplication via student ID</li>
                          <li>• Header selection and column matching</li>
                          <li>• Field comparison for insert/update logic</li>
                          <li>• Preprocessing to eliminate invalid rows</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow">
                        <h4 className="font-bold text-orange-600 mb-3">Design Benefits</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Seamless data ingestion</li>
                          <li>• Real-time analytics capability</li>
                          <li>• Precise dashboard insights</li>
                          <li>• Easy schema evolution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="erd">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Entity Relationship Diagram</h3>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_a461abec-4b44-4563-88d2-c473c7d79229/artifacts/7mtjwbgw_Database%20ER%20diagram%20MRP%2015.png" 
                      alt="ER Diagram" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                  <p className="text-center text-gray-600 mt-4">Database schema showing relationships between all collections</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="collections">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-teal-500 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-teal-600">Alumni Collection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">Stores verified alumni profiles</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• First name, last name</li>
                      <li>• Student ID (unique identifier)</li>
                      <li>• Major, graduation year</li>
                      <li>• Company, role, location</li>
                      <li>• LinkedIn URL</li>
                      <li>• Timestamps for tracking</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-orange-600">Events Collection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">Stores event metadata</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Event ID, title</li>
                      <li>• Event date, year</li>
                      <li>• Location information</li>
                      <li>• Attendee count</li>
                      <li>• Speaker and volunteer counts</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-teal-500 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-teal-600">Event_Alumni Collection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">Links alumni to events</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Student ID (FK)</li>
                      <li>• Event ID (FK)</li>
                      <li>• Attendance status (boolean)</li>
                      <li>• Graduation year</li>
                      <li>• Major</li>
                      <li>• Feedback score</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-orange-600">Admin Collection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">Authenticated user profiles</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Admin ID, email ID</li>
                      <li>• First name, last name</li>
                      <li>• Role designation</li>
                      <li>• Account status</li>
                      <li>• Creation timestamp</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-teal-500 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-teal-600">Upload_Logs Collection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">Tracks uploads for auditing</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Upload log ID</li>
                      <li>• Admin ID (FK)</li>
                      <li>• Uploaded timestamp</li>
                      <li>• Rows processed count</li>
                      <li>• Status and comments</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-orange-600">Alumni_Form_Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">Stores update requests</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Student ID</li>
                      <li>• Alumni name, email</li>
                      <li>• Updated career information</li>
                      <li>• Request timestamp</li>
                      <li>• Approval status</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Architecture Benefits */}
        <Card className="bg-gradient-to-br from-slate-900 to-teal-900 text-white shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Architecture Advantages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Shield className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Security & Reliability</h3>
                <p className="text-gray-200">
                  Firebase Authentication ensures secure login, while Firestore Security Rules protect sensitive information. The architecture follows best practices in secured alumni systems, ensuring data integrity and user privacy.
                </p>
              </div>
              <div>
                <Cloud className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Scalability & Performance</h3>
                <p className="text-gray-200">
                  Serverless infrastructure achieves scalability, reliability, and real-time synchronicity. The system is responsive even as data volume increases, with minimal overhead during maintenance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Architecture;