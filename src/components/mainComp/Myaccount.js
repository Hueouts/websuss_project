import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookies'
import axios from 'axios'
import html2pdf from 'html2pdf.js';
import { useNavigate, Link } from 'react-router-dom';
import Detailform from '../Detailform';
import accountprofile from '../account-profile.png'
import wordpressStore from '../product/wordpressStore.png'
import shopifyStore from '../product/shopifyStore.png'
import wordpressBlog from '../product/wordpressBlog.png'
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
export default function Myaccount() {
    const [dashboard, setDashBoard] = useState(true);
    const [order, setOrder] = useState(false);
    const [orderValue, setOrderValue] = useState(JSON.parse(Cookies.getItem("websussOrder")));
    const [payment, setPayment] = useState(false);
    const [accountDetail, setAccountDetail] = useState(false);
    const [subscriptions, setSubscriptions] = useState(false);
    const [planValue, setPlanValue] = useState( Cookies.getItem('websussPlan') || {})
    const [productTemplete, setProductTemplete] = useState([]);
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(Cookies.getItem("websussUser")));
    const [upd, setUpd] = useState(0);
    const userOrder = JSON.parse(Cookies.getItem("websussOrder"))
    const userPlan = JSON.parse(Cookies.getItem("websussPlan"))
    const [paymentMethod, setPaymentMethod] = useState(false)
    const [se, setSe] = useState(false)
    const [lod, setLod] = useState(false);
    useEffect(() => {
        document.title="Websuss || My Account"
        if (!user || !userOrder) {
            window.location.reload();
            navigate('/pricing');
            return;
        } else {

            setSe(true)
        }
    }, [])
    useEffect(() => {
        const userFromCookie = JSON.parse(Cookies.getItem("websussUser"));
        setUser(userFromCookie);
        const updateUpd = () => {
            setUpd(upd + 1);
        };
        const intervalId = setInterval(updateUpd, 2000);
        return () => {
            clearInterval(intervalId);
        };
    }, [upd]);
    useEffect(() => {
        async function checkOrder() {
            if (user) {
                await axios.post(`https:www.websuss.com/subs-plan/${user._id}`)
                    .then((x) => {
                        if (x.data.message === "success") {
                            // console.log(x.data)
                            Cookies.setItem('websussPlan', JSON.stringify(x.data.result))
                            setPlanValue(x.data.result)
                            // console.log(x.data)
                            navigate('/my-account')
                            setPaymentMethod(true);
                            return;
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                await axios.post(`https:www.websuss.com/order/${user._id}`)
                    .then((x) => {
                        if (x.data.order) {
                            Cookies.setItem('websussOrder', JSON.stringify(x.data.result))
                            console.log(x.data)
                            setOrderValue(x.data.result);
                            setProductTemplete(products.filter((result) => (result.name === x.data.result.product)))
                            // navigate('/my-account')
                            return;
                        }
                        else {
                            navigate('/pricing')
                        }
                    }).catch((err) => {
                        console.log(err);
                    })

            }
        }
        checkOrder()
    }, [])
    function generatePdf() {
        setLod(true);
        const ele = document.createElement('div');
        ele.id = 'pdfContent';
        if (orderValue.plan === "core") {
            console.log(orderValue)
            ele.innerHTML = `
            <h1 id='bh'>Order Summary Report</h1>
                <table id='table'>
                
                    <tr>
                        <th>Order (ID):</th>
                        <td>${orderValue._id}</td>
                   </tr>
                   <div id='flx-re'>
                   <div>
                   <tr>
                       <th>User Name:</th>
                       <td>${user.firstName}</td>
                  </tr>
                  
                  <tr>
                  <th>User ID:</th>
                  <td>${user._id}</td>
                  </tr>
                  <tr>
                  <th>User Email:</th>
                  <td><a href="mailto:${orderValue.user_email}">${orderValue.user_email}</a></td>
                  </tr>
                  <tr>
                  <th>User Phone:</th>
                  <td><a href="tel:${user.phone}">${user.phone}</a></td>
                  </tr>
                  </div> 
                  <div>                                       
                  <tr>
                  <th>Subscription Plan:</th>
                  <td>${planValue.plan}</td>
                  </tr>                                              
                  <tr>
                  <th>Subscription Date:</th>
                  <td>${planValue.order_date}</td>
                  </tr>                         
                  <tr>
                  <th>Ending Date:</th>
                  <td>${planValue.exp_date}</td>
                  </tr>
                  </div>
                  </div>

            </table>
            <div id='dpTable2' style="margin-top:20px;">
            <table style="font-size:15px;">
            <tr>
                        <th>Technology</th>
                        <th>Templete</th>
                        <th>Industry</th>
                        <th>Category</th>
                        <th>Business Name</th>
                        <th>Logo</th>
                        <th>Color Scheme</th>
                        
                        <th>Total Amount</th>
                    </tr>                                            
                <tr>
                    <td>${orderValue.technology}</td>
                    <td><div id='tec'><a href='${productTemplete[0].img}'><img id='ich' style="object-fit: cover;
                    object-position: 25% 25%; "  href='${productTemplete[0].img}' src='${productTemplete[0].img}' alt="templete" /></a></div></td>
                    <td>${orderValue.bus_indus}</td>
                    <td>${orderValue.category}</td>
                    <td>${orderValue.bus_name}</td>
                    <td><div id='tdSumLogo'><a href='${orderValue.logo_lnk}'><img src="${orderValue.logo_lnk}"/></a></div></td>
                    <td>${orderValue.color_scheme}</td>
                   
                    <td>${planValue.total_amount} $</td>
                </tr>
                </table>
                <table style="margin-top:20px; font-size:14px;">
                <tr>
                <h5>Company Bio</h5>
                <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;>${orderValue.comp_bio}</p>
                </tr>
                <tr>
                <h5>Business Sell:</h5>
                <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;>${orderValue.bus_sell}</p>
                </tr>
                <tr>
                <h5>Business Phone:</h5>
                <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;><a href='tel:${orderValue.bus_phone}'>${orderValue.bus_phone}</p>
                </tr>
                <tr>
                <h5>Business Email:</h5>
                <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;><a href='mailto:${orderValue.bus_email}'>${orderValue.bus_email}</a></p>
                </tr>
                <tr>
                <h5>Key Features:</h5>
                <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;>${orderValue.key_feat}</p>
                </tr>
                <tr>
                <h5>Social Media Link:</h5>
                <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;>${orderValue.social_lnk}</p>
                </tr>
                <tr>
                <h5>Key Words:</h5>
                <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;>${orderValue.key_word}</p>
                </tr>
                <tr>
                <h5>Target Audience:</h5>
                <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;>${orderValue.tar_aud}</p>
                </tr>
                <tr>
                <h5>Brand Guidelines:</h5>
                <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;>${orderValue.bus_guid}</p>
                </tr>
                <tr>
                <h5>Additional Info:</h5>
                <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;>${orderValue.add_info}</p>
                </tr>
                </table>
                </div>
`
        }
        if(orderValue.plan === "plus"){
            ele.innerHTML = `
                                        <h1 id='bh'>Order Summary Report</h1>
                                            <table id='table'>
                                            
                                                <tr>
                                                    <th>Order (ID):</th>
                                                    <td>${orderValue._id}</td>
                                               </tr>
                                               <div id='flx-re'>
                                               <div>
                                               <tr>
                                                   <th>User Name:</th>
                                                   <td>${user.firstName}</td>
                                              </tr>
                                              
                                              <tr>
                                              <th>User ID:</th>
                                              <td>${user._id}</td>
                                              </tr>
                                              <tr>
                                              <th>User Email:</th>
                                              <td><a href="mailto:${orderValue.user_email}">${orderValue.user_email}</a></td>
                                              </tr>
                                              <tr>
                                              <th>User Phone:</th>
                                              <td><a href="tel:${user.phone}">${user.phone}</a></td>
                                              </tr>
                                              </div> 
                                              <div>                                       
                                              <tr>
                                              <th>Subscription Plan:</th>
                                              <td>${planValue.plan}</td>
                                              </tr>                                              
                                              <tr>
                                              <th>Subscription Date:</th>
                                              <td>${planValue.order_date}</td>
                                              </tr>                         
                                              <tr>
                                              <th>Ending Date:</th>
                                              <td>${planValue.exp_date}</td>
                                              </tr>
                                              </div>
                                              </div>

                                        </table>
                                        <div id='dpTable2' style="margin-top:20px;">
                                        <table style="font-size:15px;">
                                        <tr>
                                                    <th>Technology</th>
                                                    <th>Templete</th>
                                                    <th>Industry</th>
                                                    <th>Category</th>
                                                    <th>Business Name</th>
                                                    <th>Logo</th>
                                                    <th>Color Scheme</th>
                                                    
                                                    <th>Total Amount</th>
                                                </tr>                                            
                                            <tr>
                                                <td>${orderValue.technology}</td>
                                                <td><div id='tec'><a href='${productTemplete[0].img}'><img id='ich' style="object-fit: cover;
                                                object-position: 25% 25%; "  href='${productTemplete[0].img}' src='${productTemplete[0].img}' alt="templete" /></a></div></td>
                                                <td>${orderValue.bus_indus}</td>
                                                <td>${orderValue.category}</td>
                                                <td>${orderValue.bus_name}</td>
                                                <td><div id='tdSumLogo'><a href='${orderValue.logo_lnk}'><img src="${orderValue.logo_lnk}"/></a></div></td>
                                                <td>${orderValue.color_scheme}</td>
                                               
                                                <td>${planValue.total_amount} $</td>
                                            </tr>
                                            </table>
                                            <table style="margin-top:20px; font-size:14px;">
                                            <tr>
                                            <h5>Company Bio:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.comp_bio}</p>
                                            </tr>
                                            <tr>
                                            <h5>Business Sub Industry:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_sub_indus}</p>
                                            </tr>
                                            <tr>
                                            <h5>Business Sell:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_sell}</p>
                                            </tr>
                                            <tr>
                                            <h5>Business Phone:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;"><a href='tel:${orderValue.bus_phone}'>${orderValue.bus_phone}</p>
                                            </tr>
                                            <tr>
                                            <h5>Business Email:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;"><a href='mailto:${orderValue.bus_email}'>${orderValue.bus_email}</a></p>
                                            </tr>
                                            <tr>
                                            <h5>Business Strength and Weakness:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_st_weak}</p>
                                            </tr>
                                            
                                            <tr>
                                            <h5>Business Goals:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_goal}</p>
                                            </tr>
                                            
                                            <tr>
                                            <h5>Business Primary Goal:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.primary_goal}</p>
                                            </tr>
                                            <tr>
                                            <h5>Target Audience Problem:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.tar_aud_prob}</p>
                                            </tr>
                                            <tr>
                                            <h5>Business Embody:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_embody}</p>
                                            </tr>
                                            <tr>
                                            <h5>Specific Functionality:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.spec_func}</p>
                                            </tr>
                                            
                                            <tr>
                                            <h5>User Behaviour:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.user_behavior}</p>
                                            </tr>
                                            
                                            <tr>
                                            <h5>Metric Success:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.metric_success}</p>
                                            </tr>
                                            
                                            <tr>
                                            <h5>Testimonial:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.testimonial}</p>
                                            </tr>
                                            <tr>
                                            <h5>Seo Key Words:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.seo_key_words}</p>
                                            </tr>
                                            <tr>
                                            <h5>Key Features:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.key_feat}</p>
                                            </tr>
                                            <tr>
                                            <h5>Social Media Link:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.social_lnk}</p>
                                            </tr>
                                            <tr>
                                            <h5>Key Words:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.key_word}</p>
                                            </tr>
                                            <tr>
                                            <h5>Target Audience:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.tar_aud}</p>
                                            </tr>
                                            
                                            <tr>
                                            <h5>Accessibility Requirements:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.acc_require}</p>
                                            </tr>
                                            <tr>
                                            <h5>Third Party Intigration:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.third_party_inti}</p>
                                            </tr>
                                            
                                            <tr>
                                            <h5>Brand Guidelines:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_guid}</p>
                                            </tr>
                                            
                                            <tr>
                                            <h5>Domain Name:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.domain_name}</p>
                                            </tr>
                                            
                                            <tr>
                                            <h5>Domain Email:</h5>
                                            <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.domain_email}</p>
                                            </tr>
                                            </table>
                                            </div>
    `
        }
 if(orderValue.plan === "ultra"){
    console.log('working start')
    ele.innerHTML = `
    <h1 id='bh'>Order Summary Report</h1>
      <p>  <table id='table'>
        
            <tr>
                <th>Order (ID):</th>
                <td>${orderValue._id}</td>
           </tr>
           <div id='flx-re'>
           <div>
           <tr>
               <th>User Name:</th>
               <td>${user.firstName}</td>
          </tr>
          
          <tr>
          <th>User ID:</th>
          <td>${user._id}</td>
          </tr>
          <tr>
          <th>User Email:</th>
          <td><a href="mailto:${orderValue.user_email}">${orderValue.user_email}</a></td>
          </tr>
          <tr>
          <th>User Phone:</th>
          <td><a href="tel:${user.phone}">${user.phone}</a></td>
          </tr>
          </div> 
          <div>                                       
          <tr>
          <th>Subscription Plan:</th>
          <td>${planValue.plan}</td>
          </tr>                                              
          <tr>
          <th>Subscription Date:</th>
          <td>${planValue.order_date}</td>
          </tr>                         
          <tr>
          <th>Ending Date:</th>
          <td>${planValue.exp_date}</td>
          </tr>
          </div>
          </div>

    </table>
    <div id='dpTable2' style="margin-top:20px;">
    <table style="font-size:15px;">
    <tr>
                <th>Technology</th>
                <th>Templete</th>
                <th>Industry</th>
                <th>Category</th>
                <th>Business Name</th>
                <th>Logo</th>
                <th>Color Scheme</th>
                
                <th>Total Amount</th>
            </tr>                                            
        <tr>
            <td>${orderValue.technology}</td>
            <td><div id='tec'><a href='${productTemplete[0].img}'><img id='ich' style="object-fit: cover;
            object-position: 25% 25%; "  href='${productTemplete[0].img}' src='${productTemplete[0].img}' alt="templete" /></a></div></td>
            <td>${orderValue.bus_indus}</td>
            <td>${orderValue.category}</td>
            <td>${orderValue.bus_name}</td>
            <td><div id='tdSumLogo'><a href='${orderValue.logo_lnk}'><img src="${orderValue.logo_lnk}"/></a></div></td>
            <td>${orderValue.color_scheme}</td>
           
            <td>${planValue.total_amount} $</td>
        </tr>
        </table>
        <table style="margin-top:20px; font-size:14px;">
        <tr>
        <h5>Company Bio:</h5>
        <p style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.comp_bio}</p>
        </tr>
        <tr>
        <h5>Business Sub Industry:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_sub_indus}</p>
        </tr>
        <tr>
        <h5>Business Sell:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_sell}</p>
        </tr>
        <tr>
        <h5>Business Phone:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;"><a href='tel:${orderValue.bus_phone}'>${orderValue.bus_phone}</p>
        </tr>
        <tr>
        <h5>Business Email:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;"><a href='mailto:${orderValue.bus_email}'>${orderValue.bus_email}</a></p>
        </tr>
        <tr>
        <h5>Business Strength and Weakness:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_st_weak}</p>
        </tr>
        <tr>
        <h5>Business Purpose:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_purpose}</p>
        </tr>
        
        <tr>
        <h5>Business Goals:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_goal}</p>
        </tr>
        
        <tr>
        <h5>Business Primary Goal:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.primary_goal}</p>
        </tr>
        <tr>
        <h5>Target Audience Problem:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.tar_aud_prob}</p>
        </tr>
        <tr>
        <h5>Business Embody:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_embody}</p>
        </tr>
        <tr>
        <h5>Specific Functionality:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.spec_func}</p>
        </tr>
        
        <tr>
        <h5>Specific Content Creation:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.spec_cont_crea}</p>
        </tr>
        <tr>
        <h5>Immediate Web Launch Content:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.imm_web_launch}</p>
        </tr>
        <tr>
        <tr>
        <h5>Preferred content creation:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.pref_cont_creation}</p>
        </tr>
        
        <tr>
        <h5>Assistance with professional:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.asst_pho_vid}</p>
        </tr>
        
        <tr>
        <h5>VIP Support From Websuss:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.vip_sup}</p>
        </tr>
        <tr>
        <h5>Social Media Marketing Campaigns:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.exst_social_marketing}</p>
        </tr>
        <tr>
        <h5>Plan to Add or Update:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.add_upd_cont}</p>
        </tr>
        <tr>
        <h5>List of Topics for SEO:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.topic_foc_seo}</p>
        </tr>
        <tr>
        <h5>Written Content:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.copy_write_serv}</p>
        </tr>
        <tr>
        <h5>Your Aim to Grow:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.online_pres}</p>
        </tr>
        <tr>
        <h5>Your Expectation from Advanced SEO:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.expc_adv_seo}</p>
        </tr>
        
        <tr>
        <h5>Platform Where You Want to Promote :</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.inti_promo}</p>
        </tr>
        
        <tr>
        <h5>Campaigns or Promotions in Mind:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.have_camp}</p>
        </tr>
        
        <tr>
        <h5>Your Expectations for VIP Phone Support:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.vip_phone_sup}</p>
        </tr>
        <tr>
        <h5>Your Expectations for VIP Email Support:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.vip_email_sup}</p>
        </tr>
        <tr>
        <h5>User Behaviour:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.user_behavior}</p>
        </tr>
        
        <tr>
        <h5>Metric Success:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.metric_success}</p>
        </tr>
        
        <tr>
        <tr>
        <h5>Seo Key Words:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.seo_key_words}</p>
        </tr>
        <tr>
        <h5>Key Features:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.key_feat}</p>
        </tr>
        <tr>
        <h5>Social Media Link:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.social_lnk}</p>
        </tr>
        <tr>
        <h5>Key Words:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.key_word}</p>
        </tr>
        <tr>
        <h5>Target Audience:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.tar_aud}</p>
        </tr>
        
        <tr>
        <h5>Accessibility Requirements:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.acc_require}</p>
        </tr>
        <tr>
        <h5>Third Party Intigration:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.third_party_inti}</p>
        </tr>
        <tr>
        <h5>Brand Guidelines:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.bus_guid}</p>
        </tr>
        <tr>
        <h5>Domain Name:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.domain_name}</p>
        </tr>
        <tr>
        <h5>Domain Email:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.domain_email}</p>
        </tr>
        
        <tr>
        <h5>Additional Info:</h5>
        <p  style="Display:block; word-wrap: break-word; margin-top:8px; font-size:14px;">${orderValue.add_info}</p>
        </tr>
        </table>
        </div>
        </p>
`
 }
        ;
        document.body.appendChild(ele);
     
        const opt = {
            margin: [10, 5, 10, 5],
            filename: `WebsussOrderSmmary.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                // dpi: 480,
                scale: 8,
                letterRendering: true,
                useCORS: true
            },
            jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(ele).set(opt).save().then(() => {
            setLod(false)
            document.body.removeChild(ele);
        })
    }
    function lgout() {

        Cookies.removeItem("websussUser");
        Cookies.removeItem('websussPlan');
        Cookies.removeItem('websussOrder');
        setTimeout(() => {
            navigate('/')
        }, 1500);
        window.location.reload();

    }

    return (<>      {se && (<div className='my-account-main flx-r'>
        <div className='my-account-control'>
            <div className='my-account-control-panner flx-r'>
                <div className='my-account-control-list'>
                    <div className='account-greet flx-r'>
                        <div className='account-profile'> <img src={accountprofile} /></div>
                        <div className='profile-greet'>
                            <span>Hello</span>
                            <h5>{user ? user.displayName : "There"}</h5>
                        </div>
                    </div>

                    <ul>
                        <li style={dashboard ? { borderLeft: "2px solid #000" } : null}> <button
                            onClick={
                                () => {
                                    setDashBoard(true);
                                    setOrder(false);
                                    setPayment(false);
                                    setAccountDetail(false);
                                    setSubscriptions(false);
                                }}>Dashboard</button></li>

                        <li style={subscriptions ? { borderLeft: "2px solid #000" } : null}> <button
                            onClick={() => {
                                setSubscriptions(true);
                                setDashBoard(false);
                                setOrder(false);
                                setAccountDetail(false);
                                setPayment(false);
                            }}
                        >Subscriptions</button></li>
                        <li style={order ? { borderLeft: "2px solid #000" } : null}> <button
                            onClick={() => {
                                setOrder(true);
                                setDashBoard(false);
                                setPayment(false);
                                setAccountDetail(false);
                                setSubscriptions(false);
                            }}
                        >Order Details</button></li>
                        <li style={payment ? { borderLeft: "2px solid #000" } : null}> <button
                            onClick={() => {
                                setPayment(true);
                                setDashBoard(false);
                                setOrder(false);
                                setAccountDetail(false);
                                setSubscriptions(false);
                            }}
                        >Payment method</button></li>
                        <li style={accountDetail ? { borderLeft: "2px solid #000" } : null}> <button
                            onClick={() => {
                                setAccountDetail(true);
                                setDashBoard(false);
                                setOrder(false);
                                setPayment(false);
                                setSubscriptions(false);
                            }}
                        >Account Details</button></li>
                        <li> <button onClick={() => { lgout() }}>Logout</button></li>
                    </ul>

                </div>
                <div className='my-account-control-content'>
                    <div className='dsg'>Account Dashboard</div>
                    {dashboard ?
                        <div className='dashboard'>

                            <p className='dashboard-p'>
                                Hello {user ? `${user.firstName}` : "There"} (Not {user ? `${user.firstName}` : "You"} <button onClick={() => { lgout() }}>Log Out</button>)
                            </p>

                            <p>
                                From Your Account Dashboard You Can View Your <button>Recent Orders</button>,
                                Manage Your <button>Shipping And Billing Addresses</button>, And <button>Edit Your Password And Account Details.
                                </button>
                            </p>

                        </div> : null}
                    {order ?
                        <div className='my-account-order'>
                            {userOrder ?
                                <><div className='dp-table flx-r'>
                                    <table>
                                        <thead>
                                            <tr className='bbg' >
                                                <th
                                                >Order (ID)
                                                </th>
                                                <th>Templete</th>
                                                <th>Technology</th>
                                                <th>Category</th>
                                                <th>Plan</th>
                                                <th>Business Name</th>
                                                <th>Industry</th>
                                                <th>Order Date</th>
                                            </tr>
                                        </thead>
                                        <tbody><tr>
                                            <td className='o-id'>{orderValue._id}</td>
                                            <td><div className='tb-temp' ><a href={productTemplete.map((x) => (x.img))}><img src={productTemplete.map((x) => (x.img))} alt="templete" /></a></div></td>

                                            <td>{orderValue.technology}</td>
                                            <td>{orderValue.category}</td>
                                            <td>{orderValue.plan}</td>
                                            <td >{orderValue.bus_name}</td>
                                            <td>{orderValue.bus_indus}</td>
                                            <td>{orderValue.orderDate}</td>

                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                                    <div className='dp-table2'>
                                        <table>
                                            <tr>
                                                <th>Order Number:</th>
                                                <td><p>{orderValue._id}</p></td>
                                            </tr>
                                            <tr>
                                                <th>Templete:</th>
                                                <td><div className='tb-temp'><a href={productTemplete.map((x) => (x.img))}><img src={productTemplete.map((x) => (x.img))} alt="" /></a></div></td>

                                            </tr>
                                            <tr>
                                                <th>Technology:</th>
                                                <td>{orderValue.technology}</td>
                                            </tr>
                                            <tr>
                                                <th>Category:</th>
                                                <td>{orderValue.category}</td>
                                            </tr>
                                            <tr>
                                                <th>Plan:</th>
                                                <td>{orderValue.plan}</td>
                                            </tr>
                                            <tr>
                                                <th>Business Name:</th>
                                                <td>{orderValue.bus_name}</td>
                                            </tr>
                                            <tr>
                                                <th>Inductry:</th>
                                                <td>{orderValue.bus_indus}</td>
                                            </tr>
                                            <tr>
                                                <th>Order Date:</th>
                                                <td>{orderValue.orderDate}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className='posg'> <button className='gen' onClick={generatePdf}>{lod ?"Fetching Your Report..." : "Generate Order Report"}</button></div>
                                </>


                                : <div className='flx-r'>  <p><i className="fa-solid fa-circle-check"></i> No Order Has Been Made Yet.</p> <div><Link to={'/pricing'}>Browse Products</Link></div></div>}
                        </div> : null}

                    {payment ?
                        <div className='payment'>
                            {!paymentMethod ?
                                <div>
                                    <p><i className="fa-solid fa-circle-check"></i> No Payment Method Found</p>
                                </div>
                                :
                                <div>
                                    <p>Payment Method Found: <b>Card</b></p>
                                </div>}
                        </div>
                        : null}
                    {
                        accountDetail ?
                            <div className='account-detail'>
                                <Detailform />
                            </div>
                            :
                            null
                    }

                    {
                        subscriptions ?
                            <>
                                {
                                    userPlan ?
                                        <>
                                            <div className='subs-table'>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Phone</th>
                                                            <th>Email</th>
                                                            <th>Plan</th>
                                                            <th>Total Amount</th>
                                                            <th>Subscription Date</th>
                                                            <th>Exp Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{planValue.firstName}</td>
                                                            <td>{planValue.phone}</td>
                                                            <td className='wrat'>{planValue.email}</td>
                                                            <td>{planValue.plan}</td>
                                                            <td>{planValue.total_amount}.00 $</td>
                                                            <td>{planValue.order_date}</td>
                                                            <td>{planValue.exp_date}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className='subs-table2'>
                                                <table>
                                                    <tr>
                                                        <th>Name</th>
                                                        <td>{planValue.firstName}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Phone</th>
                                                        <td>{planValue.phone}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Email</th>
                                                        <td>{planValue.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Plan</th>
                                                        <td>{planValue.plan}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total Amount</th>
                                                        <td>{planValue.total_amount}.00 $</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Subscription Date</th>
                                                        <td>{planValue.order_date}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Exp Date</th>
                                                        <td>{planValue.exp_date}</td>
                                                    </tr>

                                                </table>
                                            </div>
                                        </>
                                        : <div className='subscription'>
                                            <div>
                                                <p>YOU DO NOT HAVE ANY ACTIVE SUBSCRIPTION(S).</p>
                                            </div>
                                        </div>}
                            </>

                            :
                            null
                    }
                </div>
            </div>
        </div>

    </div>)}


    </>

    )
}
