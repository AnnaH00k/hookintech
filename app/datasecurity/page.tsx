import MenuHeader from "../components/headers/menuHeader";
import Footer from "../components/footer";

export default function Datasecurity() {
  return (
    <div className="flex flex-col ">
      <MenuHeader />
      <main className="flex flex-col items-center justify-center sm:py-20 py-40 bg-[#0A1109] ">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-4xl text-center w-[90vw] text-[#A0A2A0] font-bold">
            Datasecurity
          </h1>

          <h1 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw] mt-8">
            Privacy Policy
          </h1>
          <p className="text-[#A0A2A0] w-[90vw] mt-8">
            {" "}
            This Privacy Policy describes how Hooked0nTech collects, uses, and
            protects the personal information you provide when visiting our
            website.
          </p>

          <h1 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw] mt-8">
            What information do we collect?
          </h1>
          <p className="text-[#A0A2A0] w-[90vw] mt-8">
            When you visit our website, we may collect certain information
            automatically, including your IP address, browser type, operating
            system, and browsing behavior. Aditionally if you choose to contact
            us or submit a form, we may collect your name, email address, and
            any other information you provide voluntarily.{" "}
          </p>

          <h1 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw] mt-8">
            Use of Information:
          </h1>
          <p className="text-[#A0A2A0] w-[90vw] mt-8">
            The information we collect is used solely for internal purposes,
            such as website analytics, communication with visitors, and
            improving user experience. We do not sell or share your personal
            information with third parties for marketing purposes.
          </p>

          <h1 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw] mt-8">
            Data Security:
          </h1>
          <p className="text-[#A0A2A0] w-[90vw] mt-8">
            We employ industry-standard security measures to safeguard your
            personal information, including encryption, firewalls, and secure
            servers. However, please note that no method of transmission over
            the internet or electronic storage is 100% secure.
          </p>

          <h1 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw] mt-8">
            Cookies and Tracking:
          </h1>
          <p className="text-[#A0A2A0] w-[90vw] mt-8">
            We may use cookies and other tracking technologies to enhance your
            browsing experience and collect information about website traffic
            and usage. You can choose to disable cookies through your browser
            settings if you prefer not to be tracked.
          </p>

          <h1 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw] mt-8">
            Third-party Services:
          </h1>
          <p className="text-[#A0A2A0] w-[90vw] mt-8">
            We may use third-party services, such as Google Analytics, to
            collect and analyze data about website traffic and usage. These
            services may have their own privacy policies and terms of service.
          </p>

          <h1 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw] mt-8">
            User Rights:
          </h1>
          <p className="text-[#A0A2A0] w-[90vw] mt-8">
            You have the right to access, correct, or delete your personal
            information. If you have any questions or concerns about your data,
            please contact us using the information provided below.
          </p>

          <h1 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw] mt-8">
            Legal Compliance:
          </h1>
          <p className="text-[#A0A2A0] w-[90vw] mt-8">
            We comply with applicable data protection laws and regulations,
            including the General Data Protection Regulation (GDPR) and the
            California Consumer Privacy Act (CCPA).
          </p>

          <h1 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw] mt-8">
            Updates to Policy:
          </h1>
          <p className="text-[#A0A2A0] w-[90vw] mt-8">
            This Privacy Policy may be updated periodically to reflect changes
            in our practices. The last update was made on 30.03.2024.
          </p>

          <h1 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw] mt-8">
            Contact Information:
          </h1>
          <p className="text-[#A0A2A0] w-[90vw] mt-8">
            If you have any questions or concerns about our privacy practices,
            please contact us at:
          </p>
          <a
            href="mailto:hook0ntech@gmail.com"
            className="text-sm sm:text-md text-center text-[#A0A2A0] hover:text-[#fff] rounded-full mt-8 bg-[#303830] px-3 py-1"
            target="_blank"
          >
            Email: hook0ntech@gmail.com
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
