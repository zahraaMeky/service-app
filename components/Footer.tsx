import { Facebook } from "lucide-react"
import {socialMedia,footerLinks} from "../constants"
function Footer() {
  return (
    <footer className="mt-5 padding-container bg-purple-200 py-10">
      <div className="flex justify-between flex-wrap max-lg:flex-col items-start gap-20">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src='/logo.svg' alt="footerLogo" width={150} height={46}/>
          </a>
          <p className="text-purple-700 mt-4 font-montserrat text-base leading-7 sm:max-w-sm">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nisi adipisci quam! Rem minus aliquid!
          </p>
          <div className="flex mt-8 gap-5 items-center">
              {socialMedia.map((icon) => (
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-400 rounded-full" key={icon.alt}>
                    
                      <img src={icon.src} alt={icon.alt} width={24} height={24} />
                  </div>
              ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between flex-wrap gap-20 lg:gap-10">
        {footerLinks.map((section) => (
          <div key={section}>
            <h4 className="text-purple-700 text-2xl font-montserrat leading-normal font-medium mb-6">{section.title}</h4>
            <ul>
              {section.links.map((link) => (
                <li key={link.name} className="text-purple-700 leading-normal text-base hover:text-slate-gray mt-3 cursor-pointer">
                  <a>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 text-purple-700 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 items-center justify-start cursor-pointer font-montserrat gap-2">
            <img src='/copyright-sign.svg' alt="copy right Sign" width={20}  height={20}
            className="rounded-full m-0"/>
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
