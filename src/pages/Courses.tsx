import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { courses, filterOptions } from '@/data/courses';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = () => {
    let filtered = courses;
    
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedField) {
      filtered = filtered.filter(course => course.field === selectedField);
    }
    
    setFilteredCourses(filtered);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedField('');
    setFilteredCourses(courses);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Courses
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive list of courses with detailed descriptions, categorized by fields
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Courses
                </label>
                <Input
                  type="text"
                  placeholder="Search by course name or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="w-full md:w-64">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Field
                </label>
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Fields</option>
                  <option value="Technology">Technology</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Science">Science</option>
                  <option value="Business">Business</option>
                  <option value="Medical">Medical</option>
                  <option value="Photography">Photography</option>
                  <option value="Animal Care">Animal Care</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                  Search
                </Button>
                <Button onClick={clearFilters} variant="outline">
                  Clear
                </Button>
              </div>
            </div>
          </div>

          {/* Course Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Categories</h2>
            <div className="flex flex-wrap gap-2">
              {['Technology', 'Engineering', 'Science', 'Business', 'Medical', 'Photography', 'Animal Care', 'Content Creation', 'Gaming', 'Arts'].map(field => (
                <Button
                  key={field}
                  onClick={() => {
                    setSelectedField(field === selectedField ? '' : field);
                    setFilteredCourses(field === selectedField ? courses : courses.filter(c => c.field === field));
                  }}
                  variant={selectedField === field ? "default" : "outline"}
                  className="mb-2"
                >
                  {field}
                </Button>
              ))}
            </div>
          </div>

          {/* Course List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-blue-600 flex-1">{course.name}</CardTitle>
                  </div>
                  <CardDescription className="flex flex-wrap gap-2">
                    <Badge variant="default">{course.field}</Badge>
                    <Badge variant="outline">{course.duration}</Badge>
                    <Badge variant="secondary">{course.budget_range} Budget</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-sm text-gray-700">Eligibility:</span>
                      <p className="text-sm text-gray-600">{course.eligibility}</p>
                    </div>
                    
                    <div>
                      <span className="font-medium text-sm text-gray-700">Career Paths:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {course.career_paths.map(path => (
                          <Badge key={path} variant="outline" className="text-xs">
                            {path}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="font-medium text-sm text-gray-700">Study Modes:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {course.study_mode.map(mode => (
                          <Badge key={mode} variant="secondary" className="text-xs">
                            {mode}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Courses;