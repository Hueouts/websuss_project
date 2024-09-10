import React from 'react';

export default function Playbook() {
  return (
    <div className="playbook-container flx-c">
      <h2 className="playbook-title fz3">The Play-by-Play: Get Rolling in Three Easy Steps</h2>
      <div className="playbook-steps">
        <ul>
          <li className="playbook-step flx-r">
            <span className="playbook-step-number fz4 ">1.</span>
            <span className="playbook-step-description fz2">
            Select your plan, verify your account, confirm payment, and answer our brand questionnaire.
            </span>
          </li>
          <li className="playbook-step flx-r">
            <span className="playbook-step-number fz4">2.</span>
            <span className="playbook-step-description fz2">
              Tech with Heart: We uniquely blend tech and human touch. Robo-assistants meet real people!
            </span>
          </li>
          <li className="playbook-step flx-r">
            <span className="playbook-step-number fz4">3.</span>
            <span className="playbook-step-description fz2">

              Sales-Ready Websites: Your website isn't just a pretty face, it's a selling machine from the get-go.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
