import React from 'react';
import { Lightbulb, Users, TrendingUp, Award, Heart, Code, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Reflection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Lessons Learned
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600 mt-2">
              & Team Reflection
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights from building an end-to-end alumni management system
          </p>
        </div>

        {/* Team Image */}
        <div className="mb-16">
          <Card className="border-none shadow-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1758270705518-b61b40527e76" 
              alt="Team Collaboration" 
              className="w-full h-96 object-cover"
            />
          </Card>
        </div>

        {/* Main Reflection */}
        <Card className="mb-16 border-none shadow-xl bg-gradient-to-br from-slate-50 to-teal-50/20">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-10 h-10 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Team Journey</h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    As a team, we learned how important it is to divide responsibilities clearly and maintain a consistent workflow. Throughout the semester, we refined our uploading pipeline, improved the deduplication logic, and tested dashboard accuracy.
                  </p>
                  <p>
                    We faced challenges with Excel parsing, Firestore structure design, and validating data across multiple collections. Frequent coordination helped us resolve these issues and stay aligned.
                  </p>
                  <p>
                    Each team member contributed to different components like front-end, backend integration, data cleaning, validation, and analytics. This project strengthened our technical skills in Angular, Firebase, and real-time databases, as well as our teamwork, communication, and problem-solving abilities.
                  </p>
                  <p className="font-semibold text-teal-700">
                    The experience showed us the value of iterative development and consistent testing when building a complete end-to-end system.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Learnings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Learnings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-teal-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <Code className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Technical Skills</h3>
                <p className="text-gray-700 text-sm">
                  Gained hands-on experience with Angular, Firebase Authentication, Firestore databases, and real-time data synchronization
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Team Collaboration</h3>
                <p className="text-gray-700 text-sm">
                  Learned the importance of clear responsibility division, consistent communication, and coordinated problem-solving
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Iterative Development</h3>
                <p className="text-gray-700 text-sm">
                  Understood the value of incremental improvements, continuous testing, and refinement of features over time
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <Database className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Data Management</h3>
                <p className="text-gray-700 text-sm">
                  Mastered data cleaning, validation, deduplication logic, and maintaining data integrity across collections
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <Award className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Problem Solving</h3>
                <p className="text-gray-700 text-sm">
                  Developed systematic approaches to debugging complex issues with Excel parsing and Firestore structure
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <Heart className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">User-Centric Design</h3>
                <p className="text-gray-700 text-sm">
                  Learned to design systems that serve real stakeholder needs and provide actionable insights
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Challenges Overcome */}
        <Card className="mb-16 bg-slate-50 border-none shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges We Overcame</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-teal-600 mb-3">Excel Parsing</h3>
                <p className="text-gray-700 text-sm">
                  Handling diverse file formats, header detection, and column mapping required robust error handling and flexible parsing logic
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-orange-600 mb-3">Firestore Structure</h3>
                <p className="text-gray-700 text-sm">
                  Designing optimal collection structure for efficient queries while maintaining data relationships and consistency
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-teal-600 mb-3">Data Validation</h3>
                <p className="text-gray-700 text-sm">
                  Implementing comprehensive validation across multiple collections to ensure data integrity and prevent duplicates
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Individual Contributions */}
        <Card className="mb-16 border-l-4 border-l-teal-500 shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Contributions</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Each team member brought unique strengths to the project:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Frontend Development:</strong> Creating intuitive Angular components and user interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Backend Integration:</strong> Connecting Firebase services and implementing authentication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Data Engineering:</strong> Building cleaning pipelines and validation logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Analytics Development:</strong> Creating dashboard visualizations and insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Testing & QA:</strong> Ensuring system reliability and data accuracy</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Outcomes & Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Outcomes & Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-teal-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-teal-600" />
                  Project Success
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The platform successfully centralized alumni information, minimized duplication problems, and enhanced data accuracy.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Streamlined data management workflows</li>
                  <li>• Real-time analytics and dashboards</li>
                  <li>• Improved institutional reporting accuracy</li>
                  <li>• Enhanced alumni engagement strategies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                  Future Enhancements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Future improvements to expand system capabilities and increase institutional value:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Alumni self-service portal for real-time updates</li>
                  <li>• Push notifications for events and announcements</li>
                  <li>• LinkedIn API integration for automated job updates</li>
                  <li>• Predictive analytics for engagement patterns</li>
                  <li>• Career services platform partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final Reflection */}
        <Card className="bg-gradient-to-br from-slate-900 to-teal-900 text-white shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                This project was more than just a technical exercise—it was a journey in understanding real-world challenges in higher education and developing practical solutions that create tangible value.
              </p>
              <p>
                The long-term benefits of the system include improved accuracy of reporting, strengthened alumni relations, and increased visibility of the institution's employment and academic performance.
              </p>
              <p className="text-teal-300 font-semibold">
                Most importantly, we learned that building effective systems requires not just technical skills, but also empathy for users, collaboration with teammates, and persistence in problem-solving. These lessons will serve us well in our future careers.
              </p>
            </div>
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-center text-xl font-bold text-orange-300">
                MRP-15 Tech Ninjas
              </p>
              <p className="text-center text-sm text-gray-300 mt-2">
                Mythri Madhurya Chithoori | Arshad Khan Pathan | Krishna Pranav Dacharaju | Guna Priya Sadhu | Jagadeesh Kakamolu
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reflection;