const ContactUsComponent = () => {
  return (
    <div>
      <div className="w-full">
        <div className="container flex justify-center m-auto max-w-[1216px]">
          <div>
            <div className="container md:max-w-[643px]">
              <h1 className="text-[#181A2A] text-[24px] leading-7 font-bold mb-4 mt-[150px]">
                Contact Us
              </h1>
              <p className="text-base text-[#696A75] mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <div className="md:flex justify-between">
                <div className="w-[294px] h-[133px] border border-[#E8E8EA] rounded-xl p-4 mt-4">
                  <p className="text-[24px] leading-10 pb-3">Address</p>
                  <p className="text-[#696A75] text-lg">
                    1328 Oak Ridge Drive, Saint Louis, Missouri
                  </p>
                </div>
                <div className="w-[294px] h-[133px] border border-[#E8E8EA] rounded-xl p-4 mt-4">
                  <p className="text-[24px] leading-10 pb-3">Contact</p>
                  <p className="text-[#696A75] text-lg">+976 8093-3171 </p>
                  <p className="text-[#696A75] text-lg">Ulaanbaatar Mongolia</p>
                </div>
              </div>
              <div className="w-full mt-11">
                <div className=" bg-[#F6F6F7] rounded-md flex flex-col gap-5 p-4">
                  <p className="mb-3 text-lg">Leave a Message</p>
                  <div className="flex gap-5">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="border border-red-400 rounded p-1 w-[50%]"
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="border border-green-400 p-1 rounded w-[50%]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border border-blue-400 p-1 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Write a message"
                    className="border border-yellow-400 p-1 rounded h-[130px]"
                  />
                  <button className="border rounded-md bg-[#4B6BFB] w-[25%] text-[#FFFFFF] p-1">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
