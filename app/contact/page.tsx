import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <Input id="name" type="text" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea id="message" placeholder="How can we help you?" required />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
              <p>Tarneit, Victoria, 3029</p>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-blue-600 mr-4" />
              <p>(02) 1234 5678</p>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-600 mr-4" />
              <p>info@maplify.com.au</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday: 10am - 2pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

