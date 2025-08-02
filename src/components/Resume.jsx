import React from 'react';
import { Download, Calendar, MapPin, Award, Briefcase, GraduationCap, FileText } from 'lucide-react';

const Resume = () => {
  // Exact experience from CV
  const experience = [
    {
      title: 'Senior Consultant',
      company: 'Capgemini',
      location: 'Pune, IN',
      period: '2021 – Present',
      description: 'Leading DevOps initiatives for enterprise-scale applications, managing cloud infrastructure, and implementing CI/CD pipelines with focus on Azure and AWS platforms.',
      achievements: [
        'Deployed and maintained Azure Kubernetes Service (AKS) clusters to support scalable and 99% high-availability application environments.',
        'Built modular Terraform templates for Azure (VMs, VNets, AKS), reducing provisioning time by 40% and standardizing deployments across teams.',
        'Managed a wide range of Azure PaaS services such as App Services, Azure SQL DB, File Storage, Logic Apps, and integrated Key Vault and Azure Monitor for enhanced security and observability.',
        'Designed and implemented CI/CD pipelines using Jenkins, reducing infrastructure provisioning time by 50% and deploying containerized workloads across Azure and AWS platforms.',
        'Led 200+ azure resource migration and setup of Azure VMs, storage accounts, NSGs, VNets, Azure Data Factory, private endpoints, and Recovery Services Vault, ensuring minimal downtime and adherence to best practices.',
        'Facilitated tenant-to-tenant Azure subscription transfers and directory changes during organizational migrations.',
        'Executed migration of 1000+ workloads to Azure VMware Solution, VMware Cloud on AWS, and native Azure using VMware HCX and Azure Migrate, achieving a >95% success rate with minimal downtime.',
        'Experience with AWS EC2, S3, RDS, IAM, and CloudFormation, with focus on provisioning, troubleshooting network setups, managing custom AMIs, and implementing S3 versioning and lifecycle policies.',
        'Collaborated with teams using Git for version control, with work aligned to 15 days sprint plans and regularly updated through Jira stories.'
      ]
    },
    {
      title: 'Principal Infrastructure Engineer',
      company: 'Mphasis',
      location: 'Pune, IN',
      period: '2019 – 2021',
      description: 'Controlled cloud infrastructure on Azure and AWS, ensuring efficient resource allocation and cost optimization while managing large-scale virtualized environments.',
      achievements: [
        'Control cloud infrastructure on Azure and AWS, ensuring efficient resource allocation and cost optimization.',
        'Utilized AWS EC2, S3, and VPC for provisioning and managing virtual machines and storage, as well as network services on Azure for scalable application deployment',
        'Head over 1000 VMs and physical servers, performing OS installations based on specific requirements.',
        'Administered vCenter 6 infrastructure, including troubleshooting issues related to virtual machines and ESXi hosts.',
        'Upgraded vCenter, ESXi hypervisors, and firmware OA, Virtual Connect, HPE C7000 G9 blades, while also installing, configuring, and upgrading firmware, and managing VLAN creation, logical interconnection port groups, and network sets on HP OneView.',
        'Conducted Windows servers 2012/2016 patching using HPSA to preserved security and system stability.'
      ]
    },
    {
      title: 'Sr. Technical Associate',
      company: 'Tata Communications',
      location: 'Pune, IN',
      period: '2019 – 2019',
      description: 'Managed VM lifecycle activities and infrastructure automation through vRA portal while handling vCenter and ESXi upgrades.',
      achievements: [
        'Managed VM lifecycle activities through the vRA portal, including requesting, destroying, and reconfiguring VMs, as well as troubleshooting failed workflows.',
        'Created new templates and published them as blueprints in vRA for streamlined deployment.',
        'Handled vCenter and ESXi 6.5 hypervisor upgrades, as well as firmware updates and IAM tasks like user creation, deletion, and permission updates.',
        'vROPs dashboards, capacity management, and scheduled various reports to monitor vCenter and the overall environment.'
      ]
    },
    {
      title: 'Sr. System Administrator',
      company: 'Wipro',
      location: 'Pune, IN',
      period: '2016 – 2019',
      description: 'Installed, configured, and maintained VMware virtual infrastructure while performing large-scale migrations and optimizations.',
      achievements: [
        'Installed, configured, & preserved VMware virtual infrastructure, including vCenter Server, vRealize Operations Manager (vROPs), VMware Site Recovery Manager (SRM), VMware ESXi, and VMware Update Manager.',
        'Perform VMware migrations, optimizing VMware for SAN storage utilization, and successfully migrated large numbers of virtual servers to new SAN arrays without impacting users.',
        'In charge of HP OneView 4.0 for the configuration, firmware upgrades, VLAN creation, logical interconnection port groups, and network sets.',
        'Utilized monitoring tools like vCenter Operations Manager and VMware Log Insight for advanced troubleshooting and root cause analysis, ensuring rapid incident resolution.',
        'Control over 5000 virtual machines and physical servers, including overseeing data center migration projects, P2V and V2V migrations using VMware Converter, and upgrading vCenter Server.',
        'Setup VMware clusters, enabled HA and DRS features, and followed change management processes for documentation, with experience in disaster recovery using SRM and storage replication.'
      ]
    },
    {
      title: 'System Administrator',
      company: 'Value Point Systems',
      location: 'Pune, IN',
      period: '2015 – 2016',
      description: 'Provided comprehensive system support for large user base while managing Active Directory environments and VMware infrastructure.',
      achievements: [
        'Provided system support for over 2500 employees, including troubleshooting user account lockouts with AD Lockout Tool & Microsoft Operations Manager, & managing server backups & recovery using Symantec Backup.',
        'Superintend vCenter Server configuration and set up VM guest operating systems through vCenter, as well as deploying different operating systems on blade and stand-alone servers using ILO.',
        'Setup and organized domain controllers, additional domain controllers, DNS, and DHCP servers, and rule Active Directory environments, including users, groups, organizational units (OU), and group policies.',
        'Configuration of ESXi hosts, vCenter Server, vSphere Client, and vSphere Web Client, and implemented advanced VMware features such as DRS, HA, vMotion, Storage vMotion, NIC teaming, and Update Manager.'
      ]
    },
    {
      title: 'System Engineer',
      company: 'Winning Edge Technology',
      location: 'Pune, IN',
      period: '2012 – 2015',
      description: 'Provided infrastructure support and administered VMware vSphere environments while handling user account management and network operations.',
      achievements: [
        'Infrastructure support for 100+ users, including installation and configuration of Windows Server (2003–2012) with roles like AD, DNS, and DHCP.',
        'Administered VMware vSphere 5.x environments, performing VM provisioning, resource allocation, and template deployments via vCenter Server.',
        'Handled user account management, Outlook configuration, Group Policies, and troubleshooting of network printers and client issues.',
        'Ensured network stability through daily backups and maintenance of LAN connectivity, while offering both server & desktop support.'
      ]
    },
    {
      title: 'Team Leader',
      company: 'Tikona Digital Network',
      location: 'Pune, IN',
      period: '2009 – 2010',
      description: 'Led IT support team while managing user onboarding, system installations, and maintaining endpoint security.',
      achievements: [
        'Led a team of 5+ IT support staff, managing user onboarding, system installations, and data recovery.',
        'Installation of Windows/Linux OS, network devices, & remote support using TeamViewer & RDP tools.',
        'Ensured system stability and endpoint security by maintaining printers, scanners, and antivirus configurations.'
      ]
    }
  ];

  // Exact education from CV
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Sikkim Manipal University',
      location: 'India',
      period: '2011 - 2013',
      description: 'Comprehensive graduate program covering advanced computer science concepts, software engineering, system design, and emerging technologies with focus on practical applications.'
    },
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'Nutan Maratha College',
      location: 'India',
      period: '2006 - 2009',
      description: 'Undergraduate program providing strong foundation in computer science fundamentals, programming languages, data structures, algorithms, and computer systems.'
    }
  ];

  // Exact achievements from CV
  const keyAchievements = [
    'Improved deployment efficiency by implementing CI/CD pipelines using Jenkins and Azure DevOps.',
    'Reduced Azure infrastructure deployment time by 40% by developing reusable Terraform modules to automate provisioning of native Azure services including AKS, VMs, VNets, and App Services.',
    'Migrated 1000+ workloads to Azure and AWS using Azure Migrate and VMware HCX, achieving <2% downtime.',
    'Optimized cloud costs by identifying idle resources in Azure, leading to a 15–20% reduction in monthly spend.',
    'Supervised 5000+ servers across multiple data center, supporting large-scale VMware environments and driving successful P2V and V2V migrations.'
  ];

  const handleDownloadResume = () => {
    // Create a link to download the CV - use relative path
    const link = document.createElement('a');
    link.href = './CV_Abhay_Patil_DevOps.pdf';
    link.download = 'Abhay_Patil_DevOps_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my 14+ year journey in IT infrastructure and DevOps engineering, 
            showcasing progressive growth and increasing responsibilities across leading organizations.
          </p>
          <button
            onClick={handleDownloadResume}
            className="btn btn-primary"
          >
            <Download className="mr-2 w-4 h-4" />
            Download Complete Resume
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Professional Experience
                </h3>
              </div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index !== experience.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      
                      <div className="flex-1 card p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                              {job.title}
                            </h4>
                            <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                              {job.company}
                            </p>
                          </div>
                          <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1 mb-1">
                              <Calendar className="w-4 h-4" />
                              <span>{job.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {job.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h5 className="font-medium text-gray-900 dark:text-white">
                            Key Responsibilities & Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {job.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-accent-600 dark:text-accent-400 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Key Achievements */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Key Achievements
                </h3>
              </div>

              <div className="space-y-4">
                {keyAchievements.map((achievement, index) => (
                  <div key={index} className="card p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Career Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Total Experience</span>
                  <span className="font-semibold text-gray-900 dark:text-white">14+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">DevOps Focus</span>
                  <span className="font-semibold text-gray-900 dark:text-white">3+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Workloads Migrated</span>
                  <span className="font-semibold text-gray-900 dark:text-white">1000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Servers Managed</span>
                  <span className="font-semibold text-gray-900 dark:text-white">5000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Cost Reduction</span>
                  <span className="font-semibold text-gray-900 dark:text-white">15-20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Success Rate</span>
                  <span className="font-semibold text-gray-900 dark:text-white">&gt;95%</span>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="card p-6 text-center">
              <FileText className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Complete Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Download my complete resume with detailed work history and achievements.
              </p>
              <button
                onClick={handleDownloadResume}
                className="btn btn-primary w-full"
              >
                <Download className="mr-2 w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
