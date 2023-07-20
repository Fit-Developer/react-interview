import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#111827] text-white">
      <div className="container py-8">
        <div className="flex justify-between items-end">
          <div>
            <h1 className=" font-semibold">Drivehub Co.,Ltd</h1>
            <p className="text-[12px]">
              193-195 Lake Rajada Office Complex,
              <br />
              Ratchadapisek road, Khlong Toei, Bangkok
            </p>
          </div>
          <div className="text-[12px] text-[#E5E7EB]">© Drivehub 2023</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
