import { menu } from "../../../data/menu";

export async function GET() {
  try {
    return Response.json(menu, {
      status: 200,
    });
  } catch (error) {
    console.log(error)
    return Response.json(
      { error: "Failed to fetch menu" },
      { status: 500 }
    );
  } 
}