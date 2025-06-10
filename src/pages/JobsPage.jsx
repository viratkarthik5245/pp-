import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Briefcase, MapPin, Search, Filter, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// Enhanced job listings with applyLink and placeholder details
const jobListings = [
 
  {
  id: 1,
  title: 'UI Developer - Associate - Software Engineering',
  company: 'Morgan Stanley',
  location: 'Bengaluru, India',
  type: 'Full-time',
  tags: ['Angular', 'Java', 'Spring', 'Microservices', 'Kafka', 'REST APIs'],
  postedDate: '2 days ago',
  batchYear: '2023/2024',
  experienceLevel: '0–2 years',
  applyLink: 'https://ms.wd5.myworkdayjobs.com/en-US/External/job/UI-Developer---Associate---Software-Engineering_PT-JR013406',
  description: 'Morgan Stanley is hiring a UI Developer (Associate level) for Institutional Securities Technology. Candidates will contribute to high-quality engineering solutions across UI and backend layers, using Angular, Java, Spring, REST, Kafka, and modern DevOps tools.',
  hiringPattern: [
    { stage: 'Resume Screening', details: 'Shortlisting based on technical skillset and relevant experience.' },
    { stage: 'Online Technical Round', details: 'Coding + technical MCQs on Java, Angular, System Design.' },
    { stage: 'Technical Interviews (2 Rounds)', details: 'Project discussions, OOPs, DSA, system architecture.' },
    { stage: 'HR Interview', details: 'Behavioral questions, cultural fit, career growth alignment.' }
  ],
  previousQuestions: [
    { type: 'Coding', question: 'Implement a real-time data dashboard using Angular and REST APIs.' },
    { type: 'System Design', question: 'Design a scalable notification service using Kafka and microservices.' },
    { type: 'CS Fundamentals', question: 'Explain the use of dependency injection in Spring.' }
  ]
},
{
  id: 2,
  title: 'Intern - AI/ML',
  company: 'DP World',
  location: 'Bangalore, India',
  type: 'Full-time',
  tags: ['Trending', 'Python', 'Machine Learning', 'TensorFlow', 'PyTorch', 'SQL'],
  postedDate: '2 days ago',
  batchYear: '2024/2025/2026',
  experienceLevel: 'Internship',
  applyLink: 'https://ehpv.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/17720',
  description: 'DP World is hiring AI/ML Interns to work with cross-functional teams on real-world ML problems. Interns will research, build, and deploy machine learning models while gaining hands-on experience with data, cloud platforms, and MLOps tools.',
  hiringPattern: [
    { stage: 'Resume Shortlisting', details: 'Profile and project-based screening with a focus on ML skills.' },
    { stage: 'Online Assessment', details: 'Python + ML basics + problem-solving scenarios.' },
    { stage: 'Technical Interview', details: 'ML algorithms, past projects, cloud tools, and coding questions.' },
    { stage: 'HR Interview', details: 'Internship expectations, availability, and cultural fit.' }
  ],
  previousQuestions: [
    { type: 'Coding', question: 'Implement a linear regression model from scratch in Python.' },
    { type: 'ML Theory', question: 'Explain overfitting and how to prevent it in deep learning models.' },
    { type: 'Tools', question: 'Describe how MLflow helps in model deployment and monitoring.' }
  ]
},{
  id: 3,
  title: 'Data Science Intern',
  company: 'GE Aerospace',
  location: 'Bengaluru, India',
  type: 'Full-time',
  tags: ['NLP', 'LLMs', 'Python', 'Flask', 'HuggingFace', 'AWS', 'React'],
  postedDate: '06/02/2025',
  batchYear: '2026/2027',
  experienceLevel: 'Internship',
  applyLink: 'https://careers.geaerospace.com/global/en/apply?jobSeqNo=GAOGAYGLOBALR5010969EXTERNALENGLOBAL&step=1&stepname=personalInformation',
  description: 'GE Aerospace is hiring Data Science Interns to work on Natural Language Processing (NLP), Large Language Models (LLMs), and agentic AI systems. Interns will contribute to designing scalable AI software solutions in a collaborative tech environment.',
  hiringPattern: [
    { stage: 'Resume Shortlisting', details: 'Based on academic background and relevant AI/ML/NLP experience.' },
    { stage: 'Online Assessment', details: 'Coding challenges and questions on AI, NLP, and Python.' },
    { stage: 'Technical Interview', details: 'Discussion on past projects, frameworks (Flask/React), and NLP use cases.' },
    { stage: 'HR Interview', details: 'Culture fit and communication assessment.' }
  ],
  previousQuestions: [
    { type: 'Coding', question: 'Build a REST API using Flask to serve predictions from a trained NLP model.' },
    { type: 'AI/ML', question: 'Explain the difference between fine-tuning and pre-training in LLMs.' },
    { type: 'Tools & Deployment', question: 'How would you deploy a Transformer model on AWS?' }
  ]
},{
  id: 4,
  title: 'Graduate Engineer Trainee - Cybersecurity',
  company: 'Emerson',
  location: 'Pune, Maharashtra, India (Hybrid)',
  type: 'Full-time',
  tags: ['Trending', 'Cybersecurity', 'Penetration Testing', 'Python', 'Kali Linux', 'OWASP'],
  postedDate: 'Recently',
  batchYear: '2024/2025',
  experienceLevel: 'Fresher',
  applyLink: 'https://ehpv.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/17720/apply/email',
  description: 'Emerson is hiring Graduate Engineer Trainees for its cybersecurity team in Pune. You will work with global product security groups performing vulnerability analysis, pen testing, and protocol fuzzing on critical infrastructure applications.',
  hiringPattern: [
    { stage: 'Resume Screening', details: 'Shortlisting based on academic background and cybersecurity exposure.' },
    { stage: 'Technical Assessment', details: 'MCQs + practical test on penetration testing tools and security protocols.' },
    { stage: 'Technical Interview', details: 'Deep dive into cybersecurity concepts, tools (e.g., Burp Suite, Kali), and vulnerability mitigation.' },
    { stage: 'HR Interview', details: 'Cultural fit, career aspirations, and communication assessment.' }
  ],
  previousQuestions: [
    { type: 'Cybersecurity Tools', question: 'Explain how you would use Burp Suite to test for injection vulnerabilities in a web app.' },
    { type: 'Protocol Knowledge', question: 'What’s the difference between HTTPS and TLS? Why is each important?' },
    { type: 'Scenario-based', question: 'A mobile app has failed an OWASP Top 10 test for insecure communication. How would you approach fixing it?' }
  ]
},
{
  id: 5,
  title: 'Associate Software Engineer',
  company: 'Alegeus',
  location: 'Bangalore, India',
  type: 'Full-time',
  tags: ['Fintech', 'Healthtech', 'Java', 'Cloud', 'SQL'],
  postedDate: '24 days ago',
  batchYear: '2023/2024',
  experienceLevel: '0–2 years',
  applyLink: 'https://alegeus.wd1.myworkdayjobs.com/en-US/Alegeus_External_Careers/job/Bangalore---India/Associate-Software-Engineer_R-100903/apply/',
  description: 'Alegeus is hiring Associate Software Engineers to work on next-gen fintech and healthtech solutions. You will join a fast-paced, growth-driven team that values innovation, collaboration, and personal development.',
  hiringPattern: [
    { stage: 'Resume Shortlisting', details: 'Profile review focusing on Java, SQL, and system design basics.' },
    { stage: 'Online Assessment', details: 'Coding problems and scenario-based tech MCQs.' },
    { stage: 'Technical Interview(s)', details: 'Covers backend development, system thinking, and teamwork scenarios.' },
    { stage: 'HR Interview', details: 'Discusses aspirations, company culture fit, and compensation expectations.' }
  ],
  previousQuestions: [
    { type: 'Coding', question: 'Build a RESTful API using Java and explain your approach.' },
    { type: 'SQL', question: 'Write a query to find the second highest salary from an employee table.' },
    { type: 'System Design', question: 'How would you design a scalable appointment booking system?' }
  ]
},
{
  id: 6,
  title: 'Software Engineer, University Graduate, 2026',
  company: 'Google',
  location: 'Bengaluru, Gurugram, Hyderabad, Mumbai, Pune (India)',
  type: 'Full-time',
  tags: ['C++', 'Java', 'Python', 'Machine Learning', 'Distributed Systems', 'Linux'],
  postedDate: 'Recently',
  batchYear: '2026',
  experienceLevel: 'Fresher',
  applyLink: 'https://www.google.com/about/careers/applications/apply/81ac8c68-5db4-4000-9d33-d6af86c6372a/form?src=Online',
  description: 'Google is hiring Software Engineers from the 2026 batch to work on cutting-edge products in areas like AI, NLP, distributed systems, search, and large-scale infrastructure. You will be part of dynamic teams solving complex problems across the full stack.',
  hiringPattern: [
    { stage: 'Online Assessment', details: 'Coding test with algorithmic challenges in C++, Java, or Python.' },
    { stage: 'Technical Interviews (2–3 Rounds)', details: 'Focus on DSA, systems design, and problem-solving.' },
    { stage: 'Hiring Committee Review', details: 'Comprehensive evaluation of interview performance and fit.' },
    { stage: 'Offer & Team Match', details: 'Based on preferences and hiring needs across teams and locations.' }
  ],
  previousQuestions: [
    { type: 'Coding', question: 'Given a large dataset, design an efficient way to process and retrieve top-k frequent elements.' },
    { type: 'System Design', question: 'Design a distributed file system like Google File System.' },
    { type: 'Machine Learning', question: 'Explain the trade-offs between model accuracy and latency in real-time prediction systems.' }
  ]
},
{
  id: 7,
  title: 'Graduate Virtual Career Fair - Multiple Roles (Phase 6)',
  company: 'Superset Varsity',
  location: 'Bangalore, Chennai, Coimbatore, Hyderabad, Kochi, Kolkata, Pune, Mumbai',
  type: 'Full-time',
  tags: ['Technical Support', 'Software Support', 'Application Support', 'IT Operations'],
  postedDate: 'Recently',
  batchYear: '2023/2024',
  experienceLevel: 'Fresher (3-Year Graduates)',
  applyLink: 'https://app.joinsuperset.com/join/#/signup/student/jobprofiles/b157575c-64fa-44e3-a6d6-de6b3a6d68d1',
  description: 'Superset Varsity is conducting a Graduate Virtual Career Fair (Phase 6) to hire for multiple technical roles across cities. This opportunity is open to 3-year graduates from batches 2023 and 2024.',
  hiringPattern: [
    { stage: 'Application Submission', details: 'Register and apply via Superset platform before June 13, 2025, 11:00 AM.' },
    { stage: 'Online Assessment', details: 'Technical questions based on role applied (support/development).' },
    { stage: 'Interview', details: 'Technical + HR round based on role shortlisted for.' }
  ],
  previousQuestions: [
    { type: 'Support Scenario', question: 'How would you troubleshoot a web application not loading for a user?' },
    { type: 'Database', question: 'Write a SQL query to fetch the 3rd highest salary from a table.' },
    { type: 'IT Operations', question: 'What is the purpose of a runbook in system monitoring?' }
  ]
},
{
  id: 8,
  title: 'Off-Campus Fresher Hiring Drive 2025',
  company: 'NCS (a Singtel Group Company)',
  location: 'India (Remote & IDC Offices)',
  type: 'Full-time',
  tags: ['IT Services', 'Cloud', 'Data', 'Cybersecurity', 'Digital Transformation'],
  postedDate: 'Recently',
  batchYear: '2025',
  experienceLevel: 'Fresher',
  applyLink: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=9diQymOJbku8qZrEaLzHqNxQYEspi3tPmcHfMEubmiVUMENQNjZVUjdMS0FaS0UzTDA5U09WTzMzNi4u',
  description: 'NCS India, part of Singtel Group, is hiring fresh graduates as part of its 2025 off-campus drive. Join a global tech leader delivering solutions in cloud, digital, cybersecurity, application services, and infrastructure.',
  hiringPattern: [
    { stage: 'Registration', details: 'Apply via Microsoft or Google form provided.' },
    { stage: 'Online Assessment', details: 'Evaluate technical aptitude and problem-solving ability.' },
    { stage: 'Technical Interview', details: 'Assess knowledge in chosen tech domain and projects.' },
    { stage: 'HR Interview', details: 'Final discussion on role, compensation, and cultural fit.' }
  ],
  previousQuestions: [
    { type: 'Coding', question: 'Write a function to validate an email address format using regular expressions.' },
    { type: 'Cloud Concepts', question: 'Explain the differences between IaaS, PaaS, and SaaS.' },
    { type: 'Behavioral', question: 'Describe a time you worked in a team to solve a technical challenge.' }
  ]
},
{
  id: 9,
  title: 'Python Developer',
  company: 'Wipro',
  location: 'Hyderabad, India',
  type: 'Full-time',
  tags: ['Python', 'AI', 'Product Development', 'Security', 'Consulting'],
  postedDate: 'Recently',
  batchYear: '2021–2025',
  experienceLevel: '0–3 years',
  applyLink: 'https://careers.wipro.com/job/Hyderabad-Python-Developer-500032/1150794955/?feedId=420455&utm_source=Indeed&utm_medium=organic&utm_campaign=Indeed',
  description: 'Wipro is hiring Python Developers to build AI-driven solutions and minimum viable products (MVPs) that address real-world business challenges. This role focuses on full-cycle development, from model creation to client interaction and solution deployment.',
  hiringPattern: [
    { stage: 'Application Submission', details: 'Apply online through Wipro Careers portal.' },
    { stage: 'Online Assessment', details: 'Technical MCQs and Python coding round.' },
    { stage: 'Technical Interview', details: 'Focus on AI solution design, Python skills, and business logic.' },
    { stage: 'HR Interview', details: 'Cultural fit, salary discussion, and career aspirations.' }
  ],
  previousQuestions: [
    { type: 'Coding', question: 'Write a Python function to detect anomalies in a time-series dataset.' },
    { type: 'AI/ML', question: 'How would you build an AI recommendation engine for e-commerce?' },
    { type: 'System Design', question: 'Design a scalable backend for a real-time chatbot application.' }
  ]
},
 {
    id: 10,
    title: 'Software Engineer',
    company: 'Mphasis',
    location: 'Mumbai, India',
    type: 'Full-time',
    tags: ['Java', 'Python', 'Software Development'],
    postedDate: '9 June 2025',
    batchYear: '2021/2022/2023/2024',
    experienceLevel: 'Fresher',
    applyLink: 'https://mphasis.ripplehire.com/candidate/?token=B4UkLILwjQRHGDZ8Zziq&source=LINKEDINCAMPAIGNNEW&ref=LINKEDINCAMPAIGNNEW#detail/job/700042',
    description: 'Mphasis is hiring Software Engineers for its Mumbai office. Ideal for recent graduates looking to build careers in software development.'
  },
  {
    id: 11,
    title: 'Frontend Developer',
    company: 'Playo',
    location: 'Bangalore, India',
    type: 'Full-time',
    tags: ['Frontend', 'JavaScript', 'React'],
    postedDate: '9 June 2025',
    batchYear: '2020/2021',
    experienceLevel: 'Fresher/Junior',
    applyLink: 'https://www.linkedin.com/jobs/view/4243295357',
    description: 'Playo is hiring Frontend Developers skilled in React/JavaScript. A great opportunity to work on consumer-facing sports products.'
  },
  {
    id: 12,
    title: 'Software Engineer',
    company: 'Crunchyroll',
    location: 'Hyderabad, India',
    type: 'Full-time',
    tags: ['Backend', 'Web Development', 'Media'],
    postedDate: '9 June 2025',
    batchYear: '2021/2022/2023',
    experienceLevel: '0–2 years',
    applyLink: 'http://job-boards.greenhouse.io/crunchyroll/jobs/6696781?gh_jid=6696781&gh_src=16d404cd1us',
    description: 'Crunchyroll is looking for Software Engineers to join its Hyderabad team. Work on global media streaming solutions.'
  },
  {
    id: 13,
    title: 'Data Engineer',
    company: 'Visa',
    location: 'Bangalore, India',
    type: 'Full-time',
    tags: ['Java', 'Python', 'Hadoop', 'Spark'],
    postedDate: '9 June 2025',
    batchYear: '2022/2023/2024',
    experienceLevel: '0.5–1.5 years',
    applyLink: 'https://jobs.smartrecruiters.com/Visa/744000063887675-data-engineer-0-5-1-5-years-of-experience-in-java-python-hadoop-spark-',
    description: 'Visa is hiring Data Engineers to handle large-scale data pipelines and processing using Spark, Hadoop, and Python.'
  },
  {
    id: 14,
    title: 'Software Engineer',
    company: 'Zunno AI',
    location: 'Remote',
    type: 'Full-time',
    tags: ['AI', 'Remote', 'Software Engineer'],
    postedDate: '9 June 2025',
    batchYear: '2023/2024/2025',
    experienceLevel: 'Fresher',
    applyLink: 'https://www.linkedin.com/jobs/view/4244776727',
    description: 'Zunno AI is hiring Software Engineers remotely to work on cutting-edge AI products. Ideal for new grads.'
  },
  {
    id: 15,
    title: 'Software Engineer',
    company: 'PayNways Worldwide',
    location: 'Noida, India',
    type: 'Full-time',
    tags: ['Software Engineer', 'Web', 'Java'],
    postedDate: '9 June 2025',
    batchYear: '2022/2023/2024',
    experienceLevel: 'Fresher',
    applyLink: 'https://www.linkedin.com/jobs/view/4111382303',
    description: 'PayNways Worldwide is hiring Software Engineers in Noida. Suitable for graduates with a passion for coding and fintech.'
  }
  ,
   {
    id: 16,
    title: 'UI Developer - Associate - Software Engineering',
    company: 'Morgan Stanley',
    location: 'Bengaluru, India',
    type: 'Full-time',
    tags: ['UI Development', 'JavaScript', 'Angular', 'System Design'],
    postedDate: 'Recently',
    batchYear: '2021 or earlier',
    experienceLevel: '1+ years',
    applyLink: 'https://ms.wd5.myworkdayjobs.com/External/job/Bengaluru-India/UI-Developer---Associate---Software-Engineering_PT-JR013406',
    description: 'Morgan Stanley is hiring experienced UI Developers to build robust frontend solutions for enterprise software. Strong Angular and system design skills preferred.',
    expectedSalary: '20–30 LPA'
  },
  {
    id: 17,
    title: 'Software Engineer - Integration',
    company: 'Ontic',
    location: 'India (Remote/Hybrid)',
    type: 'Full-time',
    tags: ['Integration', 'API', 'Software Engineering'],
    postedDate: 'Recently',
    batchYear: '2020–2024',
    experienceLevel: '0–4 years',
    applyLink: 'https://jobs.ashbyhq.com/Ontic/177a5937-0abf-4288-9b47-ffb0e71ef0b8?utm_source=QXeoneAMj6',
    description: 'Ontic is hiring Software Engineers to work on integration tools and platforms, solving real-time system challenges.',
    expectedSalary: '12–20 LPA'
  },
  {
    id: 18,
    title: 'Associate Software Engineer',
    company: 'Alegeus',
    location: 'Bangalore, India',
    type: 'Full-time',
    tags: ['Java', 'Backend', 'Cloud'],
    postedDate: 'Recently',
    batchYear: '2023',
    experienceLevel: '1 year',
    applyLink: 'https://alegeus.wd1.myworkdayjobs.com/Alegeus_External_Careers/job/Bangalore---India/Associate-Software-Engineer_R-100903',
    description: 'Alegeus is looking for software engineers with backend and cloud knowledge to work on healthcare tech platforms.',
    expectedSalary: '9–13 LPA'
  },
  {
    id: 19,
    title: 'Frontend Developer',
    company: 'Ameriprise Financial Services, LLC',
    location: 'India (likely remote/hybrid)',
    type: 'Full-time',
    tags: ['Frontend', 'React', 'Web Development'],
    postedDate: 'Recently',
    batchYear: '2023/2024',
    experienceLevel: '0–1 year',
    applyLink: 'https://www.linkedin.com/jobs/view/4245921972/',
    description: 'Ameriprise is hiring junior frontend developers to build UI interfaces and web solutions using modern frontend stacks.',
    expectedSalary: '4–8 LPA'
  },
  {
  id: 20,
  title: 'Off-Campus Drive 2025 – Software Engineer',
  company: 'NCS Group',
  location: 'India (Remote & IDC Offices)',
  type: 'Full-time',
  tags: ['CS', 'IT', 'Digital', 'Cloud', 'Software Engineering'],
  postedDate: '9 June 2025',
  batchYear: '2025',
  experienceLevel: 'Fresher',
  applyLink: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=9diQymOJbku8qZrEaLzHqNxQYEspi3tPmcHfMEubmiVUMENQNjZVUjdMS0FaS0UzTDA5U09WTzMzNi4u',
  description: 'NCS Group is conducting an Off-Campus Drive for 2025 CS/IT graduates. Candidates must have 80% in 10th and 12th, and a minimum of 8.0 CGPA in BE/BTech. This is a great opportunity to join a global tech leader delivering end-to-end digital transformation solutions.',
  hiringPattern: [
    { stage: 'Eligibility Check', details: '10th/12th ≥ 80%, BE/BTech (CS/IT) ≥ 8.0 CGPA, 2025 batch only' },
    { stage: 'Application Submission', details: 'Apply via Microsoft Form' },
    { stage: 'Online Assessment', details: 'Technical & aptitude test' },
    { stage: 'Technical Interview', details: 'Assessment of problem-solving and tech skills' },
    { stage: 'HR Interview', details: 'Fitment and offer discussion' }
  ],
  previousQuestions: [
    { type: 'Aptitude', question: 'Solve a series-based logical reasoning problem.' },
    { type: 'Technical', question: 'Explain how you would design a login system with secure authentication.' },
    { type: 'Behavioral', question: 'Describe a situation where you overcame a project challenge in a team.' }
  ]
},
{
  id: 21,
  title: 'ML Data Associate I',
  company: 'Amazon',
  location: 'India (likely Hyderabad)',
  type: 'Full-time',
  tags: ['Data Annotation', 'Machine Learning', 'AI', 'Data Operations'],
  postedDate: 'Recently',
  batchYear: '2021–2024',
  experienceLevel: '0–2 years',
  applyLink: 'https://www.amazon.jobs/en/jobs/2997479/ml-data-associate-i',
  description: 'Amazon is hiring ML Data Associates to help annotate and label speech and text data for training advanced ML models. This is a great opportunity to work at the intersection of data operations and AI.',
  expectedSalary: 'Not Disclosed'
}










];


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const experienceLevels = [
  { value: '', label: 'All Experience Levels' },
  { value: 'Fresher', label: 'Fresher' },
  { value: 'Internship', label: 'Internship' },
  { value: 'Experienced', label: 'Experienced' },
];

