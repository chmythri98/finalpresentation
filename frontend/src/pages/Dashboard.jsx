import React from 'react';
import { BarChart3, TrendingUp, Users, Building, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Dashboard
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600 mt-2">
              & Data Analysis
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Interactive analytics transforming alumni data into actionable insights
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => window.open('https://alumnidatamanagmentsystem.web.app/dashboard', '_blank')}
          >
            <ExternalLink className="mr-2 w-5 h-5" />
            View Live Dashboard
          </Button>
        </div>

        {/* Dashboard Preview Image */}
        <div className="mb-16">
          <Card className="border-none shadow-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86" 
              alt="Data Visualization" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Real-Time Analytics Platform</h3>
                <p className="text-gray-200">Visualizing alumni trends, employment patterns, and engagement metrics</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Dashboard Overview */}
        <Card className="mb-16 border-none shadow-xl bg-gradient-to-br from-slate-50 to-teal-50/20">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                The dashboard transforms Firestore data on alumni and events into visual presentations, which assist administrators in comprehending the historical trends and patterns of engagement and academic or employment performance.
              </p>
              <p>
                It contains charts for <strong>graduation trends</strong>, <strong>major distribution</strong>, <strong>role distribution</strong>, <strong>top hiring companies</strong>, <strong>event participation</strong>, <strong>event locations</strong>, and <strong>yearly engagement statistics</strong>. These factors present an insight into a wholesome alumni activity and institutional impact.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* KPI Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Performance Indicators</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <Users className="w-10 h-10 mb-3 opacity-80" />
                <h3 className="text-3xl font-bold mb-1">Total Alumni</h3>
                <p className="text-sm opacity-90">Comprehensive database count</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <BarChart3 className="w-10 h-10 mb-3 opacity-80" />
                <h3 className="text-3xl font-bold mb-1">Unique Majors</h3>
                <p className="text-sm opacity-90">Academic program diversity</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-600 to-teal-700 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <Building className="w-10 h-10 mb-3 opacity-80" />
                <h3 className="text-3xl font-bold mb-1">Total Companies</h3>
                <p className="text-sm opacity-90">Employment network reach</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-600 to-orange-700 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 mb-3 opacity-80" />
                <h3 className="text-3xl font-bold mb-1">Distinct Roles</h3>
                <p className="text-sm opacity-90">Career path variety</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chart Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Analytics Visualizations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-teal-600" />
                  Graduation Year Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                  alt="Graduation Trends Chart" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">
                  Visual representation showing steady increase from 2016 to 2025, particularly in STEM areas. Helps identify enrollment and graduation patterns over time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                  Major Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91" 
                  alt="Major Distribution Chart" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">
                  Reveals program sizes with Computer Science and Engineering showing higher representation. Helps academic planning and resource allocation decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-teal-600" />
                  Top Hiring Companies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Top Companies Chart" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">
                  Highlights major tech employers including Google, Amazon, Tesla, and Microsoft. Indicates strong placement and employer relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                  Role Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg" 
                  alt="Role Distribution Chart" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">
                  Shows high demand for Software Engineers, Data Analysts, and Product Managers. Helps career services understand market trends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-teal-600" />
                  Event Participation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-lg mb-4">
                  <Calendar className="w-16 h-16 text-teal-600 mx-auto mb-2" />
                  <p className="text-center text-gray-600 text-sm">Interactive Event Analytics</p>
                </div>
                <p className="text-gray-700">
                  Tracks attendance, speaker, and volunteer participation across events. Identifies successful events and engagement hotspots.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-orange-600" />
                  Event Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg mb-4">
                  <MapPin className="w-16 h-16 text-orange-600 mx-auto mb-2" />
                  <p className="text-center text-gray-600 text-sm">Geographic Distribution</p>
                </div>
                <p className="text-gray-700">
                  Geographic analysis of event locations showing engagement patterns. Helps plan future events in high-engagement areas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Insights */}
        <Card className="mb-16 bg-slate-50 border-none shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Insights from Dashboard</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-teal-600 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Academic Trends
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Steady increase in STEM graduates from 2016-2025</li>
                  <li>• Computer Science and Engineering dominate enrollment</li>
                  <li>• Growing diversity in academic programs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-orange-600 mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Employment Patterns
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Strong placement with top tech employers</li>
                  <li>• High demand for software engineers and data analysts</li>
                  <li>• Diverse career pathways across industries</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-teal-600 mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Engagement Metrics
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Identifies most successful event formats</li>
                  <li>• Geographic hotspots for alumni engagement</li>
                  <li>• Year-over-year participation trends</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-orange-600 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Strategic Value
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Supports data-driven decision making</li>
                  <li>• Enhances institutional planning capabilities</li>
                  <li>• Improves alumni outreach effectiveness</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Benefits */}
        <Card className="bg-gradient-to-br from-slate-900 to-teal-900 text-white shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">How Dashboards Support Decision Making</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                The dashboard transforms Firestore data into insights, similar to dashboards used in alumni analytics research. Administrators and career services staff need quick visibility into alumni outcomes.
              </p>
              <p>
                Users can filter by major, graduation year, or company to focus on specific segments. These KPIs directly correlate with the metrics of success and ensure that the system is achieving its objectives.
              </p>
              <p className="text-teal-300 font-semibold">
                These insights help administrators refine outreach, plan events, and understand alumni career pathways, ultimately strengthening institutional relationships and strategic planning.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;