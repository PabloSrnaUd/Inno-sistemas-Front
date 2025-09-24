import { Search, User, Plus, BookOpen, Users, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TeacherDashboard = () => {
  const courses = [
    { 
      id: 1, 
      name: "Programación I", 
      students: 25, 
      nextClass: "Lunes 14:00",
      assignments: 3
    },
    { 
      id: 2, 
      name: "Base de Datos", 
      students: 30, 
      nextClass: "Martes 10:00",
      assignments: 2
    },
    { 
      id: 3, 
      name: "Ingeniería de Software", 
      students: 22, 
      nextClass: "Miércoles 16:00",
      assignments: 5
    },
  ];

  const recentActivities = [
    { id: 1, type: "assignment", text: "Nueva tarea entregada en Programación I", time: "hace 2 horas" },
    { id: 2, type: "grade", text: "Calificaciones publicadas para Base de Datos", time: "hace 4 horas" },
    { id: 3, type: "message", text: "Nuevo mensaje de estudiante", time: "hace 1 día" },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface-light">
      {/* Header */}
      <header className="bg-surface-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-text-primary">panel docente</h1>
          <Button variant="outline" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>Perfil</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-surface-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-text-secondary">
                Total Cursos
              </CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-text-primary">3</div>
              <p className="text-xs text-muted-foreground">
                +1 desde el semestre pasado
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-surface-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-text-secondary">
                Total Estudiantes
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-text-primary">77</div>
              <p className="text-xs text-muted-foreground">
                +12% desde el mes pasado
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-surface-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-text-secondary">
                Próximas Clases
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-text-primary">5</div>
              <p className="text-xs text-muted-foreground">
                Esta semana
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-surface-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-text-secondary">
                Tareas Pendientes
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-text-primary">10</div>
              <p className="text-xs text-muted-foreground">
                Por revisar
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Courses Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-text-primary">Mis Cursos</h2>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Curso
              </Button>
            </div>
            
            <div className="space-y-4">
              {courses.map((course) => (
                <Card key={course.id} className="bg-surface-white hover:bg-muted/20 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-text-primary">{course.name}</h3>
                      <Badge variant="secondary" className="bg-brand-blue/10 text-brand-blue">
                        {course.students} estudiantes
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-text-secondary">
                      <div className="flex items-center justify-between">
                        <span>Próxima clase:</span>
                        <span className="font-medium">{course.nextClass}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Tareas activas:</span>
                        <span className="font-medium">{course.assignments}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activity Section */}
          <div>
            <h2 className="text-lg font-semibold text-text-primary mb-6">Actividad Reciente</h2>
            
            <Card className="bg-surface-white">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 pb-4 border-b last:border-b-0">
                      <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-sm text-text-primary">{activity.text}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-text-primary mb-6">Acciones Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-16 flex flex-col space-y-2 bg-surface-white">
              <FileText className="h-5 w-5" />
              <span>Nueva Tarea</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-2 bg-surface-white">
              <Calendar className="h-5 w-5" />
              <span>Programar Clase</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-2 bg-surface-white">
              <Users className="h-5 w-5" />
              <span>Ver Estudiantes</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;