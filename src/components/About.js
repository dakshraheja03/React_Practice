import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{backgroundColor: `${props.mode==="light"?"white":"#404040"}`}}
              >
                <span style={{color: `${props.mode==="light"?"black":"white"}`}}>Accordion Item #1</span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: `${props.mode==="light"?"white":"#505050"}`}}>
                <p style={{color: `${props.mode==="light"?"black":"white"}`}}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                that we use to style each element. These control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                accordion-body, though the transition does limit
                overflow.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{backgroundColor: `${props.mode==="light"?"white":"#404040"}`}}
              >
                <span style={{color: `${props.mode==="light"?"black":"white"}`}}>Accordion Item #2</span>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: `${props.mode==="light"?"white":"#505050"}`}}>
                <p style={{color: `${props.mode==="light"?"black":"white"}`}}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate  that we use to style each element. These
               control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                accordion-body, though the transition does limit
                overflow.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{backgroundColor: `${props.mode==="light"?"white":"#404040"}`}}
              >
                <span style={{color: `${props.mode==="light"?"black":"white"}`}}>Accordion Item #3</span>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: `${props.mode==="light"?"white":"#505050"}`}}>
                <p style={{color: `${props.mode==="light"?"black":"white"}`}}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate that we use to style each element. These
                control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                accordion-body, though the transition does limit
                overflow.
                </p>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
