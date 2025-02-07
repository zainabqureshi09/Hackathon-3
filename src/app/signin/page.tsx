"use client";

import { useState } from "react";
import Link from "next/link";
import { MdLockOutline } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Invalid email or password!");
      }

      setMessage("Login successful!");
      // Handle successful login (e.g., save token or redirect)
    } catch (error: any) {
      setMessage(error.message || "An error occurred!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-yellow-500">FoodTuck</h1>
          <nav className="lg:block hidden">
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/ourmenu">Menu</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/ourchef">Chef</Link></li>
              <li><Link href="/aboutus">About</Link></li>
              <li><Link href="/Newest">Shop</Link></li>
              <li><Link href="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/allnav.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Sign In Page</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Sign In
          </p>
        </div>
      </section>

      {/* Sign-In Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
          {message && (
            <p
              className={`text-center mb-4 ${
                message.includes("successful") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="flex items-center border rounded px-3 py-2 focus-within:ring focus-within:ring-yellow-300">
                <SlEnvolope className="text-xl text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="flex-1 outline-none ml-2"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center border rounded px-3 py-2 focus-within:ring focus-within:ring-yellow-300">
                <MdLockOutline className="text-xl text-gray-500" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="flex-1 outline-none ml-2"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className={`w-full text-white font-bold py-2 rounded ${
                loading ? "bg-gray-400" : "bg-yellow-500 hover:bg-yellow-600"
              }`}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-yellow-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
