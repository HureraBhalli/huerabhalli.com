import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      q: 'Will my new responsive website be easy to find right away?',
      a: 'New websites often take time to rank on search engines. SEO takes time and consistent effort to build rankings. However, we include on-page SEO basics with every website.',
    },
    {
      q: 'Which content management system do you use?',
      a: 'We provide CMS solutions based on your specific needs. We mainly use WordPress and WebFlow. In some cases, we also use Magento or Shopify, depending on the needs and scope of the project. WordPress is the most widely used CMS worldwide and is continuously being developed. This makes it not only versatile but also extremely cost-effective. The spent offers numerous features and plugins, allowing us to easily create and manage websites.',
    },
    {
      q: 'Do you also write texts?',
      a: 'Yes, we offer copywriting services as an add-on. Our team can write SEO-friendly content for your website, blog posts, and product descriptions.',
    },
    {
      q: 'Will my new responsive website be easy to find right away?',
      a: 'New websites often take time to rank on search engines. SEO takes time and consistent effort to build rankings. However, we include on-page SEO basics with every website.',
    },
    {
      q: 'Do you register my domain name, hosting & email?',
      a: 'Yes, we can register your domain name, set up hosting, and configure professional email accounts on your behalf.',
    },
    {
      q: 'How long should I wait for link building results?',
      a: 'Link building is a long-term strategy. You can typically start seeing results within 3-6 months, depending on your industry and competition.',
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq">

      {/* Heading */}
      <h2 className="faq__title">Frequently Asked Questions</h2>

      {/* FAQ List */}
      <div className="faq__list">
        {faqs.map((item, index) => (
          <div
            className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
            key={index}
          >
            <button className="faq__question" onClick={() => toggle(index)}>
              <span className="faq__question-text">{item.q}</span>
              <span className="faq__icon">
                {openIndex === index ? <X size={14} /> : <Plus size={14} />}
              </span>
            </button>

            {openIndex === index && (
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQ;