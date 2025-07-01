// Servicio para manejar las operaciones relacionadas con autenticación
const API_BASE_URL = "http://localhost:3000/api";

export interface CheckEmailResponse {
  exists: boolean;
}

/**
 * Verifica si un email ya existe en el sistema
 * @param email - El email a verificar
 * @returns Promise con la respuesta del servidor
 */
export async function checkEmailExists(email: string): Promise<CheckEmailResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/check-email?email=${encodeURIComponent(email)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error checking email:", error);
    throw new Error("Error al verificar el correo. Intenta de nuevo.");
  }
}

/**
 * Registra un nuevo usuario
 * @param email - El email del usuario
 * @returns Promise con la respuesta del servidor
 */
export async function registerUser(email: string): Promise<any> {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error registering user:", error);
    throw new Error("Error al registrar el usuario. Intenta de nuevo.");
  }
}
