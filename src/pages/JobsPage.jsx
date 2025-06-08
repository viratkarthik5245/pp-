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
    title: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    location: 'Bengaluru, India',
    type: 'Full-time',
    tags: ['Trending', 'Java', 'Python'],
    postedDate: '2 days ago',
    batchYear: '2024',
    experienceLevel: 'Fresher',
    applyLink: 'https://example.com/apply/techsolutions-se',
    description: 'Join our dynamic team of software engineers to build cutting-edge applications. You will be responsible for designing, developing, and maintaining software solutions.',
    hiringPattern: [
      { stage: 'Online Assessment', details: 'Coding test (2 questions) + MCQs on CS fundamentals.' },
      { stage: 'Technical Interview 1', details: 'Focus on Data Structures & Algorithms, Problem Solving.' },
      { stage: 'Technical Interview 2', details: 'System Design concepts, Project discussions.' },
      { stage: 'HR Interview', details: 'Behavioral questions, Cultural fit.' }
    ],
    previousQuestions: [
      { type: 'Coding', question: 'Find the duplicate number in an array of N+1 integers.' },
      { type: 'System Design', question: 'Design a URL shortening service like TinyURL.' },
      { type: 'CS Fundamentals', question: 'Explain the difference between TCP and UDP.' }
    ]
  },
  {
    id: 2,
    title: 'Software Development Engineer Backend Intern',
    company: 'JUSPAY',
    location: 'India (Remote/Onsite not specified)',
    type: 'Internship',
    tags: ['Backend', '2025', '2026'],
    postedDate: 'Just Now',
    batchYear: '2025/2026',
    experienceLevel: 'Internship',
    applyLink: 'https://unstop.com/internships/software-development-engineer-backend-internship-juspay-1493182?utm_source=DotAware&utm_medium=Affiliates&utm_campaign=JUSPAY06062025&ref=AffDAW',
    description: 'Join JUSPAY as a Backend Intern and build scalable backend systems. Hands-on coding opportunity with monthly pay of 50k–1L.',
    hiringPattern: [
      { stage: 'Online Coding', details: 'Backend-focused coding challenge.' },
      { stage: 'Technical Interview', details: 'Core backend systems and problem solving.' }
    ],
    previousQuestions: [
      { type: 'Backend', question: 'Build a RESTful API for an e-commerce cart system.' }
    ]
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'Ericsson',
    location: 'India (Remote/Hybrid)',
    type: 'Full-time',
    tags: ['Data Science', 'Experienced'],
    postedDate: 'Recently',
    batchYear: '2022+',
    experienceLevel: 'Experienced (1+ years)',
    applyLink: 'https://unstop.com/jobs/data-scientist-ericsson-1496800?utm_source=DotAware&utm_medium=Affiliates&utm_campaign=ERICSSON05062025&ref=AffDAW',
    description: 'Work with Ericsson to drive insights from large datasets. Requires strong experience in data modeling, ML, and statistics.',
    hiringPattern: [
      { stage: 'Resume Shortlisting', details: 'Based on experience in ML and data analysis.' },
      { stage: 'Technical Interview', details: 'Deep-dive on data projects and technical skills.' },
      { stage: 'HR Interview', details: 'Work culture fit and behavioral questions.' }
    ],
    previousQuestions: [
      { type: 'ML', question: 'Explain overfitting and how to prevent it.' },
      { type: 'Data', question: 'How do you deal with missing data in a dataset?' }
    ]
  },
  {
    id: 4,
    title: 'Frontend Web Developer Intern',
    company: 'Zuddl',
    location: 'India (Remote)',
    type: 'Internship',
    tags: ['Frontend', 'React', 'JavaScript'],
    postedDate: 'Recently',
    batchYear: '2024/2025',
    experienceLevel: 'Internship (0–2 years)',
    applyLink: 'https://zuddl.keka.com/careers/jobdetails/87137',
    description: 'Join Zuddl as a frontend intern. Work on high-impact UI and learn from top engineers.',
    hiringPattern: [
      { stage: 'Resume Screening', details: 'Portfolio check and basic HTML/CSS evaluation.' },
      { stage: 'Technical Round', details: 'React, JavaScript, and web design principles.' }
    ],
    previousQuestions: [
      { type: 'React', question: 'What are controlled vs uncontrolled components?' }
    ]
  },
  {
    id: 5,
    title: 'Software Engineer',
    company: 'ANZ',
    location: 'Bengaluru, India',
    type: 'Full-time',
    tags: ['2023', '2024', 'Java'],
    postedDate: 'Just Now',
    batchYear: '2023/2024',
    experienceLevel: '0-2 years',
    applyLink: 'https://careers.anz.com/job/Bengaluru-Software-Engineer/1210214001/',
    description: 'Work with ANZ on enterprise software solutions. Expect work on backend, APIs, and financial services tools.',
    hiringPattern: [
      { stage: 'Technical Test', details: 'Coding + MCQ on Java, Data Structures.' },
      { stage: 'Technical Interview', details: 'Project discussion, Java and OOPs.' },
      { stage: 'HR Round', details: 'Behavioral and company fit.' }
    ],
    previousQuestions: [
      { type: 'Java', question: 'Explain inheritance and encapsulation with real examples.' }
    ]
  },
  {
    id: 6,
    title: 'QA Engineer',
    company: 'Zoho Corp',
    location: 'India (TBD)',
    type: 'Full-time',
    tags: ['QA', 'Testing', '2024', '2025'],
    postedDate: 'Today',
    batchYear: '2024/2025',
    experienceLevel: 'Entry',
    applyLink: 'https://careers.zohocorp.com/jobs/Careers/2803000614913581/QA-Engineers?source=CareerSite&utm_source=QA_Engineer_unstop&utm_medium=listing&utm_campaign=unstop',
    description: 'Join Zoho as a QA Engineer to build and execute test plans for a variety of web and mobile applications.',
    hiringPattern: [
      { stage: 'Written Test', details: 'Aptitude and basic programming questions.' },
      { stage: 'Interview', details: 'Manual testing and QA scenarios.' }
    ],
    previousQuestions: [
      { type: 'Testing', question: 'What is regression testing?' },
      { type: 'Scenario', question: 'How do you test an ATM machine?' }
    ]
  }
