const About = ({ setIndex }) => {
    return (
      <>
        <div className="flex flex-col mt-12 lg:grid lg:grid-cols-2">
          <div className="flex flex-col m-7 ml-4 space-y-1 lg:ml-10">
            <h1 className="font-bold text-4xl text-blue-950">One Email API.</h1>
            <h1 className="font-bold text-4xl text-blue-950">Every Provider.</h1>
            <p className="font-normal font-roboto pt-3 text-2xl pb-2 ">
              Launch Powerful native email capabilities quickly and securely with
              a single API.
            </p>
            <div className="flex flex-col pl-5 space-y-2 text-gray-500">
              <li className="text-black text-lg">
                <a className="text-base text-gray-500">
                  Deliver standout email features in minths, if not years, ahead
                  of the competition
                </a>
              </li>
              <li className="text-black text-lg">
                <a className="text-base text-gray-500">
                  Allow your developers to refocus on advancing your roadmap
                </a>
              </li>
              <li className="text-black text-lg">
                <a className="text-base text-gray-500">
                  Get maintenance-free connections with a 99.9% guaranteed uptime
                </a>
              </li>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="flex justify-center object-fill"
              src="aboutHero.png"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-6 bg-white w-full items-center">
          <h2 className="text-2xl font-normal font-poppins pl-4 pt-6 lg:text-3xl">
            Build email features that empower users to send with cofidence
          </h2>
          <div className="flex flex-col justify-center items-center space-y-6 lg:ml-20 lg:grid lg:grid-cols-3 lg:grid-rows-2">
            <div className="flex flex-col justify-center w-4/5 h-4/5 bg-white rounded-xl drop-shadow-2xl">
              <embed src="user.svg" className="pt-3 h-20" />
              <h3 className="text-center pt-3 text-xl font-roboto font-medium">
                Service accounts
              </h3>
              <p className="text-center pt-3 pb-3 pl-5 pr-5 text-roboto text-lg font-light">
                Onboard enterprise customers faster.
              </p>
            </div>
            <div className="flex flex-col justify-center  w-4/5 h-4/5 bg-white rounded-xl drop-shadow-2xl">
              <embed src="lock.svg" className="pt-3  h-20" />
              <h3 className="text-center pt-3 text-xl font-roboto font-medium pl-3">
                Easily navigate the OAuth Verification process
              </h3>
              <p className="text-center pt-3 pb-3 pl-5 pr-5 text-roboto text-lg font-light lg:mb-10 lg:mt-6">
                Complete Google's assessment with expert assistance from EMAIL
                SENDER for free.
              </p>
            </div>
            <div className="flex flex-col justify-center w-4/5 h-4/5 bg-white rounded-xl drop-shadow-2xl">
              <embed src="scheduler.svg" className="pt-3 h-20" />
              <h3 className="text-center pt-3 text-xl font-roboto font-medium">
                Scheduled send
              </h3>
              <p className="text-center pt-3 pb-3 pl-5 pr-5 text-roboto text-lg font-light">
                Schedule messages to maximize open rates and replies.
              </p>
            </div>
            <div className="flex flex-col justify-center w-4/5 h-4/5 bg-white rounded-xl drop-shadow-2xl">
              <embed src="barchart.svg" className="pt-3 h-20" />
              <h3 className="text-center pt-3 text-xl font-roboto font-medium">
                High-volume send
              </h3>
              <p className="text-center pt-3 pb-3 pl-5 pr-5 text-roboto text-lg font-light">
                Enable high-volume sends for free.
              </p>
            </div>
            <div className="flex flex-col justify-center w-4/5 h-4/5 bg-white rounded-xl drop-shadow-2xl">
              <embed src="fingerprint.svg" className="pt-3 h-20" />
              <h3 className="text-center pt-3 text-xl font-roboto font-medium">
                Authentication scopes
              </h3>
              <p className="text-center pt-3 pb-3 pl-5 pr-5 text-roboto text-lg font-light">
                Improve security for your end users with granular authentication
                scopes.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white flex pt-10 justify-center flex-col w-full text-center">
          <h2 className="font-roboto text-2xl font-medium text-center lg:text-3xl">
            Get started in simple 3 simple steps Here's how it works.
          </h2>
          <div className="flex flex-col justify-center items-center pt-5">
            <a className="flex w-14 h-14 rounded-full bg-blue-500 text-white text-xl shadow-xl justify-center items-center">
              1
            </a>
  
            <h3 className="text-center pt-3 font-medium text-xl font-roboto">
              Get a app Password
            </h3>
            <p className="text-center pt-3 pb-3 pl-5 pr-5 text-roboto text-lg font-light">
              Create a app password for your gmail account - no credit card
              required
            </p>
          </div>
          <div className="flex flex-col justify-center items-center pt-5">
            <a className="flex shadow-xl w-14 h-14 rounded-full bg-r2 text-white text-xl justify-center items-center">
              2
            </a>
  
            <h3 className="text-center pt-3 font-medium text-xl font-roboto">
              Build integration quickly
            </h3>
            <p className="text-center pt-3 pb-3 pl-5 pr-5 text-roboto text-lg font-light">
              With just a few lines of code, you get full control of email sender.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center pt-5">
            <a className="flex w-14 h-14 rounded-full bg-r3 shadow-xl text-white text-xl justify-center items-center">
              3
            </a>
  
            <h3 className="text-center pt-3 font-medium text-xl font-roboto">
              Connect all your users
            </h3>
            <p className="text-center pt-3 pb-3 pl-5 pr-5 text-roboto text-lg font-light">
              Whether you're connecting 100 or 100million accounts,your data is
              safe.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-white w-full pt-12 justify-center items-center">
          <h2 className="font-roboto text-4xl text-center font-medium">
            Ready to start building?
          </h2>
          <button
            onClick={() => {
              setIndex(2);
            }}
            className="mt-6 mb-10 bg-blue-500 w-3/5 px-2 py-4 rounded-lg text-white font-roboto text-xl lg:w-1/6"
          >
            Integrate for free
          </button>
        </div>
      </>
    );
  };
  export default About;
  