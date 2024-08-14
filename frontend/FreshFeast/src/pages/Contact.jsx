import React from "react";


const Contact = () => {

  return (
    <>
      <section className="flex-col sm:flex sm:flex-row justify-center  space-x-0 sm:space-x-4 shadow-slate-800 my-16 "> 
        <div className=" bg-gray-100   sm:py-32 sm:px-24  py-10 ">

          <form
            className="flex flex-col space-y-6  sm:w-96  text-sm  mx-10"
          >
            <h1 className="text-center font-semibold text-2xl font-poppins text-primary mt-5 sm:mt-0">
              CONTACT US{" "}
            </h1>
            <input
              type="text"
              name="Username"
              id=""
        
              placeholder="username"
              required
              autoComplete="off"
              className="  border py-3 px-2  outline-none border-gray-400 rounded-md"
            />

            <input
              type="email"
              name="email"
              id=""
           
              placeholder="Enter you Email id"
              required
              autoComplete="off"
              className="  border py-3 px-2  outline-none border-gray-400 rounded-md"
            />

            <textarea
              name="message"
              placeholder="Enter you Message!!"
              id=""
              autoComplete="off"
              required
              className=" px-2 outline-none rounded-md border border-gray-400"
            ></textarea>

            <input
              type="submit"
              value="send"
              className="bg-primary w-[30%] rounded-3xl py-2 hover:bg-ternary "
            />
          </form>
        </div>



        <div >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7156.709359383816!2d78.16745309314507!3d26.250149858192835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sAtal%20Bihari%20Vajpayee%20Indian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1717929703926!5m2!1sen!2sin"
            className=" sm:mr-96 w-[100%] h-[250px] sm:h-[100%] mt-7 sm:mt-0 "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>



      </section>





      
    </>
  );
};

export default Contact;
