import React from 'react';
import { ArrowRight, Users, Database, LineChart, Shield, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/95 via-slate-900/95 to-orange-900/95"></div>
          <img 
            src="https://images.unsplash.com/photo-1705636070427-8234f647b5bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHx1bml2ZXJzaXR5JTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NjQzMDk4NjR8MA&ixlib=rb-4.1.0&q=85" 
            alt="University Campus" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <div className="inline-block mb-4 px-6 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-400/30">
            <span className="text-teal-300 font-medium">MRP-15 Tech Ninjas</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Alumni Management
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">
              System Design
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Centralizing alumni data, automating workflows, and transforming insights for Global Horizon University
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => window.open('https://alumnidatamanagmentsystem.web.app/dashboard', '_blank')}
            >
              <LineChart className="mr-2 w-5 h-5" />
              Live Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('executive-summary').scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowRight className="mr-2 w-5 h-5" />
              Read More
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-teal-400 rotate-90" />
        </div>
      </section>

      {/* Team Info */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <Users className="w-6 h-6 text-teal-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Team Members</h3>
              <p className="text-sm text-gray-600">Mythri Madhurya Chithoori</p>
              <p className="text-sm text-gray-600">Arshad Khan Pathan</p>
              <p className="text-sm text-gray-600">Krishna Pranav Dacharaju</p>
              <p className="text-sm text-gray-600">Guna Priya Sadhu</p>
              <p className="text-sm text-gray-600">Jagadeesh Kakamolu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Executive Summary
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto"></div>
          </div>
          <Card className="border-none shadow-xl bg-gradient-to-br from-slate-50 to-teal-50/30">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Global Horizon University has its alumni information in a combination of scattered spreadsheets, event files, and old sources of information. The consequence of such a decentralized process is duplicated records and inconsistent details, and it does not provide much visibility into alumni engagement.
                </p>
                <p className="text-lg mt-6">
                  To solve these problems, our team, <strong>MRP-15 Tech Ninjas</strong>, created a centralized <strong>Alumni Management Web Application</strong>. Angular, Firebase Authentication, Firestore Database, and Firebase Hosting help to bring all alumni and event data into a single cloud-based platform.
                </p>
                <p className="text-lg mt-6">
                  It enables safe login, multi-step raises of Excel uploads, automatic validation and deduplication, approvals of alumni update requests, and interactive dashboards. The dashboards transform raw data into information regarding the trends of graduation, employment, distribution of the major, and events.
                </p>
                <p className="text-lg mt-6">
                  The solution minimizes paperwork, enhances the accuracy of the alumni database, and empowers decision support to university administrators. By allowing its scalable base and real-time analysis, this system increases the level of engagement with the alumni and ensures that staff will be able to make well-informed and timely decisions based on precise data.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Features</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <Database className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Centralized Database</h3>
                <p className="text-gray-300">Single source of truth for all alumni data, eliminating scattered spreadsheets and duplicates</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <LineChart className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Interactive Dashboards</h3>
                <p className="text-gray-300">Real-time analytics and visualizations for graduation trends, employment, and event participation</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Secure Authentication</h3>
                <p className="text-gray-300">Firebase Authentication with role-based access control for administrators</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Automated Validation</h3>
                <p className="text-gray-300">Automatic deduplication and data validation based on student ID</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Alumni Updates</h3>
                <p className="text-gray-300">Request management system for alumni to update their profiles</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <Database className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Multi-Step Upload</h3>
                <p className="text-gray-300">Excel file processing with header detection and column mapping</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;