import React from "react";


const About = () => {
    return (
        <>
            <section className="About_ md:w-full xss:w-full xss:max-h-max xss:px-10 xss:pb-10 bg-slate-100 " id="about">
                <h1 className="TilteAbout__ xss:text-3xl xss:pt-16 font-mono font-bold">About me</h1>
                    <div className="ListAbout__ grid xss:grid-col-1 xss:text-justify gap-4">
                        <h2 className="xss:pt-10 font-mono font-bold">Lulus Sekolah SMK Tunas Bangsa</h2>
                        <p>Saya berasal dari sekolah menengah kejuruan SMK Tunas Bangsa Tangerang, seiring berjalan nya waktu saya memutuskan untuk bekerja dan kuliah di Universitas Pamulang jurusan Teknik Informatika dan Lulus pada Tahun 2020.</p>
                        <h2 className="xss:pt-10 font-mono font-bold">Lulus Universitas Pamulang</h2>
                        <p>Saya memulai kuliah di tahun 2015. Dan Pada tahun 2020, akhirnya saya dapat lulus dari Universitas. Dengan lulus nya saya, saya kemudian melanjutkan karir saya untuk bekerja sebagai QA manual di PT. Palu Bisnis Servis Outsourcing dari PT. Tokopedia</p>
                        <h2 className="xss:pt-10 font-mono font-bold">Bekerja Sebaga QA Manual di Tokopedia</h2>
                        <p>Saya bekera sebagai QA Manual di Tokopedia pada akhir tahun 2020, pada pekerjaan ini saya di tempat kan di bagian QA Manual Web Platform dimana dalam pekerja'an ini saya di tugaskan untuk regression testing, smoke testing, functional testing dan banyak lagi.</p>
                    </div>
            </section>
        </>
    )

}


export default About;