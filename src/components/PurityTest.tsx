"use client"

import type React from "react"

import { useState } from "react"
import { prompts } from "@/prompts";

export default function PurityTest() {
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [score, setScore] = useState<number | null>(null)
  const [copySuccess, setCopySuccess] = useState(false)

  const allQuestions = prompts.flatMap((category) => category.items.map((item) => ({ id: item.id, text: item.text })))

  const handleItemToggle = (id: string) => {
    setCheckedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const calculateScore = () => {
    const totalQuestions = allQuestions.length
    const checkedCount = checkedItems.length
    return Math.round(((totalQuestions - checkedCount) / totalQuestions) * 100)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const calculatedScore = calculateScore()
    setScore(calculatedScore)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleReset = () => {
    setCheckedItems([])
    setScore(null)
    setCopySuccess(false)
  }

  const copyToClipboard = () => {
    const shareText = `I scored ${score} on the Insufferable Test! Take the test yourself:`
    const shareUrl = window.location.href

    navigator.clipboard
      .writeText(`${shareText} ${shareUrl}`)
      .then(() => {
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  const shareToX = () => {
    const shareText = `I scored ${score} on the Insufferable Test! Take the test yourself:`
    const shareUrl = window.location.href
    const xShareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    window.open(xShareUrl, "_blank")
  }

  const shareToInstagram = () => {
    // Instagram doesn't support direct sharing via URL, so we'll just copy to clipboard
    // and inform the user to paste it on Instagram
    const shareText = `I scored ${score} on the Insufferable Test! Take the test yourself: ${window.location.href}`

    navigator.clipboard
      .writeText(shareText)
      .then(() => {
        alert("Text copied! Open Instagram and paste in your story or direct message.")
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  return (
    <div className="bg-white">
      {score !== null ? (
        <div className="p-4 mb-6 text-center border border-black">
          <h2 className="text-2xl font-bold mb-2">Your score:</h2>
          <h1 className="text-4xl font-bold mb-4">{score}</h1>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <button onClick={handleReset} className="border border-black px-4 py-1 hover:bg-gray-100">
              Take the Test Again
            </button>

            {/* Share buttons */}
            <button
              onClick={copyToClipboard}
              className="border border-black px-4 py-1 hover:bg-gray-100 flex items-center"
              aria-label="Copy link"
            >
              <span className="hidden sm:inline mr-1">Copy Link</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>

            <button
              onClick={shareToX}
              className="border border-black px-4 py-1 hover:bg-gray-100 flex items-center"
              aria-label="Share to X"
            >
              <span className="hidden sm:inline mr-1">Share to X</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </button>

            <button
              onClick={shareToInstagram}
              className="border border-black px-4 py-1 hover:bg-gray-100 flex items-center"
              aria-label="Share to Instagram"
            >
              <span className="hidden sm:inline mr-1">Share to Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </button>
          </div>

          {copySuccess && <p className="text-sm mt-2">Link copied to clipboard!</p>}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="border text-left p-4">
          <ol className="list-decimal pl-6 space-y-2">
            {allQuestions.map((item, index) => (
              <li key={item.id} className="pb-1">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id={item.id}
                    checked={checkedItems.includes(item.id)}
                    onChange={() => handleItemToggle(item.id)}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor={item.id} className="cursor-pointer">
                    {item.text}
                  </label>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 text-center">
            <button type="submit" className="border border-black px-4 py-1 hover:bg-gray-100">
              SUBMIT
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
