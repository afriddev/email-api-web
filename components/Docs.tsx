"use client"
import { BsCaretRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";
import React, { useState } from "react";
import CodePart from "@/utils/DocsCodePart";
export default function Docs() {
  const javaScriptCode = `const emailservice = require('emailsevice');
async function sendEmail(){
const response = await emailservice({toEmail:"afridayan01@gmail.com",title:"this is my title",subject:"this is my subject",body:"this is my body"})
// you can pass fromEmail and passkey also if you want
console.log(response);
}
sendEmail();
`
const pythonCode = `
from emailotp import emailotp
emailotp = emailotp()
#you can pass fromemail,passkey,title,subject,body also if you want
responseFromEmailOtp = emailotp.send("toemail@gmail.com")
print(responseFromEmailOtp["message"])
`
const dartCode = `import 'package:email_sender/email_sender.dart';
void main() async{
EmailSender emailsender = EmailSender();
//Enter your email in send method, you can pass many parameters like fromemail,passkey,
title,subject,body 
var response = await emailsender.send("toemail@gmail.com");
print(response["message"]);
}
`
const javaCode = `//for java you need to copy emailservice package from github
package  org.emailservice;\npublic class main{
public static void main(String[] args) {
emailservice emailSender = new emailservice("afridayan01@gmail.com","title","subject","hello world!");
var response = emailSender.sendEmail();
//System.out.println(response.get("message"));
System.out.println(response);}}
`
  let languagesNames = [
    {
      name:"Java Code",
      install1:"github.com/afriddev/email_service"
    },
    {
      name:"Dart Code",
      install1:"pub add email_sender"
    },
    {
      name:"Javascript Code",
      install1:"npm i @afriddev/emailservice"
    },
    {
      name:"Python Code",
      install1:"pip install emailotp"
    }
    
  ]
  const [code, setCode] = React.useState(
    javaCode
  );
  const [selectedCode,setSelectedCode] = useState(0)
  const [copy,setCopy] = useState(0)
  function setcopy(val){
    setCopy(val);
  }
  return (
    <>
      <div className="bg-white pt-10">
        <div className="flex flex-col space-y-3 pb-10 lg:m-10">
          <h1 className="flex m-4 text-3xl font-medium lg:text-4xl">
            Welcome to the Email Sender Docs
          </h1>
          <p className="m-5 text-md pb-6 lg:text-xl">
            
            The email sender platform allows developers to bulld features that
            connect them to every Email.Email Sender provides an integration
            that can be completed in secs, pre-built security and compliance
            features, and a 99.99% guaranteed uptime.the Email sender platform
            is secure,realiable and easy to use and maintain.
          </p>
          <button
            className="w-2/5 bg-blue-600 flex items-center justify-center text-white text-lg
          py-2 ml-5   rounded-md lg:w-1/6 " onClick={()=>{
            const elm = document.querySelector('#dependencies')
              elm.scrollIntoView( { behavior: 'smooth', block: 'start' } )
          }}
          >
            QuickStart
            <BsCaretRight
              className="
          text-xl ml-1 mt-[-1px]"
            />
          </button>
        </div>
        <div>
          <div>
            <h2 className="m-5 text-3xl lg:text-4xl">Developers Tools</h2>
          </div>
          <div className=" flex justify-between ml-10 mr-16 lg:justify-start lg:gap-x-32 lg:ml-20">
            <div className="flex flex-col">
              <embed src="java.gif" className="w-12" />
              <div className="flex  items-center  gap-2" onClick={()=>{setSelectedCode(0)
              const elm = document.querySelector('#dependencies')
              setCode(javaCode)
              elm.scrollIntoView( { behavior: 'smooth', block: 'start' } )


              }}>
                <label
                  className="flex justify-center items-center text-md text-blue-700
                  font-semibold
             "
                >
                  Java
                </label>
                <AiOutlineArrowRight className="text-xl" />
              </div>
            </div>
            <div className="flex flex-col mt-2 lg:pl-14">
              <img
                src="dart.png"
                className="w-10 animate-bounce"
              />
              <div className="flex justify-center items-center  gap-2"  onClick={()=>{setSelectedCode(1)
              const elm = document.querySelector('#dependencies')
              setCode(dartCode)
              elm.scrollIntoView( { behavior: 'smooth', block: 'start' } )}}>
                <label
                  className="flex justify-center items-center text-md text-blue-700
                  font-semibold
             "
                >
                  Dart
                </label>
                <AiOutlineArrowRight className="text-xl" />
              </div>
            </div>
          </div>
          <div className=" flex justify-between ml-10 mr-10 mt-10 lg:justify-start lg:gap-x-32 lg:ml-20">
            <div className="flex flex-col">
              <embed src="js.gif" className="w-12" />
              <div className="flex  items-center  gap-2" onClick={()=>{setSelectedCode(2)
              setCode(javaScriptCode)
              const elm = document.querySelector('#dependencies')
              elm.scrollIntoView( { behavior: 'smooth', block: 'start' } )
              }}>
                <label
                  className="flex justify-center items-center text-md text-blue-700
                  font-semibold
             "
                >
                  javascript
                </label>
                <AiOutlineArrowRight className="text-xl" />
              </div>
            </div>

            <div className="flex flex-col mt-2 ">
              <embed src="python.gif" className="w-10" />
              <div className="flex justify-center items-center  gap-2" onClick={()=>{setSelectedCode(3)
              const elm = document.querySelector('#dependencies')
              setCode(pythonCode)
              elm.scrollIntoView( { behavior: 'smooth', block: 'start' } )
              }}>
                <label
                  className="flex justify-center items-center text-md text-blue-700
                  font-semibold">
                  python
                </label>
                <AiOutlineArrowRight className="text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-10 space-y-4" id="dependencies">
          <div className="flex flex-col space-y-4">
            <label className="ml-5 text-3xl lg:text-4xl">Setup</label>
            <p className="ml-10 font-light text-md m-5 lg:text-xl">Create a New File install Required Dependencies, Start using
            our emailAPI <br/>
            If you want to use custom Email for your app create a new 
            <span className="text-blue-700 font-medium text-lg lg:text-xl
            border-b border-blue-700" onClick={()=>{
              window.open("https://support.google.com/accounts/answer/185833?hl=en")
            }}> app password</span></p>
          </div>
        <div >
            <label className="flex m-5 text-3xl lg:text-4xl">Installing Dependencies</label>
            <div className="flex flex-col space-y-2 lg:items-start lg:justify-start">
              {
                selectedCode == 0
                ?<CodePart codeObj={languagesNames[0]} copy={copy} setCopy={setcopy} />
                :selectedCode == 1
                ?<CodePart codeObj={languagesNames[1]} copy={copy} setCopy={setcopy} />
                :selectedCode == 2
                ?<CodePart codeObj={languagesNames[2]} copy={copy} setCopy={setcopy} />
                :selectedCode == 3
                ?<CodePart codeObj={languagesNames[3]} copy={copy} setCopy={setcopy} />
                :null
                
              }
            </div>
          </div>
          <div className="flex space-y-4 w-full flex-col ">
            <label className=" ml-5 text-3xl lg:text-4xl">Example code</label>
            <div
              className="flex flex-col w-full space-y-4 justify-center
           items-center  lg:items-start lg:ml-10 h-fit"
            >
              <Editor
               style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                
                height: 400,
          
              }}
                className="text-sm w-4/5 rounded-lg mb-4  
            pointer-events-none flex-col outline-none border justify-center items-center lg:w-2/4 lg:justify-start lg:text-lg"
                value={code}
                onValueChange={(code) => setCode(code)}
                highlight={(code) => highlight(code, languages.js,"js")}
                padding={10}
               
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