,
  {
    id: 7,
    title: 'Graduate Engineer Trainee',
    company: 'HCL Technologies',
    location: 'Multiple Locations, India',
    type: 'Full-time',
    tags: ['CSE', 'EEE', 'ECE', 'IT', '2025'],
    postedDate: 'Today',
    batchYear: '2025',
    experienceLevel: 'Fresher',
    applyLink: 'https://freshers.hcltech.com/?utm_source=OffCampus&utm_medium=LinkedIn&utm_campaign=FY26',
    description: 'HCL is hiring 2025 batch graduates across CSE, EEE, ECE, IT disciplines with a minimum of 65% marks.',
    hiringPattern: [
      { stage: 'Online Assessment', details: 'Aptitude and technical MCQs.' },
      { stage: 'Interview', details: 'Technical and HR rounds.' }
    ],
    previousQuestions: [
      { type: 'Aptitude', question: 'Time and Work related problem.' },
      { type: 'Technical', question: 'Basic C and DBMS questions.' }
    ]
  },
  {
    id: 8,
    title: 'Full Stack Developer',
    company: 'Digantara',
    location: 'Bangalore, India',
    type: 'Full-time',
    tags: ['Full Stack', '2021', '2022', '2023'],
    postedDate: 'Today',
    batchYear: '2021/2022/2023',
    experienceLevel: 'Fresher',
    applyLink: 'https://careers.kula.ai/digantara/5917?applicant_guid=db47e0fb-cb17-42f7-a115-e3614650448a',
    description: 'Digantara is hiring Full Stack Developers for recent graduates to work on cutting-edge aerospace analytics products.',
    hiringPattern: [
      { stage: 'Application Review', details: 'Resume and profile evaluation.' },
      { stage: 'Technical Interview', details: 'Full stack development concepts and coding tasks.' }
    ],
    previousQuestions: [
      { type: 'Full Stack', question: 'Create a MERN stack application for task tracking.' }
    ]
  },
  {
    id: 9,
    title: 'Entry Level Manager',
    company: 'ICICI Bank',
    location: 'India',
    type: 'Full-time',
    tags: ['Banking', 'Entry Level', '2024'],
    postedDate: 'Today',
    batchYear: '2024',
    experienceLevel: 'Fresher',
    applyLink: 'https://www.icicicareers.com/CareerApplicant/Career/job-details/2547189',
    description: 'ICICI Bank is hiring for entry-level managers with 2-month training at 18k/month followed by a package of 4.5–5 LPA.',
    hiringPattern: [
      { stage: 'Online Test', details: 'Aptitude and reasoning.' },
      { stage: 'Face-to-Face Interview', details: 'Behavioral and scenario-based questions.' }
    ],
    previousQuestions: [
      { type: 'Reasoning', question: 'Puzzle-based reasoning questions.' }
    ]
  },
  {
    id: 10,
    title: 'Data Scientist',
    company: 'IBM',
    location: 'Bangalore, India',
    type: 'Full-time',
    tags: ['Data Science', '2021', '2025'],
    postedDate: 'Today',
    batchYear: '2021–2025',
    experienceLevel: 'Fresher/Experienced',
    applyLink: 'https://ibmglobal.avature.net/en_US/careers/JobDetail?jobId=36746&source=SN_LinkedIn',
    description: 'IBM is hiring Data Scientists across batches. Candidates with passion for AI, statistics, and data analysis are welcome.',
    hiringPattern: [
      { stage: 'Online Assessment', details: 'Data science and ML concepts.' },
      { stage: 'Interview', details: 'Problem-solving and case-based discussion.' }
    ],
    previousQuestions: [
      { type: 'ML', question: 'How do you evaluate a classification model?' }
    ]
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