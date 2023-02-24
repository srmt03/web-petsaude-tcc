export async function signup(userEmail, userPassword) {
  const url = "http://localhost:3333/signup";
  // const body = { email: userEmail, password: userPassword };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: userEmail, password: userPassword }),
  });
  const { token } = await response.json();

  return token;
}
