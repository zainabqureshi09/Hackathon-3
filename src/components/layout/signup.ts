// helpers/signup.ts
import bcrypt from "bcryptjs";
import sanityClient from "@/sanity/lib/client";

export const signupUser = async (name: string, email: string, password: string) => {
  // Check if the user already exists
  const query = `*[_type == "user" && email == $email][0]`;
  const existingUser = await sanityClient.fetch(query, { email });

  if (existingUser) {
    throw new Error("User already exists with this email!");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user in Sanity
  const newUser = await sanityClient.create({
    _type: "user",
    name,
    email,
    password: hashedPassword,
  });

  return newUser;
};
