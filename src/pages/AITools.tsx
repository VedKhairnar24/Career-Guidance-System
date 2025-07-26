
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const aiTools = [
  {
    id: 1,
    name: "Visual Studio Code",
    category: "IDE",
    description: "A powerful and lightweight code editor with extensive extension support for all programming languages.",
    link: "https://code.visualstudio.com/",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop",
    tags: ["Free", "Cross-platform", "Extensions"]
  },
  {
    id: 2,
    name: "GitHub Copilot",
    category: "AI Tools",
    description: "AI-powered code completion tool that helps you write code faster with intelligent suggestions.",
    link: "https://github.com/features/copilot",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
    tags: ["AI-Powered", "Code Assistant", "Subscription"]
  },
  {
    id: 3,
    name: "Figma",
    category: "Design Tools",
    description: "Collaborative interface design tool for creating user interfaces, prototypes, and design systems.",
    link: "https://www.figma.com/",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=100&h=100&fit=crop",
    tags: ["Design", "Collaboration", "Prototyping"]
  },
  {
    id: 4,
    name: "Jupyter Notebook",
    category: "Data Science",
    description: "Interactive computing environment for data science, machine learning, and research projects.",
    link: "https://jupyter.org/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
    tags: ["Data Science", "Python", "Interactive"]
  },
  {
    id: 5,
    name: "Docker",
    category: "DevOps",
    description: "Platform for developing, shipping, and running applications using containerization technology.",
    link: "https://www.docker.com/",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop",
    tags: ["Containers", "DevOps", "Deployment"]
  },
  {
    id: 6,
    name: "ChatGPT",
    category: "AI Tools",
    description: "Advanced AI chatbot for coding assistance, learning support, and problem-solving.",
    link: "https://chat.openai.com/",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop",
    tags: ["AI Assistant", "Learning", "Problem Solving"]
  },
  {
    id: 7,
    name: "Git",
    category: "Version Control",
    description: "Distributed version control system for tracking changes in source code during development.",
    link: "https://git-scm.com/",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=100&h=100&fit=crop",
    tags: ["Version Control", "Collaboration", "Open Source"]
  },
  {
    id: 8,
    name: "Slack",
    category: "Collaboration",
    description: "Business communication platform for team collaboration and project management.",
    link: "https://slack.com/",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
    tags: ["Communication", "Team Work", "Integration"]
  },
  {
    id: 9,
    name: "TensorFlow",
    category: "AI Tools",
    description: "Open-source machine learning framework for building and deploying AI models.",
    link: "https://www.tensorflow.org/",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop",
    tags: ["Machine Learning", "Open Source", "Python"]
  },
  {
    id: 10,
    name: "IntelliJ IDEA",
    category: "IDE",
    description: "Integrated development environment for Java and other programming languages with smart coding assistance.",
    link: "https://www.jetbrains.com/idea/",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop",
    tags: ["Java", "Smart IDE", "Productivity"]
  },
  {
    id: 11,
    name: "Postman",
    category: "API Tools",
    description: "Platform for API development, testing, and documentation with collaborative features.",
    link: "https://www.postman.com/",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop",
    tags: ["API Testing", "Development", "Documentation"]
  },
  {
    id: 12,
    name: "Notion",
    category: "Productivity",
    description: "All-in-one workspace for notes, project management, and team collaboration.",
    link: "https://www.notion.so/",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
    tags: ["Productivity", "Notes", "Project Management"]
  }
];

const categories = ["All", "AI Tools", "IDE", "Design Tools", "Data Science", "DevOps", "Version Control", "Collaboration", "API Tools", "Productivity"];

const AITools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredTools, setFilteredTools] = useState(aiTools);

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    let filtered = aiTools;
    
    if (category !== 'All') {
      filtered = filtered.filter(tool => tool.category === category);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredTools(filtered);
  };

  const handleSearch = () => {
    let filtered = aiTools;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredTools(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI & Tech Tools for Learning
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover essential tools to enhance your learning and development journey
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              <div className="flex-1 max-w-md">
                <Input
                  type="text"
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                Search
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  onClick={() => handleFilter(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map(tool => (
              <Card key={tool.id} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                    <img 
                      src={tool.image} 
                      alt={tool.name}
                      className="w-10 h-10 rounded object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary">{tool.category}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tool.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <a 
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Visit Tool →
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No tools found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AITools;
