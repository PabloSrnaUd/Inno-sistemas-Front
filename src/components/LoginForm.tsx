import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
    // For demo purposes, navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
      <CardHeader className="text-center space-y-4 pb-6">
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-foreground text-background p-2 rounded">
            <code className="text-sm font-mono">&lt;/&gt;</code>
          </div>
          <CardTitle className="text-2xl font-bold text-text-primary">Innosistemas</CardTitle>
        </div>
        <CardDescription className="text-text-secondary leading-relaxed">
          Plataforma de integración y desarrollo de software para estudiantes de Ingeniería de Sistemas.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-text-primary mb-6">Iniciar sesión</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-text-primary font-medium">email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-surface-white border-border focus:border-brand-blue"
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-text-primary font-medium">contraseña</Label>
              <Link
                to="/forgot-password"
                className="text-sm text-text-muted hover:text-brand-blue transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 bg-surface-white border-border focus:border-brand-blue"
              required
            />
          </div>
          
          <div className="pt-2">
            <Button type="submit" className="w-full h-12 bg-foreground hover:bg-text-primary text-background font-medium">
              Iniciar sesión
            </Button>
          </div>
        </form>
        
        <div className="text-center pt-4">
          <p className="text-sm text-text-muted">
            ¿Problemas para acceder?{" "}
            <button className="text-brand-blue hover:underline font-medium">
              Contacta soporte IT
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;