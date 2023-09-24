import React from 'react'
import {GrInstagram} from "react-icons/gr"
import {GrFacebook} from "react-icons/gr"
import {GrLinkedin} from "react-icons/gr"
function Footer() {
  return (
    <div className="pt-4 w-full border-t border-[#1F2833]">
        <div className="flex w-fit mx-auto">
            <a href="https://www.instagram.com/edc_pvg/?hl=en" className="px-3 text-xl hover:text-[#66FCF1] hover:transition-transform hover:scale-110"><GrInstagram/></a>
            <a href="https://www.facebook.com/edcpvg/"  className="px-3 text-xl hover:text-[#66FCF1] hover:transition-transform hover:scale-110"><GrFacebook/></a>
            <a href="https://www.linkedin.com/company/pvgedc/?originalSubdomain=in"  className="px-3 text-xl hover:text-[#66FCF1] hover:transition-transform hover:scale-110"><GrLinkedin/></a>
        </div>
        <div className="mx-auto w-fit my-2">
            <p className="text-xs">@2023 E-Cell PVG. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer