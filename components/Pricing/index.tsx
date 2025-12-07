"use client";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Location Map Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center mb-12">
            <SectionHeader
              headerInfo={{
                title: `NOTRE LOCALISATION`,
                subtitle: `Visitez-nous`,
                description: `Notre bureau est situé au cœur de Tunis, à Montplaisir. N'hésitez pas à nous rendre visite sur rendez-vous.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        {/* <!-- Google Map --> */}
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top rounded-lg overflow-hidden shadow-solid-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.5961956844936!2d10.184651!3d36.838889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUwJzIwLjAiTiAxMMKwMTEnMDQuNyJF!5e0!3m2!1sfr!2stn!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tunisie Societe Location"
            ></iframe>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
