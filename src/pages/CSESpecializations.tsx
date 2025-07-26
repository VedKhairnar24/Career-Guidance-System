
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cseSpecializations, cseFilterOptions } from '@/data/cseSpecializations';
import { Link } from 'react-router-dom';

const CSESpecializations = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedPassions, setSelectedPassions] = useState<string[]>([]);
  const [proficiencyLevel, setProficiencyLevel] = useState('');
  const [selectedJobRoles, setSelectedJobRoles] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [workEnvironment, setWorkEnvironment] = useState('');
  const [recommendations, setRecommendations] = useState(cseSpecializations.slice(0, 3));

  const handleMultiSelect = (value: string, selectedValues: string[], setSelectedValues: (values: string[]) => void) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter(item => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const getRecommendations = () => {
    let filtered = cseSpecializations;

    if (selectedInterests.length > 0) {
      filtered = filtered.filter(spec =>
        selectedInterests.some(interest =>
          spec.name.toLowerCase().includes(interest.toLowerCase()) ||
          spec.interests.some(specInterest => 
            specInterest.toLowerCase().includes(interest.toLowerCase())
          )
        )
      );
    }

    if (selectedPassions.length > 0) {
      filtered = filtered.filter(spec =>
        selectedPassions.some(passion =>
          spec.interests.includes(passion)
        )
      );
    }

    if (proficiencyLevel) {
      filtered = filtered.filter(spec =>
        spec.proficiency_level.includes(proficiencyLevel)
      );
    }

    if (selectedJobRoles.length > 0) {
      filtered = filtered.filter(spec =>
        selectedJobRoles.some(role =>
          spec.career_paths.some(path =>
            path.toLowerCase().includes(role.toLowerCase())
          )
        )
      );
    }

    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter(spec =>
        selectedTechnologies.some(tech =>
          spec.technologies.includes(tech) ||
          spec.key_skills.some(skill => 
            skill.toLowerCase().includes(tech.toLowerCase())
          )
        )
      );
    }

    if (workEnvironment) {
      filtered = filtered.filter(spec =>
        spec.work_environment.includes(workEnvironment)
      );
    }

    setRecommendations(filtered.length > 0 ? filtered : cseSpecializations.slice(0, 3));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Computer Science & Engineering Specializations
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Computer Science and Engineering (CSE) is a dynamic field that combines computer science principles with engineering practices to design, develop, and optimize software and systems. From building websites and mobile apps to creating AI models and games, CSE offers diverse specializations for tech enthusiasts.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          {/* Recommendations */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended CSE Specializations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map(spec => (
                <Card key={spec.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{spec.name}</CardTitle>
                    <CardDescription>
                      <Badge variant="default">{spec.field}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{spec.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-sm text-gray-700">Key Skills:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {spec.key_skills.map(skill => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium text-sm text-gray-700">Career Paths:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {spec.career_paths.map(path => (
                            <Badge key={path} variant="secondary" className="text-xs">
                              {path}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium text-sm text-gray-700">Tools:</span>
                        <p className="text-sm text-gray-600">{spec.tools.join(', ')}</p>
                      </div>
                      
                      <div>
                        <span className="font-medium text-sm text-gray-700">Learning Resources:</span>
                        <p className="text-sm text-gray-600">{spec.resources.join(', ')}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Link to="/courses">
                        <Button variant="outline" className="w-full">
                          Explore Courses
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {recommendations.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No specializations found</h3>
                <p className="text-gray-500">Try selecting more interests or a different proficiency level!</p>
              </div>
            )}
          </div>

          {/* Why Choose CSE Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose CSE?</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                High demand for CSE professionals globally
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Diverse career options (software, AI, gaming, etc.)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Opportunities for innovation and creativity
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Competitive salaries and remote work options
              </li>
            </ul>
            
            <div className="mt-6">
              <Link to="/courses">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Learn More About CSE Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CSESpecializations;
