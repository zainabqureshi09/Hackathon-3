// helpers/login.ts
import bcrypt from "bcryptjs";
import sanityClient from "@/sanity/lib/client";

export const loginUser = async (email: string, password: string) => {
  // Find the user in Sanity
  const query = `*[_type == "user" && email == $email][0]`;
  const user = await sanityClient.fetch(query, { email });

  if (!user) {
    throw new Error("User not found!");
  }

  // Compare the hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials!");
  }

  return user; // Return user details if login is successful
};
