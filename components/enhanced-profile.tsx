"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SocialLinks } from "@/components/social-links"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, MapPin, Mail, Phone, Languages, Clock, Briefcase, Download } from "lucide-react"
import { getPersonalInfo, getAboutInfo } from "@/lib/data"

export function EnhancedProfile() {
  const [activeTab, setActiveTab] = useState("about")
  const [avatarOpen, setAvatarOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const [tooltipVisible, setTooltipVisible] = useState(false)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const ANIM_DURATION = 300

  function startClose() {
    setIsClosing(true)
    setTimeout(() => {
      setAvatarOpen(false)
      setIsClosing(false)
      if (typeof document !== "undefined") document.body.style.overflow = ""
    }, ANIM_DURATION)
  }

  const personalInfo = getPersonalInfo()
  const aboutInfo = getAboutInfo()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") startClose()
    }
    if (avatarOpen) {
      window.addEventListener("keydown", onKey)
      // prevent background scroll when lightbox open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [avatarOpen])

  return (
    <>
      <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm col-span-1 flex flex-col">
      <CardContent className="p-0">
        {/* Profile Header - Improved mobile layout */}
        <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-4 sm:p-6 flex flex-col items-center border-b border-zinc-800">
          <div className="flex flex-col sm:flex-col items-center w-full">
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsClosing(false)
                  setAvatarOpen(true)
                }}
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
                onMouseMove={(e) => {
                  setTooltipPos({ x: e.clientX, y: e.clientY })
                }}
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-cyan-400/20 ring-4 ring-zinc-800/50 focus:outline-none"
                aria-label="Open profile image"
              >
                <Image
                  src={personalInfo.avatar || "/placeholder.svg"}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold">{personalInfo.name}</h2>
              <p className="text-sm text-cyan-400 mb-1">{personalInfo.title}</p>
              <div className="flex items-center justify-center text-xs text-zinc-400 mb-3">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {personalInfo.badges.map((badge, index) => (
              <Badge key={index} variant="outline" className="bg-zinc-800/50 hover:bg-zinc-700">
                {badge}
              </Badge>
            ))}
          </div>

          <SocialLinks socialLinks={personalInfo.social} />

          {/* Resume download button centered under social icons */}
          <div className="flex justify-center mt-2">
            <a
              href="/Samarth Borade-CV.pdf"
              download
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors text-sm"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Tabbed Content - Mobile optimized */}
        <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
          <div className="border-b border-zinc-800">
            <TabsList className="w-full bg-transparent border-b border-zinc-800 rounded-none h-auto p-0">
              <TabsTrigger
                value="about"
                className={`flex-1 rounded-none border-b-2 px-2 sm:px-4 py-2 text-xs sm:text-sm ${
                  activeTab === "about" ? "border-cyan-400 text-cyan-400" : "border-transparent text-zinc-400"
                }`}
              >
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                About
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className={`flex-1 rounded-none border-b-2 px-2 sm:px-4 py-2 text-xs sm:text-sm ${
                  activeTab === "contact" ? "border-cyan-400 text-cyan-400" : "border-transparent text-zinc-400"
                }`}
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Contact
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="about" className="p-4 sm:p-6 space-y-4 sm:space-y-6 focus:outline-none">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-400 flex items-center">
                <User className="w-4 h-4 mr-2 text-cyan-400" />
                About Me
              </h3>
              <p className="text-sm">{aboutInfo.bio}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-400 flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-cyan-400" />
                Professional Focus
              </h3>
              <div className="space-y-2">
                {aboutInfo.focus.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-400 flex items-center">
                <Languages className="w-4 h-4 mr-2 text-cyan-400" />
                Languages
              </h3>
              <div className="space-y-3">
                {aboutInfo.languages.map((language, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{language.name}</span>
                      <span className="text-xs text-zinc-400">{language.proficiency}</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="p-4 sm:p-6 space-y-4 focus:outline-none">
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-zinc-400">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                <div>
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="text-sm text-zinc-400">{personalInfo.workingHours}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

    {/* Profile Footer - Availability Status */}
        <div className="p-3 sm:p-4 border-t border-zinc-800 flex items-center justify-center">
          <div className="flex items-center">
            <span
              className={`w-2 h-2 ${personalInfo.availableForWork ? "bg-green-500" : "bg-red-500"} rounded-full mr-2`}
            ></span>
            <span className="text-xs text-zinc-400">
              {personalInfo.availableForWork ? "Available for new projects" : "Not available for new projects"}
            </span>
          </div>
        </div>
      </CardContent>
      </Card>
      {avatarOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => startClose()}
          >
            <div
              className={`p-4 rounded-full transform transition-all ease-out ${
                isClosing ? "scale-90 opacity-0" : "scale-100 opacity-100"
              }`}
              onClick={(e) => e.stopPropagation()}
              style={{ transitionDuration: `${ANIM_DURATION}ms` }}
            >
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl bg-black">
                <Image
                  src={personalInfo.avatar || "/placeholder.svg"}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Separate portal for the tooltip so it appears on hover even when the overlay is closed */}
      {typeof document !== "undefined" &&
        tooltipVisible &&
        createPortal(
          <div
            style={{ left: `${tooltipPos.x + 12}px`, top: `${tooltipPos.y + 12}px`, position: "fixed" }}
            className="z-[10000] pointer-events-none"
          >
            <div className="bg-zinc-900/90 text-xs text-zinc-200 px-2 py-1 rounded shadow">
              your friendly neighborhood engineer
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
