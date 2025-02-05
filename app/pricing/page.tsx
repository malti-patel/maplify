import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Basic",
    price: 199,
    features: ["Individual Tax Return", "Basic Deductions", "E-filing", "Email Support"],
  },
  {
    name: "Professional",
    price: 399,
    features: [
      "Individual & Rental Property",
      "Advanced Deductions",
      "E-filing",
      "Priority Support",
      "Mid-Year Check-in",
    ],
  },
  {
    name: "Business",
    price: 799,
    features: [
      "Business & Individual Returns",
      "Quarterly BAS",
      "Bookkeeping",
      "Tax Planning",
      "Dedicated Accountant",
      "24/7 Support",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Transparent Pricing</h1>
      <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
        Choose the plan that fits your needs. All plans come with our expert advice and satisfaction guarantee.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-xl p-8 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-4xl font-bold mb-6">
              ${plan.price}
              <span className="text-base font-normal">/year</span>
            </p>
            <ul className="mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center mb-2">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full">Choose Plan</Button>
          </div>
        ))}
      </div>
      <p className="text-center mt-12 text-gray-600">
        Need a custom plan?{" "}
        <a href="/contact" className="text-blue-600 hover:underline">
          Contact us
        </a>{" "}
        for a tailored solution.
      </p>
    </div>
  )
}

