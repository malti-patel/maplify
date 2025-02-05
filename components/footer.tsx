import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Maplify</h3>
            <p className="mb-4">
              Expert tax solutions for individuals and businesses across
              Australia.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-blue-400" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-blue-400" />
              <Instagram className="h-6 w-6 cursor-pointer hover:text-pink-400" />
              <Linkedin className="h-6 w-6 cursor-pointer hover:text-blue-400" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>Tarneit, Victoria, 3029</p>
            <p>Phone: (02) 1234 5678</p>
            <p>Email: info@maplify.com.au</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2025 Maplify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
