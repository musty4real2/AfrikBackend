import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How will my donation be used?",
      answer:
        "Your contribution directly supports our mission to uplift women and girls in underserved communities with quality healthcare, education, food security and technology.",
    },
    {
      question: "Can I choose how my donation be used?",
      answer:
        "Yes, we offer the option to direct your donation toward specific initiatives. Contact us for more tailored giving options.",
    },
    {
      question:
        "Are donations to Daraafrik Foundation tax deductible and how can I get receipt?",
      answer:
        "Yes donations made to Daraafrik are tax deductible. Your donation receipt can be use to claim your deductions on your taxes in Nigeria",
    },
    {
      question: "How can I donate in other ways?",
      answer:
        "We welcome various forms of support. Consider setting up a recurring donation, making a corporate contribution, or organizing a community fundraiser. For more creative ways to support, contact our team.",
    },
    {
      question: "Can I cancel my recurring donation?",
      answer:
        "Of course. You always remain in full control of your recurring donation, and you're free to change or cancel it at any time.",
    },
    {
      question: "Can I choose how my donation is allocated?",
      answer:
        "Yes, we offer the option to direct your donation toward specific initiatives. Contact us for more tailored giving options.",
    },
    {
      question: "Can I fundraise on behalf of Dara’afrik Foundation?",
      answer:
        "Absolutely! We encourage supporters to help raise awareness by hosting events or creating online fundraising campaigns. Reach out to learn more about getting started and accessing our resources.",
    },
    {
      question: "Can my organization partner with Dara’afrik Foundation?",
      answer:
        "Yes, corporate partnerships can have a significant impact. We offer options like matching donations, joint campaigns, and more. Contact us to explore partnership opportunities.",
    },
    {
      question: "How will I know the impact of my donation?",
      answer:
        "We regularly update our donors on project milestones and outcomes through newsletters and our impact reports. This helps ensure transparency and shows the tangible difference your support makes.",
    },
    {
      question: "Is my information secure?",
      answer: [
        "We take your privacy and security seriously. Donations are processed through a secure platform, and we comply with data protection standards to keep your information safe.",
        "We use industry-standard SSL technology to keep your information secure. We partner with Stripe, the industry's established payment processor trusted by some of the world's largest companies. Your sensitive financial information never touches our servers. We send all data directly to Stripe's PCI-compliant servers through SSL.",
      ],
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-[#F9FEEC]">
      <div className="lg:px-[80px] md:px-[40px] px-4">
        <h2 className="text-[#020C21] font-[Gilroy-Bold] text-[48px] font-normal leading-[57.6px] tracking-[-1.92px]  text-center lg:pb-[85px] md:pb-[56px] pb-12 pt-6 ">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-[#E4E7E0] pb-6">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleQuestion(index)}
              >
                <h2 className="text-[16px] font-bold font-inter leading-[23.2px] text-[#020C21]">
                  {faq.question}
                </h2>
                <ChevronDown
                  className={`w-[20px] h-[20px] text-[#667185] transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="mt-4 text-[#555C6A] font-inter text-[14px] font-normal leading-[20.3px] space-y-4">
                  {Array.isArray(faq.answer) ? (
                    faq.answer.map((paragraph, i) => <p key={i}>{paragraph}</p>)
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="pb-[120px]"></div>
    </section>
  );
};

export default Faq;
