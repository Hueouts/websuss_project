import React, { useEffect, useState, useRef } from 'react'
import log from '../log.webp'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'js-cookies'
import Login from './Login';
const websites = [
    {
        name: 'The Websuss Journey',
        description: `Hey there! Welcome to Websuss, where the journey began 
     with a dream to break...`,
        link: "/about"
    },
    {
        name: 'The Play-by-Play: Get Rolling in Three Easy Steps',
        description: `Select your plan, verify your account, confirm payment,
      and answer.Robo-assistants meet real people!
        Sales-Ready Websites: Your website isn't just a pretty face...
     `, link: "/about"
    },
    {
        name: 'Simple & Affordable – Just Right',
        description: `We kicked off Websuss in 2023 to
      solve a headache for small business owners.
      and navigating the digital labyrinth 
     aren’t everyone’s cup of tea. We get it... `,
        link: "/about"
    },
    {
        name: 'Spearheading the Underdogs',
        description: `Small businesses are the heartbeat of our communities,
     and they deserve a fair shot. Whether
     it’s a financial boost, a stellar storefront, 
     or a way to connect with online customers–we got you... `,
        link: "/about"
    },
    {
        name: 'Your Website Launch',
        description: `Professional Website
          Ready in 7 days
            All done for you
            Domain + email`,
        link: "/website-launch"
    },
    {
        name: 'WHAT WE DO FOR YOU',
        description: ` 
     We build beautiful, professional websites
      tailored to your business,
       ready to sell your products,`,
        link: "/website-launch"
    },
    {
        name: 'A Website That Is Ready To Sell',
        description: `SEO Optimization
    E-commerce with a 24/7 Booking System
    Mobile-Friendly & Responsive`,
        link: "/website-launch"
    },

    {
        name: 'Pro Email & Secure Hosting',
        description: `
     Choose a custom domain or connect existing domain.
     Make some tweaks to the website if needed.`,
        link: "/website-launch"
    },

    {
        name: 'Build Credibility With A Custom Domain',
        description:
            `We bundle together your domain, email,
      and hosting to give your website the perfect start with a 
      unique identity,`,
        link: "/website-launch"
    },

    {
        name: 'Launch & Training',
        description: `Right after submitting your business information, 
     you can book a call with the specialist who built your website. `,
        link: "/website-launch"
    },

    {
        name: 'Call With The Team',
        description: `Reveal your finished website for approval.
     Make some tweaks to the website if needed.`,
        link: "/website-launch"
    },

    {
        name: 'Done-for-you service',
        description: `from website building to maintenance,
     so your online presence is a success.`, link: "/website-launch"
    },

    {
        name: 'Lightning-fast delivery',
        description: `A professional site makes a lasting impression, 
    so we deliver yours in under a week.`,
        link: "/website-launch"
    },

    {
        name: 'Customization & refinement',
        description: `You won’t be stuck with a cookie-cutter website. 
     We work closely with you to understand`,
        link: "/website-launch"
    },

    {
        name: 'WHAT ELSE DO YOU GET?',
        description: `Your website is ready for business from day one.
    No limits on the amount you can sell.`,
        link: "/website-launch"
    },

    {
        name: 'Web Store, Ready To Sell',
        description: `0% commissions from Websuss.
    Convenient, fast, and secure order processing.`,
        link: "/website-launch"
    },

    {
        name: 'Enhanced Analytics ',
        description: `Maximize your business’s potential with
     real-time insights from day one.
    On-site booking system or connect your own.`,
        link: "/website-launch"
    },

    {
        name: 'Analytics And Insights',
        description: `24/7 appointment management.
     Email confirmation & calendar sync for bookings.
     Confirm/change bookings from Business Hub.`,
        link: "/website-launch"
    },

    {
        name: 'Appointment Management System',
        description: `Your website is ready to accept appointments from day one.
    Track sales, appointments, and behaviors on one dashboard.
    Optimize offerings and marketing with data-driven decisions.`,
        link: "/website-launch"
    },

    {
        name: 'Businesses Love',
        description: `If you are looking for a website provider,
      then UENI is fantastic`,
        link: "/success-stories"
    },

    {
        name: 'BELLA GOODE',
        description: ` The level of service is really really good, and I’m getting loads of leads as well...`,
        link: "/success-stories"
    },

    {
        name: 'SEVEREN HENDERSON',
        description: `You get all the support, all the tech help 
     that you need, in a quick turnaround time.`,
        link: "/success-stories"
    },


    {
        name: 'SUCCESS',
        description: `Websuss transformed my bland site into
      a brand-worthy one, soaring sales with amazing design.`,
        link: "/success-stories"
    },

    {
        name: ' Grow your business',
        description: `Built-for-you website or online store
     Personalized website design & copy
     Ready in 7 days
     1-to-1 launch & training call`,
        link: "/pricing"
    },

    {
        name: 'Core',
        description: `We build and launch your website,
     1-to-1 launch & training call,
Professional email(you@yourbusiness.com),
Unlimited edits for 15 days post launch,
30-Day Money-back Guarantee`,
        link: "/pricing"
    },

    {
        name: 'Plus',
        description: `We manage your online presence.
     Personalized website design & copy,
     Fast loading to rank high on Google,
     Custom domain name (yourbusiness.com),
     Secure hosting & SSL certificate`,
        link: "/pricing"
    },

    {
        name: 'Ultra',
        description: `We grow your business.
     Custom domain name & 4 email address,
Advanced SEO to rank on Google,
Convert visitors into customers,
Promote your products on Social Media,
VIP phone support,
30-Day Money-back Guarantee.
     `, link: "/pricing"
    },

    {
        name: 'Features',
        description: `Level up your website with added functionalities
      – making it cooler and more powerful than ever`,
        link: "/pricing"
    },

    {
        name: 'Answer to Your Questions!',
        description: `How do I sign up for web design and development services?`,
        link: "/faq"
    },

    {
        name: ' design and development services?',
        description: `Picking a plan should be effortless! Our Core Pack is 
    like the classic combo – website, domain, email, and lightning-fast 
    support. `,
        link: "/faq"
    },

    {
        name: ' which plan is right for me?',
        description: ` Our Core Pack is like the classic combo – 
     website, domain, email, and lightning-fast support.`,
        link: "/faq"
    },

    {
        name: `after I've chosen my plan?`,
        description: ` First, select your chosen plan, then dive into our
      informative questionnaire. Next, schedule a Launch & Training call `,
        link: "/faq"
    },

    {
        name: 'Switch Plans Later?',
        description: `We understand that your business needs may evolve.
      You can easily upgrade or downgrade your plan at any time.`,
        link: "/faq"
    },

    {
        name: 'About Web Development Services Company?',
        description: `Don’t hesitate to contact our friendly 
     customer support team at help@websuss.com. `,
        link: "/faq"
    },

    {
        name: 'What makes Websuss a Top Website',
        description: `At Websuss, we go beyond being just a web development company.
      We understand that your website is a crucial element of your
       online success.`,
        link: "/faq"
    },

    {
        name: 'Privacy Policy',
        description: `At Websuss, we view privacy as a fundamental aspect of our relationship
     with our users. Our dedication to data protection is unwavering...`,
        link: "/policy"
    },
    {
        name: 'Information',
        description: `Personal details you provide (e.g., name, email address, gender, date of birth,
         photos, postal address, phone number) when you register, book appointments,
          submit material, or enter competitions on the Platform.`,
        link: "/policy"
    },
    {
        name: 'Added Information',
        description: `Security Measures: We implement advanced 
     security measures to protect against unauthorized access...`,
        link: "/policy"
    },
    {
        name: 'Google API Services',
        description: `Websuss’s access and use of information 
     received from Google APIs will adhere to the Google API`,
        link: "/policy"
    },
    {
        name: 'Refer a Friend',
        description: `Websuss may offer referral programs like “Refer a Friend,” `,
        link: "/policy"
    },
    {
        name: 'Contact Us',
        description: `For questions or concerns regarding this policy,
      please email us at [legal@websuss.com].`,
        link: "/policy"
    },
    {
        name: 'Your Rights',
        description: `You have rights to access, correct, and manage your personal information.`,
        link: "/policy"
    },
    {
        name: 'Effortless Booking',
        description: `Kickstart your business on day one with
      our comprehensive e-commerce and booking solutions`,
        link: "/sell-product-and-take-bookings"
    },
    {
        name: ' Customer Management',
        description: `Accept bookings 24/7 through your website.
    Receive automatic SMS and email notifications.`,
        link: "/sell-product-and-take-bookings"
    },
    {
        name: 'Start Selling Online',
        description: `Unlimited product listings for scalable business growth.
     Secure payment options with credit & debit cards.`,
        link: "/sell-product-and-take-bookings"
    },
    {
        name: 'Expand Your Reach',
        description: `Sync product catalog with Google, Facebook, and Instagram.`,
        link: "/sell-product-and-take-bookings"
    },
    {
        name: 'Social Media Marketing',
        description: `Amplify Your Reach, Engage Your Audience.`,
        link: "/social-media-promotion"
    },
    {
        name: 'Expand Your Reach',
        description: `Tap into a vast audience pool.
     Present your brand to potential customers far and wide.`,
        link: "/social-media-promotion"
    },
    {
        name: 'Engage Authentically',
        description: `Forge genuine relationships.
    Build trust and loyalty through interactive content.`,
        link: "/social-media-promotion"
    },
    {
        name: 'Boost Brand Visibility',
        description: `Increase presence with targeted campaigns.
    Put your brand in the spotlight.`,
        link: "/social-media-promotion"
    },
    {
        name: 'Cost-Effective',
        description: `Maximize impact on your marketing budget with social media.`,
        link: "/social-media-promotion"
    },
    {
        name: 'What Awaits Your',
        description: `Tailored content matching individual interests.
     Direct communication for feedback and queries.`,
        link: "/social-media-promotion"
    },
    {
        name: 'Navigating Success ',
        description: `Strengthen your brand status by appearing in the right place, at the right time, to the right people.`,
        link: "/targeted-advertising"
    },

];

