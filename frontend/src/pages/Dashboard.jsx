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
          <a 
            href="https://alumnidatamanagmentsystem.web.app/dashboard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ExternalLink className="mr-2 w-5 h-5" />
              View Live Dashboard
            </Button>
          </a>
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

        {/* Demo Video */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Demo Video of Our Dashboard</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Watch this interactive demo to see how our dashboard brings alumni data to life with real-time visualizations and insights.
          </p>
          <Card className="border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
                <iframe
                  src="https://slu.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=8e687df5-b289-4af7-bd5a-b3ad003854c2&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=false&interactivity=all"
                  style={{
                    border: '1px solid #464646',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box'
                  }}
                  allowFullScreen
                  allow="autoplay"
                  aria-label="Panopto Embedded Video Player"
                  aria-description="Sun Dec 07 2025 8:47:38 PM"
                ></iframe>
              </div>
            </CardContent>
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
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-teal-600 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  1. Volatile Data Engagement Requires Immediate Analysis
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The quick decline in alumni participation (c.f., 2024) that is shown in the total alumni participation per year graphic was not easily recognized and reacted to with the many disparate pieces of data. Therefore, a centralized, immediate data analysis system with a centralized, immediate reaction to alumni participation issues was needed.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-orange-600 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  2. Recognition of the Success of Local Events Requires a Replication Strategy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The graph displaying Chicago as the highest participation site for the alumni experience and that "Young Alumni Networking" was the highest participation event for alumni represents valuable "outreach" opportunities. The disconnected nature of the old system made it difficult to determine and replicate these successful local event models to create personalized communication.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-teal-600 mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  3. Lack of Trustworthy Centralized Data on Alumni Employment Preventing Career Services
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The importance of the Information Systems program and the top employers, i.e., Amazon, provides the need for a trustworthy, centralized source of information, i.e., the new platform, to allow Career Services to properly identify and establish employer relationships and for the Admissions Department to appropriately target employment recruitment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-orange-600 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  4. Substantial Complexity of Duplicate and Inconsistent Alumni Data to Be Properly Managed
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The complexity of managing over 1000 alumni with 23 different majors and 55 different job roles creates a challenge and leads to duplicate and inconsistent records on spreadsheets. Additionally, the new system's automatic validation and deduplication of data ensures data accuracy and consistency.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-teal-600 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  5. Growing Number of Graduates Requires New Alumni Management and Reporting Capabilities
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The increase in the number of graduates over the last decade indicates that the process of managing and reporting on alumni is ever-changing.
                </p>
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
