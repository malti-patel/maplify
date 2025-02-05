import { ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Expert Tax Solutions for Australians</h1>
          <p className="text-xl mb-6">
            Maximize your returns and minimize your stress with our professional accounting services.
          </p>
          <Button size="lg" className="bg-yellow-400 text-gray-800 hover:bg-yellow-300">
            Enquire now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/homepage/hero.png"
            alt="Accounting Services"
            className="rounded-lg shadow-2xl"
            height={500}
            width={800}
          />
        </div>
      </div>
    </section>
  )
}

