import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Music2 } from "lucide-react";
import Container from "./Container";
import FooterListComponent from "./footer-list-component";
import AppStoreLogo from "./app-store-logo";
import logo from '@/assets/logo.png';

const  Footer =() => {
  const companyLinks = [
    "Career / Recruitment Notice",
    "Join as a teacher",
    "Join as an affiliate",
    "Privacy Policy",
    "Refund Policy",
    "User Terms",
  ];
  const otherLinks = ["Blog", "Book store", "Free Notes & Guides", "Job Preparation Courses", "Verify certificate", "Free download"];

  return (
    <Container>
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Download Section */}
            <div className="space-y-4">
              <Image
                src={logo}
                alt="our edTech logo"
                width={150}
                height={40}
                className="mb-4"
              />
              <p className="text-sm mb-4">Download our mobile app</p>
              <AppStoreLogo/>
            </div>

            {/* Company Links */}
            <FooterListComponent title="Company" data={companyLinks}/>

            {/* Other Links */}
             <FooterListComponent title="Other Links" data={otherLinks}/>

            {/* Communication */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Our communication media
              </h3>
              <ul className="space-y-2">
                <li>
                  Call:
                  
                   <span className="ml-1"> 16910</span>
                  
                  (24×7)
                </li>
                <li>
                  WhatsApp:
                  <span
                    
                    className="text-green-600 mr1"
                  >
                    +8801896016252
                  </span>
                  (24×7)
                </li>
                
                <li>
                  Email:
                  <Link
                    href="mailto:support@10minuteschool.com"
                    className="text-green-600"
                  >
                    support@10minuteschool.com
                  </Link>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                <Link
                  href="#"
                  className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700"
                >
                  <Youtube size={20} />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700"
                >
                  <Music2 size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              Copyright © 2015 - {new Date().getFullYear()} Ten Minute School
              All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </Container>
  );
}
export default Footer;