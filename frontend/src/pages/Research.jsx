import React from 'react';
import { BookOpen, TrendingUp, Cloud, BarChart, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Research = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Research
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600 mt-2">
              & Insights
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry trends and academic research supporting our solution approach
          </p>
        </div>

        {/* Main Research Content */}
        <div className="mb-16">
          <Card className="border-none shadow-2xl bg-gradient-to-br from-slate-50 to-teal-50/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Foundation</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We studied the ways in which colleges handle alumni data and how centralized applications enhance long-term interactions. Research indicates that systems that combine alumni enhance the accuracy of outreach, access data quicker, and enhance reporting. Collaborative data sharing in particular is moving to cloud-based systems in many universities to minimize maintenance and facilitate alumni networks as they expand in size and geographical spread.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Research Insights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Research Findings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                  Automation Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Industry norms emphasize the role of automation in cleaning and deduplication of data, particularly in situations where institutions utilize event data gathered in Google Forms and sign-up sheets. Automation significantly reduces manual workload and improves data accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BarChart className="w-6 h-6 text-orange-600" />
                  Dashboard Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  The utilization of dashboards is a common trend of converting the level of raw alumni data into insights to enable universities to monitor the graduate trends, the leading companies, and program results. Real-time dashboards transform raw data into actionable intelligence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Cloud className="w-6 h-6 text-teal-600" />
                  Cloud-Based Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Cloud-based products like Firebase are becoming popular since they are easily scaled, support strong authentication, and enable real-time updates of data. Their low maintenance cost makes them appropriate for universities with minimal IT budgets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                  Real-Time Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Emergent studies indicate that real-time updates are a significant factor in making alumni offices more responsive. Once information passes in real time between events, surveys, and career updates, institutions will be able to detect patterns of engagement and intervene when necessary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Academic Literature */}
        <Card className="mb-16 bg-slate-50 border-none shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Literature Support</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                The academic literature stresses that sound alumni data enhances institutional planning and employer relationships, as well as accreditation reporting. This tendency is in line with current demands to make decisions in higher education faster and analytics-driven.
              </p>
              <p className="leading-relaxed">
                The literature is quite categorical that there is a necessity for systems that will be scalable, have data integrity, and have automatic workflows. This aspect validates the relevance of our proposed platform.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Solution Validation */}
        <Card className="bg-gradient-to-br from-teal-900 to-slate-900 text-white shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Research-Backed Solution</h2>
            <div className="space-y-4 text-lg">
              <p className="leading-relaxed">
                This confirmed our solution: a centralized and automated solution with real-time dashboards is accessible to the industry trends and solves the issues of Global Horizon University.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold text-teal-300 mb-2">Scalability</h3>
                  <p className="text-sm">Cloud-based infrastructure ensures growth without infrastructure concerns</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold text-orange-300 mb-2">Data Integrity</h3>
                  <p className="text-sm">Automated validation and deduplication maintain data quality</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold text-teal-300 mb-2">Automatic Workflows</h3>
                  <p className="text-sm">Streamlined processes reduce manual intervention and errors</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Research;