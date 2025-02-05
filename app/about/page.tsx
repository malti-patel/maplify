import { Award, Users, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Maplify</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/about/main.png"
            alt="Our Team"
            className="rounded-lg shadow-xl"
            width={600}
            height={400}
          />
        </div>
        <div>
          <p className="text-lg mb-6">
            At Maplify, we&apos;re more than just accountants. We&apos;re your
            partners in financial success. With years of experience and a deep
            understanding of Australian tax laws, we&apos;re here to help
            individuals and businesses navigate the complex world of finance.
          </p>
          <p className="text-lg mb-6">
            Our team of certified professionals is dedicated to providing
            personalized, efficient, and accurate services to meet all your
            accounting needs. We stay up-to-date with the latest tax regulations
            to ensure you&apos;re always compliant and maximizing your returns.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-8 mt-16">
        <div className="text-center">
          <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
          <p>Certified professionals with years of experience</p>
        </div>
        <div className="text-center">
          <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
          <p>Personalized service tailored to your needs</p>
        </div>
        <div className="text-center">
          <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Timely Service</h3>
          <p>Quick turnaround times for all your tax needs</p>
        </div>
        <div className="text-center">
          <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Growth-Oriented</h3>
          <p>Strategies to help your finances thrive</p>
        </div>
      </div>
    </div>
  );
}
