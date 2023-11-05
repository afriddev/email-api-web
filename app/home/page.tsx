import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";
import { DiDart, DiJavascript, DiPython } from "react-icons/di";
import { LiaJava } from "react-icons/lia";
import { TbBrandJavascript } from "react-icons/tb";
export default function Home({ setIndex }) {
  const javaScriptCode = `const emailservice = require('emailsevice');
async function sendEmail(){
const response = await emailservice({toEmail:"afridayan01@gmail.com",title:"this is my title",subject:"this is my subject",body:"this is my body"})
// you can pass fromEmail and passkey also if you want
console.log(response);
}
sendEmail();
`;
  const pythonCode = `
from emailotp import emailotp
emailotp = emailotp()
#you can pass fromemail,passkey,title,subject,body 
responseFromEmailOtp = emailotp.send("toemail@gmail.com")
print(responseFromEmailOtp["message"])
`;
  const dartCode = `import 'package:email_sender/email_sender.dart';
void main() async{
EmailSender emailsender = EmailSender();
//Enter your email in send method, you can pass many parameters like fromemail,passkey,title,subject,body also if you want
var response = await emailsender.send("toemail@gmail.com");
print(response["message"]);
}
`;
  const javaCode = `//for java you need to copy emailservice package from github
package  org.emailservice;\npublic class main{
public static void main(String[] args) {
emailservice emailSender = new emailservice("afridayan01@gmail.com","title","subject","hello world!");
var response = emailSender.sendEmail();
//System.out.println(response.get("message"));
System.out.println(response);}}
`;

  const [code, setCode] = React.useState(dartCode);
  return (
    <>
      <div className="mt-10">
        <div className="lg:grid lg:grid-cols-2">
          <div className="flex flex-col  justify-center items-center">
            <div className="flex">
              <div>
                <label className="text-3xl font-medium flex justify-end">
                  Powering
                </label>
                <h1 className=" text-6xl font-bold">Email</h1>
              </div>
              <embed
                className=" h-24 object-fill"
                src="emailFlag.svg"
              />
            </div>

            <a className="text-3xl font-medium pt-3 ">in your applications</a>

            <button
              onClick={() => {
                setIndex(2);
              }}
              className="mt-10 w-2/4 bg-blue-600 py-3 rounded-lg shadow-lg
          text-white "
            >
              Integrate for free
            </button>
          </div>
          <div
            className=" flex flex-col justify-center 
         mt-4 mb-2 items-center ml-2 mr-2 lg:mr-20
          "
          >
            <Editor
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',

                height: 300,
              }}
              className="lg:text-md sm:text-sm w-full rounded-lg 
            pointer-events-none flex-col outline-none border"
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => highlight(code, languages.js, "js")}
              padding={10}
            />
            <div className="w-full bg-purple-600 py-3">
              <ul className="flex pr-6 pl-6 justify-between  text-white ">
                <DiDart
                  onClick={() => {
                    setCode(dartCode);
                  }}
                  className="flex border w-10 h-8 px-2 rounded-lg"
                />
                <DiPython
                  onClick={() => {
                    setCode(pythonCode);
                  }}
                  className="flex border w-10 h-8 px-2 rounded-lg"
                />
                <TbBrandJavascript
                  onClick={() => {
                    setCode(javaScriptCode);
                  }}
                  className="flex border w-10 h-8 px-2 rounded-lg"
                />
                <LiaJava
                  onClick={() => {
                    setCode(javaCode);
                  }}
                  className="flex border w-10 h-8 px-2 rounded-lg"
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start ">
          
          <div
            className=" bg-blue-950 w-full mt-6 flex flex-col justify-center items-center 
          text-white space-y-3"
          
          >
            <h1 className="text-3xl font-medium mt-10 ml-4 mr-2 lg:ml-20 lg:mt-24">
            Email and scheduling capabilities made simple
          </h1>
            <div className="lg:grid lg:grid-cols-2">
              <div className="flex flex-col justify-center items-center ">
                <embed
                  className=" mt-6 object-fill h-20 w-12 "
                  src="vertical.svg"
                />
                <label className="mt-4 text-2xl font-medium  lg:mb-4">
                  Build
                </label>
                <h2 className="font-medium text-2xl ml-5 mr-5  text-center ">
                  Seamlessly integrate your user's email.
                </h2>
                <p className="font-light m-5 text-center text-lg lg:m-12 ">
                  Accelerate product velocity with a single platform to connect
                  to your user's emails, empowering you to build customizable
                  email and scheduling capabilities.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <embed
                  src="animatedImage.svg"
                  className="lg:w-3/6 m-4"
                />
              </div>
            </div>
            <embed src="horizontal.svg" className="w-2/6 lg:w-1/6" />
            <div className="">
              <div>
                <h3 className="font-medium text-2xl m-5 text-center  ">
                  Build email and scheduling workflows faster with
                  <span className="text-yellow-300"> EMAIL SENDER</span>
                </h3>
                <p className="font-light m-5 text-center text-lg pb-6 lg:m-12 ">
                  Launch critical feaures way ahead of scheduling by spendng
                  less time on email .leverage our CLI,and code templates to
                  reduce time spent building so you can focus on your customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="lg:grid lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center">
              <embed
                className=" mt-6 object-fill h-20"
                src="vertical2.svg"
              />
              <label className="mt-4 text-2xl font-bold text-blue-500  ">
                Build
              </label>
              <h2 className="font-bold text-2xl ml-5 mr-5  text-center ">
                Turn insights into innovation.
              </h2>
              <p className="font-light m-5 text-center text-lg ">
                Combine universal connectivity with communications data to
                harness real-time insights that enablr quick
                decision-making,customizable workflow automation and
                personalized cutomer experiences.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="mt-10 w-4/5"
                src="unlockHero.png"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col  m-5 lg:grid lg:grid-cols-2">
          <div className="flex flex-col lg:mt-9">
            <label className="text-2xl text-blue-800 font-medium ml-3">
              Integrate our Email API today
            </label>
            <div className="flex items-center justify-center">
              <img
                className="mt-10 w-4/5"
                src="unlockHero2.png"
              />
            </div>
          </div>

          <div className="flex flex-col">
          <h2 className="text-2xl ml-2 mt-7  ">
            Customize scheduling workflows.
          </h2>
          <p className="font-light m-5  text-xl">
            Save users time with configurable scheduling capabilities.
          </p>
          <label className="text-2xl text-blue-800 font-medium ml-2">
            invest in reak time scheduling
          </label>
          <div className="flex items-center justify-center">
            <img
              className="mt-10 w-4/5"
              src="unlockHero3.png"
            />
          </div>
          
          </div>
        </div>
        <div className="flex flex-col mt-10 ml-3 lg:ml-20">
         <div className="flex flex-col justify-start items-start">
         <label className="m-5 font-bold text-3xl">
            One platform, endless possibilities.
          </label>
          <button
            onClick={() => {
              setIndex(1);
            }}
            className="border border-blue-500 w-2/5 text-blue-700 ml-6
          py-2 rounded-lg lg:w-1/6 hover:bg-blue-100 "
          >
            Learn more
          </button>
         </div>

          <div className="flex flex-col w-full justify-center items-center mt-10 space-y-8 lg:grid lg:grid-cols-3   ">
            <div
              className="flex flex-col py-3  rounded-xl  shadow-xl hover:shadow-2xl bg-white 
          w-4/5
          "
            >
              <embed src="connectivity.svg" className="h-20 " />
              <label className="font-medium text-xl ml-6">
                Universal connectivity
              </label>
              <p className="ml-6 mr-5 mt-2 mb-2 font-light">
                Easily connect your application with your Users's email and
                maintaiing individual integration to each provider.
              </p>
            </div>
            <div
              className="flex flex-col py-3  rounded-xl shadow-xl hover:shadow-2xl bg-white
          w-4/5
          "
            >
              <embed
                className="h-14 text-center flex items-center justify-center"
                src="marketFaster.svg"
              />
              <label className="font-medium text-xl ml-6">Time to market</label>
              <p className="ml-6 mr-5 mt-2 font-light mb-2">
                Launch critical features months or years faster by spending less
                time on email infrastructure and more time on your product
                roadmap.
              </p>
            </div>
            <div
              className="flex flex-col py-3  rounded-xl shadow-xl bg-white hover:shadow-2xl
          w-4/5
          "
            >
              <embed
                className="flex justify-center items-center h-14"
                src="productivity.svg"
              />
              <label className="font-medium text-xl ml-6">
                Reliability & performance
              </label>
              <p className="ml-6 mr-5 mt-2 mb-2 font-light">
                Enjoy best-in-classs performance with Email sender guaranteed
                99.99% uptime and no maintenance downtime.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center  bg-blue-950 mt-10 text-white space-y-4 lg:grid lg:grid-cols-2">
          <div className="">
            <embed src="planet.svg" />
          </div>
          <div className="ml-4 mr-3 flex flex-col ">
            <label className=" flex text-white text-3xl m-4 ">
              Everything connected.
              <br />
              Everything secure.
            </label>
            <p className="text-lg m-4 font-light">
              Security is our top priority.We're commited to ensuring the
              unwavering safety of your company's data .the Email sender
              platform adheres to the most rigorous security and compliance
              standards to make sure
            </p>
            <p className="text-lg font-thin m-4 text-white">
              With security built into the core of our products, you can rest
              assured knowing your data will always be safe, secure, and
              protected.
            </p>
            <div className="ml-4">
            <button
              onClick={() => {
                setIndex(1);
              }}
              className="flex border mb-12 m-4 px-6 py-2 text-lg rounded-lg"
            >
              Learn more
            </button>
          </div>
          </div>
          
        </div>
        <div className="flex flex-col bg-gradient-to-b from-blue-500 to-blue-700 pb-10 text-white lg:bg-gradient-to-tr lg:grid lg:grid-cols-3">
          <div className="flex flex-col mt-10 justify-center items-center">
            <h1 className="font-bold text-4xl ">1000 +</h1>
            <label className="text-xl mt-1">developers worldwide</label>
          </div>
          <div className="flex flex-col mt-10 justify-center items-center">
            <h1 className="font-bold text-4xl ">3000 +</h1>
            <label className="text-xl mt-1">API requests per day</label>
          </div>
          <div className="flex flex-col mt-10 justify-center items-center">
            <h1 className="font-bold text-4xl ">30MB +</h1>
            <label className="text-xl mt-1">Processed daily data</label>
          </div>
        </div>
        <div className="bg-white w-full flex flex-col ">
          <label
            className="
          text-4xl m-5 "
          >
            Experience the Email sender difference
          </label>
          <div className="m-5 ml-3 flex flex-col">
            <h1 className="pl-6 text-xl mb-4">Explore</h1>
            <h2 className="text-2xl text-black pl-10 pr-10">
              Dive into our tutorials
            </h2>
            <p className="pl-10 text-xl font-thin mt-4">
              See how to use and integrate Email sender with your products
            </p>
            <a
              className="ml-10 mt-5 border-b-2 border-gray-400 w-fit"
              onClick={() => {
                setIndex(2);
              }}
            >
              Start building today
            </a>
          </div>
        </div>
        
      </div>
    </>
  );
}
