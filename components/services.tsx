import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import {
  UserCheck,
  Users,
  Building2,
  FileText,
  Receipt,
  FileSpreadsheet,
  Briefcase,
  Home,
  Calculator,
} from "lucide-react"

const services = [
  { icon: UserCheck, title: "Individual Tax Returns", description: "Personalized tax solutions for individuals" },
  { icon: Users, title: "Partnership Tax Returns", description: "Comprehensive tax services for partnerships" },
  { icon: Building2, title: "Company Tax Returns", description: "Expert tax management for companies" },
  { icon: FileText, title: "Trust Tax Returns", description: "Specialized tax handling for trusts" },
  { icon: Receipt, title: "BAS & IAS", description: "Efficient Business Activity Statement processing" },
  { icon: FileSpreadsheet, title: "ABN & TFN Applications", description: "Streamlined application processes" },
  { icon: Briefcase, title: "Business Schedules", description: "Detailed scheduling for businesses" },
  { icon: Home, title: "Rental Schedules", description: "Comprehensive rental property tax management" },
  { icon: Calculator, title: "Depreciation Schedules", description: "Accurate asset depreciation calculations" },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

