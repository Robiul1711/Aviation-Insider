import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: 1,
    question: "What is the Pilot Network Rating?",
    answer:
      "The Pilot Network Rating is a particular training providers overall student satisfaction rating. It is calculated from the average scores each providers reviews considering everything from training facilities to customer service. A high Pilot Network Rating suggests that a student graduates from that school extremely satisfied with the overall service they have received. The Pilot Network Rating should only be used as a guide, individual experiences may differ.",
  },
  {
    id: 2,
    question: "What is a Top Rated Training Provider?",
    answer:
      "Pilot Network publish our ‘top rated training providers’ on an ongoing basis. This is not a sponsored or paid promotion post and the ratings are review based. The only way a training provider can be included is to have reached a minimum number of reviews and have received high satisfaction ratings from its reviewers. We do not influence these ratings as this would go against our core values of impartiality and integrity.",
  },
  {
    id: 3,
    question: "What are Enhanced Profile Providers?",
    answer:
      "Enhanced Profile Training Providers are the providers which we are in direct contact with through our Plus Training Providers Scheme, to ensure the information we display for them is both regularly updated and accurate. Training providers can join our Plus Scheme to enhance their profiles and respond to reviews, but they cannot influence their reviews. You can see which providers are already verified and some of the other benefits here.",
  },
  {
    id: 4,
    question: "How much does Pilot Network cost?",
    answer:
      "Pilot Network is, and always will be, free to use. We do not believe students should have to pay to receive honest advice, nor to see the range of training providers that are available to them. It will always be free for training providers to be listed on Pilot Network, while there will be further premium features available too. If you would like to find out more or wish to join Pilot Network please get in touch with us.",
  },
  {
    id: 5,
    question: "What are Pilot Network Giveaways?",
    answer:
      "To say thank-you for supporting Pilot Network and leaving reviews we run giveaways of aviation related content. To find out more about what we are giving away visit our social media channels. To enter, follow Pilot Network, Share the post (on either Facebook, LinkedIn or Instagram) and of course leave a review. For more about our giveaways and full terms click here.",
  },
  {
    id: 6,
    question: "What are 'Verified Users'?",
    answer:
      "As part of our aim of providing the largest source of honest student feedback we allow reviewers to have their review published anonymously. Before a review is published anonymously it is strictly moderated to ensure it is a genuine review, then we apply our verification procedure to ensure we can ensure beyond reasonable doubt that the reviewer did in-fact train at this school. The most severe method of verification we use requires a reviewer to provide us with a course completion certificate.",
  },
  {
    id: 7,
    question: "Is there a minimum age requirement?",
    answer:
      "Yes, you must be at least 16 for a student pilot license and 18 for a commercial pilot license (CPL).",
  },
  {
    id: 8,
    question: "Do I need perfect vision to become a pilot?",
    answer:
      "No, but you must meet aviation medical standards. Corrective lenses are usually acceptable.",
  },
  {
    id: 9,
    question: "What is the difference between CPL and ATPL?",
    answer:
      "A CPL allows you to work as a paid pilot. An ATPL is required to become a captain in an airline.",
  },
  {
    id: 10,
    question: "Can international students train in the US/UK?",
    answer:
      "Yes, many schools accept international students. You may need a visa and meet local medical requirements.",
  },
  {
    id: 11,
    question: "How long does it take to become a pilot?",
    answer:
      "Training duration varies, but on average it takes 1.5 to 2 years to become job-ready as a commercial pilot.",
  },
];

const FaqAccoridion = () => {
  return (
    <div className='section-padding-x py-5 md:py-16'>
      <Accordion
        type="single"
        collapsible
        className="w-full   "
        defaultValue="item-1"
      >
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`} className={"my-3 bg-[#F3F4F6] px-5 rounded-md"}>
            <AccordionTrigger className="sm:text-lg md:text-xl font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-base">
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccoridion;
