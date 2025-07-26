import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { courses, filterOptions, Course } from '@/data/courses';
import { Link } from 'react-router-dom';

interface FormData {
  preferredField: string;
  interests: string[];
}

const CareerPathSuggester = () => {
  const [formData, setFormData] = useState<FormData>({ preferredField: 'All', interests: [] });
  const [recommendations, setRecommendations] = useState<Course[]>([]);
  const [showResults, setShowResults] = useState(true);
  const [activeField, setActiveField] = useState<string>('All');
  const [interestInput, setInterestInput] = useState<string>('');

  useEffect(() => {
    getRecommendations('All', formData.interests);
  }, []);

  const handleFieldSelect = (field: string) => {
    setActiveField(field);
    setFormData(prev => ({ ...prev, preferredField: field }));
    getRecommendations(field, formData.interests);
  };

  const handleInterestAdd = () => {
    if (interestInput.trim() && !formData.interests.includes(interestInput.trim())) {
      const newInterests = [...formData.interests, interestInput.trim()];
      setFormData(prev => ({ ...prev, interests: newInterests }));
      setInterestInput('');
      getRecommendations(activeField, newInterests);
    }
  };

  const handleInterestRemove = (interest: string) => {
    const newInterests = formData.interests.filter(i => i !== interest);
    setFormData(prev => ({ ...prev, interests: newInterests }));
    getRecommendations(activeField, newInterests);
  };

  const getRecommendations = (field: string, interests: string[]) => {
    let filteredCourses = [...courses];

    if (field === 'All' && interests.length === 0) {
      setRecommendations(filteredCourses.slice(0, 6));
      setShowResults(true);
      return;
    }

    if (field !== 'All') {
      filteredCourses = filteredCourses.filter(course => course.field.toLowerCase() === field.toLowerCase());
    }

    if (interests.length > 0) {
      filteredCourses = filteredCourses.filter(course =>
        interests.some(interest =>
          course.related_interests.some(i => i.toLowerCase().includes(interest.toLowerCase())) ||
          course.field.toLowerCase().includes(interest.toLowerCase()) ||
          course.description.toLowerCase().includes(interest.toLowerCase())
        )
      );
    }

    filteredCourses = filteredCourses.sort((a, b) => {
      const demandScore = {
        Technology: 3,
        Medical: 3,
        Engineering: 2,
        Commerce: 2,
        Arts: 1,
        Science: 1
      };
      return (demandScore[b.field] || 0) - (demandScore[a.field] || 0);
    });

    setRecommendations(filteredCourses.slice(0, 7));
    setShowResults(true);
  };

  const loadMoreCourses = () => {
    const currentLength = recommendations.length;
    const additionalCourses = courses
      .filter(course => !recommendations.some(rec => rec.id === course.id))
      .filter(course => activeField === 'All' || course.field.toLowerCase() === activeField.toLowerCase())
      .filter(course =>
        formData.interests.length === 0 || formData.interests.some(interest =>
          course.related_interests.some(i => i.toLowerCase().includes(interest.toLowerCase())) ||
          course.field.toLowerCase().includes(interest.toLowerCase()) ||
          course.description.toLowerCase().includes(interest.toLowerCase())
        )
      )
      .slice(0, 3);
    setRecommendations([...recommendations, ...additionalCourses]);
  };

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="bg-white shadow-md rounded-lg p-4 mb-8 sticky top-0 z-10">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              key="All"
              onClick={() => handleFieldSelect('All')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeField === 'All'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } rounded-full`}
            >
              All Courses
            </Button>
            {filterOptions.preferredFields.map(field => (
              <Button
                key={field}
                onClick={() => handleFieldSelect(field)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeField === field
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } rounded-full`}
              >
                {field}
              </Button>
            ))}
          </div>
        </nav>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <Input
              placeholder="Add your interest (e.g., AI, Design, Medicine)"
              value={interestInput}
              onChange={(e) => setInterestInput(e.target.value)}
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
              onKeyPress={(e) => e.key === 'Enter' && handleInterestAdd()}
            />
            <Button
              onClick={handleInterestAdd}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200"
            >
              Add
            </Button>
          </div>
          {formData.interests.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {formData.interests.map(interest => (
                <Badge
                  key={interest}
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 cursor-pointer hover:bg-blue-200 transition-colors"
                  onClick={() => handleInterestRemove(interest)}
                >
                  {interest} ✕
                </Badge>
              ))}
            </div>
          )}
        </div>

        {showResults && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center animate-slide-up">
              {recommendations.length > 0 ? `Explore ${activeField} Courses` : 'No Courses Found'}
            </h3>
            
            {recommendations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map((course, index) => (
                  <Card
                    key={course.id}
                    className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 animate-slide-in delay-${index * 100}`}
                  >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-500" />
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-600 hover:text-blue-800 transition-colors">
                        {course.name}
                      </CardTitle>
                      <CardDescription className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">{course.field}</Badge>
                        <Badge variant="outline" className="border-blue-300">{course.duration}</Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm"><span className="font-medium">Eligibility:</span> {course.eligibility}</p>
                        <div>
                          <span className="font-medium text-sm">Career Paths:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {course.career_paths.slice(0, 3).map(path => (
                              <Badge key={path} variant="outline" className="text-xs border-blue-200">{path}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Link
                        to="/courses"
                        className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-sm font-medium transform hover:scale-110"
                      >
                        Explore Course
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <p className="text-gray-600 mb-4">No courses found for your interests or field.</p>
                <p className="text-sm text-gray-500">
                  Try adding different interests or exploring other fields!
                </p>
              </div>
            )}
            {recommendations.length > 0 && recommendations.length < courses.length && (
              <div className="mt-8 text-center">
                <Button
                  onClick={loadMoreCourses}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Load More Courses
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerPathSuggester;