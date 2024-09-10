import React, { useState, useEffect } from 'react';

const Test = () => {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [businessSell, setBusinessSell] = useState('');
  const [idi, setIdi] = useState(false);
  const [industries] = useState(['Industry1', 'Industry2', 'Industry3']); // Example industries
  const [warnings, setWarnings] = useState({ businessName: false, industry: false, businessSell: false });
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  useEffect(() => {
    validateInputs();
  }, [businessName, industry, businessSell]);

  const validateInputs = () => {
    const newWarnings = {
      businessName: businessName.trim() === '',
      industry: industry.trim() === '',
      businessSell: businessSell.trim() === ''
    };
    setWarnings(newWarnings);
    setIsNextDisabled(Object.values(newWarnings).some(warning => warning));
  };

  const nxt = () => {
    if (!isNextDisabled) {
      alert("allOk")
    }
  };

  const prev = () => {
    // Previous step logic
  };

  return (
    <section className="form-section" id="step1">
      <h2>Business Information:</h2>
      <div>
        <div>
          <label htmlFor="business-name">What is the name of your business? <span>*</span></label>
          <br />
          <input
            required
            type="text"
            id="business-name"
            value={businessName}
            onChange={(e) => { setBusinessName(e.target.value) }}
            placeholder="Type your Business Name Here..."
          />
          {warnings.businessName && <div className="warning">Business name is required</div>}
        </div>
        <div>
          <label htmlFor="industry">What industry are you in? <span>*</span></label>
          <br />
          <div
            onClick={() => { setIdi(!idi) }}
            className='select-indus'
          >
            <span>{industry ? industry : "Choose Your Industry..."}</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          {idi && (
            <div className='indus-val'>
              {industries.map((x, index) => (
                <div key={index} onClick={() => {
                  setIndustry(x);
                  setIdi(false);
                }}>{x}</div>
              ))}
            </div>
          )}
          {warnings.industry && <div className="warning">Industry is required</div>}
        </div>
        <div>
          <label htmlFor="description">Briefly describe what your business sells or offers and its purpose. <span>*</span></label>
          <div>
            <textarea
              id="description"
              value={businessSell}
              onChange={(e) => { setBusinessSell(e.target.value) }}
              placeholder="Describe About Your Business Here.."
            />
          </div>
          {warnings.businessSell && <div className="warning">Description is required</div>}
        </div>
        <div className="form-buttons flx-r">
          <button type="button" className="previous" onClick={prev}>Previous</button>
          <button type="button" className="save-draft">Save as Draft</button>
          <button type="button" className="next" onClick={nxt} disabled={isNextDisabled}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default Test;
