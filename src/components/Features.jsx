import React from "react";
import useWindowSize from "../hooks/useWindowSize";
export default function Features() {
  const { width } = useWindowSize();
  const bgStyleDesktop = {
    backgroundImage: "url('./assets/images/bg-pattern-circles.svg')",
    backgroundSize: "70%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-50% 80%",
  };
  const bgStyleMobile = {
    backgroundImage: "url('./assets/images/bg-pattern-circles.svg')",
    backgroundSize: "150%",
    backgroundPosition: "center -230px",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <section className="py-24 pb-56 font-ubuntu min-h-screen overflow-x-hidden lg:pb-24">
        <div className="container mx-auto">
          <h3 className="text-center text-2xl font-overPass font-bold md:text-3xl lg:text-4xl">
            Designed for the future
          </h3>
          <div className="flex flex-col items-center md:flex-row md:mt-12 md:gap-x-24 2xl:justify-center lg:m-0">
            <div className="order-1 px-8 md:p-0 md:order-none md:flex-1 2xl:flex-auto">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-overPass font-bold md:text-3xl whitespace-nowrap">
                  Introducing an <br className="md:hidden" /> extensible editor
                </h3>
                <p className="text-v-d-grayishBlue mt-4 max-w-[49ch]">
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.{" "}
                </p>
              </div>
              <div className="mt-12 text-center md:text-left md:mt-20">
                <h3 className="text-2xl font-overPass font-bold md:text-3xl whitespace-nowrap">
                  Robust content management
                </h3>
                <p className="text-v-d-grayishBlue mt-4 max-w-[49ch]">
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you’re in full control.{" "}
                </p>
              </div>
            </div>
            <div className="min-w-80 sm:min-w-96 md:flex-1 2xl:flex-auto">
              <picture>
                <source
                  srcSet="./assets/images/illustration-editor-desktop.svg"
                  media="(min-width: 768px)"
                />
                <img
                  src="./assets/images/illustration-editor-mobile.svg"
                  alt="editor"
                  className="py-10 md:p-0 lg:min-w-[700px]"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[80vh] h-[80vh] font-ubuntu bg-gradient-to-b from-bodyGrad-1 to-bodyGrad-2 rounded-tr-[100px] rounded-bl-[100px] relative md:min-h-0 md:h-auto">
        <div
          className="absolute inset-0"
          style={width < 768 ? bgStyleMobile : bgStyleDesktop}
        ></div>
        <div className="container mx-auto flex flex-col h-full md:gap-12 md:flex-row">
          <div className="flex-1 relative">
            <div className="absolute -translate-y-1/2 md:right-0 md:-translate-y-16">
              <img
                src="./assets/images/illustration-phones.svg"
                alt="phones"
                className=""
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="py-24 text-center md:text-left px-8 relative z-10 md:py-24 md:px-0">
              <h3 className="text-white text-3xl md:text-4xl font-bold font-overPass">
                State of the Art Infrastructure
              </h3>
              <p className="text-grayishBlue mt-8 leading-7 max-w-[49ch]">
                {" "}
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 font-ubuntu overflow-x-hidden">
        <div className="container mx-auto flex flex-col items-center gap-x-12 md:flex-row">
          <div className="flex-1 md:min-w-[500px] md:-ml-72 lg:min-w-[800px] lg:-ml-64 xl:min-w-[1000px] xl:-ml-80">
            <picture>
              <source
                srcSet="./assets/images/illustration-laptop-desktop.svg"
                media="(min-width: 768px)"
              />
              <img
                src="./assets/images/illustration-laptop-mobile.svg"
                alt="laptop"
                className=""
              />
            </picture>
          </div>
          <div className="mt-8 px-8 md:m-0 flex-1 text-center md:p-0 md:text-left">
            <div className="">
              <h4 className="text-v-d-black-blue text-3xl font-overPass font-bold">
                Free, open, simple
              </h4>
              <p className="text-v-d-grayishBlue mt-6 leading-7 max-w-[49ch]">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
            </div>
            <div className="mt-12 md:mt-20">
              <h4 className="text-v-d-black-blue text-3xl font-overPass font-bold">
                Powerful tooling
              </h4>
              <p className="text-v-d-grayishBlue mt-6 leading-7 max-w-[49ch]">
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
