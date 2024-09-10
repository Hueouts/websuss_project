import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Getques() {
  const { search } = useLocation();
  const [ques, setQues] = useState([]);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const params = new URLSearchParams(search);
  const id = params.get('id');

  async function fetchQues() {
    try {
      const response = await axios.post('https:www.websuss.com/admin/ques', { id });
      setQues(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
      // Handle errors gracefully, e.g., display an error message to the user
      navigate('/error'); // Optionally redirect to an error page
    }
  }

  useEffect(() => {
    fetchQues();
  }, []);

  return (
    <div className='main-quew'>
      {ques.length > 0 ? (
        ques[0] && 
          Object.entries(ques[0]).map(([key, value]) => {
            const isImageKey = key.startsWith('product') && key.endsWith('_lnk');
            const logoimg = key.startsWith('logo');

            return (
              <div className='dslk' key={key}>
               
                <h5><span>{key}</span></h5>
                {isImageKey && (
                    <div className='ds-img'>
                  <img src={value} alt={key} onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                )}
                {logoimg && (
                    <div className='logo-img'>
                        <img src={value} alt={key} onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                )}
                {!isImageKey && !logoimg ? <div className='cmd'>{value}</div>  : <div></div>}
               
              </div>
            );
          })
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}
