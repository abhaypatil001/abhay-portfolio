import React from 'react';
import { 
  Cloud, 
  Server, 
  Code, 
  Database, 
  Shield, 
  Monitor,
  GitBranch,
  Container,
  Settings,
  Zap
} from 'lucide-react';

const Skills = () => {
  // Based on exact CV content: KEY SKILLS and TOOLS & TECHNOLOGIES
  const keySkills = [
    'Cloud Computing', 'Infrastructure as Code', 'CI/CD', 'Automation', 
    'Containerization', 'Kubernetes', 'DevOps Practices', 'Monitoring & Logging', 
    'Cloud Migration', 'Programming & Scripting', 'Application Deployment', 
    'Application Security', 'Cost Optimization', 'Backup & Recovery', 
    'Identity & Access Management', 'System Administration'
  ];

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Microsoft Azure', level: 95, icon: '☁️' },
        { name: 'Amazon Web Services (AWS)', level: 88, icon: '🟠' }
      ]
    },
    {
      title: 'Infrastructure Tools',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Terraform', level: 92, icon: '🏗️' },
        { name: 'CloudFormation', level: 85, icon: '☁️' },
        { name: 'ARM Templates', level: 90, icon: '📋' }
      ]
    },
    {
      title: 'CI/CD Tools',
      icon: GitBranch,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Azure DevOps', level: 95, icon: '🔷' },
        { name: 'Jenkins', level: 90, icon: '🔧' }
      ]
    },
    {
      title: 'Scripting Languages',
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'YAML', level: 90, icon: '📄' },
        { name: 'Bash', level: 88, icon: '💻' }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Azure SQL', level: 85, icon: '🗄️' }
      ]
    },
    {
      title: 'Container & Kubernetes',
      icon: Container,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Docker', level: 90, icon: '🐳' },
        { name: 'Kubernetes', level: 88, icon: '⚙️' },
        { name: 'Helm', level: 82, icon: '⛵' }
      ]
    },
    {
      title: 'Version Control Systems',
      icon: GitBranch,
      color: 'from-gray-500 to-gray-700',
      skills: [
        { name: 'Git', level: 92, icon: '🔀' },
        { name: 'GitHub', level: 90, icon: '🐙' }
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: Monitor,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Azure Monitor', level: 90, icon: '📊' },
        { name: 'New Relic', level: 85, icon: '📈' }
      ]
    },
    {
      title: 'Virtualization',
      icon: Server,
      color: 'from-teal-500 to-blue-500',
      skills: [
        { name: 'VMware vCenter', level: 95, icon: '🔵' },
        { name: 'ESXi', level: 92, icon: '🖥️' },
        { name: 'HP OneView', level: 85, icon: '🔧' },
        { name: 'SRM', level: 88, icon: '🔄' }
      ]
    },
    {
      title: 'Ticketing Systems',
      icon: Settings,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'ServiceNow', level: 80, icon: '🎫' },
        { name: 'Jira', level: 85, icon: '📊' }
      ]
    }
  ];

  // Exact certifications from CV
  const certifications = [
    {
      name: 'Microsoft Certified: Azure Administrator Associate',
      issuer: 'Microsoft',
      icon: '🏆',
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      year: 'Current'
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      icon: '☁️',
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      year: 'Current'
    },
    {
      name: 'AWS Certified Solution Architect – Associate',
      issuer: 'Amazon Web Services',
      icon: '🟠',
      color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      year: 'Current'
    },
    {
      name: 'VMware Certified Professional - Data Center Virtualization',
      issuer: 'VMware',
      icon: '🔵',
      color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      year: '2024'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive expertise in enterprise-grade technologies and platforms 
            for cloud infrastructure, automation, and DevOps practices.
          </p>
        </div>

        {/* Key Skills Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Key Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {keySkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Tools & Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-card">
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium text-gray-900 dark:text-white text-sm">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  {cert.name}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                  {cert.issuer}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${cert.color}`}>
                    Certified
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full shadow-lg">
            <Zap className="w-5 h-5" />
            <span className="font-medium">Continuously expanding expertise in emerging technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