// Function to get job by ID (simulating data fetching)
export const getJobById = (id) => {
  const jobId = parseInt(id, 10);
  return jobListings.find(job => job.id === jobId);
};


const JobsPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filters, setFilters] = React.useState({ company: '', role: '', batchYear: '', experienceLevel: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };
  
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const applyFilters = () => {
    // This function can be used for more complex filter logic if needed,
    // but current filtering is real-time.
    console.log("Applying filters:", filters);
  };

  const filteredJobs = jobListings.filter(job => {
    const searchTermMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const companyFilterMatch = filters.company ? job.company.toLowerCase().includes(filters.company.toLowerCase()) : true;
    const roleFilterMatch = filters.role ? job.title.toLowerCase().includes(filters.role.toLowerCase()) : true;
    const batchYearFilterMatch = filters.batchYear ? job.batchYear === filters.batchYear : true;
    const experienceLevelFilterMatch = filters.experienceLevel ? job.experienceLevel === filters.experienceLevel : true;

    return searchTermMatch && companyFilterMatch && roleFilterMatch && batchYearFilterMatch && experienceLevelFilterMatch;
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Find Your Next Opportunity</h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Browse through hundreds of daily updated job listings. Use filters to narrow down your search and find the perfect match.
        </p>
      </motion.div>

      <motion.div 
        className="mb-10 p-6 bg-background shadow-lg rounded-lg border border-border"
        initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.2, duration: 0.5 } }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div className="relative md:col-span-2 lg:col-span-1">
            <Input
              type="text"
              placeholder="Search by keyword..."
              value={searchTerm}
              onChange={handleSearchTermChange}
              className="pl-10 h-12 text-base"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          
          <Input 
            type="text" 
            name="company"
            placeholder="Company" 
            value={filters.company}
            onChange={handleInputChange}
            className="h-12 text-base" 
          />
          <Input 
            type="text" 
            name="role"
            placeholder="Role (e.g., SDE)" 
            value={filters.role}
            onChange={handleInputChange}
            className="h-12 text-base" 
          />
          <Input 
            type="text" 
            name="batchYear"
            placeholder="Batch Year (e.g., 2024)" 
            value={filters.batchYear}
            onChange={handleInputChange}
            className="h-12 text-base" 
          />
          <Select onValueChange={(value) => handleSelectChange('experienceLevel', value)} defaultValue="">
            <SelectTrigger className="h-12 text-base" placeholder="Experience Level">
              {filters.experienceLevel ? experienceLevels.find(el => el.value === filters.experienceLevel)?.label : "Experience Level"}
            </SelectTrigger>
            <SelectContent>
              {experienceLevels.map(level => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end mt-4">
          <Button onClick={applyFilters} className="bg-primary hover:bg-primary/90">
            <Filter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: 0.4, duration: 0.5 } }}
      >
        {filteredJobs.length > 0 ? filteredJobs.map((job, index) => (
          <motion.div key={job.id} custom={index} initial="hidden" animate="visible" variants={{ ...fadeIn, transition: { delay: index * 0.1 + 0.4, duration: 0.5 } }}>
            <Card className="h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 bg-card text-card-foreground">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-primary">{job.title}</CardTitle>
                  {job.tags.includes('Trending') && <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">Trending</span>}
                  {job.tags.includes('Hot') && <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium">Hot</span>}
                </div>
                <CardDescription className="text-md text-foreground/80">{job.company}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <MapPin className="h-4 w-4 mr-2" /> {job.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Briefcase className="h-4 w-4 mr-2" /> {job.type}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4 mr-2" /> Batch: {job.batchYear}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Award className="h-4 w-4 mr-2" /> {job.experienceLevel}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t pt-4">
                <span className="text-xs text-muted-foreground">Posted: {job.postedDate}</span>
                <Button variant="default" size="sm" asChild className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                  <Link to={`/jobs/${job.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )) : (
          <p className="col-span-full text-center text-lg text-muted-foreground py-10">No jobs found matching your criteria. Try adjusting your search or filters.</p>
        )}
      </motion.div>
      
      {filteredJobs.length > 0 && (
        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="mr-2">Previous</Button>
          <Button variant="outline">Next</Button>
        </div>
      )}
    </div>
  );
};

export default JobsPage;