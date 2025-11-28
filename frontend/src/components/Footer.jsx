import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Alumni Management System</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A centralized web application designed to streamline alumni data management for Global Horizon University.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://alumnidatamanagmentsystem.web.app/dashboard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Dashboard
                </a>
              </li>
              <li>
                <a 
                  href="https://customer-assets.emergentagent.com/job_a461abec-4b44-4563-88d2-c473c7d79229/artifacts/oey4ki5q_MRP-15%20Alumni%20Management%20System%20Design%20Report%20%281%29.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Full Report (PDF)
                </a>
              </li>
              <li>
                <a 
                  href="https://customer-assets.emergentagent.com/job_a461abec-4b44-4563-88d2-c473c7d79229/artifacts/97aeprfp_Solution%20ARchitecture%20%20MRP%2015.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Architecture Diagram
                </a>
              </li>
            </ul>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Team MRP-15</h3>
            <p className="text-gray-300 text-sm mb-2">Tech Ninjas</p>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>Mythri Madhurya Chithoori</li>
              <li>Arshad Khan Pathan</li>
              <li>Krishna Pranav Dacharaju</li>
              <li>Guna Priya Sadhu</li>
              <li>Jagadeesh Kakamolu</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2025 MRP-15 Tech Ninjas. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Global Horizon University | Alumni Management System Design Report
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;