import React from 'react'

const Card2 = () => {
  return (
    <>
       <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between  p-[20px] mt-[30px]">
          <div>
            <div className="p-[100px] lg:ml-[40px] mt-[40px] flex justify-center rounded-sm bg-[#C4C4C466]">
              <p className="font-[DIN Condensed] font-bold text-[#828282]">
                graafik
              </p>
            </div>
          </div>
          <div className="lg:w-[950px] w-full lg:ml-[40px]">
            <div>
              <p className="text-left text-[#101010] lg:text-[54px] text-[30px] mb-[10px] font-bold font-[DIN Condensed]">
                Juba kolm aastat järjest on üle poolte uppunutest joobes
              </p>
            </div>
            <div>
              <p className="text-left text-[#101010] font-bold lg:text-[20px] text-[17px] font-sans mb-[17px]">
                Igal aastal upub Eestis üle 20 joobes inimese. Eelmine aasta
                kujunes taasiseseisvumise aja suurima veeõnnetuste arvuga
                aastaks
              </p>
            </div>
            <div>
              <p className="text-left text-[#101010] lg:text-[18px] text-[14px] font-sans">
                Ühtviisi ohtlik on nii napsusena vette kukkuda kui teadlikult
                ujuma minna. Vette kukkumiste arv on ajas kasvanud ning peamine
                põhjus on olnud alkohol. Kõik suplemisel uppunud eakad olid
                eelmise aasta andmete järgi kained ning kõik suplemisel uppunud
                tööealised omakorda joobes. Hukkunud kalastajatest oli alkoholi
                tarvitanud 75%. Uppunute arv on üle Eesti ühtlaselt kasvanud
                ning elu jäetakse nii tiiki, järve, jõkke, merre kui kraavi.
              </p>
            </div>
            <div className="bg-[#E9E9E9] p-[35px] mt-[20px] border-l-8 rounded-sm border-[#7AD3F7]">
              <p className="text-left text-[#101010] lg:text-[24px] text-[19px] font-sans">
                Üle poole joobes uppunutest olid mehed ja see toimus avalikus
                seltskonnas – kindlasti oli neiski lugudes hetki, mil julgus
                selgroogu näidata võinuks päästa kellegi elu.{" "}
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card2
