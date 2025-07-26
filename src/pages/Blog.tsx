
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Emerging Tech Careers in 2025",
    excerpt: "Discover the most promising technology careers that are reshaping the job market and offering excellent growth opportunities.",
    category: "Career Tips",
    date: "December 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "AI and Machine Learning: A Beginner's Guide",
    excerpt: "Everything you need to know about artificial intelligence and machine learning to start your journey in this exciting field.",
    category: "AI",
    date: "December 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Software Development Skills That Matter in 2025",
    excerpt: "The essential programming languages, frameworks, and tools that every aspiring software developer should master.",
    category: "Software Development",
    date: "December 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Engineering vs Technology: Which Path to Choose?",
    excerpt: "A comprehensive comparison between traditional engineering disciplines and modern technology courses.",
    category: "Career Tips",
    date: "December 8, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "The Future of Biomedical Engineering",
    excerpt: "How biomedical engineering is revolutionizing healthcare with innovative medical devices and technologies.",
    category: "Engineering",
    date: "December 5, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Data Science Career Roadmap 2025",
    excerpt: "A step-by-step guide to building a successful career in data science, from beginner to expert level.",
    category: "Data Science",
    date: "December 3, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  }
];

const categories = ["All", "AI", "Software Development", "Engineering", "Career Tips", "Data Science"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    let filtered = blogPosts;
    
    if (category !== 'All') {
      filtered = filtered.filter(post => post.category === category);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPosts(filtered);
  };

  const handleSearch = () => {
    let filtered = blogPosts;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPosts(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tech News & Insights
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest in technology, career trends, and industry insights
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Categories */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              <div className="flex-1 max-w-md">
                <Input
                  type="text"
                  placeholder="Search blog posts..."
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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full hover:bg-blue-50">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
