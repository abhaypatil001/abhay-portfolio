import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  // Exact certifications from CV
  const certifications = [
    {
      name: 'Microsoft Certified: Azure Administrator Associate',
      issuer: 'Microsoft',
      description: 'Demonstrates expertise in implementing, monitoring, and maintaining Microsoft Azure solutions, including major services related to compute, storage, network, and security.',
      icon: '🏆',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-700 dark:text-blue-300',
      status: 'Active',
      year: '2024',
      credentialId: 'MS-AZ-104',
      skills: ['Azure VMs', 'Azure Storage', 'Azure Networking', 'Azure Security', 'Azure Monitoring']
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      description: 'Validates foundational knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, and Azure pricing and support.',
      icon: '☁️',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      textColor: 'text-cyan-700 dark:text-cyan-300',
      status: 'Active',
      year: '2023',
      credentialId: 'MS-AZ-900',
      skills: ['Cloud Concepts', 'Azure Services', 'Azure Security', 'Azure Pricing', 'Azure Support']
    },
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      description: 'Recognizes proficiency in designing distributed systems on AWS, covering aspects like designing highly available, cost-efficient, fault-tolerant, and scalable systems.',
      icon: '🟠',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-700 dark:text-orange-300',
      status: 'Active',
      year: '2023',
      credentialId: 'AWS-SAA',
      skills: ['AWS Architecture', 'EC2', 'S3', 'VPC', 'IAM', 'CloudFormation']
    },
    {
      name: 'VMware Certified Professional - Data Center Virtualization',
      issuer: 'VMware',
      description: 'Confirms the ability to install, configure, and manage VMware vSphere environments, a testament to deep virtualization expertise.',
      icon: '🔵',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      textColor: 'text-indigo-700 dark:text-indigo-300',
      status: 'Active',
      year: '2024',
      credentialId: 'VCP-DCV',
      skills: ['vSphere', 'vCenter', 'ESXi', 'vMotion', 'DRS', 'HA']
    }
  ];

  const certificationStats = [
    { number: '4', label: 'Active Certifications', icon: '🏆' },
    { number: '3', label: 'Cloud Platforms', icon: '☁️' },
    { number: '2024', label: 'Latest Certification', icon: '📅' },
    { number: '100%', label: 'Pass Rate', icon: '✅' }
  ];

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My commitment to continuous learning and professional development is underscored by 
            my impressive array of industry certifications and strong technical foundation.
          </p>
        </div>

        {/* Certification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {certificationStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl">{cert.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${cert.bgColor} ${cert.textColor}`}>
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Issued: {cert.year}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {cert.name}
                  </h3>
                  
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {cert.description}
                  </p>

                  {/* Skills Covered */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Skills Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Credential ID:</span> {cert.credentialId}
                    </div>
                    <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-xs font-medium">Verify</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <Award className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Commitment to Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              These certifications represent my dedication to staying current with industry best practices 
              and emerging technologies. I continuously pursue new certifications to enhance my expertise 
              and deliver cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary"
              >
                Discuss Your Requirements
              </button>
              <button
                onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary"
              >
                View Complete Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
