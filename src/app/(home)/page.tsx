import { Bento, WidgetList } from "@/components";

export default function HomePage() {
  return (
    <>
      <section>
        <div className="text-center 
        ">
          <h1 className="text-4xl md font-semibold xl:text-7xl">
            Meet Oppo <br />
            Ignite <span className="hidden sm:inline" >A Fresh</span>  Wave Of <br className="hidden sm:block" />
            Innovative <span className="hidden sm:inline"> Tech</span>
          </h1>
          <h2 className="mt-12  xl:text-xl">
            Our Disitinction Lies In The Final Products Polishing
          </h2>
        </div>

        <Bento />
      </section>

      <section className="mt-14 sm:mx-0 p-2">
        <div className="flex 
        justify-center 
        flex-col sm:flex-row
        items-start
        gap-5
        sm:justify-between
        sm:gap-0
        ">
          
          <h2 className="text-5xl 
          basis-[30%] font-semibold sm:text-5xl
          ">
            Our 
            Technology
          </h2>

          <div className="basis-[50%]
          flex items-start justify-center
          gap-4
          flex-col
          ">
            <p className="text-xl text-pretty">
              From Our LEading-Edge Offerings In Enterprise <br className="hidden sm:block"/> hybrid Cloud
              Infrastructure To Cutting-Edge <br className="hidden sm:block"/>
              Advancements In Ai Technologhy
            </p>
            <span className="text-blue-600">View All Products</span>
            <span className="text-blue-600">Meet Team</span>
          </div>
        </div>
      </section>
      
      <section className="my-10">
      <WidgetList/>
      </section>

    </>
  );
}
