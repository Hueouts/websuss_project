import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import Cookies from 'js-cookies';
import shopify_icon from '../product/shopify_icon.png';
import wordpress_icon from '../product/wordpress_icon.png';
import wordpressStore from '../product/wordpressStore.png';
import shopifyStore from '../product/shopifyStore.png';
import wordpressBlog from '../product/wordpressBlog.png';
import { useNavigate } from 'react-router-dom';
const products = [
    {
        img: wordpressStore,
        name: "Wordpress Store",
        technology: "wordpress",
        category: "WEcom"
    },
    {
        img: shopifyStore,
        name: "Shopify Store",
        technology: "shopify",
        category: "SEcom"
    },
    {
        img: wordpressBlog,
        name: "Wordpress Blog",
        technology: "wordpress",
        category: "WBlog"
    }]
const industries = [
    "E-commerce and Retail",
    "Healthcare",
    "Education",
    "Real Estate",
    "Finance",
    "Hospitality and Tourism",
    "Professional Services",
    "Entertainment and Media",
    "Technology",
    "Non-profit and Charity",
    "Automotive",
    "Fashion and Beauty",
    "Food and Beverage",
    "Sports and Fitness",
    "Home Services",
    "Events and Entertainment",
    "Logistics and Transportation",
    "Agriculture",
    "Manufacturing",
    "Pets and Animal Services",
    "Construction",
    "Renewable Energy",
    "Legal Services",
    "Human Resources",
    "Marketing and Advertising",
    "Telecommunications",
    "Gaming",
    "Security",
    "Art and Design",
    "Publishing",
    "Photography",
    "Architecture",
    "Science and Research",
    "Cleaning Services",
    "Recruitment",
    "Translation Services",
    "Waste Management",
    "Funeral Services",
    "Library and Information Services"
]

