export default function SalesforceContent({ dynamicData = {} }) {
    const defaultIntro = {
        heading: "Increase Business Efficiency with Salesforce Integration Company in India",
        p1: "The road to gaining customers goes through the digital landscape. Recenturesoft delivers full-cycle Salesforce consulting services to help businesses leverage the world’s leading CRM platforms in the entirety of its benefits for your industry.",
        p2: "We provide personalised services, quick response, and smooth user-interface to your digitally connected customers. Our Salesforce solutions are focussed to create innovative platforms which enable organisations to reimagine their relationships with customers and add a new dimension across all channels and at every touch point.",
        p3: "Recenturesoft’s Salesforce puts your target customers at the centre of everything we do. We aim to support organisations to get the most out of their Salesforce implementation to boost sales, improve efficiency and productivity, and improve customer service. All this, while reducing your operational costs and time-to-market to the minimum."
    };

    const defaultWhatWeDo = {
        heading: "What we do?",
        items: [
            "Strategic assessment",
            "Build enterprise cloud computing capability",
            "Improve agility and delivery speed of your services"
        ]
    };

    const defaultIntegration = {
        heading: "Salesforce Integration Company in India",
        p1: "We help you achieve real, tangible, and significant business results. We innovate to transform your sales, marketing, customer service, and commerce cloud strategy and yield higher revenue. With the combined strength of our technological expertise and CRM solution–Salesforce, Recenturesoft can help you accelerate digital transformation with better performance and customer-centric business value."
    };

    const defaultWhatWeBring = {
        heading: "What we bring to your project?",
        intro: "Recenturesoft’s team is qualified to deliver Salesforce flagship products, including:",
        items: [
            "Roll-out of the sales cloud",
            "Launch of the marketing cloud",
            "Roll-out of the community cloud",
            "Launch of the service cloud"
        ],
        outro: "Recenturesoft comprehends the idea of being connected with the customers and understands the importance of your customers’ relationship with your business. Hence, we offer Salesforce solutions which are comprehensive, quick, scalable, and easy to use and apply."
    };

    const defaultSolutionsDeliver = {
        heading: "Our salesforce solutions deliver:",
        items: [
            "Improved business efficiency",
            "Proper and balanced distribution of work",
            "Maximum ROI and profit margins",
            "Withhold the existing customer and add new ones"
        ],
        outro: "We also provide Salesforce add-ons to improve the functionality and value to your marketing and sales activities. Our cost-effective Salesforce solutions provide you with suitable license options that fit the scope and demands of your business."
    };

    const defaultWhatWeCanDo = {
        heading: "What we can do",
        items: [
            "Transform scattered customer or partner data across systems and departments in a systematic manner",
            "Facilitate adoption of the CRM system",
            "Improve sales processes, increase sales productivity",
            "Increase lead conversion rate",
            "Add a personal touch to your marketing activities",
            "Align your sales, marketing, and support teams",
            "Deliver consistent customer service across all departments",
            "Uniform shopping experience across all online channels",
            "Faster customer service."
        ],
        p1: "We can track your customers’ activity at each end, their purchase and sales habits, provide you with their history of purchase orders, invoices, and sales orders to help you identify your target audience for a particular product. We even help with cross-selling or upselling by providing old data. Our Salesforce solutions systematically take customers communication, feedback, problems, and solutions and help you improve your services.",
        p2: "We welcome you to tap into the rich 10 year-experience of our Salesforce consultants. After having worked with a variety of industries, we have positioned ourselves to deliver precise solutions to increase sales and customer engagement in IT, business services, manufacture, automotive, wellness, and other sectors.",
        p3: "If this has enticed you to influence your customers in a positive way, then connect with Recenturesoft today!",
        p4: "Drop us an email or call, or if you feel like going by the traditional way, let’s catch up over tea and discuss future propositions."
    };

    const intro = dynamicData.salesforceIntro || defaultIntro;
    const whatWeDo = dynamicData.salesforceWhatWeDo || defaultWhatWeDo;
    const integration = dynamicData.salesforceIntegration || defaultIntegration;
    const whatWeBring = dynamicData.salesforceWhatWeBring || defaultWhatWeBring;
    const solutionsDeliver = dynamicData.salesforceSolutionsDeliver || defaultSolutionsDeliver;
    const whatWeCanDo = dynamicData.salesforceWhatWeCanDo || defaultWhatWeCanDo;

    return (
        <div className="prose prose-slate dark:prose-invert max-w-none w-full mt-4 mb-4">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{intro.heading}</h3>
            {intro.p1 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{intro.p1}</p>}
            {intro.p2 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{intro.p2}</p>}
            {intro.p3 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{intro.p3}</p>}

            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{whatWeDo.heading}</h3>
            {whatWeDo.items?.length > 0 && (
                <ul className="list-none space-y-4 mb-8">
                    {whatWeDo.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">●</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            )}

            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{integration.heading}</h3>
            {integration.p1 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{integration.p1}</p>}

            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{whatWeBring.heading}</h3>
            {whatWeBring.intro && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{whatWeBring.intro}</p>}
            {whatWeBring.items?.length > 0 && (
                <ul className="list-none space-y-4 mb-8">
                    {whatWeBring.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">●</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            )}
            {whatWeBring.outro && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{whatWeBring.outro}</p>}

            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{solutionsDeliver.heading}</h3>
            {solutionsDeliver.items?.length > 0 && (
                <ul className="list-none space-y-4 mb-8">
                    {solutionsDeliver.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">●</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            )}
            {solutionsDeliver.outro && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{solutionsDeliver.outro}</p>}

            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">{whatWeCanDo.heading}</h3>
            {whatWeCanDo.items?.length > 0 && (
                <ul className="list-none space-y-4 mb-8">
                    {whatWeCanDo.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">●</span>
                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            )}
            {whatWeCanDo.p1 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{whatWeCanDo.p1}</p>}
            {whatWeCanDo.p2 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{whatWeCanDo.p2}</p>}
            {whatWeCanDo.p3 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{whatWeCanDo.p3}</p>}
            {whatWeCanDo.p4 && <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">{whatWeCanDo.p4}</p>}
        </div>
    );
}
