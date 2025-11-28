import React from 'react';
import { Shield, Lock, Scale, Leaf, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Ethics = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ethical & Social
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600 mt-2">
              Considerations
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensuring privacy, security, fairness, and sustainability in alumni data management
          </p>
        </div>

        {/* Main Statement */}
        <Card className="mb-16 border-none shadow-2xl bg-gradient-to-br from-slate-50 to-teal-50/20">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-start gap-4">
              <Shield className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The system handles sensitive data of the alumni, and so, privacy, security, and fairness are crucial. We have implemented comprehensive measures to ensure responsible data use while providing transparent and fair analytics across all demographics and academic groups.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Guiding Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-teal-600" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>Firebase Authentication</strong> allows access only to authorized users with proper credentials
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>Firestore Security Rules</strong> ensure only people in the right positions can access and write certain data
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>Role-based access control</strong> prevents unauthorized data exposure
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-orange-600" />
                  Fairness & Transparency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>Consistent validation rules</strong> minimize chances of bias across majors, companies, or graduation years
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>Unbiased analytics</strong> produced only from provided records without favoring any demographics
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>Equal treatment</strong> of all academic groups in reporting and analysis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-teal-600" />
                  Voluntary Participation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>Google Forms</strong> used for tracking updates are completely voluntary
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>Minimal data collection</strong> - system does not require superfluous personal information
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>Alumni control</strong> over their profile information and updates
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-orange-600" />
                  Sustainability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>Serverless infrastructure</strong> ensures maximum utilization of resources
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>Cloud-based architecture</strong> eliminates need for dedicated servers
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      <strong>Efficient resource management</strong> reduces environmental impact
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Data Protection Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Protection Measures</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-teal-50 to-white border-none shadow-lg">
              <CardContent className="p-6">
                <Lock className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="font-bold text-lg mb-3">Access Control</h3>
                <p className="text-gray-700 text-sm">
                  Multi-layered authentication and authorization ensure only authorized personnel can access sensitive alumni information
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="font-bold text-lg mb-3">Data Encryption</h3>
                <p className="text-gray-700 text-sm">
                  All data transmitted and stored is encrypted using industry-standard protocols to prevent unauthorized access
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-white border-none shadow-lg">
              <CardContent className="p-6">
                <Scale className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="font-bold text-lg mb-3">Audit Trails</h3>
                <p className="text-gray-700 text-sm">
                  Complete logging of all data access and modifications for accountability and compliance verification
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Commitment Statement */}
        <Card className="bg-gradient-to-br from-slate-900 to-teal-900 text-white shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Ethical Commitment</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                The design provides responsible data use at the same time as transparent and fair analytics. We are committed to maintaining the highest standards of data protection while ensuring that our system serves all stakeholders equitably.
              </p>
              <p>
                By implementing robust security measures, maintaining fairness in our algorithms, respecting user privacy, and adopting sustainable practices, we ensure that the Alumni Management System not only meets technical requirements but also upholds ethical standards that protect all users.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold text-teal-300 mb-2">Privacy First</h3>
                  <p className="text-sm">Every design decision prioritizes user privacy and data protection</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold text-orange-300 mb-2">Fair Analytics</h3>
                  <p className="text-sm">Unbiased reporting ensures equal representation for all groups</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Ethics;