export default function Nav() {
    const [drop, setDrop] = useState("down");
    const [login, setLogin] = useState(false);
    const [serch, setserch] = useState(false);
    const [query, setQuery] = useState("");
    const targetParagraphRefs = useRef([]);
    useEffect(() => {
        highlightText();
    }, [query]);
    const highlightText = () => {
        targetParagraphRefs.current.forEach((paragraphElement) => {
            if (!paragraphElement) return;

            const text = paragraphElement.textContent;
            const words = text.split(/(\s+)/);

            paragraphElement.innerHTML = '';

            words.forEach((word, index) => {
                const span = document.createElement('span');
                span.textContent = word;

                if (word.toLowerCase().includes(query) && query !== '') {
                    span.style.fontWeight = 'bold';
                }

                paragraphElement.appendChild(span);
            });
        });
    };
    const result = query.length > 0;
    const filteredSerch = websites.filter((website) => {
        const lowerCaseName = website.name.toLowerCase();
        const lowerCaseDescription = website.description.toLowerCase();
        const lowerCaseQuery = query.toLowerCase();

        return lowerCaseName.includes(lowerCaseQuery) || lowerCaseDescription.includes(lowerCaseQuery);
    });
    const dpList = filteredSerch.length > 0;
    const navigate = useNavigate();
    const xart = Cookies.getItem('cart');
    const websussUser = JSON.parse(Cookies.getItem('websussUser'));
    const websussPlan = JSON.parse(Cookies.getItem('websussPlan'));
    const [showButton, setShowButton] = useState(false);
    const [cdh, setcdh] = useState(false)
    const [cda, setcda] = useState(false)
    const [cdp, setcdp] = useState(false)
    const [cdwe, setcdwe] = useState(false)
    const [cdsus, setcdsus] = useState(false)
    const [cdpr, setcdpr] = useState(false)
    const [cdmy, setcdmy] = useState(false);
    function callelse(){  
        setcdh(false);
       setcda(false);
       setcdp(true);
       setcdwe(false);
       setcdsus(false);
       setcdpr(false);
       setcdmy(false);
       return
   }
    useEffect(() => {
        if (document.title === "Websuss || Home") {
            setcdh(true);
            setcda(false)
            setcdp(false)
            setcdwe(false)
            setcdsus(false)
            setcdpr(false)
            setcdmy(false)
            return
        }
        if(document.title==="Websuss || About us"){
            setcdh(false);
            setcda(true)
            setcdp(false)
            setcdwe(false)
            setcdsus(false)
            setcdpr(false)
            setcdmy(false)
            return
        }
            if(document.title==="Websuss || Website Launch"){
                setcdh(false);
                setcda(false)
                setcdp(false)
                setcdwe(true)
                setcdsus(false)
                setcdpr(false)
                setcdmy(false)
                return
            }
                if(document.title==="Websuss || SuccessStories"){
                    setcdh(false);
                    setcda(false)
                    setcdp(false)
                    setcdwe(false)
                    setcdsus(true);
                    setcdpr(false)
                    setcdmy(false)
                    return
                }
                    if(document.title==="Websuss || Pricing"){
                        setcdh(false);
                        setcda(false)
                        setcdp(false)
                        setcdwe(false)
                        setcdsus(false)
                        setcdpr(true)
                        setcdmy(false)
                        return
                    }
                        if(document.title==="Websuss || My Account"){
                            setcdh(false);
                            setcda(false)
                            setcdp(false)
                            setcdwe(false)
                            setcdsus(false)
                            setcdpr(false)
                            setcdmy(true)
                            return
                        }

        async function ftch() {
            if (websussUser) {

                await axios.post(`https:www.websuss.com/subs-plan/${websussUser._id}`)
                    .then((x) => {
                        if (x.data.message === "success") {
                            // console.log(x.data)
                            Cookies.setItem('websussPlan', JSON.stringify(x.data.result))

                            console.log("ryun", x.data.result)
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
            }
        }
        ftch()
    }, [])
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowButton(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [window.scrollY]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {

            setShowButton(null);

        }, 1000);
    };

    function dropControl() {
        const x = document.querySelector('.asideDrop');
        x.style.display = x.style.display === 'none' ? 'block' : 'none';

        setDrop(x.style.display === 'block' ? 'up' : 'down');
    }
    function asideOn() {
        const x = document.querySelector('.aside');
        const y = document.querySelector('.cover');
        x.style.width = "60%"
        y.style.display = "block";
    }
    function asideOff() {
        const x = document.querySelector('.aside');
        const y = document.querySelector('.cover');
        x.style.width = "0%"
        y.style.display = "none";
    }



    return (<>
        <div className='offerNav flx-r'>
            <p>Don’t Miss Out! Save Up To $499 Now! Get Your Website For Just $1 In 7 Days!
            </p>
            <div className='offerButton'><Link target='_top' to={'/pricing'}>Get started now <i className="fa-solid fa-arrow-right"></i></Link></div>
        </div>
        <div className='cover' onClick={() => { asideOff() }}></div>
        <aside className='aside'>
            <div className='asideMenu'>
                <ul>
                    <li className={cdh ? 'cd-h' : null} ><Link target='_top' to='/'>
                        Home
                    </Link></li>

                    <li className={cda ? 'cd-a' : null}><Link target='_top' to={'/about'}>About</Link></li>
                    <li className={cdp ? 'asideDropControl cd-p' : 'asideDropControl'} ><div onClick={() => { dropControl() }}><a>Product <i className={`fa-solid fa-caret-${drop}`}></i></a>
                    </div>
                    </li>
                    <ul className='asideDrop '>
                        <li><Link target='_top' to={'/website'}>Websites</Link></li>
                        <li><Link target='_top' to={'/google-business-profile'}>Google Business Profile</Link></li>
                        <li><Link target='_top' to={`/sell-product-and-take-bookings`}>Sell Products & Take Bookings</Link></li>
                        <li><Link target='_top' to={`/social-media-promotion`}>Social Media Promotion</Link></li>
                        <li><Link target='_top' to={'/targeted-advertising'}>Targeted Advertising</Link></li>
                        <li><Link target='_top' to={`/grow-your-business`}>Grow Your Business</Link></li>
                    </ul>
                    <li className={cdwe ? 'cd-we' : null}><Link target='_top' to={'/website-launch'}>Website Launch</Link></li>
                    <li className={cdsus ? 'cd-sus' : null}><Link target='_top' to={'/success-stories'}>Success Stories</Link></li>
                    <li className={cdpr ? 'cd-pr' : null}><Link target='_top' to={`/pricing`}>Pricing</Link></li>
                    <li className='cd-car'><Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i></Link></li>

                    {websussUser && websussPlan && (<li><div>
                        <div className={cdmy ? 'user flx-c cd-my' : "user flx-c"}>
                            <span><Link to={"/my-account"}>My Account</Link></span>
                        </div>
                    </div></li>)}
                    {!websussUser ? <li onClick={() => { setLogin(!login) }}><Link>Login</Link></li>
                        :
                        <li onClick={() => {
                            Cookies.removeItem("websussUser");
                            Cookies.removeItem('websussPlan');
                            Cookies.removeItem('websussOrder');
                            setTimeout(() => {
                                navigate('/');
                            }, 1500);
                            window.location.reload();
                        }}><Link>LogOut</Link></li>}
                </ul>
            </div>
        </aside>
        <nav>
            <div className='navBar flx-r'>
                <div className='navImage'>
                    <Link to={'/'}><img src={log} alt='webLogo' />
                    </Link>
                </div>
                <div className='navUrl flx-r'>
                    <ul className='flx-r'>
                        <li className={cdh ? 'cd-h' : null}><Link target='_top' to='/'>
                            Home
                        </Link></li>
                        <li className={cda ? 'cd-a' : null}><Link target='_top' to={'/about'}>
                            About
                        </Link></li>
                        <li onClick={callelse} className={cdp ? 'dropControl cd-p' : 'dropControl'}>
                            <Link >
                            Product <i className="fa-solid fa-caret-down"></i>
                        </Link>
                            <div className='dropDown flx-c'>
                                <div onClick={() => { navigate('/website') }}>
                                    <h3>Websites</h3>
                                    <span><Link>Standout with a professional web presence</Link></span>
                                </div>

                                <div onClick={() => { navigate('/google-business-profile') }}>
                                    <h3>Google Business Profile</h3>
                                    <span><Link>Maximize visibility in local searches</Link></span>
                                </div>

                                <div onClick={() => { navigate('/sell-product-and-take-bookings') }}>
                                    <h3>Sell Products & Take Bookings</h3>
                                    <span><Link>Launch your digital store from day 1</Link></span>
                                </div>

                                <div onClick={() => { navigate('/social-media-promotion') }}>
                                    <h3>Social Media Promotion</h3>
                                    <span><Link>Boost your brand on social platforms</Link></span>
                                </div>

                                <div onClick={() => { navigate('/targeted-advertising') }}>
                                    <h3>Targeted Advertising</h3>
                                    <span><Link>Reach your ideal customers</Link></span>
                                </div>

                                <div onClick={() => { navigate('/grow-your-business') }}>
                                    <h3>Grow Your Business</h3>
                                    <span><Link>
                                        Scale up with strategic 1-to-1 guidance</Link></span>
                                </div>

                            </div>


                        </li>
                        <li className={cdwe ? 'cd-we' : null}><Link target='_top' to={'/website-launch'}>
                            Website Launch
                        </Link></li>
                        <li className={cdsus ? 'cd-sus' : null}><Link target='_top' to='/success-stories'>
                            Success Stories
                        </Link></li>
                        <li className={cdpr ? 'cd-pr' : null}><Link target='_top' to={'/pricing'}>
                            Pricing
                        </Link></li>
                        {websussUser && websussPlan && (<li><div>
                            <div className={cdmy ? 'user-name flx-c cd-my' : "user-name flx-c"}><div>{websussUser.firstName + "." + websussUser.lastName} <i className="fa-solid fa-chevron-down"></i></div>
                                <span className='link-account'><Link target='_top' to={"/my-account"}>My Account</Link></span>
                            </div>
                        </div></li>)}
                        {xart ? <li className='cd-car'><Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i></Link></li> : <></>}
                    </ul>

                </div>
                <div className='lg-in'>
                    {!websussUser ? <div onClick={() => { setLogin(!login) }}><Link >
                        Login
                    </Link></div>
                        : <div onClick={() => {

                            Cookies.removeItem("websussUser");
                            Cookies.removeItem('websussPlan');
                            Cookies.removeItem('websussOrder');
                            setTimeout(() => {
                                navigate('/')
                            }, 1500);
                            window.location.reload();
                        }}
                        ><Link >
                                Logout
                            </Link></div>}
                </div>
                <div className='navInput'>
                    <i onClick={() => { setserch(!serch) }} className="fa-solid fa-magnifying-glass"></i>
                    <div className='nav-input'>
                        {serch && (<div>
                            <input type='text'
                                value={query}
                                onChange={
                                    (e) => {
                                        setQuery(e.target.value.toLowerCase());
                                    }}
                                placeholder='Search here...'
                            />
                            <i className="fa-solid fa-magnifying-glass"></i>
                            {result && (
                                <div className='login-res'>
                                    {filteredSerch.map((filresult, index) =>
                                    (
                                        <div onClick={() => {
                                            navigate(filresult.link)
                                            console.log(targetParagraphRefs)

                                        }}
                                            key={filresult.name}  >
                                            <h2 className='des-h'>{filresult.name}</h2>
                                            <p ref={(el) => (targetParagraphRefs.current[index] = el)} className='des-p'>{filresult.description}</p>
                                        </div>
                                    ))}
                                    {!dpList &&
                                        (<p className='wbn'>
                                            Seems you're venturing beyond...
                                        </p>)
                                    }
                                </div>

                            )}

                        </div>)}
                    </div>

                </div>


                <div className='burger' onClick={() => { asideOn() }}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </nav>

        {showButton && (<button className='scs' onClick={() => { scrollTop() }}><i className="fa-solid fa-chevron-up"></i></button>)}
        {login ? <Login btn={true} /> : null}
    </>
    )
}
