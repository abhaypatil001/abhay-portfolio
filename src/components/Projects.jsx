import React, { useState } from 'react';
import { ExternalLink, Github, Play, Filter, Award } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Azure Kubernetes Service (AKS) Multi-Cluster Deployment',
      description: 'Deployed and maintained Azure Kubernetes Service clusters supporting 99% high-availability application environments with automated scaling and monitoring.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
      technologies: ['Azure AKS', 'Kubernetes', 'Helm', 'Azure Monitor', 'Docker'],
      category: 'kubernetes',
      github: '#',
      demo: '#',
      highlights: [
        'Achieved 99% uptime for production applications',
        'Implemented automated scaling based on resource utilization',
        'Integrated comprehensive monitoring and alerting',
        'Reduced deployment time by 50% with standardized templates'
      ]
    },
    {
      id: 2,
      title: 'Infrastructure as Code with Terraform Modules',
      description: 'Built modular Terraform templates for Azure resources including VMs, VNets, and AKS clusters, reducing provisioning time by 40% and standardizing deployments.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      technologies: ['Terraform', 'Azure Resource Manager', 'Azure CLI', 'Git', 'YAML'],
      category: 'infrastructure',
      github: '#',
      demo: '#',
      highlights: [
        'Reduced infrastructure provisioning time by 40%',
        'Created reusable modules for consistent deployments',
        'Implemented automated testing and validation',
        'Standardized infrastructure across multiple teams'
      ]
    },
    {
      id: 3,
      title: 'Large-Scale Cloud Migration to Azure',
      description: 'Led migration of 1000+ workloads to Azure VMware Solution and native Azure using VMware HCX and Azure Migrate, achieving >95% success rate with minimal downtime.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
      technologies: ['Azure Migrate', 'VMware HCX', 'Azure VMware Solution', 'PowerShell', 'Azure Site Recovery'],
      category: 'migration',
      github: '#',
      demo: '#',
      highlights: [
        'Migrated 1000+ workloads with >95% success rate',
        'Achieved <2% downtime during critical migrations',
        'Implemented comprehensive migration assessment and planning',
        'Reduced operational costs by 15-20% post-migration'
      ]
    },
    {
      id: 4,
      title: 'CI/CD Pipeline Implementation with Jenkins & Azure DevOps',
      description: 'Designed and implemented robust CI/CD pipelines using Jenkins and Azure DevOps, improving infrastructure provisioning time by 50% for containerized workloads.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop',
      technologies: ['Jenkins', 'Azure DevOps', 'Docker', 'Git', 'YAML', 'Azure Container Registry'],
      category: 'cicd',
      github: '#',
      demo: '#',
      highlights: [
        'Improved provisioning time by 50%',
        'Automated testing and deployment processes',
        'Implemented blue-green deployment strategies',
        'Integrated security scanning and compliance checks'
      ]
    },
    {
      id: 5,
      title: 'Azure PaaS Services Integration',
      description: 'Managed comprehensive Azure PaaS services including App Services, Azure SQL DB, Logic Apps, and integrated Key Vault and Azure Monitor for enhanced security and observability.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Azure App Services', 'Azure SQL', 'Logic Apps', 'Key Vault', 'Azure Monitor'],
      category: 'azure',
      github: '#',
      demo: '#',
      highlights: [
        'Integrated multiple PaaS services for scalable applications',
        'Implemented secure secret management with Key Vault',
        'Set up comprehensive monitoring and alerting',
        'Optimized performance and cost efficiency'
      ]
    },
    {
      id: 6,
      title: 'VMware Infrastructure Optimization',
      description: 'Managed over 5000 virtual machines and physical servers, implementing advanced VMware features including DRS, HA, vMotion, and disaster recovery using SRM.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      technologies: ['VMware vSphere', 'vCenter', 'ESXi', 'SRM', 'vROPs', 'HP OneView'],
      category: 'virtualization',
      github: '#',
      demo: '#',
      highlights: [
        'Managed 5000+ virtual machines across multiple data centers',
        'Implemented disaster recovery with 99.9% reliability',
        'Optimized resource utilization and performance',
        'Reduced hardware costs through efficient virtualization'
      ]
    },
    {
      id: 7,
      title: 'Multi-Cloud Cost Optimization',
      description: 'Implemented comprehensive cost optimization strategies across Azure and AWS environments, achieving 15-20% reduction in monthly cloud spend through resource optimization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Azure Cost Management', 'AWS Cost Explorer', 'PowerBI', 'Python', 'Azure Advisor'],
      category: 'optimization',
      github: '#',
      demo: '#',
      highlights: [
        'Achieved 15-20% reduction in monthly cloud costs',
        'Implemented automated resource rightsizing',
        'Created comprehensive cost monitoring dashboards',
        'Established governance policies for cost control'
      ]
    },
    {
      id: 8,
      title: 'Monitoring & Observability Platform',
      description: 'Implemented comprehensive monitoring solutions using Azure Monitor, New Relic, and vROPs for proactive system health monitoring and performance optimization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Azure Monitor', 'New Relic', 'vROPs', 'Log Analytics', 'Application Insights'],
      category: 'monitoring',
      github: '#',
      demo: '#',
      highlights: [
        'Implemented end-to-end monitoring across hybrid environments',
        'Reduced incident response time by 60%',
        'Created automated alerting and remediation workflows',
        'Improved system reliability and performance visibility'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'infrastructure', label: 'Infrastructure', count: projects.filter(p => p.category === 'infrastructure').length },
    { id: 'kubernetes', label: 'Kubernetes', count: projects.filter(p => p.category === 'kubernetes').length },
    { id: 'migration', label: 'Migration', count: projects.filter(p => p.category === 'migration').length },
    { id: 'cicd', label: 'CI/CD', count: projects.filter(p => p.category === 'cicd').length },
    { id: 'azure', label: 'Azure', count: projects.filter(p => p.category === 'azure').length },
    { id: 'monitoring', label: 'Monitoring', count: projects.filter(p => p.category === 'monitoring').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const achievements = [
    { number: '1000+', label: 'Workloads Migrated', icon: '🚀' },
    { number: '5000+', label: 'Servers Managed', icon: '🖥️' },
    { number: '40%', label: 'Deployment Time Reduced', icon: '⚡' },
    { number: '99%', label: 'Uptime Achieved', icon: '✅' }
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my DevOps and cloud engineering projects demonstrating expertise in 
            Azure, AWS, infrastructure automation, and large-scale system management.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-2xl mb-2">{achievement.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {achievement.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <button className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-200">
                      <Award size={20} />
                    </button>
                    <button className="p-3 bg-primary-600 rounded-full text-white hover:bg-primary-700 transition-colors duration-200">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">Key Achievements:</h4>
                  {project.highlights.slice(0, 2).map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Enterprise Project
                  </span>
                  <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200">
                    <Award size={16} />
                    <span className="text-sm font-medium">View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              These projects represent real-world implementations in enterprise environments. 
              I'd be happy to discuss the technical details, challenges overcome, and results achieved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://linkedin.com/in/abhay-patil-devops"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink className="mr-2 w-4 h-4" />
                View Professional Profile
              </a>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
