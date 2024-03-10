"use server";

export async function signIn(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch("http://localhost:8000/api/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!data.success) return { message: data.message };

  return data;
}
