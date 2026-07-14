export default function CmsContent({ dynamicData = {} }) {
    const {
        cmsIntro = {},
        cmsBest = {},
        cmsServices = {},
        cmsProcess = {},
        cmsBenefits = {},
        cmsChooseUs = {}
    } = dynamicData;

    const defaultServices = [
        { title: "CMS Integrations", desc: "Our team can integrate a huge range of important plugins, extensions, along with the necessary tools inside your current CMS solutions. This can help you streamline businesses, enhance efficiency plus boost your ROI." },
        { title: "Application Development", desc: "Our CMS development team has expertise in utilizing the most advanced technologies plus industry trends to offer SEO-optimized, user-friendly, along with scalable CMS applications. Our best CMS Development Company In India can help improve any digital marketing efforts plus enable low-cost workflow management." },
        { title: "Migration Services", desc: "Recenturesoft CMS Development services also provides powerful website migration solutions. Our experts can help improve the old website's speed, utilize HTTPS protocols and enable your business to handle larger quantities of traffic." },
        { title: "Plugin CMS Development", desc: "Our CMS Development Services will include all the functions you want in your software ranging from drag-and-drop buttons to SEO-boosting modules. Moreover, our best CMS Development India team can develop plus implement multiple plugins and enable you to integrate new features or make changes anytime." },
        { title: "Support & Maintenance", desc: "We offer the best CMS Development services in for all kinds of businesses. Moreover, our experts will help deploy your CMS system and ensure it works efficiently on the platform you choose." }
    ];

    const defaultProcess = [
        { title: "Review & Planning", desc: "Our experts will first start by analysing your business and list all the requirements. We ask what tools you require and suggest relevant features that will help build a powerful CMS system." },
        { title: "Mockups & Designs", desc: "Our CMS Development Service experts will start designing the interface after all the common questions get answered. We ensure you get an interactive and appealing CMS system design that will provide hassle-free usability." },
        { title: "Development", desc: "We appoint the most suitable developer to offer premium-quality CMS that will suit your requirements. Our Best CMS Development offers client-centric solutions at the best rates." },
        { title: "Testing", desc: "Our best CMS Development team will perform thorough tests on your final product. We re-test your CMS until all the bugs are removed and the software runs smoothly." },
        { title: "Deployment", desc: "Our experts have successfully deployed several CMS on the platform of your choosing. Recenturesoft's best CMS Development Company In India will ensure your software is well-integrated and helps streamline existing processes." },
        { title: "Maintenance and Support", desc: "Our CMS Development Services delivers support even after your software is deployed. We ensure all our solutions work hassle-free and with utmost efficiency." }
    ];

    const defaultBenefits = [
        { title: "Allows multiple users", desc: "Our CMS Development Company makes it easy to handle a team, publish content, and enable multiple users to work on a single task." },
        { title: "Manage content", desc: "Our CMS Development Services allows you to manage as well as remove or change content when it becomes outdated. Also, you can get customized content including countdown calendars plus lists to enable better configuration. Effective CMS Development services will help rank content well on search engines." },
        { title: "Take control", desc: "A CMS development team can offer excellent control over your business and enable the users to assign tasks and roles. Moreover, you can check the progress anytime you want and make relevant changes." },
        { title: "Make any changes", desc: "A CMS Development Company will offer scalable software that can be changed or modified anytime you want. You can change the design of the website as per the requirements and do not require third-party CMS systems." },
        { title: "Improve site maintenance", desc: "With our CMS Development company India, you will get a powerful structured software that costs low on maintenance and will work well for a long time." },
        { title: "Exclusive Rights", desc: "You own all the rights to the custom CMS Development services you get. This allows you to make changes and updates anytime you want without relying on commercial softwares." }
    ];

    const defaultChooseUs = [
        { title: "Trusted Team", desc: "Our team of experienced members are well versed with all the requirements to make a powerful CMS. Moreover, our CMS Development Company team offers top-class services and ensures to deliver the best client-centric solutions." },
        { title: "On-time delivery", desc: "We follow a set roadmap and place milestones so that our team works together and delivers the software on time. Moreover, our CMS Development Company team also keeps you in the loop throughout the process and asks for constant feedback." },
        { title: "Affordable", desc: "Our experts offer the most affordable CMS Development services India without compromising the quality. We ensure all the features work efficiently and you don't have to pay extra for functions you don't want." },
        { title: "Prompt Services", desc: "Want help with a CMS instantly? Luckily we also offer premium CMS Development services and support. Our experts are there to answer all your queries and offer quick support anytime you want." },
        { title: "Support and Maintenance", desc: "Software needs to be monitored after it gets deployed. This helps detect any signs of bugs or issues that may arise in a heavy workload. Our Best CMS Development Company provides the best support and ensures your platform will operate efficiently. Moreover, you can opt to let our Best CMS Development Company team maintain your software and keep it updated at all times." }
    ];

    return (
        <div className="prose prose-slate dark:prose-invert max-w-none w-full mt-4 mb-4">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {cmsIntro.heading || "What is the role of CMS Development Company in India"}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed whitespace-pre-wrap">
                {cmsIntro.description || "As the name implies, CMS is a powerful software application that enables a user to make, edit, manage plus publish digital content. CMS can be used for different types of users and a wide range of verticals. CMS Development Company provides your end-users with different options to manage plus also access information, content, as well as other data of the organization. Custom-build CMS Development Company offers clever features including SEO friendliness and an interactive user interface. Moreover, you also get a swift development system and the ability to streamline complex processes within your business."}
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {cmsBest.heading || "Recenturesoft: The Best CMS Development Company"}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed whitespace-pre-wrap">
                {cmsBest.desc1 || "Recenturesoft's Custom CMS Solutions are specially designed to integrate with any current content management system plus can help build one from scratch. We can help improve your website, apps, social media platforms, e-commerce store, as well as blog. Choose Recenturesoft’s CMS Development Company to get secure, scalable, as well as state-of-the-art CMS systems that follow international web standards."}
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed whitespace-pre-wrap">
                {cmsBest.desc2 || "Our range of CMS website development services includes the latest technology stacks, experienced developers, along with the best practices to fulfill all your requirements. Recenturesoft is a renowned company that offers CMS Development services in India to large and small scale businesses. Our CMS Development Services will ensure your business runs smoothly and without any hassle. Partner with our best CMS Development Company to get an extensive range of services at the best rates. Get custom CMS Development services in India that will help manage website content and business data in a more efficient manner."}
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {cmsServices.heading || "CMS Development Services In India"}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed whitespace-pre-wrap">
                {cmsServices.intro || "Our experienced CMS developers are proficient in creating and deploying CMS solutions for all types of enterprises. We can offer custom CMS platforms such as Joomla or WordPress as per your business requirements."}
            </p>
            <ul className="list-none space-y-4 mb-8">
                {(cmsServices.items?.length > 0 ? cmsServices.items : defaultServices).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">●</span>
                        <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.title && <strong className="text-slate-900 dark:text-white">{item.title}: </strong>}
                            {item.desc}
                        </span>
                    </li>
                ))}
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {cmsProcess.heading || "Process Of CMS Development Company:"}
            </h3>
            <ul className="list-none space-y-4 mb-8">
                {(cmsProcess.items?.length > 0 ? cmsProcess.items : defaultProcess).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">●</span>
                        <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.title && <strong className="text-slate-900 dark:text-white">{item.title}: </strong>}
                            {item.desc}
                        </span>
                    </li>
                ))}
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {cmsBenefits.heading || "Benefits Of Implementing A CMS System:"}
            </h3>
            <ul className="list-none space-y-4 mb-8">
                {(cmsBenefits.items?.length > 0 ? cmsBenefits.items : defaultBenefits).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">●</span>
                        <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.title && <strong className="text-slate-900 dark:text-white">{item.title}: </strong>}
                            {item.desc}
                        </span>
                    </li>
                ))}
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {cmsChooseUs.heading || "Why Choose Our CMS Development Company?"}
            </h3>
            <ul className="list-none space-y-4 mb-8">
                {(cmsChooseUs.items?.length > 0 ? cmsChooseUs.items : defaultChooseUs).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">●</span>
                        <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.title && <strong className="text-slate-900 dark:text-white">{item.title}: </strong>}
                            {item.desc}
                        </span>
                    </li>
                ))}
            </ul>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed whitespace-pre-wrap">
                {cmsChooseUs.footerText || "Get in touch with our Best CMS Development Company to know more about our services, team, process along with the benefits of partnering with us today!"}
            </p>
        </div>
    );
}
