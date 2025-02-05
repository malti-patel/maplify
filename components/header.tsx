import Link from "next/link";
import { Calculator, Phone } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Calculator className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-800">Maplify</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-600 hover:text-blue-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-blue-600"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button variant="outline" className="flex items-center space-x-2">
          <Phone className="h-4 w-4" />
          <span>Call Us</span>
        </Button>
      </div>
    </header>
  );
}