const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    });
};
export default function Core() {
    const user = JSON.parse(Cookies.getItem('websussUser'))
    const [old_dta, setOld_data] = useState(JSON.parse(Cookies.getItem("websussOrder")))
    const [technology, setTechnology] = useState('');
    const [product, setProduct] = useState(null);
    const [techCat, setTechCat] = useState("");
    let [next, setNext] = useState(-1);
    const [productArray, setProductArray] = useState(products);
    const [singleImage, setSingleImage] = useState(null);
    const [war, setWar] = useState(false);
    const [cat, setCat] = useState(false);
    const [cat_t, setCat_t] = useState(false);
    const [productImg, setProductImg] = useState([]);
    const fileInputRef = useRef(null);
    const singleFileInputRef = useRef(null);
    const [techCatName, setTechCatName] = useState();
    const [technologyName, setTechnologyName] = useState();
    const [productName, setProductName] = useState();
    const plan = "core";
    const [businessName, setBusinessName] = useState(old_dta ? old_dta.bus_name : null);
    const [industry, setIndustry] = useState(old_dta ? old_dta.bus_indus : null);
    const [businessSell, setBusinessSell] = useState(old_dta ? old_dta.bus_sell : null);
    const [keyFeature, setKeyFeature] = useState(old_dta ? old_dta.key_feat : null);
    const [targetAud, setTargetAud] = useState(old_dta ? old_dta.tar_aud : null);
    const [companyBio, setCompanyBio] = useState(old_dta ? old_dta.comp_bio : null);
    const [keyWords, setKeyWords] = useState(old_dta ? old_dta.key_word : null);
    const [colorScheme, setColorScheme] = useState(old_dta ? old_dta.color_scheme : null);
    const [brandGuid, setBrandGuide] = useState(old_dta ? old_dta.bus_guid : null);
    const [businessEmail, setBusinessEmail] = useState(old_dta ? old_dta.bus_email : null);
    const [businessPhone, setBusinessPhone] = useState(old_dta ? old_dta.bus_phone : null);
    const [socialMediaLink, setSocialMediaLink] = useState();
    const [additionalInfo, setAdditionalInfo] = useState(old_dta ? old_dta.add_info : null);
    const [dta, setDta] = useState(false);
    const [idi, setIdi] = useState(false)
    const [orderDate, setOrderDate] = useState();
    const [email,setemail] = useState(user ? user.email : null);
    const [user_id, setuser_id] = useState(user ? user._id : null);
    const navigate = useNavigate();
    useEffect(() => {
        document.title="Websuss || Pricing";
        if (!user) {
            navigate('/')
        }else{
        setemail(user.email);
        setuser_id(user._id)
        }
        const now = new Date();
        const dateFormatted = formatDate(now);
        setOrderDate(dateFormatted);
    }, []);

    useEffect(() => {
        async function checkOrder() {
            if (user) {
                await axios.post(`https:www.websuss.com/order/${user._id}`)
                    .then((x) => {
                        if (x.data.order) {
                            // console.log(x.data)
                            Cookies.setItem('websussOrder', JSON.stringify(x.data.result));
                            setOld_data(x.data.result)
                            // if(x.data.result.plan === plan){
                            //     navigate('/pricing')
                            // }
                            return;
                        }

                    }).catch((err) => {
                        console.log(err);
                    })

                await axios.post(`https:www.websuss.com/subs-plan/${user._id}`)
                    .then((res) => {
                        if (res.data.message === "success") {

                            if (res.data.result.plan !== plan) {
                                
                                navigate('/pricing')
                            }
                            return;
                        } else {
                            navigate('/pricing');
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                return;
            }
            else {
                navigate('/')
            }
        }
        checkOrder()
    }, [])
    const handleProductImgChange = (event) => {
        if (war) {
            setWar(false);
        }
        const files = event.target.files;
        const fileArray = Array.from(files);

        setProductImg(prevImages => [...prevImages, ...fileArray]);

        if (productImg.length > 1 || fileArray.length > 2) {
            setProductImg([]);
            setWar(true);
            return;
        }
        return;
    };

    const handleTech = (x) => {
        setTechnology(x);
        if (x === "WordPress") {
            setProductArray(products.filter((result) => (result.technology === "wordpress")))
            console.log(productArray);
        }
        if (x === "Shopify") {

            setProductArray(products.filter((result) => (result.technology === "shopify")))
        }
        setCat(true);
    }
    const handleCat = (y) => {
        setTechCat(y);
        if (technology === "WordPress") {
            if (y === "E-com") {
                setProductArray(products.filter((result) => (result.category === "WEcom")))
            }
            if (y === "B-log") {
                setProductArray(products.filter((result) => (result.category === "WBlog")))
            }
        }
        if (technology === "Shopify") {
            if (y === "E-com") {
                setProductArray(products.filter((result) => (result.category === "SEcom")))
            }
            if (y === "B-log") {
                setTechCat("E-com")
                setProductArray(products.filter((result) => (result.category === "SEcom")))
            }
        }

        setCat_t(true)
    }
    const handleSingleImageChange = (event) => {
        const file = event.target.files[0];
        setSingleImage(file);
        return;
    };

    const removeImage = (indexToRemove) => {
        setProductImg(prevImages => prevImages.filter((_, index) => index !== indexToRemove));
    };

    const removeSingleImage = () => {
        setSingleImage(null);
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleSingleButtonClick = () => {
        singleFileInputRef.current.click();
    };
    const handelQuestionSubmit = async (e) => {
        e.preventDefault();
        const obj = {
            user_id: user_id,
            user_email: email,
            technology: technologyName,
            product: productName,
            category: techCatName,
            plan: plan,
            bus_name: businessName,
            bus_indus: industry,
            bus_sell: businessSell,
            key_feat: keyFeature,
            tar_aud: targetAud,
            comp_bio: companyBio,
            key_word: keyWords,
            color_scheme: colorScheme,
            bus_guid: brandGuid,
            bus_email: businessEmail,
            bus_phone: businessPhone,
            social_lnk: socialMediaLink,
            add_info: additionalInfo,
            orderDate: orderDate,
        };
        if (obj.bus_name === undefined || obj.bus_indus === undefined
            || obj.bus_sell === undefined || obj.key_feat === undefined
            || obj.tar_aud === undefined || obj.comp_bio === undefined
            || obj.key_word === undefined || obj.color_scheme === undefined
            || obj.bus_guid === undefined || obj.bus_phone === undefined
            || obj.social_lnk === undefined || obj.add_info === undefined) {
            setDta(true);
            return;

        }
        else {
            // console.log(obj)
            upd();
            return;
        }

        // Only construct and send FormData when the form is submitted
        async function upd() {
            const formData = new FormData();

            // Append object data to formData
            Object.entries(obj).forEach(([key, value]) => {
                formData.append(key, value);
            });

            if (productImg) {
                productImg.forEach((file) => {
                    formData.append('photos', file);
                });
            }

            if (singleImage) {
                formData.append('content', singleImage);
            }
            try {
                // Perform the POST request to upload the form data
                const response = await axios.post('https:www.websuss.com/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if (response.data.message === "success") {
                    console.log(response.data.result)
                    Cookies.setItem('websussOrder', JSON.stringify(response.data.result))
                    navigate('/my-account')
                }

            } catch (err) {
                console.error(err);  // Log any error that occurs
            }

            console.log("formData:", formData);
        }

    };

    function nxt() {
        window.scrollTo({ top: 380, behavior: 'smooth' });
        setNext(next + 1);
    }
    function prev() {
        window.scrollTo({ top: 370, behavior: 'smooth' });
        setNext(next - 1);
    }
    return (
        <div className='core-plan '>
            <div className='core-welcome'>Thank You For Choosing Websuss! Please Fill In The Information Properly To Prevent Delays.</div>
            <div className='core-main flx-c'>
                <div className='core-head'>
                    <h2>WE BUILD AND LAUNCH YOUR WEBSITE</h2>
                </div>
                <div className='core-heading'>
                    <h2>
                        Core Package
                        <br />
                        Questionnaire
                    </h2>
                </div>
                <div className="main-content">
                    <div>
                        <div className='prog flx-r'>
                            <div className='for-prog'>
                                <div><span onClick={() => { setNext(-1) }}><i className={next >= -1 ? "fa-solid fa-circle" : "fa-regular fa-circle"}></i></span></div>
                                <div><span onClick={() => { setNext(0) }}><i className={next >= 0 ? "fa-solid fa-circle" : "fa-regular fa-circle"}></i></span></div>
                                <div><span onClick={() => { setNext(1) }}><i className={next >= 1 ? "fa-solid fa-circle" : "fa-regular fa-circle"}></i></span></div>
                                <div><span onClick={() => { setNext(2) }}><i className={next >= 2 ? "fa-solid fa-circle" : "fa-regular fa-circle"}></i></span></div>
                                <div><span onClick={() => { setNext(3) }}><i className={next >= 3 ? "fa-solid fa-circle" : "fa-regular fa-circle"}></i></span></div>
                                <div><span onClick={() => { setNext(4) }}><i className={next >= 4 ? "fa-solid fa-circle" : "fa-regular fa-circle"}></i></span></div>
                                <div><span onClick={() => { setNext(5) }}><i className={next >= 5 ? "fa-solid fa-circle" : "fa-regular fa-circle"}></i></span></div>
                            </div>
                        </div>
                        {dta && (<div className='p-war'>Please fill out all the fields to continue. </div>)}
                        <div className='core-ques-form'>

                            <form onSubmit={handelQuestionSubmit} onChange={() => { setDta(false) }} >
                                {next === -1 && (
                                    <>
                                        <div className='flx-r tech-flx'>
                                            <div className='ch-tec'>Choose Your Technology:
                                                {cat && (<span className='bcd'>{technology}</span>)}
                                                <div className='flx-r selection'>
                                                    <div className='select-word' onClick={() => { handleTech("WordPress") }}>
                                                        <div className='flx-rs'><i className={technology === "WordPress" ? "fa-solid fam fa-circle-check" : "fa-regular fam fa-circle"}></i>
                                                            <img src={wordpress_icon} alt="wordpress.png" /></div></div>
                                                    <div className='select-shopi' onClick={() => { handleTech("Shopify") }}><div className='flx-rs'><i className={technology === "Shopify" ? "fa-solid fam fa-circle-check" : "fa-regular fam fa-circle"}></i><img src={shopify_icon} alt="shopify.png" /></div></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flx-r'>
                                            {productArray.map((x, index) => (
                                                <div>
                                                    <div className='p-img' key={index}>
                                                        <div onClick={
                                                            () => {
                                                                setProduct(index);
                                                                setProductName(x.name);
                                                                setTechnologyName(x.technology);
                                                                setTechCatName(x.category);
                                                                console.log(technologyName, productName, techCatName);
                                                            }} >

                                                            <img src={x.img} />

                                                        </div>

                                                    </div>

                                                    <div className='bcnx'
                                                        onClick={
                                                            () => {
                                                                setProduct(index);
                                                                setProductName(x.name);
                                                                setTechnologyName(x.technology);
                                                                setTechCatName(x.category);
                                                            }}
                                                        style={{ textAlign: 'center' }}> <i className={product === index ?
                                                            "fa-solid fa-sr fa-circle-check" : "fa-regular fa-sr fa-circle"}></i> <span>{x.name}</span>
                                                    </div></div>
                                            ))}
                                        </div>
                                        {productName && (<div className="form-buttons st-btn flx-r">
                                            <button type="button" className="next"
                                                onClick={() => {

                                                    nxt();

                                                }
                                                }>Next</button>
                                        </div>)}
                                    </>
                                )}

                                {next === 0 && (
                                    <section className="form-section" id="step1">
                                        <h2>Business Information:</h2>
                                        <div>
                                            <div>
                                                <label htmlFor="business-name">What is the name of your business? <span>*</span></label>
                                                <br /><input required type="text" id="business-name" value={businessName} onChange={(e) => { setBusinessName(e.target.value) }} placeholder="Type your Business Name Here..." />
                                            </div>
                                            <div>
                                                <label htmlFor="industry">What industry are you in? <span>*</span></label>
                                                <br />
                                                {/* <input required type="text" placeholder='Describe your industry here..' value={industry} onChange={(e) => { setIndustry(e.target.value) }} /> */}
                                                <div onClick={() => {
                                                    setIdi(!idi)
                                                }} className='select-indus'><span>{industry ? industry : "Choose Your Industry..."}</span> <i className="fa-solid fa-chevron-down"></i> </div>
                                                {idi && (<div className='indus-val'>{industries.map((x, index) => (
                                                    <div onClick={() => {
                                                        setIndustry(x);
                                                        setIdi(!idi)
                                                    }}>{x}</div>

                                                ))}</div>)}
                                            </div>
                                            <div>
                                                <label htmlFor="description">Briefly describe what your business sells or offers and its purpose. <span>*</span></label>
                                                <div> <textarea id="description" value={businessSell} onChange={(e) => { setBusinessSell(e.target.value) }} placeholder="Describe About Your Business Here.." />
                                                </div></div>
                                            <div className="form-buttons flx-r">
                                                <button type="button" className="previous" onClick={prev}>Previous</button>
                                                <button type="button" className="save-draft">Save as Draft</button>
                                                <button type="button" className="next"
                                                    onClick={() => {
                                                        if (!businessName || !industry || !businessSell) {
                                                            setDta(true);
                                                            return;
                                                        } else {
                                                            nxt()
                                                        }
                                                    }}>Next</button>
                                            </div>
                                        </div>
                                    </section>
                                )}
                                {next === 1 && (<section className="form-section " id="step2">
                                    <h2>Website Functionality:</h2>
                                    <div>
                                        <div>
                                            <label htmlFor="logo">Do you have a logo? Attach a picture. <span>*</span></label>
                                            <br />
                                            <div>
                                                <button onClick={handleSingleButtonClick} className='up-btn'>
                                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                                    <br /> Upload logo
                                                </button>
                                                <input type="file" accept="image/*" ref={singleFileInputRef} name='content' style={{ display: 'none' }} onChange={handleSingleImageChange} />
                                                {singleImage && (
                                                    <div className='core-bus-img flx-r'>
                                                        <div>
                                                            <button onClick={removeSingleImage}>
                                                                <i className="fa-solid fa-circle-xmark"></i>
                                                            </button>
                                                            <img src={URL.createObjectURL(singleImage)} />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="features">What key features do you want on your website (e.g., contact form, booking system, product catalog)? <span>*</span></label>
                                            <div> <textarea id="description" value={keyFeature} onChange={(e) => { setKeyFeature(e.target.value) }} placeholder="Describe About Your Business Here.." />
                                            </div></div>
                                        <div className="form-buttons flx-r flx-r">
                                            <button type="button" className="previous" onClick={prev}>Previous</button>
                                            <button type="button" className="save-draft">Save as Draft</button>
                                            <button type="button" className="next"
                                                onClick={
                                                    () => {
                                                        if (!singleImage || !keyFeature) {
                                                            setDta(true);
                                                            return;
                                                        } else {
                                                            nxt()
                                                        }
                                                    }}>Next</button>
                                        </div>
                                    </div>
                                </section>
                                )}
                                {next === 2 && (<section className="form-section " id="step3">
                                    <h2>Content & Images:</h2>
                                    <div>
                                        <div>
                                            <label htmlFor="target-audience">Briefly describe your target audience. <span>*</span></label>
                                            <br /><input required type="text" id="target-audience" value={targetAud} onChange={(e) => { setTargetAud(e.target.value) }} placeholder="Describe your targeted audience" />
                                        </div>
                                        <label htmlFor="company-bio">Please provide a short company bio, key messages, or values you want highlighted in the "About Us" section. <span>*</span></label>
                                        <br /><input required type="text" value={companyBio} onChange={(e) => { setCompanyBio(e.target.value) }} id="company-bio" placeholder="Write short company bio..." />
                                        <div>
                                            <label htmlFor="keywords">Can you list 3 keywords that best describe your business? <span>*</span></label>
                                            <br /><input required type="text" value={keyWords} onChange={(e) => { setKeyWords(e.target.value) }} id="keywords" placeholder="List 3 key words.." />
                                        </div>
                                        <div>
                                            <label htmlFor="product-images">Please upload pictures of your products or any images you want to include on your website. <span>*</span></label>
                                            <br />
                                            {war && (<span className='b-warn'>maximum 2 products allowed in Core Plan</span>)}
                                            <div>
                                                <button onClick={handleClick} className='up-btn'>
                                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                                    <br /> Drag and Drop (or)
                                                </button>
                                                <input type="file" accept="image/*" ref={fileInputRef} name='photos' style={{ display: 'none' }} onChange={handleProductImgChange} multiple />
                                                {productImg.length > 0 && (
                                                    <div className='core-bus-img flx-r'>
                                                        {productImg.map((file, index) => (
                                                            <div key={index}>
                                                                <button onClick={() => removeImage(index)}>
                                                                    <i className="fa-solid fa-circle-xmark"></i>
                                                                </button>
                                                                <img src={URL.createObjectURL(file)} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-buttons flx-r flx-r">
                                            <button type="button" className="previous" onClick={prev}>Previous</button>
                                            <button type="button" className="save-draft">Save as Draft</button>
                                            <button type="button" className="next" onClick={
                                                () => {
                                                    if (!targetAud || !companyBio || !keyWords || !productImg) {
                                                        setDta(true);
                                                        return;
                                                    } else {
                                                        nxt()
                                                    }
                                                }}>Next</button>
                                        </div>
                                    </div>
                                </section>)}

                                {next === 3 && (<section className="form-section " id="step4">
                                    <h2>Design Preferences</h2>
                                    <div>
                                        <div>
                                            <label htmlFor="color-scheme">Do you have any color scheme or theme preferences for your website? <span>*</span></label>
                                            <br /><input required type="text" id="color-scheme" value={colorScheme} onChange={(e) => { setColorScheme(e.target.value) }} placeholder="Any color scheme or theme..." />
                                        </div>
                                        <div>
                                            <label htmlFor="design-preferences">Do you have any specific design preferences or brand guidelines? <span>*</span></label>
                                            <br /><input required type="text" value={brandGuid} onChange={(e) => { setBrandGuide(e.target.value) }} id="design-preferences" placeholder="Any Specific Design.." />
                                        </div>
                                        <div className="form-buttons flx-r">
                                            <button type="button" className="previous" onClick={prev}>Previous</button>
                                            <button type="button" className="save-draft">Save as Draft</button>
                                            <button type="button" className="next"
                                                onClick={() => {
                                                    if (!colorScheme || !brandGuid) {
                                                        setDta(true);
                                                        return;
                                                    } else {
                                                        nxt()
                                                    }
                                                }}>Next</button>
                                        </div>
                                    </div>
                                </section>)}

                                {next === 4 && (<section className="form-section " id="step5">
                                    <h2>Contact Information:</h2>
                                    <div>
                                        <div>
                                            <label htmlFor="business-email">Do you have a primary business email address? <span>*</span></label>
                                            <br /><input type="text" value={businessEmail} onChange={(e) => { setBusinessEmail(e.target.value) }} id="business-email" placeholder="E.g. john@doe.com" />
                                        </div>
                                        <div>
                                            <label htmlFor="phone-number">Please enter your main phone number for your website. <span>*</span></label>
                                            <br /><input required type="text" value={businessPhone} onChange={(e) => { setBusinessPhone(e.target.value) }} id="phone-number" placeholder="E.g. +13004005000" />
                                        </div>
                                        <div>
                                            <label htmlFor="social-media">Do you have any other social media profiles you want linked (e.g., Facebook, Instagram)? <span>*</span></label>
                                            <div> <textarea required id="description" value={socialMediaLink} onChange={(e) => { setSocialMediaLink(e.target.value) }} placeholder="Describe About Your Business Here.." />
                                            </div></div>
                                        <div className="form-buttons flx-r">
                                            <button type="button" className="previous" onClick={prev}>Previous</button>
                                            <button type="button" className="save-draft">Save as Draft</button>
                                            <button type="button" className="next"
                                                onClick={
                                                    () => {
                                                        if (!businessEmail || !businessPhone || !socialMediaLink) {
                                                            setDta(true);
                                                            return;
                                                        } else {
                                                            nxt()
                                                        }
                                                    }
                                                }>Next</button>
                                        </div>
                                    </div>
                                </section>)}
                                {next === 5 && (<section className="form-section " id="step6">
                                    <h2>Additional Information</h2>
                                    <div>
                                        <div>
                                            <label htmlFor="additional-info">Is there anything else you would like us to know or include on your website? <span>*</span></label>
                                            <br /><textarea required type="text" value={additionalInfo} onChange={(e) => { setAdditionalInfo(e.target.value) }} id="additional-info" placeholder="Anything Else..." />
                                        </div>
                                        <div className="form-buttons flx-r">
                                            <button type="button" className="previous" onClick={prev}>Previous</button>
                                            <button type="submit" className="next">Send Message</button>
                                        </div>
                                    </div>
                                </section>)}
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
