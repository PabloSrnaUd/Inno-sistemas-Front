import { useState } from "react";
import { Search, User, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LogoutConfirmation from "@/components/LogoutConfirmation";
import { useNavigate } from "react-router-dom";
import innosistemaSIcon from "@/assets/innosistemas-icon.png";

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
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
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div className="w-48 bg-white border-r flex flex-col">
        {/* Header */}
        <div className="p-4 border-b bg-gray-100 flex items-center space-x-2">
          <img 
            src={innosistemaSIcon} 
            alt="InnoSistemas Icon" 
            className="w-6 h-6 object-contain"
          />
          <span className="font-medium text-sm">InnoSistemas</span>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <div className="mb-4">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-left bg-gray-100 text-gray-800"
            >
              Proyectos
            </Button>
          </div>
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

        {/* Footer */}
        <div className="mt-auto p-4 border-t">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-left"
            onClick={() => setShowLogoutConfirm(true)}
          >
            Cerrar Sesión
          </Button>
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

      <LogoutConfirmation
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={() => {
          setShowLogoutConfirm(false);
          navigate("/");
        }}
      />
    </div>
  );
};

export default TeacherDashboard;