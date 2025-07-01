import { useState } from "react";
import { checkEmailExists } from "../services/authService";

export interface UseRegistrationFormReturn {
  email: string;
  error: string;
  isLoading: boolean;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  clearError: () => void;
}

/**
 * Hook personalizado para manejar la lógica del formulario de registro
 * Separa la lógica de negocio del componente de presentación
 */
export const useRegistrationForm = (
  onSuccess?: (email: string) => void
): UseRegistrationFormReturn => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearError = () => setError("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Verifica si el email ya existe
      const response = await checkEmailExists(email);

      if (response.exists) {
        setError("Este correo ya está registrado.");
        return;
      }

      // Si el email no existe, ejecuta el callback de éxito
      if (onSuccess) {
        onSuccess(email);
      }

      // Aquí se podría continuar con el proceso de registro
      console.log("Email disponible, continuando con el registro...");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error inesperado. Intenta de nuevo.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    error,
    isLoading,
    setEmail,
    handleSubmit,
    clearError,
  };
};
