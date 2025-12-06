import SparkleDivider from "@/components/ui/SparkleDivider";
function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink">
      <div className=" flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-20 pt-12">
        <div>
          <h2 className="text-cream-light text-4xl font-extrabold  text-center lg:text-left  lg:text-5xl xl:text-6xl">
            Testimonials
          </h2>
          <SparkleDivider/>
        </div>
        <div>
          <div className=" text-center leading-relaxed max-w-6xl mx-auto mb-12">
            <h6 className="inline-block px-3 py-1 bg-cream-light text-ink rounded-2xl">Ragil Haditira, Mahasiswa Informatika, Universitas Telkom</h6>
          </div>
          <div className="text-cream-light text-center leading-relaxed max-w-6xl mx-auto mb-12">
            “Saya dan Rozan pernah satu tim di proyek akhir OOP semester 7.
            Tugas kami adalah mengembangkan aplikasi apotek menggunakan C#.
            Rozan membantu dalam mengatur alur kerja: ia memberi arahan tentang
            apa yang dikerjakan, Menggunakan GitHub, berdiskusi tentang dokumen
            proyek . Berkat kemampuannya memetakan fitur‑fitur utama aplikasi,
            tim kami dapat menyelesaikan pengembangan tepat waktu.”
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
