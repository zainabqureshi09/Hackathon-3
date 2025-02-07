import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import sanityClient from "@/sanity/lib/client";

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse the JSON body
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields!" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to Sanity
    const user = {
      _type: "user",
      name,
      email,
      password: hashedPassword, // Save hashed password
    };

    await sanityClient.create(user);

    return NextResponse.json({ message: "Signup successful!", user });
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}
