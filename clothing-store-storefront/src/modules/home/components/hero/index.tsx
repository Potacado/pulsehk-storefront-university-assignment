"use client"

import { useState } from "react"
import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  const [lang, setLang] = useState<"en" | "zh">("zh")

  const content = {
    en: {
      title: "Welcome to PulseHK",
      subtitle: "Seamless Clothing Shopping Experience",
      btn: "View on GitHub",
      toggleBtn: "中文"
    },
    zh: {
      title: "歡迎來到 PulseHK",
      subtitle: "無縫的服飾購物體驗",
      btn: "在 GitHub 上查看",
      toggleBtn: "English"
    }
  }

  const toggleLanguage = () => {
    setLang(lang === "en" ? "zh" : "en")
  }

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">

      <div className="absolute top-4 right-4 z-20">
        <Button variant="secondary" onClick={toggleLanguage}>
          {content[lang].toggleBtn}
        </Button>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            {content[lang].title}
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            {content[lang].subtitle}
          </Heading>
        </span>
        <a
          href="https://github.com/Potacado/pulsehk-storefront-university-assignment"
          target="_blank"
        >
          <Button variant="secondary">
            <Github />
            {content[lang].btn}
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero