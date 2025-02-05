import Services from "@/components/services";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
        At Maplify, we offer a comprehensive range of accounting and tax
        services to meet all your financial needs. Our expert team is here to
        help you navigate the complexities of Australian tax law and maximize
        your financial potential.
      </p>
      <Services />
      <div className="text-center mt-12">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Book a Consultation
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
