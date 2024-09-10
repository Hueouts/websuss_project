import React, { useState } from 'react'

export default function Questions() {
    const [q1, setQ1] = useState(false);
    const [q2, setQ2] = useState(false);
    const [q3, setQ3] = useState(false);
    const [q4, setQ4] = useState(false);
    const [q5, setQ5] = useState(false);
    const [q6, setQ6] = useState(false);

    return (
        <div className=' cont-p faq-container'>
            <h2 className='fz4'>
                Find the Answer to Your Questions!
            </h2>
            <div className='faq-container-inner' >
                <div className='faq-item'>
                    <h3 className='fz2 faq-question' onClick={() => { setQ1(!q1) }} >1. How do I sign up for web design and development services? <i className={q1 ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></h3>

                    {q1 && (<p className='faq-answer'>Picking a plan should be effortless! Our Core Pack is like the classic combo – website, domain, email, and lightning-fast support. The Plus Package is a VIP upgrade with expert tweaks and additional features to make your website stand out. The Ultra Plan is like having a personal growth coach to skyrocket your online game with our comprehensive web development services. Still unsure? Drop us a message at help@websuss.com, and we’ll help you find the perfect match!</p>
                    )}
                </div>
                <div className='faq-item'>
                    <h3 className='fz2 faq-question' onClick={() => { setQ2(!q2) }}>2. How can I determine which plan is right for me? <i className={q2 ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></h3>
                    {q2 && (<p className='faq-answer'>Picking a plan should be effortless! Our Core Pack is like the classic combo – website, domain, email, and lightning-fast support. The Plus Package is a VIP upgrade with expert tweaks and additional features to make your website stand out. The Ultra Plan is like having a personal growth coach to skyrocket your online game with our comprehensive web development services. Still unsure? Drop us a message at help@websuss.com, and we’ll help you find the perfect match!</p>
                    )}
                </div>
                <div className='faq-item'>
                    <h3 className='fz2 faq-question' onClick={() => { setQ3(!q3) }}>3. What happens after I've chosen my plan? <i className={q3 ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></h3>
                    {q3 && (<p className='faq-answer'>Fantastic, you’re on board! First, select your chosen plan, then dive into our informative questionnaire. Next, schedule a Launch & Training call – it’s your website’s grand reveal! We’ll showcase your masterpiece, make any necessary tweaks based on your feedback, and show you the ropes for your future needs. If you went for the Plus or Ultra plans, we’ll also spill the beans on all the perks you’ve unlocked.</p>
                    )}
                </div>
                <div className='faq-item'>
                    <h3 className='fz2 faq-question' onClick={() => { setQ4(!q4) }}>4. Can I Switch Plans Later? <i className={q4 ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></h3>
                    {q4 && (<p className='faq-answer'>Absolutely! We understand that your business needs may evolve. You can easily upgrade or downgrade your plan at any time. This allows you to scale your online presence seamlessly as your business grows. </p>
                    )}</div>
                <div className='faq-item'>
                    <h3 className='fz2 faq-question' onClick={() => { setQ5(!q5) }}>5. Still Have Questions About Web Development Services Company? <i className={q5 ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></h3>
                    {q5 && (<p className='faq-answer'>Don’t hesitate to contact our friendly customer support team at help@websuss.com. We’re always happy to chat and answer any questions you may have about our web development firm.</p>
                    )}</div>
                <div className='faq-item'>
                    <h3 className='fz2 faq-question' onClick={() => { setQ6(!q6) }}>6. What makes Websuss a Top Website Development Company for My Business? <i className={q6 ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></h3>
                    {q6 && (<p className='faq-answer'>At Websuss, we go beyond being just a web development company. We understand that your website is a crucial element of your online success. That’s why we offer a comprehensive solution that includes:
                        <br />
                        <b>
                            Custom Web Design & Development:
                        </b>
                        Our experienced team creates websites that are not only visually appealing but also strategically designed to achieve your specific goals.
                        <br />
                        <b>
                            Focus on Conversion:
                        </b> We don’t just build websites; we build websites that convert visitors into leads.
                        <br />
                        <b>
                            Scalability & Flexibility:
                        </b>Our professional web development services are designed to grow with your business. You can easily upgrade your plan as your needs evolve.
                        <br />
                        <b>
                            Dedicated Account Manager:
                        </b> You’ll have a dedicated point of contact throughout the entire process, ensuring clear communication and a smooth experience.
                        <br />
                        <b>
                            Affordable Pricing:
                        </b> We offer a variety of plans to fit different budgets, making top-quality web development services accessible to businesses of all sizes.</p>
                    )}</div>
            </div>
        </div>
    )
}

