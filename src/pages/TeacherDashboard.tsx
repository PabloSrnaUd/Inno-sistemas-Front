import { useState } from "react";
import { User, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const TeacherDashboard = () => {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  const students = [
    "Estudiante 1",
    "Estudiante 2", 
    "Estudiante 3",
    "Estudiante 4",
    "Estudiante 5",
    "Estudiante 6",
    "Estudiante 7",
    "Estudiante 8"
  ];

  const projects = [
    { id: 1, name: "Nombre proyecto", selected: false },
    { id: 2, name: "Nombre proyecto", selected: false },
    { id: 3, name: "Nombre proyecto", selected: false }
  ];

  return (
    <div className="flex h-screen">
      {/* Left Panel - Projects and Students */}
      <div className="w-64 bg-gray-100 border-r flex flex-col">
        {/* Projects Section */}
        <div className="p-4 border-b">
          <h2 className="font-medium text-sm mb-3">Proyectos</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start text-left bg-blue-100 text-blue-800">
              mis proyectos
            </Button>
            <Button variant="ghost" className="w-full justify-start text-left hover:bg-gray-200">
              actividad
            </Button>
            <Button variant="ghost" className="w-full justify-start text-left hover:bg-gray-200">
              documentos compartidos
            </Button>
          </div>
        </div>

        {/* Students List */}
        <div className="flex-1 p-4">
          <div className="text-sm text-gray-600 mb-2">Listado</div>
          <div className="space-y-1">
            {students.map((student, index) => (
              <button
                key={index}
                onClick={() => setSelectedStudent(student)}
                className={`w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                  selectedStudent === student 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {student}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-300 p-4 flex items-center justify-between">
          <h1 className="text-lg font-medium">Hola, Docente</h1>
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
          </Button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 bg-white m-4 rounded-lg">
          <div className="space-y-6">
            {/* Student Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Estudiante Seleccionado:
              </label>
              <Input
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
                placeholder="Seleccione un estudiante"
                className="max-w-md"
              />
            </div>

            {/* Projects Section */}
            <div>
              <h3 className="text-sm font-medium mb-4">Proyectos del Estudiante:</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Project Selection */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Seleccionar Proyecto</h4>
                  <div className="space-y-2">
                    {projects.map((project) => (
                      <Card 
                        key={project.id} 
                        className={`cursor-pointer transition-colors ${
                          selectedProject === project.name 
                            ? 'bg-blue-50 border-blue-200' 
                            : 'hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedProject(project.name)}
                      >
                        <CardContent className="p-4">
                          <p className="text-sm font-medium">{project.name}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full h-12 bg-gray-100"
                    disabled={!selectedProject}
                  >
                    Visualizar proyecto seleccionado
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-12 bg-gray-100 flex items-center justify-center space-x-2"
                  >
                    <BarChart3 className="h-4 w-4" />
                    <span>Reportes</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-12 bg-gray-100 flex items-center justify-center space-x-2"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Documentos Asociados</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;