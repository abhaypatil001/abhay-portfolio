import React from 'react';
import { Award, Calendar, MapPin, Code, Server, Cloud, Users, TrendingUp, Container } from 'lucide-react';

const About = () => {
  const coreCompetencies = [
    {
      icon: Container,
      title: 'Container Orchestration',
      description: 'Proficient in Azure Kubernetes Service (AKS) & AWS EKS deployments, ensuring scalable and resilient application environments.'
    },
    {
      icon: Code,
      title: 'Infrastructure as Code (IaC)',
      description: 'Expertise in Terraform, Azure Resource Manager (ARM), and AWS CloudFormation for automated and consistent infrastructure provisioning.'
    },
    {
      icon: Server,
      title: 'CI/CD Pipelines',
      description: 'Designing and implementing robust CI/CD processes with Jenkins and Azure DevOps to accelerate software delivery and enhance deployment efficiency.'
    },
    {
      icon: Cloud,
      title: 'Cloud Migrations',
      description: 'Extensive experience with Azure Migrate and VMware HCX for seamless and low-downtime transitions to cloud environments.'
    }
  ];

  const keyFocusAreas = [
    'Cloud Migration',
    'Automation',
    'CI/CD',
    'Kubernetes',
    'Infrastructure as Code',
    'Cost Optimization',
    'System Reliability',
    'Performance Optimization'
  ];

  const stats = [
    { number: '14+', label: 'Years IT Experience' },
    { number: '3+', label: 'Years DevOps Focus' },
    { number: '1000+', label: 'Workloads Migrated' },
    { number: '5000+', label: 'Servers Managed' }
  ];

  const achievements = [
    'Reduced Azure infrastructure deployment time by 40% using modular Terraform templates',
    'Migrated over 1000+ workloads to Azure and AWS with <2% downtime',
    'Designed and implemented robust CI/CD pipelines, improving provisioning time by 50%',
    'Supervised 5000+ servers across hybrid environments during large-scale VMware migration projects',
    'Achieved 15–20% monthly cloud cost reduction through proactive resource optimization'
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            14+ Years of IT & DevOps Excellence - Elevating IT Infrastructure with Azure & AWS Expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Professional Summary */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong>Abhay Patil</strong> is a highly accomplished DevOps and Cloud Engineer, bringing over 
                <strong> 14 years of robust experience in IT infrastructure</strong>, with a focused 
                <strong> 3 years in DevOps engineering</strong>. His expertise spans large-scale enterprise 
                environments, driving significant advancements in cloud migration, infrastructure automation, 
                CI/CD pipeline design, and Kubernetes orchestration.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently serving as a <strong>DevOps Engineer</strong>, I specialize in managing large-scale 
                environments with expertise in the design, planning, and execution of seamless migration strategies 
                to <strong>Microsoft Azure</strong>. I have proven ability to optimize performance and ensure 
                minimal downtime during migrations, with a strong focus on automation, system reliability, 
                and cloud infrastructure management.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in <strong>Microsoft Azure, Amazon Web Services (AWS), and VMware ecosystems</strong>, 
                consistently delivering solutions that reduce downtime and enhance deployment efficiency.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span>Pune, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Calendar className="w-5 h-5 text-primary-600" />
                <span>Available for opportunities</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Award className="w-5 h-5 text-primary-600" />
                <span>Microsoft & AWS Certified</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Users className="w-5 h-5 text-primary-600" />
                <span>Team Leadership Experience</span>
              </div>
            </div>

            {/* Key Focus Areas */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Key Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {keyFocusAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Core Competencies: Architecting Scalable Cloud Solutions
            </h3>
            <div className="space-y-4">
              {coreCompetencies.map((competency, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <competency.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {competency.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {competency.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Key Achievements: Driving Efficiency & Cost Optimization
          </h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialization Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Deep Dive: Containerization & PaaS Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Containerization with Docker & Kubernetes
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My proficiency extends to leveraging Docker and Helm for efficient containerization, 
                alongside extensive experience in Kubernetes for robust container orchestration. 
                This enables the creation of highly portable, scalable, and resilient application 
                deployments, crucial for modern microservices architectures.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Azure Platform-as-a-Service (PaaS)
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                A strong command of Azure PaaS services, including App Services, Azure SQL, and Logic Apps, 
                allows for rapid application development and deployment without managing underlying infrastructure. 
                This capability significantly reduces operational overhead and accelerates time-to-market 
                for cloud-native applications.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
