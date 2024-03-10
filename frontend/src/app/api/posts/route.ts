export async function GET() {
  const response = await fetch(
    "https://mocki.io/v1/9e93ec98-f5e1-47be-a966-5dd4b2547d02"
  );
  const data = await response.json();

  return Response.json(data);
}
