export default function SalesforceContent({ dynamicData }) {
    const data = dynamicData || {};

    const sec1Title = data.sec1Title || "Increase Business Efficiency with Salesforce Integration Company in India";
    const sec1P1 = data.sec1P1 || "The road to gaining customers goes through the digital landscape. Recenturesoft delivers full-cycle Salesforce consulting services to help businesses leverage the world’s leading CRM platforms in the entirety of its benefits for your industry.";
    const sec1P2 = data.sec1P2 || "We provide personalised services, quick response, and smooth user-interface to your digitally connected customers. Our Salesforce solutions are focussed to create innovative platforms which enable organisations to reimagine their relationships with customers and add a new dimension across all channels and at every touch point.";
    const sec1P3 = data.sec1P3 || "Recenturesoft’s Salesforce puts your target customers at the centre of everything we do. We aim to support organisations to get the most out of their Salesforce implementation to boost sales, improve efficiency and productivity, and improve customer service. All this, while reducing your operational costs and time-to-market to the minimum.";

    const sec2Title = data.sec2Title || "What we do?";
    const whatWeDoList = data.whatWeDoList || [
        "Strategic assessment",
        "Build enterprise cloud computing capability",
        "Improve agility and delivery speed of your services"
    ];

    const sec3Title = data.sec3Title || "Salesforce Integration Company in India";
    const sec3P1 = data.sec3P1 || "We help you achieve real, tangible, and significant business results. We innovate to transform your sales, marketing, customer service, and commerce cloud strategy and yield higher revenue. With the combined strength of our technological expertise and CRM solution–Salesforce, Recenturesoft can help you accelerate digital transformation with better performance and customer-centric business value.";

    const sec4Title = data.sec4Title || "What we bring to your project?";
    const sec4Subtitle = data.sec4Subtitle || "Recenturesoft’s team is qualified to deliver Salesforce flagship products, including:";
    const whatWeBringList = data.whatWeBringList || [
        "Roll-out of the sales cloud",
        "Launch of the marketing cloud",
        "Roll-out of the community cloud",
        "Launch of the service cloud"
    ];
    const sec4P1 = data.sec4P1 || "Recenturesoft comprehends the idea of being connected with the customers and understands the importance of your customers’ relationship with your business. Hence, we offer Salesforce solutions which are comprehensive, quick, scalable, and easy to use and apply.";

    const sec5Title = data.sec5Title || "Our salesforce solutions deliver:";
    const whatWeDeliverList = data.whatWeDeliverList || [
        "Improved business efficiency",
        "Proper and balanced distribution of work",
        "Maximum ROI and profit margins",
        "Withhold the existing customer and add new ones"
    ];
    const sec5P1 = data.sec5P1 || "We also provide Salesforce add-ons to improve the functionality and value to your marketing and sales activities. Our cost-effective Salesforce solutions provide you with suitable license options that fit the scope and demands of your business.";

    const sec6Title = data.sec6Title || "What we can do";
    const whatWeCanDoList = data.whatWeCanDoList || [
        "Transform scattered customer or partner data across systems and departments in a systematic manner",
        "Facilitate adoption of the CRM system",
        "Improve sales processes, increase sales productivity",
        "Increase lead conversion rate",
        "Add a personal touch to your marketing activities",
        "Align your sales, marketing, and support teams",
        "Deliver consistent customer service across all departments",
        "Uniform shopping experience across all online channels",
        "Faster customer service."
    ];
    const sec6P1 = data.sec6P1 || "We can track your customers’ activity at each end, their purchase and sales habits, provide you with their history of purchase orders, invoices, and sales orders to help you identify your target audience for a particular product. We even help with cross-selling or upselling by providing old data. Our Salesforce solutions systematically take customers communication, feedback, problems, and solutions and help you improve your services.";
    const sec6P2 = data.sec6P2 || "We welcome you to tap into the rich 10 year-experience of our Salesforce consultants. After having worked with a variety of industries, we have positioned ourselves to deliver precise solutions to increase sales and customer engagement in IT, business services, manufacture, automotive, wellness, and other sectors.";
    const sec6P3 = data.sec6P3 || "If this has enticed you to influence your customers in a positive way, then connect with Recenturesoft today!";
    const sec6P4 = data.sec6P4 || "Drop us an email or call, or if you feel like going by the traditional way, let’s catch up over tea and discuss future propositions.";

    return (
        <div className="prose prose-slate dark:prose-invert max-w-none w-full mt-4 mb-4">
            {sec1Title && <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{sec1Title}</h3>}
            {sec1P1 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{sec1P1}</p>}
            {sec1P2 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{sec1P2}</p>}
            {sec1P3 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{sec1P3}</p>}

            {sec2Title && <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{sec2Title}</h3>}
            {whatWeDoList && whatWeDoList.length > 0 && (
                <ul className="list-none space-y-4 mb-8">
                    {whatWeDoList.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">●</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            )}

            {sec3Title && <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{sec3Title}</h3>}
            {sec3P1 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{sec3P1}</p>}

            {sec4Title && <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{sec4Title}</h3>}
            {sec4Subtitle && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{sec4Subtitle}</p>}
            {whatWeBringList && whatWeBringList.length > 0 && (
                <ul className="list-none space-y-4 mb-8">
                    {whatWeBringList.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">●</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            )}
            {sec4P1 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{sec4P1}</p>}

            {sec5Title && <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{sec5Title}</h3>}
            {whatWeDeliverList && whatWeDeliverList.length > 0 && (
                <ul className="list-none space-y-4 mb-8">
                    {whatWeDeliverList.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">●</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            )}
            {sec5P1 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{sec5P1}</p>}

            {sec6Title && <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{sec6Title}</h3>}
            {whatWeCanDoList && whatWeCanDoList.length > 0 && (
                <ul className="list-none space-y-4 mb-8">
                    {whatWeCanDoList.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">●</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            )}
            {sec6P1 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{sec6P1}</p>}
            {sec6P2 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{sec6P2}</p>}
            {sec6P3 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{sec6P3}</p>}
            {sec6P4 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">{sec6P4}</p>}
        </div>
    );
}
